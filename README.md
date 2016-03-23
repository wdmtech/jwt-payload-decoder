# jwt-payload-decoder

A simple exportable function for getting the payload from a [JWT](https://jwt.io/) (JSON Web Token).

---

## Explanation

`JWT -> Split by . delimiter -> Get position 1 of array (encoded payload) -> Base64 decode -> JSON parse`

---

## Example usage

First, [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) the function:

```js
import getPayload from '../vue/JWT'
```

Then get the payload like so:

```js
var payload = getPayload(token)

var user = {
  email: payload.email,
  name: payload.name
}
```
---

## Basic usage

You could also use the function by itself if required:

```js
function getPayload (token) {
  return JSON.parse(atob(token.split('.')[1]))
}
```
---
