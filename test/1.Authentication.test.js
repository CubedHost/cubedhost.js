const expect = require('chai').expect;
const CubedHost = require('../');

describe('Authentication', function() {

	describe('#login()', function() {

		it('should return invalid login', function(done) {
			CubedHost.Authentication.login('invalid@email.com', 'password')
				.then(function(res) {
					expect(res).to.be.an('object');
					done();
				});
		});

	});

});
