const agent = require('./util/agent');
const prefix = require('./util/prefix');

/**
 * Servers : All
 *
 * @returns {Promise}
 */
exports.all = function() {
	return agent.get('/api/servers')
		.use(prefix);
};

/**
 * Servers : Get
 *
 * @param   {Number} serverId Server id to get
 * @returns {Promise}
 */
exports.get = function(serverId) {
	return agent.get(`/api/server/${serverId}`)
		.use(prefix);
};

/**
 * Servers : Get Players
 *
 * @param   {Number} serverId Server to get players from
 * @returns {Promise}
 */
exports.getPlayers = function(serverId) {
	return agent.get(`/api/server/${serverId}/players`)
		.use(prefix);
};

/**
 * Servers : Get Schedules
 *
 * @param   {Number} serverId Server to get schedules from
 * @returns {Promise}
 */
exports.getSchedules = function(serverId) {
	return agent.get(`/api/server/${serverId}/schedules`)
		.use(prefix);
};

/**
 * Server : Get Database
 *
 * @param   {Number} serverId Server to get database from
 * @returns {Promise}
 */
exports.getDatabase = function(serverId) {
	return agent.get(`/api/server/${serverId}/database`)
		.use(prefix);
};

/**
 * Servers : Start
 *
 * @param   {Number} serverId Server id to start
 * @returns {Promise}
 */
exports.start = function(serverId) {
	return agent.post(`/api/server/${serverId}/start`)
		.use(prefix);
};

/**
 * Servers : Stop
 *
 * @param   {Number} serverId Server id to stop
 * @returns {Promise}
 */
exports.stop = function(serverId) {
	return agent.post(`/api/server/${serverId}/stop`)
		.use(prefix);
};

/**
 * Servers : Restart
 *
 * @param   {Number} serverId Server id to restart
 * @returns {Promise}
 */
exports.restart = function(serverId) {
	return agent.post(`/api/server/${serverId}/restart`)
		.use(prefix);
};
