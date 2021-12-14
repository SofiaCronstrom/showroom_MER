import "@babylonjs/loaders/glTF";
import { Engine, Scene, UniversalCamera, Color3, Color4, Vector3, HemisphericLight, Mesh, MeshBuilder, ArcRotateCamera, WebXRDefaultExperience, WebXRExperienceHelper, FreeCamera, PolygonMeshBuilder, DirectionalLight, ShadowGenerator, SceneLoader } from "@babylonjs/core";

export const buildRoof =  (scene: Scene) => {

    SceneLoader.ImportMesh('','./assets/', 'roof.gltf', scene, (getMeshes) => {
    const roof = getMeshes[0];
    roof.scaling = new Vector3(1.23,1.28,1.08)
    }) 
}