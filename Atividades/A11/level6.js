function init(robot) {
	// your code goes here
}
function loop(robot) {
	let info = robot.info();

	robot.move(50);
	if (info.coins % 2 == 1) {
		robot.move(-50);
	}
}