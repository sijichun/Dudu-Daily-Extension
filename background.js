chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({
		currentWindow: true,
		active: true
	}, function(tab) {
		chrome.tabs.create({
			"url": "https://dudu.zhihu.com/post?url="+tab[0].url+"&utm_source=opera-extension&utm_medium=button&utm_campaign=post"
		});
	});
});