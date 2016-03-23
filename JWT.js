export default function getPayload (token) { 
  JSON.parse(atob(token.split('.')[1])) 
}
