import 'event-source-polyfill';

export default class Requests {
	constructor(server = '', token = null) {
		this.server = server;
		this.token = token;
	}

	async fetch(method, path, body, requestContentType) {
		const headers = new Headers();
		headers.append('Content-Type', requestContentType || 'application/json');
		if (this.token) {
			headers.append('Authorization', `Bearer ${await this.token.get()}`);
		}
		const response = await fetch(this.server + path, {
			method,
			headers,
			body: this.constructor.formatBody(body),
		});
		if (!response.ok) {
			const error = new Error(await response.text());
			error.status = response.status;
			throw error;
		}
		const contentType = response.headers.get('Content-Type');
		if (typeof contentType === 'string') {
			if (contentType.startsWith('text/plain')) {
				return response.text();
			} if (contentType.startsWith('application/json')) {
				return response.json();
			}
		}
		return response;
	}

	static formatBody(body) {
		if (body instanceof Blob || body instanceof FormData) {
			return body;
		}
		if (typeof body === 'string') {
			return body;
		}
		return JSON.stringify(body);
	}

	async GET(path) {
		return this.fetch('GET', path);
	}

	async POST(path, data, contentType) {
		return this.fetch('POST', path, data, contentType);
	}

	async PUT(path, data, contentType) {
		return this.fetch('PUT', path, data, contentType);
	}

	async PATCH(path, data, contentType) {
		return this.fetch('PATCH', path, data, contentType);
	}

	async DELETE(path) {
		return this.fetch('DELETE', path);
	}

	async WATCH(path, cb) {
		const source = new EventSource(this.server + path);
		source.onmessage = (e) => {
			cb(JSON.parse(e.data));
		};
	}
}
