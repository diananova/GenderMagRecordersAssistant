var screenShotURL;
	/*Put page action icon on all tabs*/
	chrome.tabs.onUpdated.addListener(function(tabId) {
		chrome.pageAction.show(tabId);
	});

	chrome.tabs.getSelected(null, function(tab) {
		chrome.pageAction.show(tab.id);
	});
	

	chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse) {
			if (request.greeting == "takeScreenShot"){	
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  			//	chrome.tabs.sendMessage(tabs[0].id, {callFunction: "renderImage"}, function(response) { });
			});
				takeScreenShot();
				chrome.extension.getBackgroundPage().console.log("After image");		
			
		}});
	
	/*Send request to current tab when page action is clicked*/
		chrome.pageAction.onClicked.addListener(function(tab) {
		alert("icon has been clicked");

		var slideout = document.getElementById("slideout");
		var GenderMagFrame = document.getElementById("GenderMagFrame");

		document.getElementById('slideout').style.display = 'block' ? 'none' : 'block';
		document.getElementById('GenderMagFrame').style.display = 'block' ? 'none' : 'block';
		//TODO: Think about creating open/close function and call it here?
		/*OLD CODE HERE DON'T DELETE UNTIL TO DO IS RESOLVED*/
		//chrome.tabs.executeScript(null, { file: "./jquery-ui-1.12.1/jquery.js" }, function() {
			//chrome.tabs.getSelected(null, function(tab) {
			//chrome.runtime.sendMessage(tab.id, {callFunction: "toggleSidebar"}, function(response) {});
			
			//});
				/*
				chrome.tabs.sendRequest(
					//Selected tab id
					tab.id,
					//Params inside a object data
					{callFunction: "toggleSidebar"}, 
					//Optional callback function
					function(response) {
						//console.log(response);
					}*/
			//});
		/* END OLD CODE*/
		});