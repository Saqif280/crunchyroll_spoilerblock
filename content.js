// ask for local storage
// console.log("content.js run");
chrome.runtime.sendMessage({type: "status"}, function(response) {
    // console.log("content.js sending message");
		if(response.status == null){
    	// console.log("content.js val is null");
			return;
		} else if(response.status == 1){
    	// console.log("content.js val is 1");
    	changeOpacity(0);
    } else {
    	// console.log("content.js val is 0");
    	changeOpacity(1);
    }
    return;
});

// function to get elements of .mug and .landscape and change opacity
function changeOpacity(newOpacity){
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