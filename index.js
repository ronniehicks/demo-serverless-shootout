const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

module.exports.handler = serverless(app);

exports.http = (request, response) => {
    response.status(200).send('Hello World!');
};

module.exports.azure = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.done(null, { body: "Hello World!" });
};
