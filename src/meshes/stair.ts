import { Scene, Vector3, MeshBuilder, Mesh, } from "@babylonjs/core";
import { createColorMaterial } from "../materials/surfaceColor";

export const buildStairs = (scene: Scene) => {

    const stairPlane: Mesh = MeshBuilder.CreatePlane('stair1', {width: 200, height: 15, sideOrientation: Mesh.DOUBLESIDE}, scene); 
    stairPlane.position =  new Vector3 (-300, 139.5, -550);
    stairPlane.material = createColorMaterial(scene).stairColor;

    const stairInstance: Mesh = MeshBuilder.CreatePlane('stair1', {width: 150, height: 15, sideOrientation: Mesh.DOUBLESIDE}, scene); 
    stairInstance.rotation = new Vector3(Math.PI/2, 0, 0);
    stairInstance.position = new Vector3 (-300, 132, -542);

    const stairs = Mesh.MergeMeshes([stairPlane, stairInstance]);
    


    let stairsArray = [];
    stairsArray.push([1, 0, -15, 15]);
    stairsArray.push([1, 0, -30, 30]);
    stairsArray.push([1, 0, -45, 45]);
    stairsArray.push([1, 0, -60, 60]);
    stairsArray.push([1, 0, -75, 75]);
    stairsArray.push([1, 0, -90, 90]);
    stairsArray.push([1, 0, -105, 105]);
    stairsArray.push([1, 0, -120, 120]);
    stairsArray.push([1, 0, -135, 135]);
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

