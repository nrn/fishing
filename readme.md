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

##Why?

This lets you pull a promises using library into your stream based app
or a stream using module into your promises based app and wrap the
interface you hate in the one you love.

##License (mit)

Copyright (c) 2013 Nick Niemeir <nick.niemeir@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

