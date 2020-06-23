import Structure from './Structure.js';
import Position from './Position.js';
import Rotation from './Rotation.js';
import Cuboid from './Cuboid.js';
import Cylinder from './Cylinder.js';
import Sphere from './Sphere.js';

var rover, wheel1, wheel2, wheel3, wheel4, wheel5, wheel6;

export default class Rover extends Structure {
	constructor(pos = new Position(0, 0, 0), rot = new Rotation(0, 0, 0)) {
		super();
		this.x = pos.x;
		this.y = pos.y;
		this.z = pos.z;
		this.rotX = rot.x;
		this.rotY = rot.y;
		this.rotZ = rot.z;
		this.create();
	}

	updatePos(x, y, z) {
		rover.position.set(x, y, z);
	}

	updateRot(angle, dir) {
		rover.rotation.y = angle;
		this.turnWheels(dir);
	}

	turnWheels(dir) {
		if (dir === 'A') {
			wheel1.structure.rotation.y = wheel2.structure.rotation.y = wheel3.structure.rotation.y = wheel4.structure.rotation.y = wheel5.structure.rotation.y = wheel6.structure.rotation.y =
				1.57 + 0.4;
		} else {
			wheel1.structure.rotation.y = wheel2.structure.rotation.y = wheel3.structure.rotation.y = wheel4.structure.rotation.y = wheel5.structure.rotation.y = wheel6.structure.rotation.y =
				1.57 - 0.4;
		}
	}

	straightenWheels() {
		wheel1.structure.rotation.y = wheel2.structure.rotation.y = wheel3.structure.rotation.y = wheel4.structure.rotation.y = wheel5.structure.rotation.y = wheel6.structure.rotation.y = 1.57;
	}

	create() {
		rover = new THREE.Object3D();

		const cube1Position = new Position(0, 10, 0);
		const cube1Color = new THREE.Color('hsl(200, 100%, 60%)');
		const cuboid1 = new Cuboid(50, 10, 30, cube1Color, cube1Position);
		rover.add(cuboid1.render());

		const wheelsColor = new THREE.Color(0x000);

		const wheel1Position = new Position(-19, 0, 15);
		const wheel1Rotation = new Rotation(0, 89.55, 89.55);
		wheel1 = new Cylinder(7, 3, wheelsColor, wheel1Position, wheel1Rotation);
		rover.add(wheel1.render());

		const wheel2Position = new Position(19, 0, -15);
		const wheel2Rotation = new Rotation(0, 89.55, 89.55);
		wheel2 = new Cylinder(7, 3, wheelsColor, wheel2Position, wheel2Rotation);
		rover.add(wheel2.render());

		const wheel3Position = new Position(19, 0, 15);
		const wheel3Rotation = new Rotation(0, 89.55, 89.55);
		wheel3 = new Cylinder(7, 3, wheelsColor, wheel3Position, wheel3Rotation);
		rover.add(wheel3.render());

		const wheel4Position = new Position(-19, 0, -15);
		const wheel4Rotation = new Rotation(0, 89.55, 89.55);
		wheel4 = new Cylinder(7, 3, wheelsColor, wheel4Position, wheel4Rotation);
		rover.add(wheel4.render());

		const wheel5Position = new Position(0, 0, 15);
		const wheel5Rotation = new Rotation(0, 89.55, 89.55);
		wheel5 = new Cylinder(7, 3, wheelsColor, wheel5Position, wheel5Rotation);
		rover.add(wheel5.render());

		const wheel6Position = new Position(0, 0, -15);
		const wheel6Rotation = new Rotation(0, 89.55, 89.55);
		wheel6 = new Cylinder(7, 3, wheelsColor, wheel6Position, wheel6Rotation);
		rover.add(wheel6.render());

		const coreColor = new THREE.Color(0x34f);
		const corePosition = new Position(0, 15, 0);
		const coreRotation = new Rotation(0, 0, 89.55);
		const core = new Cylinder(7, 49.5, coreColor, corePosition, coreRotation);
		rover.add(core.render());

		const antennaColor = new THREE.Color(0xffffff);
		const antennaPosition = new Position(-22, 30, 12);
		const antenna = new Cylinder(0.2, 30, antennaColor, antennaPosition);
		rover.add(antenna.render());

		const antennaBulbColor = new THREE.Color(0x000000);
		const antennaBulbPosition = new Position(-22, 45, 12);
		const antennaBulb = new Sphere(1, antennaBulbColor, antennaBulbPosition);
		rover.add(antennaBulb.render());

		const arm1Position = new Position(0, 30, 0);
		const arm1Color = new THREE.Color(0x333333);
		const arm1Rotation = new Rotation(0, 0, -0.4);
		const arm1 = new Cuboid(45, 2, 2, arm1Color, arm1Position, arm1Rotation);
		rover.add(arm1.render());

		const arm2Position = new Position(0, 50, 0);
		const arm2Color = new THREE.Color(0x333333);
		const arm2Rotation = new Rotation(0, 0, 0.4);
		const arm2 = new Cuboid(45, 2, 2, arm2Color, arm2Position, arm2Rotation);
		rover.add(arm2.render());

		const armBulbColor = new THREE.Color(0x000000);
		const armBulbPosition = new Position(-22, 40, 0);
		const armBulb = new Sphere(3, armBulbColor, armBulbPosition);
		rover.add(armBulb.render());

		const arm3Position = new Position(45, 50, 0);
		const arm3Color = new THREE.Color(0x333333);
		const arm3Rotation = new Rotation(0, 0, -0.4);
		const arm3 = new Cuboid(45, 2, 2, arm3Color, arm3Position, arm3Rotation);
		rover.add(arm3.render());

		const armBulb2Color = new THREE.Color(0x000000);
		const armBulb2Position = new Position(22, 60, 0);
		const armBulb2 = new Sphere(3, armBulb2Color, armBulb2Position);
		rover.add(armBulb2.render());

		const armBulb3Color = new THREE.Color(0x000000);
		const armBulb3Position = new Position(67, 40, 0);
		const armBulb3 = new Sphere(3, armBulb3Color, armBulb3Position);
		rover.add(armBulb3.render());

		const drillColor = new THREE.Color(0x000000);
		const drillPosition = new Position(67, 40, 0);
		const drillRotation = new Rotation(0, 0, -0.4);
		const drill = new Cuboid(15, 1, 1, drillColor, drillPosition, drillRotation);
		rover.add(drill.render());

		rover.position.set(this.x, this.y, this.z);
		rover.rotation.set(this.rotX, this.rotY, this.rotZ);

		this.structure = rover;
	}
}
