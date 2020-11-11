/**
 * @module context
 */

export default
/**
 * @interface IContext
 * @implements IContext
 */
{
    debug: true,
    stepRate: 1 / 60,
    BABYLON: {
        /** @type BABYLON.Scene */
        scene: null,
        /** @type BABYLON.Engine */
        engine: null,

        /** @type BABYLON.Camera */
        camera: null
    },
    DOM: {
        /** @type HTMLCanvasElement */
        canvas: null,
        /** @type HTMLElement */
        overlay: null,

        /** @type HTMLElement */
        stats: null,

        /** type HTMLElement */
        console: null,

        /** type HTMLElement */
        dockCommand: null,

        /** type HTMLElement */
        undockCommand: null
    },
    /** @type Array<Level> */
    levels: null,
    /** @type Array<Planet> */
    planets: null,
    /** @type Array<Satellite> */
    satellites: null,
    /** @type Ship */
    ship: null,

    /** @type ITarget */
    target: null,

    script: null,

    api: {
        /**
         * @type Function(message:string)
         */
        say: null,

        target : {
            /**
             * @type Function({{position: Position2D}})
             */
            set : null,

            clear: null
        }
    }
};