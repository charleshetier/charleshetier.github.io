"use strict";
import context from 'context';
import PositionableObject from './PositionableObject';

/**
 * @abstract
 */
export default class VerletObject extends PositionableObject {

    constructor(config) {
        super(config);

        this.mass = config ? (config.mass || 0) : 0;

        this.last = {
            position: config && config.velocity
                ? { x: (this.position.x - config.velocity .x * context.stepRate),
                    y: (this.position.y - config.velocity .y * context.stepRate) }
                : { x: this.position.x, y: this.position.y }
        };
    }

    updating() {
        this._x = this.position.x;
        this._y = this.position.y;
        super.updating();
    }

    updated() {
        super.updated();
        this.last.position.x = this._x;
        this.last.position.y = this._y;
    }
}