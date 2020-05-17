import Structure from "./Structure.js";
import Position from "./Position.js";
import Rotation from "./Rotation.js";

export default class Cylinder extends Structure {
    constructor(pos = new Positionon(0,0,0), rot = new Rotation(0,0,0), radius, height) {
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
        cylinder.position.x = this.x;
        cylinder.position.y = this.y;
        cylinder.position.z = this.z;

        cylinder.rotation.x = this.rotX;
        cylinder.rotation.y = this.rotY;
        cylinder.rotation.z = this.rotZ;

        this.structure = cylinder;
    }
}