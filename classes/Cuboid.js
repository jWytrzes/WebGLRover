export default class Cuboid {
    constructor(pos, w, h, d) {
        this.x = pos.x;
        this.y = pos.y;
        this.z = pos.z;
        this.width = w;
        this.height = h;
        this.depth = d;
    }

    render() {
        const cubeGeometry = new THREE.BoxGeometry(this.w, this.h, this.d);
        const cubeMaterial = new THREE.MeshPhongMaterial({
            color: new THREE.Color('hsl(40, 100%, 60%)'),
            shininess: 40,
        })
        const cuboid = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cuboid.position.x = this.x
        cuboid.position.y = this.y
        cuboid.position.z = this.z
        return cuboid;
    }
}

