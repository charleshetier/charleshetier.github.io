"use strict";
import context from 'context';

/**
 * @this {Hud}
 */
export function render() {
    if(this.BABYLON.target.sprite) {
        this.BABYLON.target.sprite.position.x = this.ship.position.x;
        this.BABYLON.target.sprite.position.y = this.ship.position.y;

        let shipPosition = this.ship.position;
        let targetPosition = context.target.position;
        let angle = Math.atan2(shipPosition.y - targetPosition.y, shipPosition.x - targetPosition.x) - Math.PI * 0.5;

        this.BABYLON.target.sprite.angle = angle;
    }
}

/**
 * @this {Hud}
 */
export function update() {
    let isActive = !!this.BABYLON.target.sprite;
    if(isActive) {
        if(!context.target) stop.apply(this);
    } else{
        if(context.target) start.apply(this);
    }
}

/**
 * @this {Hud}
 * @return {{spriteManager: BABYLON.SpriteManager, sprite: BABYLON.Sprite}}
 */
export function create() {
    let scene = context.BABYLON.scene;
    let spriteManager = new BABYLON.SpriteManager('ship-hudTargetSpriteManager', 'data/objects/ship/hud-target-sprite.png', 140, 140, scene);
    return {
        spriteManager: spriteManager,
        sprite: null
    };
}

/**
 * @this {Hud}
 */
export function start() {
    if(this.BABYLON.target.sprite) this.BABYLON.target.sprite.dispose();

    let spriteManager = this.BABYLON.target.spriteManager;
    let sprite = new BABYLON.Sprite('ship-hudTarget', spriteManager);
    this.BABYLON.target.sprite = sprite;
}

/**
 * @this {Hud}
 */
export function stop() {
    if(this.BABYLON.target.sprite) {
        this.BABYLON.target.sprite.dispose();
        this.BABYLON.sprite = null;
    }
}