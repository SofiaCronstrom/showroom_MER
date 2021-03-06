import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";
import { Engine, Scene, Color3, Color4, Vector3, FreeCamera, DirectionalLight, SSAORenderingPipeline, ArcRotateCamera, ShadowGenerator} from "@babylonjs/core";
import { buildRoof } from "./meshes/roof";
import {buildRoom} from "./meshes/room";
import {buildSectionTwo} from "./meshes/sectionTwo"; 
import { buildStairs } from "./meshes/stair";


        const canvas = document.createElement('canvas');
        canvas.style.width = "99%";
        canvas.style.height = "100vh";
        //canvas.style.zIndex = "-20";
        canvas.id = "roomCanvas";
        document.body.appendChild(canvas);

        const engine = new Engine(canvas, true);


        const createScene = () : Scene => {

             const scene = new Scene(engine);
             scene.clearColor = new Color4(0.937,0.925,0.925);
             scene.ambientColor = new Color3(0.980, 0.976, 0.901);
        
            const camera: ArcRotateCamera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 90, Vector3.Zero(), scene);
           
            // const camera = new FreeCamera(
            //     "camera1",
            //     new Vector3(1, 4, 0),
            //     scene
            // );
            camera.attachControl(canvas, true);
            //const ssao = new SSAORenderingPipeline('ssaopipeline', scene, 0.75, [camera]);
           
            
            const light2: DirectionalLight = new DirectionalLight("light3", new Vector3(-1,-2,-1), scene)
            light2.direction = new Vector3(0.72, -0.21, -0.67);
            light2.intensity = 0.7


            buildRoom(scene);
            buildRoof(scene);

            // const shadow = new ShadowGenerator(2000, light2);
            // shadow.getShadowMap().renderList.push(
            buildSectionTwo(scene),
            buildStairs(scene)
            
            
            return scene;
        }     
          
        
         

            //DebugLayer
            // window.addEventListener("keydown", (ev) => {
            
            //     if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.key === "a"){
            //         if (scene.debugLayer.isVisible()) {
            //             scene.debugLayer.hide();
                       
            //         } else {
            //             scene.debugLayer.show();
                        
            //         }
            //     }
            // });
       
            //call createScene
            const scene: Scene = createScene();

            scene.debugLayer.show({
                embedMode: true,
              });
              
            //Render engine, resize window on render
            engine.runRenderLoop(() => {
                scene.render();
            });
    
            window.addEventListener("resize", function () {
                engine.resize();
        });

