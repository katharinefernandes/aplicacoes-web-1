function init(robot) {
	robot.iterationsAfterCoin = 0;
}

function loop(robot) {
	let info = robot.info();
	
	if (robot.iterationsAfterCoin > 4) {
		robot.jump(10);
	}
	if (info.coins > 0) {
		robot.iterationsAfterCoin++;
	}
}