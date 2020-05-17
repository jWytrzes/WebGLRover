import Structure from './Structure.js'

export default class Cuboid extends Structure {
    constructor(pos, w, h, d) {
        super();
        this.x = pos.x;
        this.y = pos.y;
        this.z = pos.z;
        this.width = w;
        this.height = h;
        this.depth = d;
        this.create();
    }

    create() {
        const cubeGeometry = new THREE.BoxGeometry(this.w, this.h, this.d);
        const cubeMaterial = new THREE.MeshPhongMaterial({
            color: new THREE.Color('hsl(40, 100%, 60%)'),
            shininess: 40,
        })
        const cuboid = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cuboid.position.x = this.x
        cuboid.position.y = this.y
        cuboid.position.z = this.z
        this.structure = cuboid
    }
}

