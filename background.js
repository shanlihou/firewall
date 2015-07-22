// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Simple extension to replace lolcat images from
// http://icanhascheezburger.com/ with loldog images instead.

chrome.webRequest.onBeforeRequest.addListener(
	function(info) {
		/*
		var notification = webkitNotifications.createNotification(
		  '48.png',  // icon url - can be relative
		  'Hello!',  // notification title
		  'Lorem ipsum...'  // notification body text
		);
		
		notification.show();*/
		
		new Notification(info.url, {
			icon: '48.png',
			body: 'Time to make the toast.'
		  });
        return {cancel: true};
	},
  // filters
	{
		urls: [
			"*://*.baidu.com/"
		]
	},
  // extraInfoSpec
  ["blocking"]);
