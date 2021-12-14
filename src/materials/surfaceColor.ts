import { StandardMaterial, Scene, Color3 } from "@babylonjs/core";

export const createColorMaterial = (scene: Scene) => {

    const roomColor = new StandardMaterial('roomColor', scene);
    roomColor.diffuseColor = new Color3(0.529, 0.529, 0.529);
    roomColor.emissiveColor = new Color3(0.627, 0.627, 0.627) 
    roomColor.ambientColor = new Color3(0.092,0.091,0.091)

    const groundColor: StandardMaterial = new StandardMaterial('groundColor', scene);
    groundColor.diffuseColor = new Color3(0.95, 0.95, 0.95);

    const secondPlaneColor: StandardMaterial = new StandardMaterial('groundColor', scene);
    secondPlaneColor.diffuseColor = new Color3(0.352, 0.262, 0.419);

    const stairColor: StandardMaterial = new StandardMaterial('stairColor', scene);
    stairColor.diffuseColor = new Color3(0.447, 0.627, 0.431);

    return {
            
            roomColor, 
            groundColor,
            secondPlaneColor,
            stairColor
    };
}