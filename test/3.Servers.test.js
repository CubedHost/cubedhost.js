const expect = require('chai').expect;
const CubedHost = require('../');

describe('Servers', function() {
	this.timeout(5000);

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

	describe('#getPlayers', function() {
		it('should return a list of players', function() {
			return CubedHost.Servers.getPlayers(1)
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.status).to.equal(200);
					expect(res.body).to.be.an('array');
				});
		});
	});

	describe('#getSchedules', function() {
		it('should return a list of schedules', function() {
			return CubedHost.Servers.getSchedules(1)
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.status).to.equal(200);
					expect(res.body).to.be.an('array');
				});
		});
	});

	describe('#getDatabase', function() {
		it('should get null server database', function() {
			return CubedHost.Servers.getDatabase(1)
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.status).to.equal(200);
					expect(res.body).to.equal(null);
				});
		});
	});

});
