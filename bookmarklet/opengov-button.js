var openGovButtonCSS = document.createElement('link');
openGovButtonCSS.rel = 'stylesheet';
openGovButtonCSS.href = 'https://s3.amazonaws.com/sunlightlabs/opengov-button.css';
document.head.appendChild(openGovButtonCSS);

var jqueryInject = document.createElement('script');
jqueryInject.src = 'https://code.jquery.com/jquery-1.8.3.min.js';
document.head.appendChild(jqueryInject);

var openGovButtonInject = document.createElement('script');
openGovButtonInject.src = 'https://s3.amazonaws.com/sunlightlabs/opengov-button-inject.js';
document.head.appendChild(openGovButtonInject);