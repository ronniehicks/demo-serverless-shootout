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