import Perlin from '../lib/perlinNoise.js';

export default class Terrain {
	constructor(w, h) {
		this.width = w;
		this.height = h;
	}

	render() {
		const geometry = new THREE.PlaneBufferGeometry(this.width, this.height, 256, 256);
		const material = new THREE.MeshLambertMaterial({ color: 0xa45d45 });
		const terrain = new THREE.Mesh(geometry, material);
		terrain.rotation.x = -Math.PI / 2;

		const perlin = new Perlin();
		const peak = 30;
		const smoothing = 400;
		let vertices = terrain.geometry.attributes.position.array;
		for (let i = 0; i <= vertices.length; i += 3) {
			vertices[i + 2] =
				peak *
				perlin.noise(
					(terrain.position.x + vertices[i]) / smoothing,
					(terrain.position.z + vertices[i + 1]) / smoothing,
				);
		}
		terrain.geometry.attributes.position.needsUpdate = true;
		terrain.geometry.computeVertexNormals();

		return terrain;
	}
}
