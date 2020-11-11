import context from 'context';

export default class Trail {
    /**
     *
     * @param {{satellite: Satellite}} config
     */
    constructor(config) {
        this.satellite = config.satellite;

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

    let particleHost = BABYLON.Mesh.CreateBox('satellite-trailParticleHost', 0.1, scene);
    particleHost.visibility = 0;
    particleHost.parent = this.satellite.BABYLON.mesh;
    particleHost.position.z = 0.15;

    let particleSystem = new BABYLON.ParticleSystem('satellite-trailParticleSystem', 700, scene);
    particleSystem.particleTexture = new BABYLON.Texture('data/objects/satellite/satellite-trail-particle.png', scene);
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
    particleSystem.emitter = particleHost;

    particleSystem.minEmitBox = new BABYLON.Vector3(0, 0, 0);
    particleSystem.maxEmitBox = new BABYLON.Vector3(0, 0, 0);
    particleSystem.emitRate = 300;

    const size = 0.04;
    particleSystem.maxSize = size;
    particleSystem.minSize = size;

    particleSystem.direction1 = new BABYLON.Vector3(0, 0, 0);
    particleSystem.direction2 = new BABYLON.Vector3(0, 0, 0);

    const lifeTime = 2;
    particleSystem.maxLifeTime = lifeTime;
    particleSystem.minLifeTime = lifeTime;

    return {
        particleSystem: particleSystem,
        host: particleHost
    };
}