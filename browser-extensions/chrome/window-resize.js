
// query the current window (anyone will do) and set the window size in the toolstrip
function showDimensions() {
    chrome.windows.getCurrent(function(w) {
      // var el = document.getElementById("windowsize");
        var extensionBody = document.getElementById("extension-body");
        var extensionContent = document.getElementById("div-content");
      // el.innerHTML = w.width + " x " + w.height;
      extensionBody.innerHTML = w.width + " x " + w.height;
      extensionContent.innerHTML = w.width + " x " + w.height;
      // el.setAttribute("style", "width: " + w.width + "px; height: " + w.height + "px");
      extensionBody.setAttribute("style", "width: " + w.width + "px; height: " + w.height + "px");
      extensionContent.setAttribute("style", "width: " + w.width + "px; height: " + w.height + "px");
    });
}

// Listen to the content script and when told there is a change, query again
chrome.extension.onConnect.addListener(function(port, name) {    
  console.assert(name == "resize");
  port.onMessage.addListener(function() {
      showDimensions();
  });
});

window.onload = function() {
  showDimensions();
};