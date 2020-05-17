let camera, controls, scene, renderer;
const colorYellow = new THREE.Color("hsl(40, 100%, 60%)");
const colorLight = new THREE.Color("hsl(40, 100%, 95%)");

const init = () => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(24, window.innerWidth / window.innerHeight, 0.1, 1000);
  
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const light = new THREE.PointLight(colorLight, 1.5);
  light.position.set(-40, -20, 20);
  const light2 = new THREE.PointLight(colorLight, .5);
  light2.position.set(40, 20, 10);

  scene.add(camera);
  camera.add(light);
  camera.add(light2);
  
  scene.add(cube);

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.minDistance = 100;
  controls.maxDistance = 500;
  controls.maxPolarAngle = Math.PI / 2;

  camera.position.x = 0;
  camera.position.z = 0;
  camera.position.z = 135;
}

const render = () => {
  renderer.render(scene, camera);
}

const animate = () => {
  requestAnimationFrame( animate );
  controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
  render();
}

const cubeGeometry = new THREE.BoxGeometry(10, 5, 3);
const cubeMaterial = new THREE.MeshPhongMaterial({
  color: colorYellow,
  shininess: 40,
})
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

init();
animate();
render();

