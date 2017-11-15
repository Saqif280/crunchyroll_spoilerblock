// alert("popup.js");

// get and set local var for imageToggle
if(!localStorage['imageStatus'] || localStorage['imageStatus']==1){
  localStorage['imageStatus'] = 1;
  document.getElementById("imageToggle").checked = true;
} else {
  document.getElementById("imageToggle").checked = false;
}

// initial run
imageToggle();

// setup imageToggle listener
document.getElementById("imageToggle").onclick = function(){imageToggle();}

// run to switch on and off
function imageToggle(){  
  if(document.getElementById("imageToggle").checked){
    localStorage['imageStatus'] = 1;
    //chrome.browserAction.setIcon({path: "images/icon128.png"});
    changeImageOpacity(0);
    console.log("hide thumbnail");
  } else {
    localStorage['imageStatus'] = 0;
    //chrome.browserAction.setIcon({path: "images/icon128_disabled.png"});
    changeImageOpacity(1);
    console.log("show thumbnail");
  }
}

// function to get elements of .mug and .landscape and change opacity
function changeImageOpacity(opacity){
  chrome.tabs.executeScript(null,{
    code:"var all = document.getElementsByClassName('landscape');for (var i = 0; i < all.length; i++) {all[i].style.opacity = "+opacity+";}"
  });
  chrome.tabs.executeScript(null,{
    code:"var all = document.getElementsByClassName('mug');for (var i = 0; i < all.length; i++) {all[i].style.opacity = "+opacity+";}"
  });
}

// FOR TITLES

// get and set local var for imageToggle
if(!localStorage['titleStatus'] || localStorage['titleStatus']==1){
  localStorage['titleStatus'] = 1;
  document.getElementById("titleToggle").checked = true;
} else {
  document.getElementById("titleToggle").checked = false;
}

// initial run
titleToggle();

// setup titleToggle listener
document.getElementById("titleToggle").onclick = function(){titleToggle();}

// run to switch on and off
function titleToggle(){  
  if(document.getElementById("titleToggle").checked){
    localStorage['titleStatus'] = 1;
    //chrome.browserAction.setIcon({path: "titles/icon128.png"});
    changeTitleOpacity(0);
    console.log("hide thumbnail");
  } else {
    localStorage['titleStatus'] = 0;
    //chrome.browserAction.setIcon({path: "titles/icon128_disabled.png"});
    changeTitleOpacity(1);
    console.log("show thumbnail");
  }
}

// function to get elements of .mug and .landscape and change opacity
function changeTitleOpacity(opacity){
  chrome.tabs.executeScript(null,{
    code:"var all = document.getElementsByClassName('short-desc');for (var i = 0; i < all.length; i++) {all[i].style.opacity = "+opacity+";}"
  });
  chrome.tabs.executeScript(null,{
    code:"var all = document.getElementsByClassName('collection-carousel-overlay-bottom');for (var i = 0; i < all.length; i++) {all[i].style.opacity = "+opacity+";}"
  });
}