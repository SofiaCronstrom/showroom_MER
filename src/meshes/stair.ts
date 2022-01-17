import { Scene, Vector3, MeshBuilder, Mesh } from "@babylonjs/core";
import { createColorMaterial } from "../materials/surfaceColor";

export const buildStairs = (scene: Scene) => {


    //stair meshes
    const stairPlane: Mesh = MeshBuilder.CreatePlane('stair1', {width: 200, height: 30, sideOrientation: Mesh.DOUBLESIDE}, scene); 
    stairPlane.position =  new Vector3 (-300, 130, -525);
    stairPlane.material = createColorMaterial(scene).stairColor;

    const stairInstance: Mesh = MeshBuilder.CreatePlane('stair1', {width: 300, height: 50, sideOrientation: Mesh.DOUBLESIDE}, scene); 
    stairInstance.rotation = new Vector3(Math.PI/2, 0, 0);
    stairInstance.position = new Vector3 (-300, 110, -500);
    

    const stairs = Mesh.MergeMeshes([stairPlane, stairInstance]);
   

    //Position stair meshes
    let stairsArray = [];
    stairsArray.push([1, 0, 157.85, -90]);
    stairsArray.push([1, 0, 117.75, -40]);
    stairsArray.push([1, 0, 78.15, 0]);
    stairsArray.push([1, 0, 38.25, 40]);
    stairsArray.push([1, 0, -0.38, 90]);
    stairsArray.push([1, 0, -39.88, 140]);
    stairsArray.push([1, 0, -79.56, 190]);
    //stairsArray.push([1, 0, -119.78, 200]);
    //stairsArray.push([1, 0, -158.94, 240]);
    let stepsArray = []

    for (let i in stairsArray){
        (stairsArray[i][0] === 1) ? stepsArray[i] = stairs.clone('instanceStairs' + i) : false;
        
        stepsArray[i].position.x = stairsArray[i][1]
        stepsArray[i].position.y = stairsArray[i][2]
        stepsArray[i].position.z = stairsArray[i][3]

        
    }
    
   
}

