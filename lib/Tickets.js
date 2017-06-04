const agent = require('./util/agent');
const prefix = require('./util/prefix');

/**
 * Tickets : All
 *
 * @returns {Promise}
 */
exports.all = function() {
	return agent.get('/api/tickets/all')
		.use(prefix);
};

/**
 * Tickets : Get Ticket
 *
 * @param   {Number} ticketId Ticket to get
 * @returns {Promise}
 */
exports.get = function(ticketId) {
	return agent.get(`/api/tickets/${ticketId}`)
		.use(prefix);
};
