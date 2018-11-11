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
				description: 'People always say I\'m a vegtable, but I\'m also a fruit. My friend the plant likes to tease me and it makes me laugh haha. ',
				exp: 40,
				expup: 60,
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
				description: 'Hey there! I was from IKEA and lived a sad life on the shelf until I was adopted by you! You gave me such a happy life watering me every day and taking such good care of me. I also made new friends who you take care of too',
				exp: 20,
				expup: 60,
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
			name: 'Danny Boy',
			score: 1266,
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
