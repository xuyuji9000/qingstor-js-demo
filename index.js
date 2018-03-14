let QingStor = require('qingstor-sdk').QingStor
let Config = require('qingstor-sdk').Config
const fs = require('fs')

if(!process.env.QINGCLOUD_ACCESS_KEY_ID || !process.env.QINGCLOUD_SECRET_ACCESS_KEY || !process.env.QINGCLOUD_LOCATION) {
    console.log('Error, checkout qingcloud configuration in Readme.')
    // return
}

let config = new Config(process.env.QINGCLOUD_ACCESS_KEY_ID, process.env.QINGCLOUD_SECRET_ACCESS_KEY)

let service = new QingStor(config)
service.listBuckets({'location': process.env.QINGCLOUD_LOCATION}, function(err, data){
  console.log(data.buckets);
})

let bucket = service.Bucket('face-detection', process.env.QINGCLOUD_LOCATION)
bucket.listObjects({}, function (err, data) {
    console.log(data.keys.length)
})


// console.log(bucket.putObject)
bucket.putObject(new Date().getTime().toString(), {
    'body': fs.createReadStream('./Readme.md')
}, function(err, res) {
  console.log(res.statusCode);
})