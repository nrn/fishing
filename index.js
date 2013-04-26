var stream = require('stream')
  , Promise = require('promise')
  , streamCb = require('stream-cb')

module.exports = convert
convert.toStream = toStream
convert.toPromise = toPromise

function convert (item) {
  if (typeof item.pipe === 'function') return toPromise(item)
  if (typeof item.then === 'function') return toStream(item)
}

function toStream (promise, noend) {
  if (typeof promise.pipe === 'function') return promise
  var str = new stream.PassThrough
  var cb = streamCb.toCb(str, noend)

  promise.then(function (result) {
    cb(null, result)
  }, function (e) {
    cb(e)
  })

  return str
}

function toPromise (st, encoding) {
  if (typeof st.then === 'function') return st

  return new Promise(function (resolve, reject) {
    st.pipe(streamCb.toStream(function (e, result) {
      if (e) return reject(e)
      return resolve(result)
    }, encoding))
  })
}
