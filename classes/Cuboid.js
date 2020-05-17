class Cuboid {
    constructor() {
        const cubeGeometry = new THREE.BoxGeometry(10, 5, 3);
            const cubeMaterial = new THREE.MeshPhongMaterial({
            color: colorYellow,
            shininess: 40,
        })
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    }
    cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
}

