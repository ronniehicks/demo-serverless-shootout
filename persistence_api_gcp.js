
const { Storage } = require('@google-cloud/storage');
const storage = new Storage();
var fs = require('fs');

module.exports.gcp = (request, response) => {
    console.log('I am a log entry!');
    response.status(200).send('Hello World!');
};


module.exports.FetchUser = (request, response) => {
    const bucketName = 'devup-serverless-demo';
    const fileName = request.body.name + ".json";
    const options = {
        destination: "/tmp/" + fileName
    };
    console.log(request.body);
    storage
        .bucket(bucketName)
        .file(fileName)
        .download(options)
        .then(() => {
            fs.readFile("/tmp/" + fileName, (error, data) => {
                if (error) {
                    console.error('ERROR:', error);
                    response.status(500).send(error);
                } else {
                    response.status(200).send(data);
                }
            });
        })
        .catch(error => {
            console.error('ERROR:', error);
            response.status(500).send(error);
        });
};

module.exports.SaveUser = (request, response) => {
    const bucketName = 'devup-serverless-demo';
    var name = request.body.name;
    const fileName = "/tmp/" + name + ".json";
    console.log(request);
    fs.writeFile(fileName, JSON.stringify(request.body), (error, data) => {
        if (error) {
            response.status(500).send(error);
        }
        else {
            storage
                .bucket(bucketName)
                .upload(fileName, { gzip: false, cacheControl: 'no-cache' })
                .then(() => { response.status(200).send(JSON.stringify(request.body)); })
                .catch(err => {
                    console.error('ERROR:', err);
                    response.status(500).send(err);
                });
        }
    });
};

