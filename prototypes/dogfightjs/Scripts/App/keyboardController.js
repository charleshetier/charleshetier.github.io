app.object.KeyboardController = (function (app) {
    'use strict';

    return KeyboardController;

    /**
     *
     * @param {app.object.Agent} agent
     * @param camera
     * @constructor
     * @memberOf app.object
     */
    function KeyboardController(agent, camera) {

//    37: 'Left',
//    39: 'Right',
//    100: 'CameraLeft',
//    102: 'CameraRight',
//    104: 'CameraUp',
//    98: 'CameraDown',
//    107: 'CameraZoomIn',
//    109: 'CameraZoomOut',
//    101: 'CameraTrack',
//    65: 'FlipRoll', //a
//    40: 'DecreasePower',
//    38: 'IncreasePower'

        var _this = this;
        initialize();
        // TODO: command camera!

        var _agent = agent;
        var _camera = camera;

        this.load = load;
        this.update = update;
        this.render = render;


        function load() {
            var deferral = Q.defer();
            window.addEventListener('keydown', handleKeyDownEvent);
            window.addEventListener('keyup', handleKeyUpEvent);

            deferral.resolve(undefined);
            return deferral.promise;
        }

        function update() {
            for(var i = 0; i < _this.__inputsArray.length; i++){
                var input = _this.__inputsArray[i];
                if(input.pressed){
                    input.command();
                }
            }
        }

        function render() {}

        function initialize(){
            Object.defineProperty(_this, 'inputs', {value: {}});
            Object.defineProperty(_this, '__inputsArray', {value: []});
            bind('left', 37, agent.commands.goLeft);
            bind('right', 39, agent.commands.goRight);
            bind('flipRoll', 65, agent.commands.flipRoll);
            bind('decreaseEngine', 40, agent.commands.decreaseEngine);
            bind('increaseEngine', 38, agent.commands.increaseEngine);

            bind('cameraLeft', 100, camera.commands.goLeft);
            bind('cameraRight', 102, camera.commands.goRight);
            bind('cameraUp', 104, camera.commands.goUp);
            bind('cameraDown', 98, camera.commands.goDown);
            bind('cameraZoomIn', 107, camera.commands.zoomIn);
            bind('cameraZoomOut', 109, camera.commands.zoomOut);
            bind('cameraTrack', 101, camera.commands.track);
        }

        /**
         * Binds the specified command to a key
         * @param {string} name
         * @param {number} keyCode
         * @param command
         * @returns {KeyBinding}
         */
        function bind(name, keyCode, command){
            var binding = new KeyBinding(keyCode, command);
            Object.defineProperty(_this.inputs, name, {value: binding});
            _this.inputs[keyCode.toString()] = binding;
            _this.__inputsArray.push(binding);
            return binding;
        }

        function handleKeyDownEvent(event){
            var input = _this.inputs[event.keyCode];
            if(input){
                input.press();
            }
        }

        function handleKeyUpEvent(event){
            var input = _this.inputs[event.keyCode];
            if(input){
                input.release();
            }
        }

        if(app.context.isInTestMode) {
            this.handleKeyDownEvent = handleKeyDownEvent;
            this.handleKeyUpEvent = handleKeyUpEvent;
        }
    }

    /**
     *
     * @param {number} keyCode
     * @param command
     * @constructor
     */
    function KeyBinding(keyCode, command){
        var _this = this;

        this.pressed = false;
        this.command = command;
        this.press = function() {
            _this.pressed = true;
            //command();
        };
        this.release = function() {
            _this.pressed = false;
            //command();
        };
    }

})(window.app);