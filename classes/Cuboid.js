import Structure from './Structure.js'
import Position from './Position.js';
import Rotation from './Rotation.js';

export default class Cuboid extends Structure {
    constructor(w, h, d, pos = new Position(0,0,0), rot = new Rotation(0,0,0)) {
        super();
        this.x = pos.x;
        this.y = pos.y;
        this.z = pos.z;
        this.rotX = rot.x
        this.rotY = rot.y
        this.rotZ = rot.z
        this.width = w;
        this.height = h;
        this.depth = d;
        this.create();
    }

    create() {
        const cubeGeometry = new THREE.BoxGeometry(this.width, this.height, this.depth);
        const cubeMaterial = new THREE.MeshPhongMaterial({
            color: new THREE.Color('hsl(40, 100%, 60%)'),
            shininess: 40,
        })
        const cuboid = new THREE.Mesh(cubeGeometry, cubeMaterial);

        cuboid.position.x = this.x
        cuboid.position.y = this.y
        cuboid.position.z = this.z

        cuboid.rotation.x = this.rotX;
        cuboid.rotation.y = this.rotY;
        cuboid.rotation.z = this.rotZ;

        this.structure = cuboid
    }
}

