const agent = require('superagent');
const prefix = require('./prefix');

/**
 * Authentication : Login
 * @param   {String} email    User email
 * @param   {String} password User password
 * @returns {Promise}
 */
exports.login = function(email, password) {
	return agent.post('/api/auth/login')
		.use(prefix)
		.send({ email, password });
};
