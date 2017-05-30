const Promise = require('bluebird');
const agent = require('superagent');
const prefix = require('./prefix');

/**
 * Authentication : Login
 * @param   {String} email    User email
 * @param   {String} password User password
 * @returns {Promise}
 */
exports.login = function(email, password) {
	return new Promise(function(resolve, reject) {
		agent.post('/api/auth/login')
			.use(prefix)
			.send({ email, password })
			.end((err, res) => {
				if (err) return reject(err);
				resolve(res);
			});
	});
};
