import Terrain from './Terrain.js';
import Position from './Position.js';
import Rover from './Rover.js';
import Platform from './Platform.js';
import SatAntenna from './SatAntenna.js';

export default class View {
	constructor() {
		this.scene = new Physijs.Scene
		this.scene.setGravity(new THREE.Vector3( 0, -90, 0 ));
		this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);

		this.camera.position.x = 50;
		this.camera.position.y = 100;
		this.camera.position.z = 535;

		this.renderer = new THREE.WebGLRenderer({ antialias: true });
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(this.renderer.domElement);

		const light = new THREE.PointLight(this.colorLight, 1.5);
		light.position.set(-40, -20, 20);
		const light2 = new THREE.AmbientLight(0x707070);
		light2.position.set(40, 70, -10);

		this.scene.add(this.camera);
		this.camera.add(light);
		this.camera.add(light2);

		this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
		this.controls.minDistance = 100;
		this.controls.maxDistance = 500;
		this.controls.maxPolarAngle = Math.PI / 2.2;
		this.controls.minPolarAngle = 0;

		//teren
		const terrain = new Terrain(2000, 2000);
		this.scene.add(terrain.render());

		//łazik
		const roverPosition = new Position(-20, 37.4, 20);
		const rover = new Rover(roverPosition, this.scene);
		//this.scene.add(rover.render());

		//platforma
		const platformPosition = new Position(0, 0, 0);
		const platform = new Platform(platformPosition);
		this.scene.add(platform.render());

		//antena
		const antennaPosition = new Position(250, 0, -160);
		const antenna = new SatAntenna(antennaPosition);
		this.scene.add(antenna.render());

		this.animate();
	}

	render() {
		this.renderer.render(this.scene, this.camera);
		this.scene.simulate()
	}

	animate() {
		this.render();
		requestAnimationFrame(() => this.animate());
	}
}
