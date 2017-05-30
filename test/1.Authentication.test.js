const expect = require('chai').expect;
const CubedHost = require('../');

let invalidUser = {
	name: 'Invalid User',
	email: 'invalid@user.com',
	password: 'invalid'
};

describe('Authentication', function() {
	this.timeout(5000);

	describe('#login()', function() {

		it('should return invalid login', function(done) {
			CubedHost.Authentication.login(invalidUser)
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.body.success).to.equal(false);
					done();
				}).catch(done);
		});

	});

});
