"use strict";
import context from 'context';

/**
 *
 * @this {Engine}
 */
export function start() {

    if (this.BABYLON.flame.sprite) {
        this.BABYLON.flame.sprite.dispose();
    }

    let flameSprite = new BABYLON.Sprite('ship-engineFlame', this.BABYLON.flame.spriteManager);
    flameSprite.size = 0.27;
    this.BABYLON.flame.sprite = flameSprite;
    flameSprite.angle = this.angle - Math.PI * 0.5;
}

/**
 *
 * @this {Engine}
 */
export function stop() {
    if (this.BABYLON.flame.sprite) {
        this.BABYLON.flame.sprite.dispose();
        this.BABYLON.flame.sprite = null;
    }
}

/**
 *
 * @this {Engine}
 */
export function render() {
    const distance = 0.25;
    let x = Math.cos(this.angle) * distance;
    let y = Math.sin(this.angle) * distance;

    if (this.active) {
        let sprite = this.BABYLON.flame.sprite;
        sprite.position.x = x + this.ship.position.x;
        sprite.position.y = y + this.ship.position.y;
        sprite.position.z = 0;
    }
}

/**
 *
 * @this {Engine}
 * @return {{spriteManager: BABYLON.SpriteManager, sprite: BABYLON.Sprite}}
 */
export function create() {
    let scene = context.BABYLON.scene;
    let flameSpriteManager = new BABYLON.SpriteManager('ship-engineFlameSpriteManager', 'data/objects/ship/flame-sprite.png', 10, 100, scene);
    return {
        spriteManager: flameSpriteManager,
        sprite: null
    };
}