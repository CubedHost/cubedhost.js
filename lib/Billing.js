const agent = require('./util/agent');
const prefix = require('./util/prefix');

/**
 * Billing : Get Invoices
 *
 * @returns {Promise}
 */
exports.getInvoices = function() {
	return agent.get('/api/billing/invoices')
		.use(prefix);
};

/**
 * Billing : Get Invoice
 *
 * @param   {Number} invoiceId Invoice to get
 * @returns {Promise}
 */
exports.getInvoice = function(invoiceId) {
	return agent.get(`/api/billing/invoice/${invoiceId}`)
		.use(prefix);
};

/**
 * Billing : Get Services
 *
 * @returns {Promise}
 */
exports.getServices = function() {
	return agent.get('/api/billing/services')
		.use(prefix);
};

/**
 * Billing : Get Service
 *
 * @param   {Number} serviceId Server to get
 * @returns {Promise}
 */
exports.getService = function(serviceId) {
	return agent.get(`/api/billing/service/${serviceId}`)
		.use(prefix);
};

/**
 * Billing : Get Customer
 *
 * @returns {Promise}
 */
exports.getCustomer = function() {
	return agent.get('/api/billing/customer')
		.use(prefix);
};
