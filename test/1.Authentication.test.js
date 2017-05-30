const expect = require('chai').expect;
const CubedHost = require('../');

describe('Authentication', function() {

	describe('#login()', function() {

		it('should return invalid login', function(done) {
			this.timeout(3000);
			CubedHost.Authentication.login('invalid@email.com', 'password')
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.body.success).to.equal(false);
					done();
				});
		});

	});

});
