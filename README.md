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
  "region": "",
  "bucket": ""
}
```

#Usage

**command:**

```bash
stream-upload-file-s3 --config <config> --filefilename <file> --bucket #bucket 
```

**Parameters:** 

- _config:_ location of config with json from above. Config can also be optional but then a .config should be available in current working directory
- _file:_ Required paremeter: location of file to put in bucket
- _bucket:_ To override bucket config.json


#Add alias.

If desired you could create a function(shortcut) for this in your bash_aliases for example:

```bash
s3upload () { stream-upload-file-s3 --config /Users/alfredwesterveld/.config/stream-upload-file-s3/config.json --filename "$@"; }
```

Then you can just use `s3upload #filename`
