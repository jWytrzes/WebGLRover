import Structure from "./Structure.js";
import Position from "./Position.js";

export default class Sphere extends Structure {
    constructor(pos = new Position(0,0,0), radius) {
        super();
        this.x = pos.x;
        this.y = pos.y;
        this.z = pos.z;
        this.radius = radius
    }

    create() {
        const geometry = new THREE.SphereGeometry( this.radius, 128, 128)
        const material = new THREE.MeshPhongMaterial({
            color: new THREE.Color('hsl(40, 100%, 60%)'),
            shininess: 40,
        })
        const sphere = new THREE.Mesh( geometry, material )
        sphere.position.x = this.x;
        sphere.position.y = this.y;
        sphere.position.z = this.z;
        this.structure = sphere;
    }
}