const agent = require('./util/agent');
const prefix = require('./util/prefix');

/**
 * User : Get
 *
 * @returns {Promise}
 */
exports.get = function() {
	return agent.get('/api/user')
		.use(prefix);
};

/**
 * Uset : Get Profile
 *
 * @returns {Promise}
 */
exports.getProfile = function() {
	return agent.get('/api/user/profile')
		.use(prefix);
};
