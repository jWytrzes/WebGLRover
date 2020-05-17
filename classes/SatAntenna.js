import Structure from './Structure.js';
import Position from './Position.js';
import Rotation from './Rotation.js';
import Cylinder from './Cylinder.js';
import Cone from './Cone.js';

export default class SatAntenna extends Structure {
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
		const antenna = new THREE.Object3D();

		const legPosition = new Position(0, 80, 0);
		const legRotation = new Rotation(0, 1.57, 0);
		const leg = new Cylinder(7, 200, 0xc7c3bd, legPosition, legRotation);
		antenna.add(leg.render());

		const dishPosition = new Position(5, 195, 10);
		const dishRotation = new Rotation(3.14, 1.4, 0.7);
		const dish = new Cone(80, 60, 0xa39e95, dishPosition, dishRotation);
		antenna.add(dish.render());

		antenna.position.set(this.x, this.y, this.z);
		antenna.rotation.set(this.rotX, this.rotY, this.rotZ);

		this.structure = antenna;
	}
}
