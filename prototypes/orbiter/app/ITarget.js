"use strict";
import context from 'context';

/**
 * @abstract
 * @property {Position2D} position
 * @property {boolean} hit
 * @property {boolean} entering
 * @property {boolean} leaving
 */
export default class ITarget {

    dispose() {}
    update() {}
    render() {}

    static set(config) {
        for(var handler of ITarget.targetSelectionChainOfResponsibility) {
            let target = handler(config);
            if(target) {
                context.target = target;
                return context.target;
            }
        }
    }

    static clear() {
        removeCurrentTarget();
    }
}

ITarget.targetSelectionChainOfResponsibility = [];

function removeCurrentTarget() {
    if (context.target) {
        context.target.dispose();
        context.target = null;
    }
}