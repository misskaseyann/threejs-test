import {CylinderGeometry, MeshPhongMaterial, Mesh, Group, TorusGeometry} from 'three';

export default class Sake {
    constructor() {
        const baseGeo = new CylinderGeometry(20, 20, 20, 20, 20);
        const baseMat = new MeshPhongMaterial({color: 0x73ce7b});
        const base = new Mesh(baseGeo, baseMat);

        const sakeGroup = new Group();
        sakeGroup.add(base);

        const labelGeo = new CylinderGeometry(20, 20, 20, 20, 20);
        const labelMat = new MeshPhongMaterial({color: 0xefe2b6});
        const label = new Mesh(labelGeo, labelMat);

        label.translateY(20);
        sakeGroup.add(label);

        const topGeo = new CylinderGeometry(20, 20, 18, 20, 20);
        const topMat = new MeshPhongMaterial({color: 0x73ce7b});
        const top = new Mesh(topGeo, topMat);

        top.translateY(39);
        sakeGroup.add(top);

        const lipGeo = new CylinderGeometry(5, 20, 18, 20, 20);
        const lipMat = new MeshPhongMaterial({color: 0x73ce7b});
        const lip = new Mesh(lipGeo, lipMat);

        lip.translateY(57);
        sakeGroup.add(lip);

        const neckGeo = new CylinderGeometry(5, 5, 10, 20, 20);
        const neckMat = new MeshPhongMaterial({color: 0x73ce7b});
        const neck = new Mesh(neckGeo, neckMat);

        neck.translateY(70);
        sakeGroup.add(neck);

        const capGeo = new CylinderGeometry(7, 7, 7, 20, 20);
        const capMat = new MeshPhongMaterial({color: 0xefe2b6});
        const cap = new Mesh(capGeo, capMat);

        cap.translateY(76);
        sakeGroup.add(cap);

        return sakeGroup;
    }

    // constructor (numSpokes) { // number of spokes on the wheel
    //     const WHEEL_RADIUS = 200;
    //     const TIRE_THICKNESS = 20;
    //     const tubeGeo = new TorusGeometry (WHEEL_RADIUS, TIRE_THICKNESS, 6, 30);
    //     const tubeMat = new MeshPhongMaterial ({color: 0x82332a});
    //     const tube = new Mesh (tubeGeo, tubeMat);
    //
    //     const wheelGroup = new Group();
    //     wheelGroup.add (tube);  // place the torus in the group
    //
    //     for (let k = 0; k < numSpokes; k++) {
    //         const spGeo = new CylinderGeometry (0.7 * TIRE_THICKNESS, 0.7 * TIRE_THICKNESS,
    //             WHEEL_RADIUS, 10, 10);
    //         const spMat = new MeshPhongMaterial({color: 0x001199});
    //         const sp = new Mesh (spGeo, spMat);
    //         sp.rotateZ (k * 2 * Math.PI / numSpokes);
    //         sp.translateY (WHEEL_RADIUS / 2);
    //         wheelGroup.add (sp);   // place the cylinder in the group
    //     }
    //
    //     return wheelGroup;   // the constructor must return the entire group
    // }
}
