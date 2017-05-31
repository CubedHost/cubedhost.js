const { expect } = require('chai');
const CubedHost = require('../');

describe('Billing', function() {
	this.timeout(5000);

	describe('#getInvoices()', function() {
		it('should get invoice list', function() {
			return CubedHost.Billing.getInvoices()
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.body).to.be.an('array');
					expect(res.body[0]).to.have.property('id');
					expect(res.body[0]).to.have.property('userid');
					expect(res.body[0]).to.have.property('date');
				});
		});
	});

	describe('#getInvoice()', function() {
		it('should get single invoice', function() {
			return CubedHost.Billing.getInvoice(1)
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('invoiceid');
					expect(res.body).to.have.property('userid');
					expect(res.body).to.have.property('date');
				});
		});
	});

	describe('#getServices()', function() {
		it('should get services list', function() {
			return CubedHost.Billing.getServices()
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.body).to.be.an('array');
					expect(res.body[0]).to.have.property('id');
					expect(res.body[0]).to.have.property('name');
					expect(res.body[0]).to.have.property('orderid');
				});
		});
	});

	describe('#getService()', function() {
		it('should get single service', function() {
			return CubedHost.Billing.getService(62)
				.then(function(res) {
					expect(res).to.be.an('object');
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('id');
					expect(res.body).to.have.property('name');
					expect(res.body).to.have.property('price');
				});
		});
	});

});
