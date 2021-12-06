import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";
import { Engine, Scene, UniversalCamera, Color3, Color4, Vector3, HemisphericLight, Mesh, MeshBuilder, ArcRotateCamera, WebXRDefaultExperience, WebXRExperienceHelper, FreeCamera } from "@babylonjs/core";

import { buildWalls } from "./meshes/walls";
import { buildCeiling } from "./meshes/ceiling";
import { createColorMaterial } from "./materials/surfaceColor";


        const canvas = document.createElement('canvas');
        canvas.style.width = "99%";
        canvas.style.height = "100vh";
        canvas.style.zIndex = "-20";
        canvas.id = "roomCanvas";
        document.body.appendChild(canvas);

        const engine = new Engine(canvas, true);


        const createScene = () : Scene => {

             const scene = new Scene(engine);
             scene.clearColor = new Color4(0,0,0);
        
        
            const camera: ArcRotateCamera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 3, 90, Vector3.Zero(), scene);
           
            // const camera = new FreeCamera(
            //     "camera1",
            //     new Vector3(1, 1.8, 0),
            //     scene
            // );
            camera.attachControl(canvas, true);

            const light1: HemisphericLight = new HemisphericLight('light1', new Vector3(0,1,0.5), scene);
            light1.diffuse = new Color3(0.980, 0.956, 0.898);
            light1.specular = new Color3(0.980, 0.956, 0.898);
            light1.groundColor = new Color3(0.270, 0.270, 0.270)
            //buildCeiling(scene);
            buildWalls(scene);
            
            const ground: Mesh = MeshBuilder.CreateGround('ground', {width: 560, height: 640});
            ground.material = createColorMaterial(scene).groundColor;

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

