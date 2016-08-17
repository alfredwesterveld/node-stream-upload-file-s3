#Installing

```bash
$ npm install -g stream-upload-file-s3 
```

#Configure

config.json:

```javascript
{
  "accessKeyId": "",
  "secretAccessKey": "",
  "region": "eu-west-1",
  "bucket": ""
}
```

#Usage

**command:**

```bash
stream-upload-file-s3 -c <config> <file> 
```

**Parameters:** 

- _config:_ location of config with json from above
- _file:_ location of file to put in bucket

**optional:**

- _bucket:_ To override bucket if desired

#Add alias.
