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
 * User : Get Profile
 *
 * @returns {Promise}
 */
exports.getProfile = function() {
	return agent.get('/api/user/profile')
		.use(prefix);
};

/**
 * User : Update Profile
 *
 * @param   {Object} data Profile data
 * @returns {Promise}
 */
exports.updateProfile = function(data) {
	return agent.post('/api/user/update')
		.send(data)
		.use(prefix);
};
