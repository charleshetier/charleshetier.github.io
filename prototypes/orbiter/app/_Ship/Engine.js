"use strict";
import context from 'context';
import * as smoke from './_Engine/smoke';
import * as lighting from './_Engine/lighting';
import * as flame from './_Engine/flame';

export default class Engine {
    /**
     *
     * @param {{ship: Ship}} config
     */
    constructor(config) {

        /**@private*/this._startSmoke = smoke.start.bind(this);
        /**@private*/this._stopSmoke = smoke.stop.bind(this);
        /**@private*/this._startLighting = lighting.start.bind(this);
        /**@private*/this._stopLighting = lighting.stop.bind(this);
        /**@private*/this._startFlame = flame.start.bind(this);
        /**@private*/this._stopFlame = flame.stop.bind(this);
        /**@private*/this._renderFlame = flame.render.bind(this);

        /**
         * Determines whether the engine is currently active
         * @type {boolean}
         */
        this.active = false;

        this.ship = config.ship;

        /**
         * The angle at which the engine is active
         * @type {number}
         */
        this.angle = 0;

        /** @namespace */
        this.BABYLON = {
            smoke: smoke.create.apply(this),
            lighting: lighting.create.apply(this),
            flame: flame.create.apply(this)
        };

        this.fuel = {
            capacity: 1000,
            value: 1000
        };
    }

    /**
     *
     * @param {{x:number, y:number}} at
     */
    start(at) {

        if(this.fuel.value > 0) {

            this.active = true;

            let cursorFromShip = new BABYLON.Vector2(at.x - window.innerWidth / 2, at.y - window.innerHeight / 2);
            let angle = Math.atan2(cursorFromShip.x, cursorFromShip.y) - Math.PI * 0.5;
            this.angle = angle;

            this._startFlame();
            this._startSmoke();
            this._startLighting();
        } else {
            context.api.say('Engine cannot start: The fuel tank is empty!');
        }
    }

    update() {
        if(this.active) {
            this.fuel.value = Math.max(0,this.fuel.value - 1);
        }

        if(this.active && this.fuel.value <= 0) {
            this.stop();
            context.api.say('Engine has stopped: The fuel tank is empty!');
        }
    }

    render() {
        this._renderFlame();
    }

    stop() {

        this.active = false;

        this._stopFlame();
        this._stopSmoke();
        this._stopLighting();
    }
}