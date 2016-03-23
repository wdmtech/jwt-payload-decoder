export default function (token) { 
  JSON.parse(atob(token.split('.')[1])) 
}
