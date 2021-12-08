import { Scene, Vector3, MeshBuilder, Mesh, VertexData} from "@babylonjs/core";
import { createColorMaterial } from "../materials/surfaceColor";
import {buildSectionTwo} from "./sectionTwo"; 
import { buildCeiling } from "./ceiling";
export const buildWalls = (scene: Scene) => {
    
    //Short wall
    const wallSmall: Mesh =  MeshBuilder.CreateBox('wall1',{height: 400, width: 1000, depth: 0.25}, scene);
    wallSmall.position = new Vector3(0, 200, -650)
    wallSmall.material = createColorMaterial(scene).wallColor;
    // const instanceSmall = wallSmall.createInstance('instance1');
    // instanceSmall.position = new Vector3(0, 100, 320)
    
    //Long wall
    const wallBig: Mesh = MeshBuilder.CreateBox('wall2', {height: 400, width: 1300, depth: 0.25}, scene);
    wallBig.position = new Vector3(-500, 200, 0);
    wallBig.rotation = new Vector3(0, Math.PI/2, 0)
    wallBig.material = createColorMaterial(scene).wallColor;
    const instanceBig = wallBig.createInstance('instance2');
    instanceBig.rotation = new Vector3(0, Math.PI/2, 0);
    instanceBig.position = new Vector3(500, 200, 0);

    const triangleWall: Mesh = MeshBuilder.CreateDisc('tringleWall', {tessellation: 3, radius: 995, sideOrientation: Mesh.DOUBLESIDE}) 
    triangleWall.rotation = new Vector3(0, 0,Math.PI/2);
    triangleWall.scaling = new Vector3(0.15,0.59,0.02);
    triangleWall.position = new Vector3(0, 474, -650)   
    

    
    buildCeiling(scene);
    buildSectionTwo(scene);
    
}