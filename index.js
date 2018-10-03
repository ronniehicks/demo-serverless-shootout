
module.exports.handler = (event, context, callback) => {
    console.log('I am a log entry!');
    callback(null, 'Hello World!');
};

module.exports.http = (request, response) => {
    console.log('I am a log entry!');
    response.status(200).send('Hello World!');
};

module.exports.azure = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.done(null, { body: "Hello World!" });
};
