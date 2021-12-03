import { StandardMaterial, Scene, Color3 } from "@babylonjs/core";

export const createColorMaterial = (scene: Scene) => {

    const wallColor: StandardMaterial = new StandardMaterial('wallColor', scene);
    wallColor.diffuseColor = new Color3(0.913, 0.870, 0.866);

    const groundColor: StandardMaterial = new StandardMaterial('groundColor', scene);
    groundColor.diffuseColor = new Color3(0.270, 0.270, 0.270)

    return {wallColor, groundColor};
}