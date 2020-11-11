"use strict";
import context from 'context';

/**
 * @this {Engine}
 */
export function start() {
    const distance = 0.2;

    let x = Math.cos(this.angle) * distance;
    let y = Math.sin(this.angle) * distance;

    this.BABYLON.smoke.host.position.x = x;
    this.BABYLON.smoke.host.position.y = y;
    this.BABYLON.smoke.host.position.z = 0.5;
    this.BABYLON.smoke.host.rotation.z = this.angle - Math.PI * 0.5;

    this.BABYLON.smoke.particleSystem.start();
}

/**
 * @this {Engine}
 */
export function stop() {
    this.BABYLON.smoke.particleSystem.stop();
}

/**
 *
 * @this {Engine}
 * @return {{particleSystem: BABYLON.ParticleSystem, host:BABYLON.Mesh}}
 */
export function create() {
    let scene = context.BABYLON.scene;

    let smokeParticleHost = BABYLON.Mesh.CreateBox('ship-engineSmokeParticleHost', 0.1, scene);
    smokeParticleHost.parent = this.ship.BABYLON.mesh;
    smokeParticleHost.position.y = 0.5;
    smokeParticleHost.visibility = 0;

    let particleSystem = new BABYLON.ParticleSystem('ship-engineSmokeParticleSystem', 2000, scene);
    particleSystem.particleTexture = new BABYLON.Texture('data/objects/ship/smoke-particle.png', scene);
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
    particleSystem.emitter = smokeParticleHost;

    particleSystem.minEmitBox = new BABYLON.Vector3(-0.05, 0, 0);
    particleSystem.maxEmitBox = new BABYLON.Vector3(0.05, 0, 0);
    particleSystem.emitRate = 40;

    particleSystem.maxSize = 0.5;
    particleSystem.minSize = 0.2;

    particleSystem.maxLifeTime = 0.1;
    particleSystem.minLifeTime = 0.5;

    particleSystem.minEmitPower = 3;
    particleSystem.maxEmitPower = 2;

    return {
        particleSystem: particleSystem,
        host: smokeParticleHost
    };
}