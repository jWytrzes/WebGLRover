import Perlin from '../lib/perlinNoise.js';

export default class Terrain {
	constructor(w, h) {
		this.width = w;
		this.height = h;
	}

	render() {
		const material = Physijs.createMaterial(
			new THREE.MeshLambertMaterial({ color: 0xa45d45 }),
			.8, // high friction
			.3 // low restitution
		);

		const geometry = new THREE.PlaneBufferGeometry(this.width, this.height, 256, 256)

		const terrain = new Physijs.BoxMesh(
			geometry,
			material,
			0 // mass
		);
		terrain.rotation.x = -Math.PI / 2;

		const perlin = new Perlin();
		const peak = 30;
		const smoothing = 400;
		let vertices = geometry.attributes.position.array;
		for (let i = 0; i <= vertices.length; i += 3) {
			vertices[i + 2] =
				peak *
				perlin.noise(
					(terrain.position.x + vertices[i]) / smoothing,
					(terrain.position.z + vertices[i + 1]) / smoothing,
				);
		}
		terrain.geometry.attributes.position.needsUpdate = true;
		terrain.geometry.computeFaceNormals();
		terrain.geometry.computeVertexNormals();

		terrain.receiveShadow = true;

		return terrain;
	}
}
