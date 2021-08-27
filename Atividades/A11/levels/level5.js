function init(robot) {
	// your code goes here
}
function loop(robot) {
	let infoX = robot.info().x;

	if ((360 < infoX  && infoX < 500) || (560 < infoX && infoX < 760)) {
		robot.jump(10);
	} else {
		robot.move(40);
	}
}