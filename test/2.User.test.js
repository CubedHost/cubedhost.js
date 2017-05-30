const expect = require('chai').expect;
const Prisma = require('../');

describe('User', function() {
	this.timeout(5000);

	describe('#get()', function() {

		it('should get user information', function() {
			return Prisma.User.get().then(function(res) {
				expect(res).to.be.an('object');
				expect(res.status).to.equal(200);
				expect(res.body).to.have.property('id').that.is.a('number');
				expect(res.body).to.have.property('email').that.is.a('string');
			});
		});

	});

	describe('#getProfile()', function() {

		it('should get profile information', function() {
			return Prisma.User.getProfile().then(function(res) {
				expect(res).to.be.an('object');
				expect(res.status).to.equal(200);
				expect(res.body).to.have.property('whmcs_customer').to.is.an('object');
				let { whmcs_customer } =res.body;
				expect(whmcs_customer).to.have.property('id').that.is.a('number');
				expect(whmcs_customer).to.have.property('name').that.is.a('string');
			});
		});

	});

});
