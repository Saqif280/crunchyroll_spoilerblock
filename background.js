// listener for content.js request for localstorage data
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type == "imageStatus"){
    	sendResponse({imageStatus: localStorage.imageStatus});
    }
    if (request.type == "titleStatus"){
    	sendResponse({titleStatus: localStorage.titleStatus});
    }
});