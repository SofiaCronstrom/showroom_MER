import { Scene, Vector3, MeshBuilder, Mesh, DirectionalLight, ShadowGenerator} from "@babylonjs/core";

import {buildSectionTwo} from "./sectionTwo"; 
import { buildCeiling } from "./ceiling";
import { buildStairs } from "./stair";

export const buildWalls = (scene: Scene) => {

    buildCeiling(scene);
    buildSectionTwo(scene);
    
    //Short wall
    const wallSmall: Mesh =  MeshBuilder.CreateBox('wall1',{height: 400, width: 1000, depth: 0.25}, scene);
    wallSmall.position = new Vector3(0, 200, -650)
    
    // const instanceSmall = wallSmall.createInstance('instance1');
    // instanceSmall.position = new Vector3(0, 100, 320)
    
    //Long wall
    const wallBig: Mesh = MeshBuilder.CreateBox('wall2', {height: 400, width: 1300, depth: 0.25}, scene);
    wallBig.position = new Vector3(-500, 200, 0);
    wallBig.rotation = new Vector3(0, Math.PI/2, 0)
    

    const instanceBig = wallBig.clone('instance2');
    instanceBig.rotation = new Vector3(0, Math.PI/2, 0);
    instanceBig.position = new Vector3(500, 200, 0);

    const triangleWall: Mesh = MeshBuilder.CreateDisc('tringleWall', {tessellation: 3, radius: 995, sideOrientation: Mesh.DOUBLESIDE}) 
    triangleWall.rotation = new Vector3(0, 0,Math.PI/2);
    triangleWall.scaling = new Vector3(0.15,0.59,0.02);
    triangleWall.position = new Vector3(0, 474, -650)   

    const walls = Mesh.MergeMeshes([wallBig, wallSmall, triangleWall, instanceBig])
    

    const ground: Mesh = MeshBuilder.CreateGround('ground', {width: 1000, height: 1300});
    

    const light2: DirectionalLight = new DirectionalLight('light2', new Vector3(-0.03,-0.66,-0.75), scene);
    const shadow: ShadowGenerator = new ShadowGenerator(1024, light2) 
    shadow.getShadowMap().renderList.push(buildStairs(scene).stairs, buildSectionTwo(scene).secondSection);
            walls.receiveShadows = true;
            ground.receiveShadows = true;
            

    
    
    
}