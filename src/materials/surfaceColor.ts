import { StandardMaterial, Scene, Color3 } from "@babylonjs/core";

export const createColorMaterial = (scene: Scene) => {

    const wallColor: StandardMaterial = new StandardMaterial('wallColor', scene);
    wallColor.diffuseColor = new Color3(0.980, 0.980, 0.980);

    const groundColor: StandardMaterial = new StandardMaterial('groundColor', scene);
    groundColor.diffuseColor = new Color3(0.270, 0.270, 0.270);

    const secondPlaneColor: StandardMaterial = new StandardMaterial('groundColor', scene);
    secondPlaneColor.diffuseColor = new Color3(0.352, 0.262, 0.419);

    const stairColor: StandardMaterial = new StandardMaterial('stairColor', scene);
    stairColor.diffuseColor = new Color3(0.447, 0.627, 0.431);

    return {
            
            wallColor, 
            groundColor,
            secondPlaneColor,
            stairColor
    };
}