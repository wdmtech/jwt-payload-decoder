# jwt-payload-decoder

A simple, exportable function for getting the payload from a JWT (JSON Web Token).

https://jwt.io/

---

## Installation

```bash
$ npm install jwt-payload-decoder --save
```

## Usage

Require the package in your application:

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
