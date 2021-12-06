import { Scene, Vector3, MeshBuilder, Mesh, } from "@babylonjs/core";
import { createColorMaterial } from "../materials/surfaceColor";

export const buildStairs = (scene: Scene) => {

    const stairPlane: Mesh = MeshBuilder.CreatePlane('stair1', {width: 100, height: 30, sideOrientation: Mesh.DOUBLESIDE}, scene); 
    stairPlane.position = new Vector3(-149, 85, -239)
    stairPlane.material = createColorMaterial(scene).stairColor;

    const stairInstance: Mesh = MeshBuilder.CreatePlane('stair1', {width: 100, height: 30, sideOrientation: Mesh.DOUBLESIDE}, scene); 
    stairInstance.rotation = new Vector3(Math.PI/2, 0, 0);
    stairInstance.position = new Vector3 (-149, 70, -225);

    const stairs = Mesh.MergeMeshes([stairPlane, stairInstance]);
    
    

}

// const stairArray = () => {

//  let stairs = [];
//  stairs.push([-149, 55, -195]);
//  stairs.push([-119, 25, -165]);
//  stairs.push([-89, -5, -135]);

//  for (const value of stairs){
//      console.log(value);
//  }
// }