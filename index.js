let QingStor = require('qingstor-sdk').QingStor
let Config = require('qingstor-sdk').Config
let config = new Config(process.env.QINGCLOUD_ACCESS_KEY_ID, process.env.QINGCLOUD_SECRET_ACCESS_KEY)

let service = new QingStor(config)

service.listBuckets({'location': process.env.QINGCLOUD_LOCATION}, function(err, data){
  console.log(data.buckets);
})