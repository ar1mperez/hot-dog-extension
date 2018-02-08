/*console.log("Hey there!\n");
window.open("http://www.ariperez.me",'_blank');
document.addEventListener('DOMContentLoaded', function() {
    var myNodelist = document.querySelectorAll("img");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        myNodelist[i].src = "goddamnhotdog.png";
    }




}



function changeState() {
    alert("WHAT THE!");
    chrome.storage.sync.get('state', function(data) {
        if (data.state === 'on') {
            console.log("OFF!\n");
            chrome.storage.sync.set({state: 'off'});
        //do something, removing the script or whatever
        } else {
            chrome.storage.sync.set({state: 'on'});
            //inject your script
      }
    });
}
*/
