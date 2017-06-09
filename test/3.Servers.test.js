const expect = require('chai').expect;
const CubedHost = require('../');

describe('Servers', function() {
	this.timeout(5000);
	let scheduleId;

	describe('#all()', function() {
		it('should get list of user servers', function() {
			return CubedHost.Servers.all()
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.status).to.equal(200);
					expect(res.body).to.be.an('array');
					expect(res.body[0]).to.be.an('object');
					expect(res.body[0]).to.have.property('id').that.is.a('number');
				});
		});
	});

	describe('#get()', function() {
		it('should get a single server', function() {
			return CubedHost.Servers.get(1)
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.status).to.equal(200);
					expect(res.body.success).to.equal(true);
					expect(res.body.server).to.be.an('object');
					expect(res.body.server).to.have.property('id');
					expect(res.body.server).to.have.property('name');
					expect(res.body.server).to.have.property('ip');
					expect(res.body.server).to.have.property('port');
				});
		});
	});

	describe('#settings()', function() {
		it('should update the server settings', function() {
			return CubedHost.Servers.settings(1, {})
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.status).to.equal(200);
					expect(res.body.success).to.equal(true);
				});
		});
	});

	describe('#sendCommand()', function() {
		it('should send command', function() {
			return CubedHost.Servers.sendCommand(1, 'say Test')
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.status).to.equal(200);
					expect(res.body.success).to.equal(true);
				});
		});
	});

	describe('#resetPlayers()', function() {
		it('should reset players list', function() {
			return CubedHost.Servers.resetPlayers(1, 'say Test')
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.status).to.equal(200);
					expect(res.body.success).to.equal(true);
				});
		});
	});

	describe('#start()', function() {
		it('should start the server', function() {
			return CubedHost.Servers.start(1)
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.status).to.equal(200);
					expect(res.body.success).to.equal(true);
				});
		});
	});

	describe('#stop()', function() {
		it('should stop the server', function() {
			return CubedHost.Servers.stop(1)
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.status).to.equal(200);
					expect(res.body.success).to.equal(true);
				});
		});
	});

	describe('#restart()', function() {
		it('should restart the server', function() {
			return CubedHost.Servers.restart(1)
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.status).to.equal(200);
					expect(res.body.success).to.equal(true);
				});
		});
	});

	describe('#getPlayers()', function() {
		it('should return a list of players', function() {
			return CubedHost.Servers.getPlayers(1)
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.status).to.equal(200);
					expect(res.body).to.be.an('array');
				});
		});
	});

	describe.skip('#createDatabase()', function() {
		it('should create a database', function() {
			return CubedHost.Servers.createDatabase(1)
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.status).to.equal(200);
					console.log(res.body);
				});
		});
	});

	describe.skip('#getDatabase()', function() {
		it('should get null server database', function() {
			return CubedHost.Servers.getDatabase(1)
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.status).to.equal(200);
					expect(res.body).to.equal(null);
				});
		});
	});

	describe.skip('#deleteDatabase()', function() {
		it('should create a database', function() {
			return CubedHost.Servers.deleteDatabase(1)
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.status).to.equal(200);
					console.log(res.body);
				});
		});
	});

	describe('#createSchedule()', function() {
		it('should create a new schedule', function() {
			let task = {
				'intervalUnit': '3600',
				'customInterval': 1,
				'command': 'start',
				'status': '0',
				'nextRunCustom': '2017-06-16 08:02:00',
				'name': 'Test Task',
				'scheduled_ts': 1497618120,
				'interval': 3600
			};

			return CubedHost.Servers.createSchedule(1, task)
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.status).to.equal(200);
					expect(res.body.success).to.equal(true);
					expect(res.body.id[0]).to.be.a('number');
					scheduleId = res.body.id[0];
				});
		});
	});

	describe('#getSchedules()', function() {
		it('should return a list of schedules', function() {
			return CubedHost.Servers.getSchedules(1)
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.status).to.equal(200);
					expect(res.body).to.be.an('array');
				});
		});
	});

	describe('#updateSchedule()', function() {
		it('should update an existing schedule', function() {
			return CubedHost.Servers.updateSchedule(1, scheduleId, {})
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.status).to.equal(200);
					expect(res.body.success).to.equal(true);
				});
		});
	});

	describe('#deleteSchedule()', function() {
		it('should delete an existing schedule', function() {
			return CubedHost.Servers.deleteSchedule(1, scheduleId)
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.status).to.equal(200);
					expect(res.body.success).to.equal(true);
				});
		});
	});

	describe('#getUsers()', function() {
		it('should get server users', function() {
			return CubedHost.Servers.getUsers(1)
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.status).to.equal(200);
					expect(res.body).to.be.an('array');
					expect(res.body[0]).to.have.property('id');
					expect(res.body[0]).to.have.property('email');
					expect(res.body[0]).to.have.property('role');
				});
		});
	});

	describe('#addUser()', function() {
		it('should add server user', function() {
			return CubedHost.Servers.addUser(1, 'test-user@cubedhost.com')
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.status).to.equal(200);
				});
		});
	});

	describe('#removeUser()', function() {
		it('should remove server user', function() {
			return CubedHost.Servers.removeUser(1, 'test-user@cubedhost.com')
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.status).to.equal(200);
				});
		});
	});

	describe('#getGameTypes()', function() {
		it('should get server game types', function() {
			return CubedHost.Servers.getGameTypes('minecraft')
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.status).to.equal(200);
					expect(res.body).to.have.property('types').that.is.an('object');
					expect(res.body.types).to.have.property('custom').that.is.an('array');
					expect(res.body.types).to.have.property('atlauncher').that.is.an('array');
					expect(res.body.types).to.have.property('bungeecord').that.is.an('array');
					expect(res.body.types).to.have.property('craftbukkit').that.is.an('array');
					expect(res.body.types).to.have.property('curse').that.is.an('array');
					expect(res.body.types).to.have.property('forge').that.is.an('array');
					expect(res.body.types).to.have.property('minecraft').that.is.an('array');
					expect(res.body.types).to.have.property('paper').that.is.an('array');
					expect(res.body.types).to.have.property('spigot').that.is.an('array');
					expect(res.body.types).to.have.property('technic').that.is.an('array');
					expect(res.body).to.have.property('sources').that.is.an('array');
					expect(res.body.sources[0]).to.have.property('id');
					expect(res.body.sources[0]).to.have.property('name');
				});
		});
	});

});
