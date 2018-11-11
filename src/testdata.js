import data from './data';

export default data.plantsDB.allDocs().then((docs) => {
	console.log('foo');
	if (docs.total_rows <= 0) {
		return data.plantsDB.bulkDocs([
			{
				_id: 'test',
				name: 'Tomato',
				recommended_moisture: 100,
				recommended_light: 100,
				recommended_temperature: 100,
				current_moisture: 20,
				current_light: 15,
				current_temperature: 5,
				description: 'Not a vegetable',
				exp: 10,
				expup: 100,
				health: 50,
				level: 1,
				type: 'tomato',
				image: '/characters/tomato.png',
			},
			{
				name: 'Sudharshan Plant',
				recommended_moisture: 100,
				recommended_light: 100,
				recommended_temperature: 100,
				description: 'Why',
				exp: 20,
				expup: 250,
				health: 75,
				level: 2,
				type: 'sudharshan',
				image: '/characters/sudharshan.png',
			},
		]);
	}
	return '';
}).then(() => data.playerDB.allDocs()).then((res) => {
	if (res.total_rows <= 0) {
		return data.playerDB.put({
			_id: 'player',
			name: 'Player',
			score: 0,
			_attachments: {
				avatar: {
					content_type: 'image/svg+xml',
					data: 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBkPSJNMTIgNmMxLjEgMCAyIC45IDIgMnMtLjkgMi0yIDItMi0uOS0yLTIgLjktMiAyLTJtMCAxMGMyLjcgMCA1LjggMS4yOSA2IDJINmMuMjMtLjcyIDMuMzEtMiA2LTJtMC0xMkM5Ljc5IDQgOCA1Ljc5IDggOHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHptMCAxMGMtMi42NyAwLTggMS4zNC04IDR2MmgxNnYtMmMwLTIuNjYtNS4zMy00LTgtNHoiLz48L3N2Zz4=',
				},
			},
		});
	}
	return '';
})
	.catch(console.error);
