import context from 'context';
import ITarget from './ITarget';

ITarget.targetSelectionChainOfResponsibility.push(setTarget);
function setTarget(config) {
    if(!config.planet) return;

    ITarget.clear();
    return new TargetOrbit(config.planet);
}

export default class TargetOrbit extends ITarget {
    /**
     *
     * @param {Planet} planet
     */
    constructor(planet) {

        super();

        this._initialize = initialize.bind(this);
        this._start = start.bind(this);

        this.position = {
            x: planet.position.x,
            y: planet.position.y
        };

        /**
         * The targeted planet
         * @type {Planet}
         */
        this.planet = planet;

        /**
         * The size applied to the sprite
         * @type {number}
         */
        this.size = planet.radius * 3 + 4;

        this._initialize();
        this._start();

        this.hit = false;
        this.entering = false;
        this.leaving = false;
    }

    dispose() {
        this.BABYLON.circle.sprite.dispose();
    }

    update() {

        let planetPosition = this.planet.position;
        let shipPosition = context.ship.position;
        let distanceSquared = BABYLON.Vector2.DistanceSquared(planetPosition, shipPosition);

        //let maxSquaredDistance = 0;
        //let minSquaredDistance = 10000000;

        //for(var shipPosition of context.ship.future.positions) {
        //    let squaredDistance = BABYLON.Vector2.DistanceSquared(planetPosition, shipPosition);
        //    if(maxSquaredDistance < squaredDistance) maxSquaredDistance = squaredDistance;
        //    if(minSquaredDistance > squaredDistance) minSquaredDistance = squaredDistance;
        //}

        //let distanceSquaredDiff = maxSquaredDistance - minSquaredDistance;

        let intoOrbit = distanceSquared < this.planet.radius * this.planet.radius * 4; // &&distanceSquaredDiff < 10;

        this.entering = intoOrbit && !this.hit;
        this.leaving = !intoOrbit && this.hit;
        this.hit = intoOrbit;
    }

    render() {

        if(this.BABYLON.circle.sprite) {

            let sprite = this.BABYLON.circle.sprite;
            sprite.angle += 0.001;
        }
    }
}

/**
 * @this TargetOrbit
 */
function start() {
    let position = this.position;

    {
        let sprite = new BABYLON.Sprite('targetOrbit-circle', this.BABYLON.circle.spriteManager);
        sprite.position.x = position.x;
        sprite.position.y = position.y;
        sprite.size = this.size;
        this.BABYLON.circle.sprite = sprite;
    }
}

/**
 * Initializes the TargetPoint global behavior
 * @this TargetOrbit
 */
function initialize() {
    const spriteLength = 1024;

    if (!TargetOrbit.initialized) {
        let scene = context.BABYLON.scene;

        TargetOrbit.initialized = true;
        TargetOrbit.BABYLON = {};

        TargetOrbit.BABYLON.circle = {
            spriteManager: new BABYLON.SpriteManager('targetOrbit-circle', 'data/objects/targetOrbit/circle-sprite.png', spriteLength, spriteLength, scene),
            /** @type BABYLON.Sprite */
            sprite: null
        };
    }

    this.BABYLON = TargetOrbit.BABYLON;
}