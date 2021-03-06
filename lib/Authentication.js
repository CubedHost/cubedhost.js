const agent = require('./util/agent');
const prefix = require('./util/prefix');

/**
 * Authentication : Login
 *
 * @param   {String} email    User email
 * @param   {String} password User password
 * @returns {Promise}
 */
exports.login = function(user) {
	let { email, password } = user;

	return agent.post('/api/auth/login')
		.use(prefix)
		.send({ email, password });
};

/**
 * Authentication : Register
 *
 * @param   {String} name     User name
 * @param   {String} email    User email
 * @param   {String} password User password
 * @returns {Promise}
 */
exports.register = function(user) {
	let { name, email, password } = user;

	return agent.post('/api/auth/register')
		.use(prefix)
		.send({ name, email, password });
};

/**
 * Authentication : Forgot
 *
 * @param   {String} email User email
 * @returns {Promise}
 */
exports.forgot = function(email) {
	return agent.post('/api/auth/forgot')
	.use(prefix)
	.send({ email });
};
