var stream = require('stream')
  , test = require('tape')
  , q = require('q')
  , fishing = require('./index')

test('fishing', function (t) {
  var prom = q.fcall(function () {
    return 'asdf'
  })
  var objprom = q.fcall(function () {
    return {foo: 'bar'}
  })
  var str = function () {
    var st = new stream.PassThrough

    setImmediate(function () {
      st.write('fo')
      st.end('o')
    })

    return st
  }
  function stRecieve (data) {
    t.equal(data.toString(), 'asdf', 'toStream recieved data.')
  }

  t.plan(5)

  var st1 = fishing(prom)
  st1.on('data', stRecieve)

  var objst1 = fishing(objprom)
  objst1.on('data', function (data) {
    t.equal(JSON.stringify(data), '{"foo":"bar"}', 'objets do not blow up')
  })

  var prom1 = fishing(str())
  prom1.then(function (a) {
    t.equal(a, 'foo', 'Promises results')
  }, function (e) {
    console.log(e)
  })

  var st2 = str()
  var prom2 = fishing(st2)
  prom2.then(function (a) {
    console.log(a)
  }, function (e) {
    t.equal(e, 'Fail', 'Fail promise on stream error')
  })
  st2.emit('error', 'Fail')

  var prom3 = q.defer()
  var st3 = fishing(prom3.promise)
  st3.on('error', function (e) {
    t.equal(e.toString(), 'Error: Fail', 'Error on stream when promise fails')
  })
  prom3.reject(new Error('Fail'))

})

