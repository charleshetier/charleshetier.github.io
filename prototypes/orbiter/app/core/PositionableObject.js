"use strict";
import context from 'context';
import Stepable from './Stepable'

/**
 * @abstract
 */
export default class PositionableObject extends Stepable {

    constructor(config) {

        super(config);

        this.BABYLON = {};
        if(config && config.mesh) this.BABYLON.mesh = config.mesh;

        /**
         * The distance from the ship
         * @type {number}
         */
        this.distance = 0;

        this.position = (config && config.mesh)
            ? {x: config.mesh.position.x, y: config.mesh.position.y}
            : {x: 0, y: 0};
    }

    updating() {
        this.distance = BABYLON.Vector2.Distance(this.position, context.ship.position);
        super.updating();
    }

    updated() {
        this.distance = BABYLON.Vector2.Distance(this.position, context.ship.position);
        super.updated();
    }
}