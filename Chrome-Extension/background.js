// Template background.js

var newtext = 0;
setInterval(function(){
    chrome.browserAction.setBadgeText ( { text: (newtext++)+"" } );
} , 1000);
