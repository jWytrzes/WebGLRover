import Structure from './Structure.js';
import Position from './Position.js';
import Rotation from './Rotation.js';
import Cuboid from './Cuboid.js';
import Cylinder from './Cylinder.js';
import Sphere from './Sphere.js';

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

	create() {
		const rover = new THREE.Object3D();

		const cube1Position = new Position(0, 10, 0);
		const cube1Color = new THREE.Color('hsl(200, 100%, 60%)');
		const cuboid1 = new Cuboid(50, 10, 30, cube1Color, cube1Position);
		rover.add(cuboid1.render());

		const wheelsColor = new THREE.Color(0x000);

		const wheel1Position = new Position(-19, 0, 15);
		const wheel1Rotation = new Rotation(0, 89.55, 89.55);
		const wheel1 = new Cylinder(7, 3, wheelsColor, wheel1Position, wheel1Rotation);
		rover.add(wheel1.render());

		const wheel2Position = new Position(19, 0, -15);
		const wheel2Rotation = new Rotation(0, 89.55, 89.55);
		const wheel2 = new Cylinder(7, 3, wheelsColor, wheel2Position, wheel2Rotation);
		rover.add(wheel2.render());

		const wheel3Position = new Position(19, 0, 15);
		const wheel3Rotation = new Rotation(0, 89.55, 89.55);
		const wheel3 = new Cylinder(7, 3, wheelsColor, wheel3Position, wheel3Rotation);
		rover.add(wheel3.render());

		const wheel4Position = new Position(-19, 0, -15);
		const wheel4Rotation = new Rotation(0, 89.55, 89.55);
		const wheel4 = new Cylinder(7, 3, wheelsColor, wheel4Position, wheel4Rotation);
		rover.add(wheel4.render());

		const wheel5Position = new Position(0, 0, 15);
		const wheel5Rotation = new Rotation(0, 89.55, 89.55);
		const wheel5 = new Cylinder(7, 3, wheelsColor, wheel5Position, wheel5Rotation);
		rover.add(wheel5.render());

		const wheel6Position = new Position(0, 0, -15);
		const wheel6Rotation = new Rotation(0, 89.55, 89.55);
		const wheel6 = new Cylinder(7, 3, wheelsColor, wheel6Position, wheel6Rotation);
		rover.add(wheel6.render());

		const coreColor = new THREE.Color(0x34f);
		const corePosition = new Position(0, 15, 0);
		const coreRotation = new Rotation(0, 0, 89.55);
		const core = new Cylinder(7, 50, coreColor, corePosition, coreRotation);
		rover.add(core.render());

		const antennaColor = new THREE.Color(0xffffff);
		const antennaPosition = new Position(-22, 30, 12);
		const antenna = new Cylinder(0.2, 30, antennaColor, antennaPosition);
		rover.add(antenna.render());

		const antennaBulbColor = new THREE.Color(0x000000);
		const antennaBulbPosition = new Position(-22, 45, 12);
		const antennaBulb = new Sphere(1, antennaBulbColor, antennaBulbPosition);
		rover.add(antennaBulb.render());

		rover.position.set(this.x, this.y, this.z);
		rover.rotation.set(this.rotX, this.rotY, this.rotZ);

		this.structure = rover;
	}
}
