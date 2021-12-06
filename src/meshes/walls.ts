import { Scene, Vector3, MeshBuilder, Mesh, } from "@babylonjs/core";
import { createColorMaterial } from "../materials/surfaceColor";
import {buildSectionTwo} from "./sectionTwo"; 

export const buildWalls = (scene: Scene) => {
    
    //Short wall
    const wallSmall: Mesh =  MeshBuilder.CreateBox('wall1',{height: 200, width: 560, depth: 0.25}, scene);
    wallSmall.position = new Vector3(0, 100, -320)
    wallSmall.material = createColorMaterial(scene).wallColor;
    // const instanceSmall = wallSmall.createInstance('instance1');
    // instanceSmall.position = new Vector3(0, 100, 320)
    
    //Long wall
    const wallBig: Mesh = MeshBuilder.CreateBox('wall2', {height: 200, width: 640, depth: 0.25}, scene);
    wallBig.position = new Vector3(-280, 100, 0);
    wallBig.rotation = new Vector3(0, Math.PI/2, 0)
    wallBig.material = createColorMaterial(scene).wallColor;
    const instanceBig = wallBig.createInstance('instance2');
    instanceBig.rotation = new Vector3(0, Math.PI/2, 0);
    instanceBig.position = new Vector3(280, 100, 0);

    buildSectionTwo(scene);

}