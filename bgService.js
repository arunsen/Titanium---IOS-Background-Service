Ti.API.debug('bg-service : Background Services Started.');

function checkBackgroundServiceStatus(){
	Ti.API.debug('bg-service : Background Services Started');
}
var timer = setInterval(checkBackgroundServiceStatus, 60000);
