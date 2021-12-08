import { MeshBuilder, Scene, Mesh, Vector3 } from "@babylonjs/core";
import { createColorMaterial } from "../materials/surfaceColor";
export const buildCeiling = (scene: Scene) => {

    const plane: Mesh = MeshBuilder.CreatePlane("plane", {height:600, width: 1300, sideOrientation: Mesh.DOUBLESIDE}, scene);
    plane.position = new Vector3(-274.95, 497.32, 0);
    plane.rotation = new Vector3(Math.PI/2.7, Math.PI/2, 0)
    plane.material = createColorMaterial(scene).secondPlaneColor;

    const leftPlane = plane.createInstance('leftPlane');
    leftPlane.position = new Vector3(274.95, 497.32, 0);
    leftPlane.rotation = new Vector3(Math.PI/2.7, -Math.PI/2, 0)
}