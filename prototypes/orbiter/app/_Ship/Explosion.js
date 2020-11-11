import context from 'context';

export default class Explosion {

    /**
     *
     * @param {Position2D} position
     */
    constructor(position) {
        this.BABYLON = {core: create()};
        this.BABYLON.core.host.position.x = position.x;
        this.BABYLON.core.host.position.y = position.y;
        this.BABYLON.core.host.position.z = -0.5;
        this.BABYLON.core.particleSystem.start();
    }
}

function create() {
    let scene = context.BABYLON.scene;

    let particleHost = BABYLON.Mesh.CreateBox('ship-explosionCoreParticleHost', 0.1, scene);
    particleHost.visibility = 0;

    let particleSystem = new BABYLON.ParticleSystem('ship-explosionCoreParticleSystem', 2000, scene);
    particleSystem.particleTexture = new BABYLON.Texture('data/objects/ship/explosion-core-particle.png', scene);
    //particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
    particleSystem.emitter = particleHost;
    //particleSystem.manualEmitCount = 2000;
    particleSystem.targetStopDuration = 0.1;

    const boxLength = 0.4;
    particleSystem.minEmitBox = new BABYLON.Vector3(-boxLength, -boxLength, 0);
    particleSystem.maxEmitBox = new BABYLON.Vector3(boxLength, boxLength, 0);
    particleSystem.emitRate = 500;
    //
    particleSystem.maxSize = 3;
    particleSystem.minSize = 1;

    const velocity = 1;
    particleSystem.direction1 = new BABYLON.Vector3(velocity,velocity,0);
    particleSystem.direction2 = new BABYLON.Vector3(-velocity,-velocity,0);

    particleSystem.minAngularSpeed = 1;
    particleSystem.maxAngularSpeed = 2;

    //
    particleSystem.maxLifeTime = 2;
    particleSystem.minLifeTime = 0.5;
    //
    //particleSystem.minEmitPower = 0.01;
    //particleSystem.maxEmitPower = 0.05;

    return {
        particleSystem: particleSystem,
        host: particleHost
    };
}