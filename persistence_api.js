const DatbaseDriver = require('s3-db');
const database = new DatbaseDriver({
    db: {
        name: 'devup-serverless-demo',
        environment: 'dev',
        allowDrop: true
    },
    provider: {
        name: 'aws-s3',
        region: 'us-west-2'
    }
});

module.exports.SaveUser = (event, context, callback) => {
    var response = {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
    };

    database.getCollection('users', { id: { propertyName: 'name' } })
        .catch(reason => {
            console.error(reason);
            console.log('Creating Collection users ...');
            return database.createCollection('users');
        })
        .then(collection => {
            console.log('Attempting to Save Record to Collection: ' + collection.getName());
            return collection.saveDocument(JSON.parse(event.body));
        })
        .catch(reason => {
            console.error('Unable to Save Document: ' + reason);
            response.statusCode = 400;
            response.body = JSON.stringify(reason);
            return callback(reason, response);
        })
        .then(document => {
            console.log('Save Complete!');
            response.body = JSON.stringify(document);
            return callback(null, response);
        });
};

module.exports.FetchUser = (event, context, callback) => {
    console.log('Finding User For Name:' + event.pathParameters.id);
    database.getCollection('users', { id: { propertyName: 'name' } })
        .then(collection => collection.getDocument(event.pathParameters.id))
        .then(document => {
            console.info('User Name: ' + document.name);
            var response = {
                statusCode: "200",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(document)
            };
            return callback(null, response);
        })
        .catch((reason) => {
            console.error("User Document Not Found For Id" + event.pathParameters.id);
            var response = {
                statusCode: "404",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(reason)
            };
            return callback(reason, response);
        });
};