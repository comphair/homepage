var activeStepCount = 1,
	$listElements = $('#howto li');

setInterval(function() {
	$listElements.eq(activeStepCount).addClass('active').siblings().removeClass('active');
	activeStepCount++;
	activeStepCount %= 4;
}, 2000);