document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  // register handler for click event on checkPage button
  checkPageButton.addEventListener('click', function() {
  // onclick get currently selected tab and execute some js
    chrome.tabs.getSelected(null, function(tab) {
      d = document;
      var f = d.createElement('form');
      // f.action = 'http://gtmetrix.com/analyze.html?bm';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
}, false);