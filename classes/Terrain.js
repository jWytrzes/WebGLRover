export default class Terrain {
	constructor(w, h) {
		this.width = w;
		this.height = h;
	}

	render() {
		var geometry = new THREE.PlaneBufferGeometry(this.width, this.height, 256, 256);
		var material = new THREE.MeshLambertMaterial({ color: 0x3c3951 });
		var terrain = new THREE.Mesh(geometry, material);
		terrain.rotation.x = -Math.PI / 2;
		return terrain;
	}
}
