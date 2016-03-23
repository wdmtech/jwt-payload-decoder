export default {
  /**
   * Split by . -> base64 decode - Parse resulting JSON string
   * */
  getPayload (token) {
    return JSON.parse(atob(token.split('.')[1]))
  }
}
