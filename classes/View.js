import Position from './Position.js';
import Rover from './Rover.js';
import Platform from './Platform.js';
import SatAntenna from './SatAntenna.js';
import TerrainFlat from './TerrainFlat.js';

var keyboard = new THREEx.KeyboardState();
var clock = new THREE.Clock();
var rover;
let rovPos = {
	x: -20,
	y: 36,
	z: 20,
};
let rovRot = 0;

export default class View {
	constructor() {
		this.init();
		this.animate();
	}

	init() {
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);

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
		const terrain = new TerrainFlat(2000, 2000, 0xa45d45, new Position(0, 28, 0));
		this.scene.add(terrain.render());

		this.structure = terrain;

		//łazik
		const roverPosition = new Position(-20, 36, 20);
		rover = new Rover(roverPosition);
		this.scene.add(rover.render());

		//platforma
		const platformPosition = new Position(0, 0, 0);
		const platform = new Platform(platformPosition);
		this.scene.add(platform.render());

		//antena
		const antennaPosition = new Position(250, 0, -160);
		const antenna = new SatAntenna(antennaPosition);
		this.scene.add(antenna.render());
	}

	render() {
		this.renderer.render(this.scene, this.camera);
	}

	update() {
		var delta = clock.getDelta(); // seconds.
		var moveDistance = 200 * delta; // 200 pixels per second
		var rotateAngle = (Math.PI / 2) * delta; // pi/2 radians (90 degrees) per second

		if (keyboard.pressed('W')) {
			rovPos.x += moveDistance * Math.cos(rovRot);
			rovPos.z -= moveDistance * Math.sin(rovRot);
			rover.updatePos(
				rovPos.x - moveDistance * Math.cos(0),
				rovPos.y,
				rovPos.z + moveDistance * Math.sin(rovRot),
			);
		}
		if (keyboard.pressed('S')) {
			rovPos.x -= moveDistance * Math.cos(rovRot);
			rovPos.z += moveDistance * Math.sin(rovRot);
			rover.updatePos(
				rovPos.x + moveDistance * Math.cos(rovRot),
				rovPos.y,
				rovPos.z - moveDistance * Math.sin(rovRot),
			);
		}
		if (keyboard.pressed('A')) {
			rovRot += rotateAngle;
			rover.updateRot(rovRot - rotateAngle);
		}
		if (keyboard.pressed('D')) {
			rovRot -= rotateAngle;
			rover.updateRot(rovRot + rotateAngle);
		}

		this.controls.update();
	}

	animate() {
		this.render();
		this.update();
		requestAnimationFrame(() => this.animate());
	}
}
