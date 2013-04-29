var stream = require('stream')
  , Promise = require('promise')
  , streamCb = require('stream-cb')
  , convention = require('convention')

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
    , cb = convention.unwrap(streamCb.toCb(str, noend))

  promise.then(cb.s, cb.s)

  return str
}

function toPromise (st, encoding) {
  if (typeof st.then === 'function') return st

  return new Promise(function (resolve, reject) {
    st.pipe(streamCb.toStream(convention.wrap(reject, resolve), encoding))
  })
}

