create-error.js
----------------

Create custom extendable error types

```
npm install create-error.js
```

example:

```js
var createError = require('create-error.js');
var BaseError   = createError('BaseError');
var CustomError = createError('CustomError', BaseError);

console.log(new CustomError() instanceof BaseError)  // true

throw new CustomError('throw a custom error')
```

License
-------

MIT (c) Chao Wang <hit9@icloud.com>
