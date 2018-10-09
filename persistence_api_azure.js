var azure = require('azure-storage');

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
    context.log(JSON.stringify(item));
    tableService.insertOrReplaceEntity('users', item, { echoContent: true }, (error, result, response) => {
        if (error) {
            context.log(JSON.stringify(error));
        }

        tableService.retrieveEntity('users', item.id, item.id, (error, internalResult) => {
            let res = {
                statusCode: error ? 400 : 200,
                body: internalResult
            };
            context.done(null, res);
        });
    });
};

module.exports.FetchUser = (context, req) => {
    context.log('Finding User For Name:' + req.params.id);

    let id = req.params.id;

    let connectionString = process.env.AzureWebJobsStorage;
    let tableService = azure.createTableService(connectionString);
    tableService.createTableIfNotExists('users', function (error, result, response) {
        if (!error) {
            // result contains true if created; false if already exists
        }
    });

    tableService.retrieveEntity('users', id, id, (error, response) => {
        let res = {
            statusCode: error ? 400 : 200,
            body: response
        };
        context.done(null, res);
    });
};
