const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(24, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const cubeGeometry = new THREE.BoxGeometry(10, 5, 3);

const colorYellow = new THREE.Color("hsl(40, 100%, 60%)");
const colorLight = new THREE.Color("hsl(40, 100%, 95%)");

const cubeMaterial = new THREE.MeshPhongMaterial({
  color: colorYellow,
  shininess: 80,
})

const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

const light = new THREE.PointLight(colorLight, 2);
light.position.set(-40, -20, 20);
const light2 = new THREE.PointLight(colorLight, .5);
light2.position.set(40, 20, 10);

scene.add(light);
scene.add(light2);
scene.add(cube);

cube.rotation.x = 20;
cube.rotation.z = 30;

camera.position.z = 135;

renderer.render(scene, camera);