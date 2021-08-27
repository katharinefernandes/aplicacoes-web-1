function init(robot) {
	// your code goes here
}

function loop(robot) {
  let infoX = robot.info().x;

	if (infoX.x > 380 && infoX.x < 480) {
		robot.jump(10);
	} else {
		robot.move(40);
	}
}