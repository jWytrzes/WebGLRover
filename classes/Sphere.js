import Structure from "./Structure.js";
import Position from "./Position.js";

export default class Sphere extends Structure {
    constructor(radius, color = new THREE.Color('hsl(40, 100%, 60%)'), pos = new Position(0,0,0)) {
        super();
        this.x = pos.x;
        this.y = pos.y;
        this.z = pos.z;
        this.radius = radius
        this.color = color
    }

    create() {
        const geometry = new THREE.SphereGeometry( this.radius, 128, 128)
        const material = new THREE.MeshPhongMaterial({
            color: color,
            shininess: 40,
        })
        const sphere = new THREE.Mesh( geometry, material )
        sphere.position.set(this.x,this.y,this.z)
        this.structure = sphere;
    }
}