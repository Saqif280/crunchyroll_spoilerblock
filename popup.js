// alert("popup.js");

// get and set local var for toggle
if(!localStorage['status'] || localStorage['status']==1){
  localStorage['status'] = 1;
  document.getElementById("toggle").checked = true;
} else {
  document.getElementById("toggle").checked = false;
}

// initial run
toggle();

// setup toggle listener
document.getElementById("toggle").onclick = function(){toggle();}

// run to switch on and off
function toggle(){  
  if(document.getElementById("toggle").checked){
    localStorage['status'] = 1;
    // chrome.browserAction.setIcon({path: "icons/icon.png"});
    changeOpacity(0);
    console.log("hide thumbnail");
  } else {
    localStorage['status'] = 0;
    // chrome.browserAction.setIcon({path: "icons/icon_disabled.png"});
    changeOpacity(1);
    console.log("show thumbnail");
  }
}

// function to get elements of .mug and .landscape and change opacity
function changeOpacity(opacity){
  chrome.tabs.executeScript(null,{
    code:"var all = document.getElementsByClassName('landscape');for (var i = 0; i < all.length; i++) {all[i].style.opacity = "+opacity+";}"
  });
  chrome.tabs.executeScript(null,{
    code:"var all = document.getElementsByClassName('mug');for (var i = 0; i < all.length; i++) {all[i].style.opacity = "+opacity+";}"
  });
}