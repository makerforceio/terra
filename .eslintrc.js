module.exports = {
	root: true,

	env: {
		node: true,
	},

	extends: [
		'plugin:vue/essential',
		'@vue/airbnb',
	],

	rules: {
		'no-console': 'off',
		'no-debugger': 'off',
		indent: ['error', 'tab'],
		'no-tabs': 'off',
	},

	parserOptions: {
		parser: 'babel-eslint',
	},

};
