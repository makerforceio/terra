const http = require('http');

http.createServer((req, res) => {
	// for any request return this:
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.setHeader('Cache-Control', 'no-cache');
	res.setHeader('Content-Type', 'text/event-stream');
	setInterval(() => {
		res.write(`data: ${JSON.stringify({
			id: 'test',
			light: 1000,
			moisture: 1024,
			soil: 1024,
		})}\n\n`);
	}, 1000);
}).listen(9000);
