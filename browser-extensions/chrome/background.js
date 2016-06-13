var req_headers;
chrome.webRequest.onBeforeSendHeaders.addListener(function(details){
    httpheaders = details.requestHeaders;
}, {urls:["<all_urls>"]}, extraInfoSpec = ['requestHeaders']);

