exports.getPayload = function(token) {
    return JSON.parse(atob(token.split('.')[1]))
};
