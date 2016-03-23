# jwt-payload-decoder

A simple exportable function for getting the payload from a [JWT](https://jwt.io/) (JSON Web Token).

---

## Explanation

JWT -> Split by . -> Get position 1 of array (encoded payload) -> Base64 decode -> JSON parse

---

## Example usage

First, import the function:

```js
import getPayload from '../vue/JWT'
```

Then get the payload:

```js
var payload = getPayload(token)

var user = {
  email: payload.email,
  name: payload.name
}
```
---
