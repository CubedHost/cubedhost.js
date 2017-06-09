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

/**
 * Servers : Update
 *
 * @param   {Number} serverId Server id to update
 * @param   {Object} config   Server config
 * @returns {Promise}
 */
exports.settings = function(serverId, config) {
	return agent.post(`/api/server/${serverId}/settings`)
		.use(prefix)
		.send({ config });
};

/**
 * Servers : Send Command
 *
 * @param   {Number} serverId Server id to send command to
 * @param   {String} command  Console command
 * @returns {Promise}
 */
exports.sendCommand = function(serverId, command) {
	return agent.post(`/api/server/${serverId}/console`)
		.use(prefix)
		.send({ command });
};

/**
 * Servers : Reset Players
 *
 * @param   {Number} serverId Server id to reset player list from
 * @returns {Promise}
 */
exports.resetPlayers = function(serverId) {
	return agent.delete(`/api/server/${serverId}/players`)
		.use(prefix);
};

/**
 * Servers : Create Schedule
 *
 * @param   {Number} serverId Server id to create schedule on
 * @param   {Object} task     Task data
 * @returns {Promise}
 */
exports.createSchedule = function(serverId, task) {
	return agent.put(`/api/server/${serverId}/schedule`)
		.use(prefix)
		.send({ task });
};

/**
 * Servers : Update Schedule
 *
 * @param   {Number} serverId   Server id to update schedule on
 * @param   {Number} scheduleId Schedule id to update
 * @param   {Object} task       Task data
 * @returns {Promise}
 */
exports.updateSchedule = function(serverId, scheduleId, task) {
	return agent.post(`/api/server/${serverId}/schedule/${scheduleId}`)
		.use(prefix)
		.send({ task });
};

/**
 * Servers : Delete Schedule
 *
 * @param   {Number} serverId   Server id to delete schedule on
 * @param   {Number} scheduleId Schedule id to delete
 * @returns {Promise}
 */
exports.deleteSchedule = function(serverId, scheduleId) {
	return agent.delete(`/api/server/${serverId}/schedule/${scheduleId}`)
		.use(prefix);
};

/**
 * Servers : Get Users
 *
 * @param   {Number} serverId Server id to get servers from
 * @returns {Promise}
 */
exports.getUsers = function(serverId) {
	return agent.get(`/api/server/${serverId}/users`)
		.use(prefix);
};

/**
 * Servers : Add User
 *
 * @param {Number} serverId Server id to add user to
 * @param {Object} user User data
 * @returns {Promise}
 */
exports.addUser = function(serverId, email) {
	return agent.put(`/api/server/${serverId}/users`)
		.send({ email })
		.use(prefix);
};

/**
 * Servers : Remove User
 *
 * @param   {Number} serverId Server to delete user from
 * @param   {String} email    User email
 * @returns {Promise}
 */
exports.removeUser = function(serverId, email) {
	return agent.delete(`/api/server/${serverId}/users/${email}`)
		.use(prefix);
};
