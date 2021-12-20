import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";
import { Engine, Scene, Color3, Color4, Vector3, FreeCamera, DirectionalLight, SSAORenderingPipeline, ArcRotateCamera} from "@babylonjs/core";
import { buildRoof } from "./meshes/roof";
import {buildRoom} from "./meshes/room";



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

           
            
            const light2: DirectionalLight = new DirectionalLight("light3", new Vector3(-1,-2,-1), scene)
            light2.direction = new Vector3(0.72, -0.21, -0.67);
            light2.intensity = 0.7

            // const ssaoRatio = {
            //     ssaoRatio: 0.5, // Ratio of the SSAO post-process, in a lower resolution
            //     combineRatio: 1.0 // Ratio of the combine post-process (combines the SSAO and the scene)
            // };
            // const ssao = new SSAORenderingPipeline("ssao", scene, ssaoRatio);
            // ssao.fallOff = 0.000001;
            // ssao.area = 0.5;
            // ssao.radius = 0.0001;
            // ssao.totalStrength = 1.0;
            // ssao.base = 0.5;

            // scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline("ssao", camera);

            buildRoom(scene);
            //buildRoof(scene);
           
            
            return scene;
        }     
          
            


            //DebugLayer
            window.addEventListener("keydown", (ev) => {
            
                if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.code === 'KeyA'){
                    if (scene.debugLayer.isVisible()) {
                        scene.debugLayer.hide();
                       
                    } else {
                        scene.debugLayer.show();
                        
                    }
                }
            });
       
            //call createScene
            const scene: Scene = createScene();


            //Render engine, resize window on render
            engine.runRenderLoop(() => {
                scene.render();
            });
    
            window.addEventListener("resize", function () {
                engine.resize();
        });

