
/**
 * Object that can be incremented each step iteration
 * @interface
 * @name IStepAble
 * @property {function():Q.promise<undefined>} load Invoked when the entity is loading
 * @property {function():void} update Invoked when the entity update is required
 * @property {function():void} render Invoked when the entity render is required
 */