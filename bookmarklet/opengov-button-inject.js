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

            var openGovButtonNav = "<div id=\"opengovbuttonnavbox\">\
                <nav id=\"opengovbuttonnav\">\
                  <ul class=\"ul-nav\">\
                    <li><a class=\"data-link\" data-tab=\"tab-1\" href\"#form\">Form</a></li>\
                    <li><a class=\"data-link\" data-tab=\"tab-2\" href\"#tools\">Tools</a></li>\
                    <li><a class=\"data-link\" data-tab=\"tab-3\" href\"#info\">Info</a></li>\
                    <li><a class=\"data-link\" data-tab=\"tab-4\" href\"#link\">Link 1</a></li>\
                  </ul>\
                </nav>\
                </div>";

            var openGovButtonNavForm = "<section id=\"tab-1\" class=\"opengovbutton-section\"><form id\"form-opengov-button\">\
                <fieldset>\
                  <legend>OpenGov Button Form</legend>\
                  <label for=\"\"><b class=\"block\">Label</b>\
                    <input type=\"\" id=\"\" placeholder=\"\" validate=\"\" />\
                  </label>\
                  <label for=\"\"><b class=\"block\">Label</b>\
                    <input type=\"\" id=\"\" placeholder=\"\" validate=\"\" />\
                  </label>\
                  <label for=\"\"><b class=\"block\">Label</b>\
                    <input type=\"\" id=\"\" placeholder=\"\" validate=\"\" />\
                  </label>\
                  <label for=\"\"><b class=\"block\">Label</b>\
                    <input type=\"\" id=\"\" placeholder=\"\" validate=\"\" />\
                  </label>\
                </fieldset>\
            </form></section>";

            var openGovButtonTools = "<section id=\"tab-2\" class=\"opengovbutton-section\"><h2>Tools</h2></section>";

            var userDataList = "<section id=\"tab-3\" class=\"opengovbutton-section\"><ul class=\"xoxo\">\
                <li>Browser Code: <b id=\"user-data-browser\"></b></li>\
                <li>Browser: <b id=\"user-browser\"></b></li>\
                <li>Pathname: <b id=\"user-pathname\"></b></li>\
                <li>URL: <b id=\"user-url\"></b></li>\
                </ul></section>";

            var openGovButtonSectionBlank = "<section id=\"tab-4\" class=\"opengovbutton-section\"><h2>Blank Section</h2></section>";


            var oGBContent = openGovButtonNav + "<div id=\"opengovbutton-tabbed-content\">" + openGovButtonNavForm + openGovButtonTools + userDataList + openGovButtonSectionBlank + "</div>";


            var openGovButtonBranding = "<a href\"https://sunlightfoundation.com\" id=\"opengovbutton-sf-logo\">Sunlight Foundation</a>";

            var openGovButtonContentHeader = openGovButtonBranding + "<button id='closeopengovbutton' type='button'></button><div id='opengov-button-content'>";


            // var htmlSTring = "<div>\
            //  This is a string.\
            //  </div>";

            // inject opengov button content
            $("body").append("<div id='opengov-button'>" + openGovButtonContentHeader + oGBContent + "</div></div>");

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

            // tabs
            $('ul.tabs li').click(function(){
                var tab_id = $(this).attr('data-tab');
                $('ul.tabs li').removeClass('current');
                $('.tab-content').removeClass('current');

                $(this).addClass('current');
                $("#"+tab_id).addClass('current');
            })






        });

    } else {
        // wait 50 milliseconds and try again.
        window.setTimeout( runScript, 50 );
    }
}


