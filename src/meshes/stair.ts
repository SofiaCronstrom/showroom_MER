import { Scene, Vector3, MeshBuilder, Mesh, } from "@babylonjs/core";
import { createColorMaterial } from "../materials/surfaceColor";

export const buildStairs = (scene: Scene) => {

    const stairPlane: Mesh = MeshBuilder.CreatePlane('stair1', {width: 100, height: 15, sideOrientation: Mesh.DOUBLESIDE}, scene); 
    stairPlane.position =  new Vector3 (-149, 93, -240);
    stairPlane.material = createColorMaterial(scene).stairColor;

    const stairInstance: Mesh = MeshBuilder.CreatePlane('stair1', {width: 100, height: 15, sideOrientation: Mesh.DOUBLESIDE}, scene); 
    stairInstance.rotation = new Vector3(Math.PI/2, 0, 0);
    stairInstance.position = new Vector3 (-149, 88, -225);

    const stairs = Mesh.MergeMeshes([stairPlane, stairInstance]);
    


    let stairsArray = [];
    stairsArray.push([1, 0, -14, 30]);
    stairsArray.push([1, 0, -28, 60]);
    stairsArray.push([1, 0, -40, 90]);
    stairsArray.push([1, 0, -54, 120]);
    stairsArray.push([1, 0, -68, 150]);
    let stepsArray = []

    for (let i = 0; i<stairsArray.length; i++){
        if (stairsArray[i][0] === 1){
        stepsArray[i] = stairs.createInstance('instanceStairs' + i);
        } else{
            return;
        }
        stepsArray[i].position.x = stairsArray[i][1]
        stepsArray[i].position.y = stairsArray[i][2]
        stepsArray[i].position.z = stairsArray[i][3]

        
    }
    

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