import { Scene, Vector3, MeshBuilder, Mesh, } from "@babylonjs/core";


export const buildSectionTwo = (scene: Scene) => {

    const secondPlane: Mesh = MeshBuilder.CreatePlane('secondPlane', {width: 560, height: 60, sideOrientation: Mesh.DOUBLESIDE}, scene); 
    secondPlane.position = new Vector3(0, 100, -290)
    secondPlane.rotation = new Vector3(Math.PI/2, 0, 0);

    const thirdPlane: Mesh = MeshBuilder.CreatePlane('thirdPlane', {width: 260, height: 60, sideOrientation: Mesh.DOUBLESIDE}, scene);
    thirdPlane.position = new Vector3(-250, 100, -130);
    thirdPlane.rotation = new Vector3(Math.PI/2, Math.PI/2, 0);
}