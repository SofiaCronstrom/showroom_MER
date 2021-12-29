import "@babylonjs/loaders/glTF";
import {SceneLoader, Vector3, ShadowGenerator, Scene, PointLight, MeshBuilder, Mesh } from "@babylonjs/core";
import {buildSectionTwo} from "./sectionTwo"; 
import { buildStairs } from "./stair";
import { createColorMaterial } from "../materials/surfaceColor";


export const buildRoom = (scene: Scene) => {

    const light1 = new PointLight("spot02", new Vector3(476.92, 1167.96, 1329.6),
    scene);
   light1.intensity = 0.5;
/*"./assets/", "museum-walls.gltf"*/
    SceneLoader.ImportMesh("","https://drive.google.com/file/", "", scene, (getMeshes) => {
    const room = getMeshes[0];
    room.scaling = new Vector3(1.5,1.28,1.38)
    const roomSurface = getMeshes[0].getChildMeshes()[0];
    roomSurface.material = createColorMaterial(scene).roomColor; 

    const shadow = new ShadowGenerator(2000, light1);
    shadow.getShadowMap().renderList.push(
        buildSectionTwo(scene).secondSection, 
        buildStairs(scene).stairs
    );
    });

    const windowLeft: Mesh = MeshBuilder.CreatePlane('windowLeft', {width: 1700, height: 300, sideOrientation: Mesh.DOUBLESIDE}); 
    windowLeft.rotation = new Vector3(0, Math.PI/2, 0);
    windowLeft.position = new Vector3(765.97, 566.026, 99.25)
    windowLeft.material = createColorMaterial(scene).windowColor;

    const windowRight = windowLeft.createInstance('windowRight');
    windowRight.position = new Vector3(-765.97, 566.026, 99.25);
    windowRight.rotation = new Vector3(0, -Math.PI/2, 0);
}