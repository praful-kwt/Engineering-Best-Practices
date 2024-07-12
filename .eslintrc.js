module.exports = {
	extends: ['@KrishaWeb/eslint-config/react'],
	plugins: ['markdown'],
	rules: {
		'no-plusplus': [2, { allowForLoopAfterthoughts: true }]
	}
};
