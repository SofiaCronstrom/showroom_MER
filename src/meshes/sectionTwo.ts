import { Scene, Vector3, MeshBuilder, Mesh, } from "@babylonjs/core";
import { createColorMaterial } from "../materials/surfaceColor";

export const buildSectionTwo = (scene: Scene) => {

    const secondPlane: Mesh = MeshBuilder.CreatePlane('secondPlane', {width: 560, height: 80, sideOrientation: Mesh.DOUBLESIDE}, scene); 
    secondPlane.position = new Vector3(0, 100, -280)
    secondPlane.rotation = new Vector3(Math.PI/2, 0, 0);
    secondPlane.material = createColorMaterial(scene).groundColor;
    const thirdPlane = secondPlane.createInstance('thirdPlane');
    thirdPlane.position = new Vector3(-240, 100, -110);
    thirdPlane.scaling = new Vector3(0.6,1,1); 
    thirdPlane.rotation = new Vector3(Math.PI/2, Math.PI/2, 0);
}