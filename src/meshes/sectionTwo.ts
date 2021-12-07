import { Scene, Vector3, MeshBuilder, Mesh, } from "@babylonjs/core";
import { createColorMaterial } from "../materials/surfaceColor";
import { buildStairs } from "./stair";


export const buildSectionTwo = (scene: Scene) => {

    const secondPlane: Mesh = MeshBuilder.CreatePlane('secondPlane', {width: 700, height: 100, sideOrientation: Mesh.DOUBLESIDE}, scene); 
    secondPlane.position = new Vector3(0, 147, -450)
    secondPlane.rotation = new Vector3(Math.PI/2, 0, 0);
    secondPlane.material = createColorMaterial(scene).secondPlaneColor;

    const rightPlane = secondPlane.createInstance('rightPlane');
    rightPlane.position = new Vector3(-300, 147, -233);
    rightPlane.scaling = new Vector3(0.6,1,1); 
    rightPlane.rotation = new Vector3(Math.PI/2, Math.PI/2, 0);

    const leftPlane = secondPlane.createInstance('leftPlane');
    leftPlane.position = new Vector3(300, 147, -233);
    leftPlane.scaling = new Vector3(0.6,1,1)
    leftPlane.rotation = new Vector3(Math.PI/2, Math.PI/2, 0);
    
    const quadrantPlane: Mesh = MeshBuilder.CreatePlane('quadrantPlane', {width: 200, height: 200, sideOrientation: Mesh.DOUBLESIDE}, scene);
    quadrantPlane.position = new Vector3(151, 147, -300);
    quadrantPlane.rotation = new Vector3(Math.PI/2, Math.PI/2, 0);
    quadrantPlane.material = createColorMaterial(scene).secondPlaneColor;
    buildStairs(scene);
}