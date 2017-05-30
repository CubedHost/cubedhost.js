const agent = require('./util/agent');
const prefix = require('./util/prefix');

exports.all = function() {
	return agent.get('/api/tickets/all')
		.use(prefix);
};
