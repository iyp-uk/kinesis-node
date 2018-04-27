var createError = require('http-errors')
var express = require('express')
var router = express.Router()

var AWS_REGION = process.env.AWS_REGION || 'eu-west-1'
var STREAM_NAME = process.env.STREAM_NAME || 'streamName'

var AWS = require('aws-sdk')
var kinesis = new AWS.Kinesis({region: AWS_REGION})
var witeToKinesis = function (streamName, data) {
  var record = {
    Data: data,
    PartitionKey: 'somekey',
    StreamName: streamName
  }
  kinesis.putRecord(record, function (err, res) {
    if (err) {
      console.error(err)
    }
    else {
      console.log('Message succesfully sent to the stream:')
      console.log(data)
      console.log(res)
    }
  })
}

router.post('/', function (req, res, next) {
  if (!req.is('application/json')) {
    next(createError(406))
  }
  witeToKinesis(STREAM_NAME, JSON.stringify(req.body))
  res.json({message: 'ok'})
})

module.exports = router
