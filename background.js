// listener for content.js request for localstorage data
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type == "status"){
    	sendResponse({status: localStorage.status});
    }
});