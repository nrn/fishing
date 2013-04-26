var stream = require('stream')
  , test = require('tape')
  , q = require('q')
  , fishing = require('./index')

test('fishing', function (t) {
  var prom = q.fcall(function () {
    return 'asdf'
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

  t.plan(2)

  var st1 = fishing(prom)
  st1.on('data', stRecieve)

  var prom1 = fishing(str())
  prom1.then(function (a) {
    t.equal(a, 'foo', 'Promises results')
  }, function (e) {
    console.log(e)
  })

})

