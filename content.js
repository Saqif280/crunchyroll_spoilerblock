// ask for local storage
// console.log("content.js run");
chrome.runtime.sendMessage({type: "imageStatus"}, function(response) {
    // console.log("content.js sending message");
		if(response.imageStatus == null){
    	// console.log("content.js val is null");
			return;
		} else if(response.imageStatus == 1){
    	// console.log("content.js val is 1");
    	changeImageOpacity(0);
    } else {
    	// console.log("content.js val is 0");
    	changeImageOpacity(1);
    }
    return;
});

// function to get elements of .mug and .landscape and change opacity
function changeImageOpacity(newOpacity){
	// console.log("change opacity running");
  var all1 = document.getElementsByClassName('landscape');
  for (var i = 0; i < all1.length; i++){
		// console.log("hiding a landscape");
  	all1[i].style.opacity = newOpacity;
  }
  var all2 = document.getElementsByClassName('mug');
  for (var i = 0; i < all2.length; i++){
  	all2[i].style.opacity = newOpacity;
  }
	// console.log("change opacity finished");
}


// FOR TITLES

// ask for local storage
// console.log("content.js run");
chrome.runtime.sendMessage({type: "titleStatus"}, function(response) {
    // console.log("content.js sending message");
    if(response.titleStatus == null){
      // console.log("content.js val is null");
      return;
    } else if(response.titleStatus == 1){
      // console.log("content.js val is 1");
      changeTitleOpacity(0);
    } else {
      // console.log("content.js val is 0");
      changeTitleOpacity(1);
    }
    return;
});

// function to get elements of .mug and .landscape and change opacity
function changeTitleOpacity(newOpacity){
  // console.log("change opacity running");
  var all1 = document.getElementsByClassName('short-desc');
  for (var i = 0; i < all1.length; i++){
    // console.log("hiding a landscape");
    all1[i].style.opacity = newOpacity;
  }
  var all2 = document.getElementsByClassName('collection-carousel-overlay-bottom');
  for (var i = 0; i < all2.length; i++){
    all2[i].style.opacity = newOpacity;
  }
  // console.log("change opacity finished");
}