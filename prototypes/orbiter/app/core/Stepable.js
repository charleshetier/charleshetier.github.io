"use strict";
import context from 'context';

/**
 * Implements an entity stepped for each frame of the game
 * @abstract
 */
export default class Stepable {

    constructor(config) {}

    dispose() {}

    /**
     * Invoked before instance state update.
     * This step is not supposed to increase the state of the current instance.
     */
    updating() {}

    /**
     * Invoked when Increase if the state of the current instance is required
     */
    update() {}

    /**
     * Invoked once the state the current instance has been increased.
     * This step is not supposed to increase the state of the current instance.
     */
    updated() {}

    /**
     * Invoked when the current instance should be prepared for rendering
     */
    render() {}
}