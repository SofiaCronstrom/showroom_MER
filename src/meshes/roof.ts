import "@babylonjs/loaders/glTF";
import {Scene, Vector3, SceneLoader } from "@babylonjs/core";
import { createColorMaterial } from "../materials/surfaceColor";

export const buildRoof =  (scene: Scene) => {

    SceneLoader.ImportMesh('','../assets/', 'roof.gltf', scene, (getMeshes) => {
    const roof = getMeshes[0];
    roof.scaling = new Vector3(1.5,1.28,1.38)
    const roof1 = getMeshes[0].getChildMeshes()[0];
    roof1.material = createColorMaterial(scene).roomColor
    }) 
}