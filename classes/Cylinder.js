import Structure from "./Structure.js";
import Position from "./Position.js";
import Rotation from "./Rotation.js";

export default class Cylinder extends Structure {
    constructor(radius, height, color = new THREE.Color('hsl(40, 100%, 60%)'), pos = new Positionon(0,0,0), rot = new Rotation(0,0,0)) {
        super();
        this.x = pos.x;
        this.y = pos.y;
        this.z = pos.z;
        this.rotX = rot.x
        this.rotY = rot.y
        this.rotZ = rot.z
        this.radius = radius;
        this.height = height;
    }

    create() {
        const geometry = new THREE.CylinderGeometry( this.radius, this.radius, this.height, 128)
        const material = new THREE.MeshPhongMaterial({
            color: new THREE.Color('hsl(40, 100%, 60%)'),
            shininess: 40,
        })
        const cylinder = new THREE.Mesh( geometry, material )

        cylinder.position.set(this.x,this.y,this.z)
        cylinder.rotation.set(this.rotX, this.rotY, this.rotZ)

        this.structure = cylinder;
    }
}