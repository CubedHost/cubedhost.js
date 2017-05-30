const expect = require('chai').expect;
const Prisma = require('../');

describe('User', function() {
	this.timeout(5000);

	describe('#get()', function() {

		it('should get user information', function(done) {
			Prisma.User.get().then(function(res) {
				expect(res).to.be.an('object');
				expect(res.status).to.equal(200);
				expect(res.body).to.have.property('id').that.is.a('number');
				expect(res.body).to.have.property('email').that.is.a('string');
				done();
			}).catch(done);
		});

	});

});
