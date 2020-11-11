import context from 'context';
import ITarget from './ITarget';

ITarget.targetSelectionChainOfResponsibility.push(setTarget);
function setTarget(config) {
    if(!config.position) return;

    ITarget.clear();
    return new TargetPoint(config.position);
}

export default class TargetPoint extends ITarget {
    /**
     *
     * @param {Position2D} position
     */
    constructor(position) {

        super();

        this._initialize = initialize.bind(this);
        this._start = start.bind(this);

        this.position = {
            x: position.x,
            y: position.y
        };

        /**
         * The distance from the ship
         * @type {number}
         */
        this.distance = 0;

        this._initialize();
        this._start();

        this.hit = false;
        this.entering = false;
        this.leaving = false;
    }

    dispose() {
        this.BABYLON.inner1.sprite.dispose();
        this.BABYLON.inner1.sprite = null;
        this.BABYLON.inner2.sprite.dispose();
        this.BABYLON.inner2.sprite = null;
        this.BABYLON.inner3.sprite.dispose();
        this.BABYLON.inner3.sprite = null;
        this.BABYLON.triangle.sprite.dispose();
        this.BABYLON.triangle.sprite = null;
        this.BABYLON.outer1.sprite.dispose();
        this.BABYLON.outer1.sprite = null;
        this.BABYLON.outer2.sprite.dispose();
        this.BABYLON.outer2.sprite =  null;
    }

    update() {
        var distanceSquared = BABYLON.Vector2.DistanceSquared(context.ship.position, this.position);

        let lastHit = this.hit;
        this.hit = distanceSquared < 0.08;
        this.entering = !lastHit && this.hit;
        this.leaving = lastHit && !this.hit;
    }

    render() {
        {
            let sprite = this.BABYLON.outer2.sprite;
            sprite.angle += 0.01;
        }

        {
            const from = 0;
            const to = 5;
            const threshold = 0.1;
            const velocityCoefTo = 0.02;
            const velocityCoefFrom = 0.05;
            let sprite = this.BABYLON.outer1.sprite;

            if (this.BABYLON.outer2.reverse) {
                sprite.angle += (to - sprite.angle) * velocityCoefTo;
                this.BABYLON.outer2.reverse = !(Math.abs(sprite.angle - to) < threshold);
            } else {
                sprite.angle += (from - sprite.angle) * velocityCoefFrom;
                this.BABYLON.outer2.reverse = (Math.abs(sprite.angle - from) < threshold);
            }
        }

        {
            let sprite = this.BABYLON.inner3.sprite;
            sprite.angle -= 0.02;
        }

        {
            let sprite = this.BABYLON.inner1.sprite;
            sprite.angle += 0.03;
        }
    }
}

/**
 * @this TargetPoint
 */
function start() {

    let position = this.position;

    {
        let sprite = new BABYLON.Sprite('targetPoint-outer1', this.BABYLON.outer1.spriteManager);
        sprite.position.x = position.x;
        sprite.position.y = position.y;
        this.BABYLON.outer1.sprite = sprite;
    }

    {
        let sprite = new BABYLON.Sprite('targetPoint-outer2', this.BABYLON.outer2.spriteManager);
        sprite.position.x = position.x;
        sprite.position.y = position.y;
        this.BABYLON.outer2.sprite = sprite;
    }

    {
        let sprite = new BABYLON.Sprite('targetPoint-inner1', this.BABYLON.inner1.spriteManager);
        sprite.position.x = position.x;
        sprite.position.y = position.y;
        this.BABYLON.inner1.sprite = sprite;
    }

    {
        let sprite = new BABYLON.Sprite('targetPoint-inner2', this.BABYLON.inner2.spriteManager);
        sprite.position.x = position.x;
        sprite.position.y = position.y;
        this.BABYLON.inner2.sprite = sprite;
    }

    {
        let sprite = new BABYLON.Sprite('targetPoint-inner3', this.BABYLON.inner3.spriteManager);
        sprite.position.x = position.x;
        sprite.position.y = position.y;
        this.BABYLON.inner3.sprite = sprite;
    }

    {
        let sprite = new BABYLON.Sprite('targetPoint-triangle', this.BABYLON.triangle.spriteManager);
        sprite.position.x = position.x;
        sprite.position.y = position.y;
        this.BABYLON.triangle.sprite = sprite;
    }
}

/**
 * Initializes the TargetPoint global behavior
 * @this TargetPoint
 */
function initialize() {
    const spriteLength = 335;

    if (!TargetPoint.initialized) {
        let scene = context.BABYLON.scene;

        TargetPoint.initialized = true;
        TargetPoint.BABYLON = {};

        TargetPoint.BABYLON.outer1 = {
            spriteManager: new BABYLON.SpriteManager('targetPoint-outer1', 'data/objects/targetPoint/outer-sprite1.png', spriteLength, spriteLength, scene),
            /** @type BABYLON.Sprite */
            sprite: null
        };
        TargetPoint.BABYLON.outer2 = {
            spriteManager: new BABYLON.SpriteManager('targetPoint-outer2', 'data/objects/targetPoint/outer-sprite2.png', spriteLength, spriteLength, scene),
            /** @type BABYLON.Sprite */
            sprite: null
        };
        TargetPoint.BABYLON.inner1 = {
            spriteManager: new BABYLON.SpriteManager('targetPoint-inner1', 'data/objects/targetPoint/inner-sprite1.png', spriteLength, spriteLength, scene),
            /** @type BABYLON.Sprite */
            sprite: null
        };
        TargetPoint.BABYLON.inner2 = {
            spriteManager: new BABYLON.SpriteManager('targetPoint-inner2', 'data/objects/targetPoint/inner-sprite2.png', spriteLength, spriteLength, scene),
            /** @type BABYLON.Sprite */
            sprite: null
        };
        TargetPoint.BABYLON.inner3 = {
            spriteManager: new BABYLON.SpriteManager('targetPoint-inner3', 'data/objects/targetPoint/inner-sprite3.png', spriteLength, spriteLength, scene),
            /** @type BABYLON.Sprite */
            sprite: null
        };
        TargetPoint.BABYLON.triangle = {
            spriteManager: new BABYLON.SpriteManager('targetPoint-triangle', 'data/objects/targetPoint/triangle-sprite.png', spriteLength, spriteLength, scene),
            /** @type BABYLON.Sprite */
            sprite: null
        };
    }

    this.BABYLON = TargetPoint.BABYLON;
}