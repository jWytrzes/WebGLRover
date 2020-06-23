import Structure from './Structure.js';
import Position from './Position.js';
import Rotation from './Rotation.js';

export default class TerrainFlat extends Structure {
	constructor(w, h, color = new THREE.Color('hsl(40, 100%, 60%)'), pos = new Position(0, 0, 0)) {
		super();
		this.x = pos.x;
		this.y = pos.y;
		this.z = pos.z;
		this.width = w;
		this.height = h;
		this.color = color;
		this.create();
	}

	create() {
		var geometry = new THREE.PlaneGeometry(this.width, this.height);
		var material = new THREE.MeshBasicMaterial({ color: this.color, side: THREE.DoubleSide });
		var TerrainFlat = new THREE.Mesh(geometry, material);

		TerrainFlat.position.set(this.x, this.y, this.z);
		TerrainFlat.rotation.set(Math.PI / 2, 0, 0);

		this.structure = TerrainFlat;
	}
}
