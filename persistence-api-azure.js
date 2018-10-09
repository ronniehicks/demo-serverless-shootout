var azure = require('azure-storage');
var tableService = azure.createTableService();

module.exports.SaveUser = (context, req) => {
    let item = req.body;
    item.PartitionKey = item.id;
    item.RowKey = item.id;

    let connectionString = process.env.AzureWebJobsStorage;
    let tableService = azure.createTableService(connectionString);

    tableService.createTableIfNotExists('users', function (error, result, response) {
        if (!error) {
            // result contains true if created; false if already exists
        }
    });

    tableService.insertOrReplaceEntity('users', item, (error, result, response) => {
        let res = {
            statusCode: error ? 400 : 204,
            body: null
        };
        context.done(null, res);
    });
};

module.exports.FetchUser = (context, req) => {
    console.log('Finding User For Name:' + event.pathParameters.id);

    let id = req.query.id;

    let connectionString = process.env.AzureWebJobsStorage;
    let tableService = azure.createTableService(connectionString);
    tableService.createTableIfNotExists('users', function (error, result, response) {
        if (!error) {
            // result contains true if created; false if already exists
        }
    });

    tableService.retrieveEntity('users', id, id, (error, response) => {
        let res = {
            statusCode: error ? 400 : 204,
            body: null
        };
        context.done(null, res);
    });
};
