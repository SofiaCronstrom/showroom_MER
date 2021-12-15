import { Scene, Vector3, MeshBuilder, Mesh, } from "@babylonjs/core";
import { createColorMaterial } from "../materials/surfaceColor";
import { buildStairs } from "./stair";


export const buildSectionTwo = (scene: Scene) => {
    

    //Meshes for the second plane
    const secondPlane: Mesh = MeshBuilder.CreatePlane('secondPlane', {width: 1300, height: 200, sideOrientation: Mesh.DOUBLESIDE}, scene); 
    secondPlane.position = new Vector3(0, 147, -600)
    secondPlane.rotation = new Vector3(Math.PI/2, 0, 0);
    //secondPlane.material = createColorMaterial(scene).roomColor;

    const rightPlane = secondPlane.clone('rightPlane');
    rightPlane.position = new Vector3(-550, 147, -404);
    rightPlane.scaling = new Vector3(0.3,1,1); 
    rightPlane.rotation = new Vector3(Math.PI/2, Math.PI/2, 0);

    const leftPlane = secondPlane.clone('leftPlane');
    leftPlane.position = new Vector3(550, 147, -153);
    leftPlane.scaling = new Vector3(0.8,1,3)
    leftPlane.rotation = new Vector3(Math.PI/2, Math.PI/2, 0);
    
    const quadrantPlane: Mesh = MeshBuilder.CreatePlane('quadrantPlane', {width: 500, height: 500, sideOrientation: Mesh.DOUBLESIDE}, scene);
    quadrantPlane.position = new Vector3(200, 147, -450);
    quadrantPlane.rotation = new Vector3(Math.PI/2, Math.PI/2, 0);
    //quadrantPlane.material = createColorMaterial(scene).roomColor;

    
    const secondSection = Mesh.MergeMeshes([ secondPlane, quadrantPlane, rightPlane, leftPlane])
    secondSection.scaling = new Vector3(0.96,1,1)
    secondSection.position = new Vector3(0,0,-117.848)

    return {secondSection};
}