# jwt-payload-decoder

A simple, exportable function for getting the payload from a JWT (JSON Web Token).

https://jwt.io/

---

## Example usage

First, [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) the function:

```js
var jwtPayloadDecoder = require('jwt-payload-decoder')
```

Then get the payload like so:

```js
var payload = jwtPayloadDecoder.getPayload(token)

var user = {
  email: payload.email,
  name: payload.name
}
```
---
