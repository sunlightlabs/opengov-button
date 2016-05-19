document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  // register handler for click event on checkPage button
  // go to docs, find what you can do
  //$(window).width(chrome.tabs.width);

  checkPageButton.addEventListener('click', function(event) {
    event.preventDefault();
    chrome.tabs.query({ // http://stackoverflow.com/questions/9444926/chrome-extension-in-tabs-doc-dont-exist-this-chrome-tabs-getselected-but-i-s
        active: true,
        lastFocusedWindow: true
        }, function(tabs) {
          var form = checkPageButton.parentNode;
          var url_input = document.createElement('input');
          url_input.type = 'hidden';
          url_input.name = 'url';
          url_input.value = tabs[0].url;
          form.appendChild(url_input);
          form.submit();
        }
    );
  }, false);
}, false);


// access location object associated with current frame
// in this case, we want to get the url of the current tab in the browser
// set value of url into form control input attribute value for capturing the URL
chrome.tabs.getSelected(null, function(tab) {
  var tabUrl = tab.url;
  var tabTitle = tab.title;
  document.getElementById('url').value = tab.url;
  document.getElementById('title').value = tab.title;
  // sets placeholder value...not necessary as we are setting the value attribute
  // document.getElementById('url').placeholder = "What";
});



// query the current window (anyone will do) and set the window size in the toolstrip
function showDimensions() {
    chrome.windows.getCurrent(function(w) {
        var el = document.getElementById("windowsize");
      el.innerHTML = w.width + " x " + w.height;
      el.setAttribute("style", "width: " + w.width + "px; height: " + w.height + "px");
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






// if not right, get the size of the tab
var extensionWidth = $(window).width();
console.log(extensionWidth);
var extensionHeight = $(window).height();