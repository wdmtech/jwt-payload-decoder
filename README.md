# jwt-payload-decoder
A simple function for getting the payload from a JWT (JSON Web Token)

## Example usage

First, import the function:

```js
import JWT from '../vue/JWT'
```

Then get the payload like so:

```js
var payload = JWT.getPayload(token)

var user
user.authenticated = true
user.email = payload.email
user.name = payload.name
```
