function init(robot) {
	robot.oldCoins = 0;
	robot.oldEnergy = 100;
}

function loop(robot) {
	let info = robot.info();
		
	robot.move(40);
	if (info.coins > robot.oldCoins ||
		 info.energy > robot.oldEnergy) {
		robot.jump(10);
	}
	robot.oldCoins = info.coins;
	robot.oldEnergy = info.energy;
} 