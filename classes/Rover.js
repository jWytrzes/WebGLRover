export default class Rover extends Structure {
    constructor(color = new THREE.Color('hsl(40, 100%, 60%)'), pos = new Position(0,0,0), rot = new Rotation(0,0,0)) {
        super();
        this.x = pos.x;
        this.y = pos.y;
        this.z = pos.z;
        this.rotX = rot.x
        this.rotY = rot.y
        this.rotZ = rot.z
        this.create();
    }

    create() {
        const cubeGeometry = new THREE.BoxGeometry(this.width, this.height, this.depth);
        const cubeMaterial = new THREE.MeshPhongMaterial({
            color: new THREE.Color('hsl(40, 100%, 60%)'),
            shininess: 40,
        })
        const cuboid = new THREE.Mesh(cubeGeometry, cubeMaterial);

        rover.position.set(this.x,this.y,this.z)
        rover.rotation.set(this.rotX, this.rotY, this.rotZ)

        this.structure = cuboid
    }
}