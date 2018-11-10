import data from './data';

export default data.plantsDB.allDocs().then((docs) => {
	console.log('foo');
	if (docs.total_rows <= 0) {
		return data.plantsDB.bulkDocs([
			{
				name: 'Tomato',
				health: 50,
				level: 1,
				type: 'tomato',
				image: '/characters/tomato.png',
			},
			{
				name: 'Sudharshan Plant',
				health: 75,
				level: 2,
				type: 'sudharshan',
				image: '/characters/sudharshan.png',
			},
		]);
	}
	return '';
});
