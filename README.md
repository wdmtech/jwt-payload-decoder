# jwt-payload-decoder
A simple function for getting the payload from a [JWT](https://jwt.io/) (JSON Web Token)

## Example usage

First, import the function:

```js
import JWT from '../vue/JWT'
```

Then get the payload:

```js
var payload = JWT.getPayload(token)

var user = {
  email: payload.email,
  name: payload.name
}
```
---
