module.exports.aws = (event, context, callback) => {
    var response = {
        statusCode: "200",
        headers: { "Content-Type": "text/html" },
        body: 'Hello World!'
    };
    console.log('I am a log entry!');
    callback(null, response);
};

module.exports.gcp = (request, response) => {
    console.log('I am a log entry!');
    response.status(200).send('Hello World!');
};

module.exports.azure = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.done(null, { body: "Hello World!" });
};
