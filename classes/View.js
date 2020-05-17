import Terrain from './Terrain.js';
import Cuboid from './Cuboid.js';
import Position from './Position.js';
import Rotation from './Rotation.js';
import Rover from './Rover.js';
import Cylinder from './Cylinder.js';

export default class View {
	constructor() {
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(
			54,
			window.innerWidth / window.innerHeight,
			0.1,
			1000,
		);

		this.camera.position.x = 0;
		this.camera.position.y = 50;
		this.camera.position.z = 135;

		this.renderer = new THREE.WebGLRenderer({ antialias: true });
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(this.renderer.domElement);

		const light = new THREE.PointLight(this.colorLight, 1.5);
		light.position.set(-40, -20, 20);
		const light2 = new THREE.AmbientLight(0x707070); // soft white light
		light2.position.set(40, 20, 10);

		this.scene.add(this.camera);
		this.camera.add(light);
		this.camera.add(light2);

		this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
		this.controls.minDistance = 100;
		this.controls.maxDistance = 500;
		this.controls.maxPolarAngle = Math.PI / 2;

		//kostki
		const cube1Position = new Position(0, 10, 0);
		const cube1Color = new THREE.Color('hsl(200, 100%, 60%)');
		const cuboid1 = new Cuboid(10, 10, 10, cube1Color, cube1Position);
		//this.scene.add(cuboid1.render());

		const cube2Position = new Position(30, 10, 10);
		const cube2Rotation = new Rotation(10, 10, 10);
		const cuboid2 = new Cuboid(10, 10, -10, cube1Color, cube2Position, cube2Rotation);
		//this.scene.add(cuboid2.render());

		//teren
		const terrain = new Terrain(1000, 1000);
		this.scene.add(terrain.render());

		this.animate();


		//łazik
		//const roverPosition = new Position(0,0,0);
		//const roverRotation = new Rotation(0,0,0);
		const rover = new Rover()
		this.scene.add(rover.render())
	}

	render() {
		this.renderer.render(this.scene, this.camera);
	}

	animate() {
		this.render();
		requestAnimationFrame(() => this.animate());
	}
}
