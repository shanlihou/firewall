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
};
var sign = function(formhash){
	var url = "http://www.footdv.net/plugin.php?id=dsu_amupper&ppersubmit=true&formhash=" + formhash + "&infloat=yes&handlekey=dsu_amupper&inajax=1&ajaxtarget=fwin_content_dsu_amupper";
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4)
		{
			if(xhr.status == 200)
			{
				console.log("sign ok");
				console.log(xhr.responseText);
			}
		}
	};
	xhr.open("GET", url, true);
	xhr.send(null);
};

var getSign = function(){
	toast("get sign");
	var url = "http://www.footdv.net/forum.php";
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4)
		{
			if(xhr.status == 200)
			{
				var hashReg = new RegExp('formhash=[0-9a-f]+', "g");
				var result;
				result = hashReg.exec(xhr.responseText);
				console.log(result);
				if(result == null)
				{
					console.log("find null");
				}
				else
				{
					var hash = result.toString().substring(9);
					console.log(hash);
					toast(hash);
					sign(hash)
				}
			}
		}
	};
	xhr.open("GET", url, true);
	xhr.send(null);
	
};

var loginFoot = function(){
	var url = "http://www.footdv.net/member.php?mod=logging&action=login&loginsubmit=yes&infloat=yes&lssubmit=yes&inajax=1";
	var arg = "fastloginfield=username&username=lvpidadiao&cookietime=2592000&password=889914&quickforward=yes&handlekey=ls";
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		console.log(xhr.readyState);
		if (xhr.readyState == 4)  
		{
			console.log(xhr.status);
			toast(xhr.statusText);
			if(xhr.status == 200)  
			{  
				getSign();
			}  
		}
	};
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");
	xhr.setRequestHeader("Content-Legnth", arg.length);
	xhr.send(arg);
};
