import Structure from './Structure.js';
import Position from './Position.js';
import Rotation from './Rotation.js';

export default class Cone extends Structure {
	constructor(
		radius,
		height,
		color = new THREE.Color('hsl(40, 100%, 60%)'),
		pos = new Position(0, 0, 0),
		rot = new Rotation(0, 0, 0),
	) {
		super();
		this.x = pos.x;
		this.y = pos.y;
		this.z = pos.z;
		this.color = color;
		this.rotX = rot.x;
		this.rotY = rot.y;
		this.rotZ = rot.z;
		this.radius = radius;
		this.height = height;
		this.create();
	}

	create() {
		const geometry = new THREE.ConeGeometry(this.radius, this.height, 32);
		const material = new THREE.MeshPhongMaterial({
			color: this.color,
			shininess: 40,
		});
		const cone = new THREE.Mesh(geometry, material);

		cone.position.set(this.x, this.y, this.z);
		cone.rotation.set(this.rotX, this.rotY, this.rotZ);

		this.structure = cone;
	}
}