"use strict";
import context from 'context';

/**
 * @this {Hud}
 */
export function render() {
    this.BABYLON.normal.sprite.position.x = this.ship.position.x;
    this.BABYLON.normal.sprite.position.y = this.ship.position.y;

    let lastPosition = this.ship.last.position;
    let nextPosition = this.ship.position;
    let angle = Math.atan2(lastPosition.y - nextPosition.y ,lastPosition.x - nextPosition.x) + Math.PI;

    this.BABYLON.normal.sprite.angle = angle;
}

/**
 * @this {Hud}
 * @return {{spriteManager: BABYLON.SpriteManager, sprite: BABYLON.Sprite}}
 */
export function create() {
    let scene = context.BABYLON.scene;
    let spriteManager = new BABYLON.SpriteManager('ship-hudNormalSpriteManager', 'data/objects/ship/hud-normal-sprite.png', 140, 140, scene);
    let sprite = new BABYLON.Sprite('ship-hudNormal', spriteManager);
    return {
        spriteManager: spriteManager,
        sprite: sprite
    };
}