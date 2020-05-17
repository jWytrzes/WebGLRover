class View {
  constructor(){
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 74, window.innerWidth/window.innerHeight, 0.1, 1000 );

    this.renderer = new THREE.WebGLRenderer({antialias: true});
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( this.renderer.domElement );

    const geometry = new THREE.BoxGeometry(10, 5, 3);
    const light = new THREE.PointLight(this.colorLight, 1.5);
    light.position.set(-40, -20, 20);
    const light2 = new THREE.AmbientLight( 0x707070 ); // soft white light
    light2.position.set(40, 20, 10);

    const material = new THREE.MeshPhongMaterial({
      color: this.colorYellow,
      shininess: 40,
    })

    this.cube = new THREE.Mesh( geometry, material );

    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.minDistance = 100;
    this.controls.maxDistance = 500;
    this.controls.maxPolarAngle = Math.PI / 2;

    this.scene.add( this.cube );
    this.scene.add( light );
    this.scene.add( light2 );

    this.camera.position.x = 0;
    this.camera.position.z = 0;
    this.camera.position.z = 135;

    this.animate()
    this.render()
  }

  animate() {
    requestAnimationFrame( () => this.animate() );
    this.controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
    this.render();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  colorYellow = new THREE.Color("hsl(40, 100%, 60%)");
  colorLight = new THREE.Color("hsl(40, 100%, 95%)");


}