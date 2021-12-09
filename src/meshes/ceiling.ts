import { MeshBuilder, Scene, Mesh, Vector3 } from "@babylonjs/core";
import { createColorMaterial } from "../materials/surfaceColor";


export const buildCeiling = (scene: Scene) => {
    
    //right ceiling piece
    const plane: Mesh = MeshBuilder.CreatePlane("ceilingRight", {height:600, width: 260, sideOrientation: Mesh.DOUBLESIDE}, scene);
    plane.position = new Vector3(-274.95, 497.32, 0);
    plane.rotation = new Vector3(Math.PI/2.7, Math.PI/2, 0)
    plane.material = createColorMaterial(scene).wallColor;

    const thinPlane = plane.createInstance('thinPlane');

    //Left ceiling piece
    const leftPlane: Mesh = MeshBuilder.CreatePlane("ceilingLeft", {height:600, width: 260, sideOrientation: Mesh.DOUBLESIDE}, scene); 
    leftPlane.position = new Vector3(274.95, 497.32, 0);
    leftPlane.rotation = new Vector3(Math.PI/2.7, -Math.PI/2, 0)

    //Array of positions
    let ceilingPlace = [];
    ceilingPlace.push([1, -274.95, 497.32, 520.8]);
    ceilingPlace.push([1, -274.95, 497.32, -520.8]);
    ceilingPlace.push([2, 274.95, 497.32, -520.8]);
    ceilingPlace.push([2, 274.95, 497.32, 520.8]);
   
   //placing ceiling pieces at positions
    let ceilingPiece = []
    for (let i=0; i<ceilingPlace.length; i++){

        if (ceilingPlace[i][0] === 1){
          ceilingPiece[i] = plane.createInstance('ceilingPiece' + i);
        } else if(ceilingPlace[i][0] === 2) { 
           ceilingPiece[i] = leftPlane.createInstance('ceilingPieceLeft' + i);
        }
        
        ceilingPiece[i].position.x = ceilingPlace[i][1];
        ceilingPiece[i].position.y = ceilingPlace[i][2];
        ceilingPiece[i].position.z = ceilingPlace[i][3];
    }

    
}