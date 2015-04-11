create-error.js
----------------

```
npm install create-error.js
```

example:

```js
var createError = require('./index.js'),
  MyError = createError('MyError');

throw new MyError('this is an error');
```

License
-------

MIT (c) Chao Wang <hit9@icloud.com>
