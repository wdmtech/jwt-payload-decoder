export default (token) => {
  return JSON.parse(atob(token.split('.')[1]))
}
