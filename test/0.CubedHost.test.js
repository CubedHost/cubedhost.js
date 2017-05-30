const expect = require('chai').expect;
const CubedHost = require('../');

describe('CubedHost', function() {

	it('should return a client containing all properties', function() {
		let client = CubedHost;
		expect(client).to.be.an('object');
		expect(client).to.have.property('Authentication');
	});

});
