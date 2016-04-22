// jquery dependency checking
runScript();

function runScript() {
    // script(s) relying on jquery's existence
    if( window.$ ) {
        // do your action that depends on jQuery.
        // ensure jQuery reference is defined
        var $ = jQuery;
        $(document).ready(function() {
        	// make sure jquery is loaded
        	if (!window.jQuery) {
        		var jq = document.createElement('script'); 
        		jq.type = 'text/javascript';
        		jq.src = 'jquery-1.8.3.min.js';
        		document.getElementsByTagName('head')[0].appendChild(jq);
        	}

            var userDataList = "<ul class=\"xoxo\">\
                <li>Browser Code: <b id=\"user-data-browser\"></b></li>\
                <li>Browser: <b id=\"user-browser\"></b></li>\
                <li>Pathname: <b id=\"user-pathname\"></b></li>\
                <li>URL: <b id=\"user-url\"></b></li>\
                </ul>";


            // var htmlSTring = "<div>\
            //  This is a string.\
            //  </div>";

            // inject opengov button content
            $("body").append("<div id='opengov-button'><button id='closeopengovbutton' type='button'></button><div id='opengov-button-content'>" + userDataList + "</div></div>");

            var browserID, browserType = getBrowserId();

            $('#user-data-browser').append(browserID);
            $('#user-browser').append(browserType);
            $('#user-browser').addClass(browserType);


            // get url
            var pathname = window.location.pathname; // Returns path only
            var url      = window.location.href;     // Returns full URL
            $("#user-pathname").append(pathname);
            $("#user-url").append(url);

            // get user browser
            function getBrowserId (nIdx, aKey) {
              var aKeys = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"],
                  sUsrAg = navigator.userAgent, nIdx = aKeys.length - 1;
  
                for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--);
                  var aKey = aKeys[nIdx];
                return nIdx, aKey
            }


        	// close opengov button
        	$('#opengov-button').click(function() {
        		$('#opengov-button').hide();
        	});
        });

    } else {
        // wait 50 milliseconds and try again.
        window.setTimeout( runScript, 50 );
    }
}


