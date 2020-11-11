"use strict";
import context from 'context';
import * as normal from './_Hud/normal';
import * as target from './_Hud/target';

export default class Hud {
    /**
     *
     * @param {{ship: Ship}} config
     */
    constructor(config) {

        /**@private*/this._renderNormal = normal.render.bind(this);
        /**@private*/this._renderTarget = target.render.bind(this);
        /**@private*/this._updateTarget = target.update.bind(this);

        this.ship = config.ship;

        /** @namespace */
        this.BABYLON = {
            normal: normal.create.apply(this),
            target: target.create.apply(this)
        };
    }

    render() {
        this._renderNormal();
        this._renderTarget();
    }

    update() {
        this._updateTarget();
    }
}