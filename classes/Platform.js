import Structure from './Structure.js';
import Position from './Position.js';
import Rotation from './Rotation.js';
import Cuboid from './Cuboid.js';
import Cylinder from './Cylinder.js';

export default class Platform extends Structure {
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
		const platform = new THREE.Object3D();

		const basePosition = new Position(-19, 5, 15);
		const baseRotation = new Rotation(0, 0, 0);
		const base = new Cylinder(60, 48, 0x687887, basePosition, baseRotation);
		platform.add(base.render());

		const borderPosition = new Position(-19, 5, 15);
		const borderRotation = new Rotation(0, 0, 0);
		const border = new Cylinder(70, 47, 0x192938, borderPosition, borderRotation);
		platform.add(border.render());

		const exitPosition = new Position(70, -19, 15);
		const exitRotation = new Rotation(0, 0, 12);
		const exit = new Cuboid(100, 50, 70, 0x192938, exitPosition, exitRotation);
		platform.add(exit.render());

		platform.position.set(this.x, this.y, this.z);
		platform.rotation.set(this.rotX, this.rotY, this.rotZ);

		this.structure = platform;
	}
}
