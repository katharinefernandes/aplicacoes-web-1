function init(robot) {
	robot.jumpNext = true;
}

function loop(robot) {
	if (robot.jumpNext) {
		robot.jump(10);
		robot.jumpNext = false;
	} else {
		robot.move(50);
		robot.jumpNext = true;
	}
}