export default class Terrain {
	constructor(w, h) {
		this.width = w;
		this.height = h;
		//this.scene = scene;
	}

	render() {
		var geometry = new THREE.PlaneBufferGeometry(2000, 2000, 256, 256);
		var material = new THREE.MeshLambertMaterial({ color: 0x3c3951 });
		var terrain = new THREE.Mesh(geometry, material);
		terrain.rotation.x = -Math.PI / 2;
		// scene.add(terrain);
		return terrain;
	}
}
