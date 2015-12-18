


/**
 * This function is meant to handle a url as returned by node's http.ClientRequest
 * "/?itrs=3&zach=awesome"
 * @param url
 */
module.exports.parseUrl = function(url) {
    var query = url.substring(url.indexOf("?") + 1);
    var params = query.split("&");

    var objParams = {};
    for(var i=0; i<params.length; ++i) {
        var param = params[i];
        var eql = param.indexOf("=");
        var key = param.substring(0, eql);
        objParams[key] = param.substring(eql + 1);
    }
    return objParams;
}