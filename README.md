create-error.js
----------------

Create custom extendable error types

```
npm install create-error.js
```

example:

```js
var createError = require('./index.js');
var BaseError   = createError('BaseError');
var CustomError = createError('CustomError', BaseError);

throw new CustomError('throw a custom error')
```

License
-------

MIT (c) Chao Wang <hit9@icloud.com>
