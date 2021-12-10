import { MeshBuilder, Scene, Mesh, Vector3 } from "@babylonjs/core";
import { createColorMaterial } from "../materials/surfaceColor";


export const buildCeiling = (scene: Scene) => {
    
    //right ceiling piece
    const plane: Mesh = MeshBuilder.CreatePlane("ceilingRight", {height:600, width: 260, sideOrientation: Mesh.DOUBLESIDE}, scene);
    plane.position = new Vector3(-274.95, 497.32, 0);
    plane.rotation = new Vector3(Math.PI/2.7, Math.PI/2, 0)
    plane.material = createColorMaterial(scene).wallColor;

    //Left ceiling piece
    const leftPlane: Mesh = MeshBuilder.CreatePlane("ceilingLeft", {height:600, width: 260, sideOrientation: Mesh.DOUBLESIDE}, scene); 
    leftPlane.position = new Vector3(274.95, 497.32, 0);
    leftPlane.rotation = new Vector3(Math.PI/2.7, -Math.PI/2, 0)

    //Array of positions
    let ceilingPlace: any[] = [];
    
    ceilingPlace.push([1, -274.95, 497.32, 520.8]);
    ceilingPlace.push([1, -274.95, 497.32, -520.8]);
    ceilingPlace.push([2, 274.95, 497.32, -520.8]);
    ceilingPlace.push([2, 274.95, 497.32, 520.8]);
   
   //placing ceiling pieces at positions
    let ceilingPiece: any[] = [];
    for (let i in ceilingPlace){

        (ceilingPlace[i][0] === 1) ? ceilingPiece[i] = plane.createInstance('ceilingPiece' + i) :  ceilingPiece[i] = leftPlane.createInstance('ceilingPieceLeft' + i); 
       
         ceilingPiece[i].position.x = ceilingPlace[i][1];
        ceilingPiece[i].position.y = ceilingPlace[i][2];
        ceilingPiece[i].position.z = ceilingPlace[i][3];
    }

    //thin ceiling piece

    const thinRight: Mesh = MeshBuilder.CreatePlane('thinCeiling', {width: 1300, height: 50, sideOrientation: Mesh.DOUBLESIDE});
    thinRight.position = new Vector3(-24.95, 605.16, 0);
    thinRight.rotation = new Vector3(Math.PI/2.7, Math.PI/2, 0);
    
    const thinLeft = thinRight.createInstance('thinLeft');
    thinLeft.rotation = new Vector3(Math.PI/2.7, -Math.PI/2, 0);
    thinLeft.position = new Vector3(18.23, 606.46, 0)
    
}