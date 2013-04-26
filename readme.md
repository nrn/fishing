#fishing

Turn promises/A+ compliant promises into Node Streams and streams into promises.

[![browser support](https://ci.testling.com/nrn/fishing.png)](https://ci.testling.com/nrn/fishing)

note: Uses streams2, not currently working in the browser.

##fishing(item)

If item is a stream return a promise, or vice versa.

##fishing.toStream(promise)

Create a stream that gets written to when promise is fulfilled

##fishing.toPromise(stream)

Create a promise that gets fulfilled with the buffered data of the stream,
when the stream ends.

