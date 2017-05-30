const env = process.env.NODE_ENV;

if (env === 'test') {
	module.exports = require('superagent').agent();
} else {
	module.exports = require('superagent');
}
