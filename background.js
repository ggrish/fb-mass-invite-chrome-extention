chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
    if (typeof tab.url !== 'undefined' && tab.url.indexOf("facebook.com") != -1) { // Inspect whether the place where user clicked matches with our list of URL
		chrome.tabs.executeScript(tab.id, { file: "jquery-3.2.1.min.js" }, function() {
			chrome.tabs.executeScript(tab.id, { file: "contentscript.js" });
		});
    }else{
		alert('Extension works only on facebook.com website!');
	}
});
