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



        	var htmlSTring = "<div>\
        		This is a string.\
        		</div>";
            var iframe = "<iframe src='http://sunlightfoundation.com/'></iframe>";

        	// inject opengov button content
        	$("body").append("<div id='opengov-button'><button id='closeopengovbutton' type='button'>" + iframe + "</div>");


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


