#! /usr/bin/env node

const fs = require('fs');
const AWS = require('aws-sdk');
const argv = require('minimist')(process.argv.slice(2));
const config = argv.c ? require(argv.c) : require('./config.json');

const args = process.argv;
const filename = args[2];
const bucket = argv.bucket || config.bucket;
const region = argv.region || config.region;

const params = {
    Bucket: bucket,
    Key: filename,
    ACL: 'public-read'
};

if (!filename) {
    console.log('Usage: <cmd> <filename>');
    process.exit(1);
}

if (!config.accessKeyId || !config.secretAccessKey || !bucket) {
    console.log('please configure ./config.json');
    process.exit(1);
}

AWS.config.update({
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey,
    region: region
});

const body = fs.createReadStream(filename);
const s3obj = new AWS.S3({params: params});

s3obj.upload({Body: body}).on('httpUploadProgress', function(evt) {
    console.log(evt);
}).send(function(err, data) {
    console.log(err, data)
});
