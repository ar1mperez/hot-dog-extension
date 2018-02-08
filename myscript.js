


chrome.storage.sync.get('state', function(data) {
    console.log("Started from the bottom");
    if (data.state == null) {
        var save = {};
        save['state'] = 'on';

        chrome.storage.sync.set(save, function() {
            console.log('Settings saved');
        });

    }

});
/*
chrome.runtime.onStartup.addListener(function () {
    var save = {};
    save["myKey"] = testPrefs;

    chrome.storage.sync.set(save, function() {
        console.log('Settings saved');
    });
});

*/

chrome.storage.sync.get('state', function(data) {
    if (data.state === 'on') {
        var myNodelist = document.querySelectorAll("img");
        var i;
        for (i = 0; i < myNodelist.length; i++) {
            myNodelist[i].src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hot_dog_with_mustard.png/1200px-Hot_dog_with_mustard.png";
        }

    }
});



document.addEventListener('DOMNodeInserted', function(){
    chrome.storage.sync.get('state', function(data) {
        if (data.state == null) {
            console.log("FAKKKK");
        }
        console.log(data.state);
        if (data.state === 'on') {
            var mylist = document.querySelectorAll("img");
            var j;
            for (j = 0; j < mylist.length; j++) {
                mylist[j].src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hot_dog_with_mustard.png/1200px-Hot_dog_with_mustard.png";
            }
        }
    });

});

//When button is pressed change status to on or off
document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('toggle');
    checkPageButton.addEventListener('click', function() {
        chrome.storage.sync.get('state', function(data) {
            if (data.state === 'on') {
                chrome.storage.sync.set({state: 'off'});
            //do something, removing the script or whatever
            } else {
                chrome.storage.sync.set({state: 'on'});
                //inject your script
            }
            chrome.tabs.reload(function(){});
        });

    });
});

/*
$(document).ready(function(){
    $(window).scroll(function() {
      // do whatever you need here.
        console.log("hello world!\n");
        var mylist = document.querySelectorAll("img");
        var j;
        for (j = 0; j < myNodelist.length; j++) {
            mylist[j].src = "http://ariperez.me/img/goddamnhotdog.png";
        }
    });

});
*/
/*
$(window).bind('load', function(){
    var myNodelist = document.querySelectorAll("img");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        myNodelist[i].src = "http://ariperez.me/img/goddamnhotdog.png";
    }

});
*/
