import { Scene, Vector3, MeshBuilder, Mesh, } from "@babylonjs/core";
import { createColorMaterial } from "../materials/surfaceColor";

export const buildWalls = (scene: Scene) => {
    
    //Short wall
    const wallSmall: Mesh =  MeshBuilder.CreateBox('box1',{height: 200, width: 280, depth: 0.25}, scene);
    wallSmall.position = new Vector3(0, 100, -160)
    wallSmall.material = createColorMaterial(scene).wallColor;
    const instanceSmall = wallSmall.createInstance('instanceFifty');
    instanceSmall.position = new Vector3(0, 100, 160)
    
    //Long wall
    const wallBig: Mesh = MeshBuilder.CreateBox('wall2', {height: 200, width: 320, depth: 0.25}, scene);
    wallBig.position = new Vector3(-140, 100, 0);
    wallBig.rotation = new Vector3(0, Math.PI/2, 0)
    wallBig.material = createColorMaterial(scene).wallColor;
    const instanceBig = wallBig.createInstance('instanceSeventy');
    instanceBig.rotation = new Vector3(0, Math.PI/2, 0);
    instanceBig.position = new Vector3(140, 100, 0);

}