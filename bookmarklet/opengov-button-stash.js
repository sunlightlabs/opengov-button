
var style = document.createElement('style');
style.innerHTML('')


var openGovButtonCSS = document.createElement('link');
openGovButtonCSS.

var opengovInjection = "<div id='opengov-button'><button id='closeopengovbutton' type='button'></button></div>";

style.src
opengov-button.css
    
        


            <script src=""></script>
<script>
$('button#closeopengovbutton').click(function() {
  // $(this).toggleClass('expanded').siblings('ul').slideToggle();
  $("#opengov-button").addClass("hide");
});
</script>
      javascript:(function(){ var script=document.createElement('script');script.src='opengov-button.js';document.body.appendChild(script)})();
    </div> <!-- opengov-button -->


    javascript:(function()%7B%20var%20style%3Ddocument.createElement(%27style%27)%3Bstyle.innerHTML%3D%27%23syncronexOverlay,%23syncronexOverlayContent%7Bdisplay:none%20!important%7D%27%3B%20document.body.appendChild(style)%20%7D)()%3B



var openGovButtonCSS = document.createElement('link');
openGovButtonCSS.rel = 'stylesheet';
openGovButtonCSS.href = 'opengov-button.css';
document.head.appendChild(openGovButtonCSS);

var jqueryInject = document.createElement('script');
jqueryInject.src = 'https://code.jquery.com/jquery-1.8.3.min.js';
document.head.appendChild(jqueryInject);

})()




