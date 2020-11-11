"use strict";
import {async} from 'system';
import * as provider from './provider';
import context from 'context';
import VerletObject from './core/VerletObject';

export default class Planet extends VerletObject {

    /**
     * Initializes a new instance of Planet
     * @param {{mesh: BABYLON.Mesh, metadata: Array<PlanetInfo>}} config
     */
    constructor(config) {
        super(config);

        let mesh = config.mesh;
        this.id = mesh.name;
        this.BABYLON = {mesh: mesh};

        /**
         * Determines whether the current planet instance has atmosphere
         * @type boolean
         */
        this.atmosphere = !![for (info of config.metadata) if(info.atmosphere) info].length;

        /**
         * Determines whether the current planet is taken into account in physics
         * @type {boolean}
         */
        this.isActive = mesh.position.z === 0;

        /**
         * The radius of the current Planet
         * @type number
         * */
        this.radius = undefined;
    }

    /**
     *
     * @return Promise<Planet>
     */
    initializeAsync() {

        let scene = context.BABYLON.scene;

        return async(function* () {
            console.info(`Loading planet [${this.id}] data...`);
            let metadata = yield provider.getObjectMetadata(this.id);

            if(this.atmosphere) {
                //let particles = create.apply(this);
                //particles.particleSystem.start();
            }

            if (!metadata) throw `No metadata found for planet id ${this.id}}`;
            else if (!metadata.radius) console.warn(`No radius found in metadata for planet id ${this.id}}`);

            this.radius = metadata.radius;


            let material = new BABYLON.StandardMaterial(`${this.id}_material`, scene);
            material.emissiveTexture = new BABYLON.Texture(`data/objects/${this.id}/diffuse.png`, scene);
            material.diffuseColor = new BABYLON.Color3(0, 0, 0);
            material.specularColor = new BABYLON.Color3(0, 0, 0);

            this.BABYLON.mesh.material = material;

            return this;
        }.bind(this))();
    }

    update() {
        super.update();
    }

    render() {
        super.render();
    }

    /**
     * Determines whether the body has hit the current planet instance
     * @param {VerletObject} body
     */
    hit(body) {
        let centerDistance = BABYLON.Vector2.Distance(body.position, this.position);
        return centerDistance < this.radius;
    }
}

Planet.nameRegex = /^planet[^\.]*/;

function create() {
    let scene = context.BABYLON.scene;

    let particleHost = BABYLON.Mesh.CreateBox('planet-atmosphereHost', 0.1, scene);
    particleHost.visibility = 0;
    particleHost.parent = this.BABYLON.mesh;
    particleHost.position.z = 0.15;

    let particleSystem = new BABYLON.ParticleSystem('planet-atmosphere', 7, scene);
    particleSystem.particleTexture = new BABYLON.Texture(`data/objects/${this.id}/atmosphere.png`, scene);
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
    particleSystem.emitter = particleHost;

    particleSystem.minEmitBox = new BABYLON.Vector3(0, 0, 0);
    particleSystem.maxEmitBox = new BABYLON.Vector3(0, 0, 0);
    particleSystem.emitRate = 1;

    const size = 6;
    particleSystem.maxSize = size + 1;
    particleSystem.minSize = size;

    particleSystem.direction1 = new BABYLON.Vector3(0, 0, 0);
    particleSystem.direction2 = new BABYLON.Vector3(0, 0, 0);

    particleSystem.minAngularSpeed = -1;
    particleSystem.maxAngularSpeed = 1;

    const lifeTime = 7;
    particleSystem.maxLifeTime = lifeTime;
    particleSystem.minLifeTime = lifeTime;

    return {
        particleSystem: particleSystem,
        host: particleHost
    };
}