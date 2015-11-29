function isiOS4Plus() {
	if (Titanium.Platform.name == 'iPhone OS') {
		var version = Titanium.Platform.version.split(".");
		var major = parseInt(version[0]);
		// can only test this support on a 3.2+ device
		if (major >= 4) {
			return true;
		}
	}
	return false;
}

function initBackgroundService() {
	if (isiOS4Plus()) {

		var service = null;

		// Ti.App.iOS.addEventListener('notification',function(e){
		// You can use this event to pick up the info of the noticiation.
		// Also to collect the 'userInfo' property data if any was set
		// Ti.API.info("local notification received: "+JSON.stringify(e));
		// });

		Ti.App.addEventListener('resumed', function(e) {
			Ti.API.info("app has resumed from the background");
			// this will unregister the service if the user just opened the app
			// ie: not via the notification 'OK' button..
			if (service == null) {
				service = Ti.App.iOS.registerBackgroundService({
					url : 'bgService.js'
				});
			}
		});

		Ti.App.addEventListener('pause', function(e) {
			Ti.API.info("app was paused from the foreground");

			service = Ti.App.iOS.registerBackgroundService({
				url : 'bgService.js'
			});
			Ti.API.info("registered background service = " + service);

		});
	}
}

exports.initBackgroundService = initBackgroundService;
