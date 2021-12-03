import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";
import { Engine, Scene, FreeCamera, Color3, Color4, Vector3, HemisphericLight, Mesh, MeshBuilder, ArcRotateCamera, WebXRDefaultExperience, WebXRExperienceHelper } from "@babylonjs/core";




        const canvas = document.createElement('canvas');
        canvas.style.width = "99vw";
        canvas.style.height = "100vh";
        canvas.style.zIndex = "-20";
        canvas.id = "roomCanvas";
        document.body.appendChild(canvas);

        const engine = new Engine(canvas, true);


        const createScene = () : Scene => {

             const scene = new Scene(engine);
             scene.clearColor = new Color4(0,0,0);
        
        
            const camera: ArcRotateCamera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 3, 3, Vector3.Zero(), scene);
            camera.attachControl(canvas, true);
            // const camera: FreeCamera = new FreeCamera("camera1", new Vector3(0, 2, 0), scene)
            // camera.setTarget(Vector3.Zero());
            // camera.attachControl(canvas, true);

            const light1: HemisphericLight = new HemisphericLight('light1', new Vector3(1,1,0), scene);

            const box1: MeshBuilder =  MeshBuilder.CreateBox('box1', {width: 2, height: 2});
            
            const ground: Mesh = MeshBuilder.CreateGround('ground', {width: 4, height: 4});

            return scene;
        }     
          
            


            //DebugLayer
            window.addEventListener("keydown", (ev) => {
            
                if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.key === "i"){
                    scene.debugLayer.show();
                } else {
                    scene.debugLayer.hide();
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

