const env = process.env.NODE_ENV;

// Send a server side superagent if running in test environment
// or is running in a process (not browser)
if (env === 'test' || process) {
	module.exports = require('superagent').agent();
} else {
	module.exports = require('superagent');
}
