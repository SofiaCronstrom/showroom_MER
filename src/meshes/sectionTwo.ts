import { Scene, Vector3, MeshBuilder, Mesh, } from "@babylonjs/core";
import { createColorMaterial } from "../materials/surfaceColor";
import { buildStairs } from "./stair";


export const buildSectionTwo = (scene: Scene) => {

    const secondPlane: Mesh = MeshBuilder.CreatePlane('secondPlane', {width: 560, height: 100, sideOrientation: Mesh.DOUBLESIDE}, scene); 
    secondPlane.position = new Vector3(-70, 147, -450)
    secondPlane.rotation = new Vector3(Math.PI/2, 0, 0);
    secondPlane.material = createColorMaterial(scene).secondPlaneColor;

    const thirdPlane = secondPlane.createInstance('thirdPlane');
    thirdPlane.position = new Vector3(-300, 147, -233);
    thirdPlane.scaling = new Vector3(0.6,1,1); 
    thirdPlane.rotation = new Vector3(Math.PI/2, Math.PI/2, 0);

    buildStairs(scene);
}