function requestValidator(obj) {
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (!(obj.method && validMethods.includes(obj.method))) {
        throw new Error("Invalid request header: Invalid Method");
    }

    let uriPattern = /^[\w.]+$/

    if (!(obj.uri && (uriPattern.test(obj.uri) || obj.uri == '*'))) {
        throw new Error("Invalid request header: Invalid URI");
    };

    if (!(obj.version && validVersions.includes(obj.version))) {
        throw new Error("Invalid request header: Invalid Version");
    }

    let messagePattern = /^[^<>\\&\'\"]+$/;

    if (!(obj.hasOwnProperty('message') && (obj.message == '' || messagePattern.test(obj.message)))) {
        throw new Error("Invalid request header: Invalid Message");
    }

    return obj;
}
requestValidator({
    method: 'GET',
    uri: '#svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});
requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
});
requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
});
requestValidator({
    method: 'POST',
    uri: 'home.bash',
    version: 'HTTP/2.0',
    message: ''
});