import { Scene, Vector3, MeshBuilder, Mesh} from "@babylonjs/core";


export const buildWalls = (scene: Scene) => {
    
    //Short wall
    const wallSmall: Mesh =  MeshBuilder.CreateBox('box1',{height: 200, width: 280, depth: 0.25}, scene);
    wallSmall.position = new Vector3(0, 100, -160)
    const instanceSmall = wallSmall.createInstance('instanceFifty');
    instanceSmall.position = new Vector3(0, 100, 160)
    
    //Long wall
    const wallSeventy: Mesh = MeshBuilder.CreateBox('wall2', {height: 200, width: 320, depth: 0.25}, scene);
    wallSeventy.position = new Vector3(-140, 100, 0);
    wallSeventy.rotation = new Vector3(0, Math.PI/2, 0)
    const instanceSeventy = wallSeventy.createInstance('instanceSeventy');
    instanceSeventy.rotation = new Vector3(0, -Math.PI/2, 0);
    instanceSeventy.position = new Vector3(140, 100, 0);

}