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

// if not right, get the size of the tab
var extensionWidth = $(window).width();
console.log(extensionWidth);
var extensionHeight = $(window).height();