import {curry} from 'system';

export const apply = curry(applyStrengths);
export const gravity = curry(computeGravityStength);

/**
 * @typedef Object Position2D
 * @property x:Number
 * @property y:Number
 */

/**
 * @typedef Object Strength
 * @property x:Number
 * @property y:Number
 */

/**
 * @typedef Object VerletObject
 * @property {Position2D} position
 * @property {{position: Position2D}} last
 * @property mass: Number
 */

/**
 * Applies the specified strengths to the current verlet object
 * @param {Array<Strength>} strengths
 * @param {number} stepRate
 * @this {VerletObject}
 */
function applyStrengths(strengths, stepRate/* = context.stepRate*/) {

    let velocity = {
        x: (this.position.x - this.last.position.x) / stepRate,
        y: (this.position.y - this.last.position.y) / stepRate
    };

    let acceleration = {x: 0, y: 0};

    for (var strength of strengths) {
        acceleration.x += strength.x / this.mass;
        acceleration.y += strength.y / this.mass;
    }

    let newVelocity = {
        x: velocity.x + acceleration.x*stepRate,
        y: velocity.y + acceleration.y*stepRate
    };

    this.position.x += newVelocity.x * stepRate;
    this.position.y += newVelocity.y * stepRate;
}

/**
 * Computes the gravity strength for the specified planet
 * @param {Planet} planet
 * @this {VerletObject}
 * @return {Strength}
 */
function computeGravityStength(planet) {
    let re = planet.radius * 15;

    let distance = BABYLON.Vector2.Distance(this.position, planet.position);
    let angle = Math.atan2(this.position.x  - planet.position.x, this.position.y - planet.position.y);
    let gravityStrengthNormal = computeGravityStrengthValue(distance, re) * this.mass;
    let strength = {
        x: -gravityStrengthNormal * Math.sin(angle),
        y: -gravityStrengthNormal * Math.cos(angle)
    };

    return strength;
}

function computeGravityStrengthValue(distance, re) {
    return re / (re + distance * distance * distance * distance);
}

/**
 * Computes the orbital velocity for the specified planet
 * @param {Planet} planet
 * @this {VerletObject}
 * @return {Position2D}
 */
function getOrbitalVelocity(planet) {

    let gravityStrength = computeGravityStength.apply(this, [planet]);


}