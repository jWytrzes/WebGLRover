import Structure from "./Structure.js"

export default class Rock extends Structure {
    constructor(color = new THREE.Color('hsl(40, 100%, 60%)'), pos) {
        super()
        this.x = pos.x;
        this.y = pos.y;
        this.z = pos.z;
    }

    create() {
        const geometry = new THREE.Geometry();
        for(let i = 0; i < 10; i++) {
            geometry.vertices.push(
                new THREE.Vector3(Math.sin(x)*Math.cos(x))
            )
        }
        for(let i = 0; i < 10; i++) {
            geometry.faces.push(
                new THREE.Face3(i%10, i%10+2, i%10+4)
            )
        }
    }
}