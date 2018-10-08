
const { Storage } = require('@google-cloud/storage');
const storage = new Storage();
var fs = require('fs');

module.exports.gcp = (request, response) => {
    console.log('I am a log entry!');
    response.status(200).send('Hello World!');
};


module.exports.FetchUser = (request, response) => {
    const bucketName = 'devup-serverless-demo';
    const fileName = "/tmp/user.json";
    const options = {
        destination: fileName
    };
    console.log(request);
    storage
        .bucket(bucketName)
        .file(request.body.name)
        .download(options)
        .then(() => {
            fs.readFile(fileName, (error, data) => {
                if (error) {
                    console.error('ERROR:', err);
                    response.status(500).send(err);
                } else {
                    response.status(200).send(data);
                }
            });
        })
        .catch(err => {
            console.error('ERROR:', err);
            response.status(500).send(err);
        });
};

module.exports.SaveUser = (request, response) => {
    const bucketName = 'devup-serverless-demo';
    var name = req.body.name;
    const fileName = "/tmp/" + name + ".json";
    console.log(request);
    fs.writeFile(fileName, req.body, (error, data) => {
        storage
            .bucket(bucketName)
            .upload(fileName, { gzip: false, cacheControl: 'no-cache' })
            .then(() => {
                fs.readFile(fileName, (error, data) => {
                    if (error) {
                        console.error('ERROR:', err);
                        response.status(500).send(err);
                    } else {
                        response.status(200).send(data)
                    }
                });
            })
            .catch(err => {
                console.error('ERROR:', err);
                response.status(500).send(err);
            });
    });
};

