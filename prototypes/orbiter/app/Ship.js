import context from 'context';
import * as physic from 'physic';
import {async} from 'system';
import Engine from './_Ship/Engine';
import Hud from './_Ship/Hud';
import Future from './_Ship/Future';
import Trail from './_Ship/Trail';
import Explosion from './_Ship/Explosion';
import VerletObject from './core/VerletObject';

export default class Ship extends VerletObject {

    constructor(config) {
        super(config);

        if (context.debug) {
            window.addEventListener('keydown', (e) => {
                if (e.keyCode === 69) { // E
                    this.explode();
                }
            });
        }

        this.dead = false;
        this.crashing = false;

        /**
         * Determines whether another process handles update for next step
         * @type {boolean}
         */
        this.hooked = false;

        /**
         * @type Engine
         */
        this.engine = new Engine({ship: this});

        /**
         * @type Hud
         */
        this.hud = new Hud({ship: this});

        /**
         * @type Future
         */
        this.future = new Future({ship: this});

        this.trail = new Trail({ship: this});

        this.DOM = {
            /** @type HTMLElement */
            overlay: null
        };

    }

    /**
     *
     * @return Promise<Ship>
     */
    initializeAsync() {

        let overlay = document.createElement('DIV');
        this.DOM.overlay = overlay;
        overlay.style.position = 'absolute';
        overlay.style.left = 0;
        overlay.style.top = 0;
        overlay.style.width = 0;
        overlay.style.height = 0;
        //overlay.style.border = '1px white solid';
        context.DOM.overlay.appendChild(overlay);

        let stats = document.createElement('DIV');
        this.DOM.stats = stats;
        stats.style.position = 'absolute';
        stats.style.left = '40px';
        stats.style.bottom = '40px';
        stats.style.width = '70px';
        stats.className = 'info';
        overlay.appendChild(stats);

        let fuelContainer = document.createElement('DIV');
        fuelContainer.className='fuel';
        let fuelJauge = document.createElement('DIV');
        fuelJauge.className='indice';
        fuelContainer.appendChild(fuelJauge);
        this.DOM.fuel = {
            container: fuelContainer,
            jauge: fuelJauge
        };

        overlay.appendChild(fuelContainer);

        let scene = context.BABYLON.scene;
        let mesh = this.BABYLON.mesh;

        this.trail.start();

        return async(function* () {
            console.info(`Loading ship data...`);

            {
                let material = new BABYLON.StandardMaterial('material3', scene);
                material.diffuseTexture = new BABYLON.Texture('data/objects/ship/diffuse.png', scene);
                material.specularColor = new BABYLON.Color3(0, 0, 0);
                mesh.material = material;
            }

            yield new Promise(resolve => resolve());
            return this;
        }.bind(this))();
    }

    /**
     * Updates the ship
     * @this Ship
     */
    update() {
        super.update();

        if (this.crashing) {
            this.dead = true;
            return;
        }

        if (!this.hooked) {
            const engineStrengthCoef = 25;

            let planetStrengths = context.planets.map(planet => physic.gravity(planet)(this));
            let engineStrength = this.engine.active ? {
                x: -Math.cos(this.engine.angle) * engineStrengthCoef,
                y: -Math.sin(this.engine.angle) * engineStrengthCoef
            } : {x: 0, y: 0};

            let strengths = [engineStrength].concat(planetStrengths);

            physic.apply(strengths, context.stepRate)(this);
        }

        for (var planet of context.planets) {
            if (planet.hit(this)) {
                console.info(`The ship has collided with "${planet.id}":`);
                console.log(planet);
                this.explode();
                return;
            }
        }

        this.engine.update();
        this.hooked = false;
        this.hud.update();
        this.future.update();
        this.trail.update();
    }

    /**
     * Renders the ship
     */
    render() {
        super.render();

        let mesh = this.BABYLON.mesh;
        mesh.position.x = this.position.x;
        mesh.position.y = this.position.y;

        let projection = BABYLON.Vector3.Project(mesh.position,
            BABYLON.Matrix.Identity(),
            context.BABYLON.scene.getTransformMatrix(),
            context.BABYLON.camera.viewport.toGlobal(context.BABYLON.engine));
        let overlay = this.DOM.overlay;
        overlay.style.left = projection.x.toFixed(1) + 'px';
        overlay.style.top = projection.y.toFixed(1) + 'px';

        let stats = this.DOM.stats;
        stats.innerHTML =
            `<div>x: ${this.position.x.toFixed(2)}</div>
            <div>y: ${this.position.y.toFixed(2)}</div>
            <div>target: ${context.target ? 'yes' : 'no'}</div>`;

        this.DOM.fuel.jauge.style.width = `${this.engine.fuel.value*100 / this.engine.fuel.capacity}%`;

        this.engine.render();
        this.hud.render();
        this.future.render();
        this.trail.render();
    }

    /**
     * Makes the current ship instance exploding
     */
    explode() {
        this.crashing = true;
        console.debug('exploding...');
        this.dead = true;
        this.BABYLON.mesh.visibility = 0;
        new Explosion(this.position);
    }

    /**
     * Sets the engine of the current ship instance on
     */
    startEngine(at) {
        this.engine.start(at);
    }

    /**
     * Sets the engine of the current ship instance off
     */
    stopEngine() {
        this.engine.stop();
    }

    /**
     * Adds a step fuel to the engine.
     * @returns {boolean} true if the refueling has completed.
     */
    refuel() {
        let newValue = this.engine.fuel.value + 2;
        this.engine.fuel.value = Math.min(newValue, this.engine.fuel.capacity);
        return newValue === this.engine.fuel.capacity;
    }
}