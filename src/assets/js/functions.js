$(document).ready(function () {
	
	var mq = window.matchMedia( "(max-width: 890px)" ); // NAV
	mq.addListener(function(){
	if (mq.matches) {
		console.log('test');
	}
});
});
