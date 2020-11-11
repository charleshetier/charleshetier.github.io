/**
 * @module system
 */

/**
 * @alias module:system.spawn
 * @return {*}
 */
export function spawn() { return Q.spawn.apply(this, arguments); }

/**
 * @alias module:system.async
 * @return {function(...): Q.Promise<T>}
 */
export function async() { return Q.async.apply(this, arguments); }

/**
 * Applies curry transformation to the specified function
 * @param {function} invocation The function invoke
 * @return {Function}
 */
export function curry(invocation) {
    return function () {
        let args = arguments;
        return function(target) {
            return invocation.apply(target, args);
        }
    };
}
