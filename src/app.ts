import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";
import { Engine, Scene, UniversalCamera, Color3, Color4, Vector3, HemisphericLight, Mesh, MeshBuilder, ArcRotateCamera, WebXRDefaultExperience, WebXRExperienceHelper, FreeCamera, PolygonMeshBuilder, DirectionalLight } from "@babylonjs/core";

import { buildWalls } from "./meshes/walls";
import { buildCeiling } from "./meshes/ceiling";
import { createColorMaterial } from "./materials/surfaceColor";


        const canvas = document.createElement('canvas');
        canvas.style.width = "99%";
        canvas.style.height = "100vh";
        //canvas.style.zIndex = "-20";
        canvas.id = "roomCanvas";
        document.body.appendChild(canvas);

        const engine = new Engine(canvas, true);


        const createScene = () : Scene => {

             const scene = new Scene(engine);
             scene.clearColor = new Color4(0.980, 0.976, 0.901);
        
        
            const camera: ArcRotateCamera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 90, Vector3.Zero(), scene);
           
            // const camera = new FreeCamera(
            //     "camera1",
            //     new Vector3(1, 4, 0),
            //     scene
            // );
            camera.attachControl(canvas, true);

            const light1: DirectionalLight = new DirectionalLight('light1', new Vector3(0.13,-0.4,0.91), scene);
            light1.diffuse = new Color3(1, 1, 1);
            light1.specular = new Color3(0.998, 0.998, 1);
            
            
            // const light2: DirectionalLight = new DirectionalLight('light2', new Vector3(0.07, 0.93,0.36), scene);
            // light1.diffuse = new Color3(1, 1, 1);
            // light1.specular = new Color3(0.998, 0.998, 1);
            

            
            
            const ground: Mesh = MeshBuilder.CreateGround('ground', {width: 1000, height: 1300});
            ground.material = createColorMaterial(scene).wallColor;
            
            buildWalls(scene);

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

