

var myNodelist = document.querySelectorAll("img");
var i;
for (i = 0; i < myNodelist.length; i++) {
    myNodelist[i].src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hot_dog_with_mustard.png/1200px-Hot_dog_with_mustard.png";
}


document.addEventListener('DOMNodeInserted', function(){
    var mylist = document.querySelectorAll("img");
    var j;
    for (j = 0; j < mylist.length; j++) {
        mylist[j].src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hot_dog_with_mustard.png/1200px-Hot_dog_with_mustard.png";
    }

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
