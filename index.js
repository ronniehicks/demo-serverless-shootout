const serverless = require('serverless-http');
var app = requre('./app');

module.exports.handler = serverless(app.application)