import { Scene, Vector3, MeshBuilder, Mesh, } from "@babylonjs/core";
import { createColorMaterial } from "../materials/surfaceColor";

export const buildStairs = (scene: Scene) => {


    //stair meshes
    const stairPlane: Mesh = MeshBuilder.CreatePlane('stair1', {width: 200, height: 15, sideOrientation: Mesh.DOUBLESIDE}, scene); 
    stairPlane.position =  new Vector3 (-300, 139.5, -510);
    stairPlane.material = createColorMaterial(scene).stairColor;

    const stairInstance: Mesh = MeshBuilder.CreatePlane('stair1', {width: 300, height: 20, sideOrientation: Mesh.DOUBLESIDE}, scene); 
    stairInstance.rotation = new Vector3(Math.PI/2, 0, 0);
    stairInstance.position = new Vector3 (-300, 132, -500);
    

    const stairs = Mesh.MergeMeshes([stairPlane, stairInstance]);
    stairs.position = new Vector3(0,60,-335.53)

    //Position stair meshes
    let stairsArray = [];
    stairsArray.push([1, 0, 45, -315.53]);
    stairsArray.push([1, 0, 30, -295.53]);
    stairsArray.push([1, 0, 15, -275.53]);
    stairsArray.push([1, 0, 0, -255.53]);
    stairsArray.push([1, 0, -15, -235.53]);
    stairsArray.push([1, 0, -30, -215.53]);
    stairsArray.push([1, 0, -45, -195.53]);
    stairsArray.push([1, 0, -60, -175.53]);
    stairsArray.push([1, 0, -75, -155.53]);
    let stepsArray = []

    for (let i in stairsArray){
        (stairsArray[i][0] === 1) ? stepsArray[i] = stairs.clone('instanceStairs' + i) : false;
        
        stepsArray[i].position.x = stairsArray[i][1]
        stepsArray[i].position.y = stairsArray[i][2]
        stepsArray[i].position.z = stairsArray[i][3]

        
    }
    
    return {stairs};
}

