"use strict";
import context from 'context';

/**
 * @this {Engine}
 */
export function start() {
    const distance = 0.2;

    let x = Math.cos(this.angle) * distance;
    let y = Math.sin(this.angle) * distance;

    this.BABYLON.lighting.main.position.x = x;
    this.BABYLON.lighting.main.position.y = y;
    this.BABYLON.lighting.main.position.z = -0.15;

    this.BABYLON.lighting.main.setEnabled(true);
}

/**
 * @this {Engine}
 */
export function stop() {
    this.BABYLON.lighting.main.setEnabled(false);
}

/**
 *
 * @this {Engine}
 * @return {{main: BABYLON.PointLight}}
 */
export function create() {
    let scene = context.BABYLON.scene;

    let powerLight = new BABYLON.PointLight('ship-engineLight', new BABYLON.Vector3(), scene);
    powerLight.parent = this.ship.BABYLON.mesh;
    powerLight.intensity = 2;
    powerLight.range = 2.5;
    powerLight.diffuse = new BABYLON.Color3(1, 0.3, 0.1);
    powerLight.setEnabled(false);

    return {main: powerLight};
}