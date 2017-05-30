const agent = require('./util/agent');
const prefix = require('./util/prefix');

/**
 * User : Get
 */
exports.get = function() {
	return agent.get('/api/user')
		.use(prefix);
};
