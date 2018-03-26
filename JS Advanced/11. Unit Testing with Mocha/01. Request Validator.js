function validateRequest(requestObj) {
    let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    let uriRgx = /^[\w.]+$/;
    let validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    let messageRegex = /^[^<>\\&'"]*$/;

    if (!(requestObj.method && validMethods.includes(requestObj.method))) {
        throw new Error(`Invalid request header: Invalid Method`);
    }//
    if (!(requestObj.uri && (uriRgx.test(requestObj.uri) || requestObj.uri == '*'))) {
        throw new Error(`Invalid request header: Invalid URI`);
    }
    if (!(requestObj.version && validVersions.includes(requestObj.version))) {
        throw new Error('Invalid request header: Invalid Version');
    }
    if (!(requestObj.hasOwnProperty('message') && (messageRegex.test(requestObj.message) || requestObj.message == ""))) {
        throw new Error(`Invalid request header: Invalid Message`);
    }
    return requestObj;
}

//console.log(validateRequest({
//    method: 'GET',
//    uri: 'svn.public.catalog',
//    version: 'HTTP/1.1',
//    message: ''
//}));