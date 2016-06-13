document.addEventListener('DOMContentLoaded', function () {
    //var checkPageButton = document.getElementById('checkPage');
    // register handler for click event on checkPage button
    // go to docs, find what you can do
    //$(window).width(chrome.tabs.width);

    $('form').submit(function (event) {
        event.preventDefault();
        var background = chrome.extension.getBackgroundPage();
        $('input#req_headers').val(JSON.stringify(background.req_headers));
        $.ajax({
            type: 'post',
            url: $(this).attr('action'),
            data: $(this).serialize(),
            crossDomain: true,
            success: function (data, textStatus, jqXHR) {
                $('#default').html(data['status']);
            },
            error: function (jqXHR, textStatus, errorThrow) {

            }
        });

    });


}, false);


// access location object associated with current frame
// in this case, we want to get the url of the current tab in the browser
// set value of url into form control input attribute value for capturing the URL
chrome.tabs.getSelected(null, function (tab) {
    var tabUrl = tab.url;
    var tabTitle = tab.title;
    document.getElementById('url').value = tab.url;
    document.getElementById('title').value = tab.title;
    // sets placeholder value...not necessary as we are setting the value attribute
    // document.getElementById('url').placeholder = "What";
});


// update tooltip...if needed
chrome.browserAction.setTitle({title: "My New Title"});

// if not right, get the size of the tab
var extensionWidth = $(window).width();
console.log(extensionWidth);
var extensionHeight = $(window).height();