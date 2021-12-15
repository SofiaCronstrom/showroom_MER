import { Scene, Vector3, MeshBuilder, Mesh, } from "@babylonjs/core";
import { createColorMaterial } from "../materials/surfaceColor";

export const buildStairs = (scene: Scene) => {


    //stair meshes
    const stairPlane: Mesh = MeshBuilder.CreatePlane('stair1', {width: 200, height: 15, sideOrientation: Mesh.DOUBLESIDE}, scene); 
    stairPlane.position =  new Vector3 (-300, 139.5, -550);
    stairPlane.material = createColorMaterial(scene).roomColor;

    const stairInstance: Mesh = MeshBuilder.CreatePlane('stair1', {width: 150, height: 15, sideOrientation: Mesh.DOUBLESIDE}, scene); 
    stairInstance.rotation = new Vector3(Math.PI/2, 0, 0);
    stairInstance.position = new Vector3 (-300, 132, -542);

    const stairs = Mesh.MergeMeshes([stairPlane, stairInstance]);
    stairs.position = new Vector3(0,60,-67.6)

    //Position stair meshes
    let stairsArray = [];
    stairsArray.push([1, 0, 45, -52]);
    stairsArray.push([1, 0, 30, -37]);
    stairsArray.push([1, 0, 15, -22]);
    stairsArray.push([1, 0, 0, -7]);
    stairsArray.push([1, 0, -15, 8]);
    stairsArray.push([1, 0, -30, 23]);
    stairsArray.push([1, 0, -45, 38]);
    stairsArray.push([1, 0, -60, 53]);
    stairsArray.push([1, 0, -75, 68]);
    let stepsArray = []

    for (let i in stairsArray){
        (stairsArray[i][0] === 1) ? stepsArray[i] = stairs.clone('instanceStairs' + i) : false;
        
        stepsArray[i].position.x = stairsArray[i][1]
        stepsArray[i].position.y = stairsArray[i][2]
        stepsArray[i].position.z = stairsArray[i][3]

        
    }
    
    return {stairs};
}

