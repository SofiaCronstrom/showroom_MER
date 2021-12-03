import { MeshBuilder, Scene, Mesh, Vector3 } from "@babylonjs/core";

export const buildCeiling = (scene: Scene) => {

    const plane: Mesh = MeshBuilder.CreatePlane("plane", {height:280, width: 320, sideOrientation: Mesh.DOUBLESIDE}, scene);
    plane.position = new Vector3(0, 200, 0)
    plane.rotation = new Vector3(Math.PI/2, Math.PI/2, 0)
}