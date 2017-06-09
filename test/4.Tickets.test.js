const expect = require('chai').expect;
const CubedHost = require('../');

describe('Tickets', function() {
	this.timeout(5000);

	describe('#all()', function() {
		it('should get all tickets', function() {
			return CubedHost.Tickets.all()
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.status).to.equal(200);
					expect(res.body.tickets).to.be.an('object');
					expect(res.body.tickets.ticket).to.be.an('array');
				});
			});
	});

	describe('#get()', function() {
		it('should get a single ticket', function() {
			return CubedHost.Tickets.get(53)
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.status).to.equal(200);
					expect(res.body).to.have.property('result').that.equals('success');
					expect(res.body).to.have.property('tid');
					expect(res.body).to.have.property('c');
					expect(res.body.ticketid).to.equal('53');
				});
			});
	});

	describe('#reply()', function() {
		it('should reply to ticket', function() {
			return CubedHost.Tickets.reply(53, 'Automated test reply')
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.status).to.equal(200);
					expect(res.body.success).to.equal(true);
				});
		});
	});

});
