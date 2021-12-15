import { StandardMaterial, Scene, Color3 } from "@babylonjs/core";

export const createColorMaterial = (scene: Scene) => {

    const roomColor = new StandardMaterial('roomColor', scene);
    roomColor.diffuseColor = new Color3(0.984, 0.988, 0.980);
    roomColor.emissiveColor = new Color3(0.039, 0.016, 0.137) 
    roomColor.ambientColor = new Color3(0.22,0.22,0.035)
    roomColor.specularColor = new Color3(0.973,0.973,0.973)

   
    return {
            
            roomColor
            
    };
}