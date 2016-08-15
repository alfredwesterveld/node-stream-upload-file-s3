const fs = require('fs');
const AWS = require('aws-sdk');
const args = process.argv;
const bucket = args[2];
const filename = args[3];
const body = fs.createReadStream(filename);
const params = {
    Bucket: bucket,
    Key: filename,
    ACL: 'public-read'
};

AWS.config.region = process.env.AWS_REGION_FS || args[4] || 'eu-west-1';

const s3obj = new AWS.S3({params: params});
s3obj.upload({Body: body}).on('httpUploadProgress', function(evt) {
    console.log(evt);
}).send(function(err, data) {
    console.log(err, data)
});
