var req_headers = {};
var resp_headers = {};
chrome.webRequest.onBeforeSendHeaders.addListener(function(details){
    req_headers = details.requestHeaders;
}, {urls:["<all_urls>"]}, extraInfoSpec = ['requestHeaders']);

chrome.webRequest.onHeadersReceived.addListener(function(details){
    resp_headers = details.responseHeaders;
}, {urls:["<all_urls>"]}, extraInfoSpec = ['responseHeaders']);


