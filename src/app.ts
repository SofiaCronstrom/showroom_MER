import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";
import { Engine, Scene, UniversalCamera, Color3, Color4, Vector3, HemisphericLight, Mesh, MeshBuilder, ArcRotateCamera, WebXRDefaultExperience, WebXRExperienceHelper, FreeCamera, PolygonMeshBuilder, DirectionalLight, ShadowGenerator, SceneLoader, StandardMaterial, CascadedShadowGenerator } from "@babylonjs/core";
import {buildSectionTwo} from "./meshes/sectionTwo"; 
import { buildStairs } from "./meshes/stair";
import { buildRoof } from "./meshes/roof";
import { createColorMaterial } from "./materials/surfaceColor";
//import { buildWalls } from "./meshes/walls";


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

            // const light1: HemisphericLight = new HemisphericLight('light1', new Vector3(-1, -2, 0), scene);
            // light1.diffuse = new Color3(0.996,0.996,1);
            // light1.groundColor = new Color3(0,0,0)
            // light1.intensity = 0.8

            const light1: DirectionalLight = new DirectionalLight('light2', new Vector3(1,2,1), scene)
            light1.direction = new Vector3(-0.27, -0.95, 0.18);
            
            const light2: DirectionalLight = new DirectionalLight("light3", new Vector3(-1,-2,-1), scene)
            light2.direction = new Vector3(0.86, 0.12, -0.49);

            SceneLoader.ImportMesh("", "./assets/", "museum-walls.gltf", scene, (getMeshes) => {
             const room = getMeshes[0];
             room.scaling = new Vector3(1.23,1.28,1.08)
             const roomSurface = getMeshes[0].getChildMeshes()[0];
             roomSurface.material = createColorMaterial(scene).roomColor; 
             const shadow = new CascadedShadowGenerator(1024, light2);
             shadow.getShadowMap().renderList.push(buildSectionTwo(scene).secondSection, buildStairs(scene).stairs );
            //  shadow.useBlurExponentialShadowMap = true;
            //  shadow.useKernelBlur = true;
            //  shadow.blurKernel = 84;
             roomSurface.receiveShadows = true
            });

           

            //buildRoof(scene);
            buildSectionTwo(scene);
            buildStairs(scene);
            
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

