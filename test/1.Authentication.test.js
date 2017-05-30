const expect = require('chai').expect;
const CubedHost = require('../');

let user = {
	email: 'admin+prisma@cubedhost.com',
	password: 'dev'
};

describe('Authentication', function() {
	this.timeout(5000);

	describe('#login()', function() {

		it('should return valid login', function() {
			return CubedHost.Authentication.login(user)
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.status).to.equal(200);
					expect(res.body.success).to.equal(true);
				});
		});

	});

});
