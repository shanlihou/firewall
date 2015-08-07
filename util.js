var blockFunction = function(info){
	//toast(info.url);
	chrome.windows.getCurrent(function(wnd){
		chrome.tabs.getAllInWindow(wnd.id, function(tabs){
			for (var i = 0; i < tabs.length; i++){
				if (tabs[i].selected == true){
					console.log(tabs[i].url);
					if (info.url == tabs[i].url)
					{
						chrome.tabs.remove(tabs[i].id, function(){
						});
					}
					break;
				}
			}
		});
	});
	return {cancel: true};
};
var toast = function(message){
	new Notification(message,{
icon: '48.png',
body: 'Time to make the toast.'
});
}
