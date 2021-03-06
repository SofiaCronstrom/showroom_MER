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
    stairs.position = new Vector3(0, -41.11, 243.97);

    //Position stair meshes
    let stairsArray = [];
    stairsArray.push([1, 0, 204.828, -90]);
    stairsArray.push([1, 0, 169.521, -40]);
    stairsArray.push([1, 0, 134.2, 0]);
    stairsArray.push([1, 0, 98.9, 40]);
    stairsArray.push([1, 0, 63.6, 90]);
    stairsArray.push([1, 0, 28.3, 140]);
    stairsArray.push([1, 0, -7, 190]);
    stairsArray.push([1, 0, -73.79, 297.61 ]);
    stairsArray.push([1, 0, -101.08, 354.27]);
    let stepsArray = []

    for (let i in stairsArray){
        (stairsArray[i][0] === 1) ? stepsArray[i] = stairs.clone('instanceStairs' + i) : false;
        
        stepsArray[i].position.x = stairsArray[i][1]
        stepsArray[i].position.y = stairsArray[i][2]
        stepsArray[i].position.z = stairsArray[i][3]

        
    }
    
   
}

