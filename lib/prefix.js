const prefix = process.env.CUBEDHOST_API || 'https://prisma.cubedhost.com';

module.exports = function(request) {
	request.url = prefix + request.url;
	return request;
};
