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

});
