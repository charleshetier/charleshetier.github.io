import context from 'context';

export default class Trail {
    /**
     *
     * @param {{ship: Ship}} config
     */
    constructor(config) {
        this.ship = config.ship;

        this.BABYLON = {
            trail: create.apply(this)
        };
    }

    start() {
        this.BABYLON.trail.particleSystem.start();
    }

    stop() {
        this.BABYLON.trail.particleSystem.stop();
    }

    update() {}

    render() {}

    dispose() {
        if(this.BABYLON.trail) {
            this.BABYLON.trail.particleSystem.dispose();
        }
    }
}

function create() {
    let scene = context.BABYLON.scene;

    let particleHost = BABYLON.Mesh.CreateBox('ship-trailParticleHost', 0.1, scene);
    particleHost.visibility = 0;
    particleHost.parent = this.ship.BABYLON.mesh;
    particleHost.position.z = 0.15;

    let particleSystem = new BABYLON.ParticleSystem('ship-trailParticleSystem', 2500, scene);
    particleSystem.particleTexture = new BABYLON.Texture('data/objects/ship/ship-trail-particle.png', scene);
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
    particleSystem.emitter = particleHost;

    particleSystem.minEmitBox = new BABYLON.Vector3(0, 0, 0);
    particleSystem.maxEmitBox = new BABYLON.Vector3(0, 0, 0);
    particleSystem.emitRate = 300;

    const size = 0.05;
    particleSystem.maxSize = size;
    particleSystem.minSize = size;

    particleSystem.direction1 = new BABYLON.Vector3(0, 0, 0);
    particleSystem.direction2 = new BABYLON.Vector3(0, 0, 0);

    const lifeTime = 6;
    particleSystem.maxLifeTime = lifeTime;
    particleSystem.minLifeTime = lifeTime;

    return {
        particleSystem: particleSystem,
        host: particleHost
    };
}