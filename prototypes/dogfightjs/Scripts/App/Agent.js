/**
 * @name IAgentCommands
 * @interface
 * @property {function} __createStateCommand
 * @property {function} __createSwitchCommand
 * @property {function} __createValueCommand
 * @property {function} __flush
 */

/**
 * @name ICraftCommands
 * @interface
 * @extends {IAgentCommands}
 * @property {IFlagCommand} goRight
 * @property {IFlagCommand} goLeft
 * @property {IFlagCommand} flipRoll
 * @property {IValueCommand} engine
 * @property {IValueIncrementCommand} increaseEngine
 * @property {IValueIncrementCommand} decreaseEngine
 */

/**
 * @typedef {function} IFlagCommand
 * @interface
 * @property {boolean} isActive
 */

/**
 * @name IValueCommand
 * @interface
 * @property {number} value
 */

/**
 * @typedef {function(number=)} IValueIncrementCommand
 * @interface
 */


(function () {
    "use strict";

    /**
     * Defines a physical object
     * @property {{x:number, y:number}} position
     * @property {{pitch:number, roll:number}} rotation
     * @property {IAgentCommands} commands
     * @property {object} debug
     * @property {string} id
     * @property {function(function)} subscribeLoading
     * @property {function(function)} subscribeLoaded
     * @property {function(function)} subscribeUpdating
     * @property {function(function)} subscribeUpdated
     * @property {function(function)} subscribeRendering
     * @property {function(function)} subscribeRendered
     * @constructor
     * @implements {IStepAble}
     */
    app.object.Agent = function() {};
    app.object.Agent.inherit = inherit;

    /**
     * Extends the targeted object in order to simulate inheritance
     * @param {app.object.Agent} agent
     * @param {Object|any=} config
     */
    function inherit(agent, config) {

        Object.defineProperty(agent, 'id', {value: null, writable: true});
        Object.defineProperty(agent, 'position', {value: {x: 0, y: 0}});
        Object.defineProperty(agent, 'rotation', {value: {pitch: 0, roll: 0}});
        Object.defineProperty(agent, 'commands', {value: {}});
        Object.defineProperty(agent, 'debug', {value: []});

        applyCommands(agent);

        if (config && config.canIntercept) {
            applyStepInterception(agent);
        }
    }


    /**
     * @param {Agent} agent
     * @param agent.interception
     */
    function applyStepInterception(agent) {
        var loadFunction = agent.load;
        var updateFunction = agent.update;
        var renderFunction = agent.render;

        Object.defineProperty(agent, 'interception', {value: {}});
        agent.interception.loading = [];
        agent.interception.loaded = [];
        agent.interception.updating = [];
        agent.interception.updated = [];
        agent.interception.rendering = [];
        agent.interception.rendered = [];
        agent.subscribeLoading = function (handler) {
            agent.interception.loading.push(handler);
        };
        agent.subscribeLoaded = function (handler) {
            agent.interception.loaded.push(handler);
        };
        agent.subscribeUpdating = function (handler) {
            agent.interception.updating.push(handler);
        };
        agent.subscribeUpdated = function (handler) {
            agent.interception.updated.push(handler);
        };
        agent.subscribeRendering = function (handler) {
            agent.interception.rendering.push(handler);
        };
        agent.subscribeRendered = function (handler) {
            agent.interception.rendered.push(handler);
        };

        /**
         * Executes the load interception layer of the agent
         * @returns {Q.Promise<undefined>}
         */
        agent.load = function () {
            var deferral = Q.defer();

            var _this = this;
            var loadingPromises = agent.interception.loading.select(function (handler) {
                return handler.apply(_this);
            });
            var loadPromise = loadFunction.apply(this, arguments);

            Q.all(loadingPromises.and(loadPromise)).then(function () {
                var loadedPromises = agent.interception.loaded.select(function (handler) {
                    return handler.apply(_this);
                });
                Q.all(loadedPromises).then(function () {
                    deferral.resolve(undefined);
                });
            });

            return deferral.promise;
        };

        /**
         * Executes the update interception layer of the agent
         */
        agent.update = function () {
            var _this = this;
            agent.interception.updating.each(function (handler) {
                return handler.apply(_this);
            });
            updateFunction.apply(this, arguments);
            agent.interception.updated.each(function (handler) {
                return handler.apply(_this);
            });
            agent.commands.__flush();
        };

        /**
         * Executes the render interception layer of the agent
         */
        agent.render = function () {
            var _this = this;
            agent.interception.rendering.each(function (handler) {
                return handler.apply(_this);
            });
            renderFunction.apply(this, arguments);
            agent.interception.rendered.each(function (handler) {
                return handler.apply(_this);
            });
        };
    }


    /**
     * Binds the default commands for an Agent
     * @param {Agent} agent
     */
    function applyCommands(agent) {
        agent.commands.__transientCommands = [];
        agent.commands.__createStateCommand = createStateCommand;
        agent.commands.__createSwitchCommand = createSwitchCommand;
        agent.commands.__createEventCommand = createEventCommand;
        agent.commands.__createValueCommand = createValueCommand;
        agent.commands.__flush = resetCommands;

        /**
         * Creates a state type command
         * @param {string} name The name of the command
         */
        function createStateCommand(name) {
            agent.commands[name] = function () {
                agent.commands[name].isActive = true;
            };

            agent.commands.__transientCommands.push(name);
            agent.commands[name].__flush = function () {
                agent.commands[name].isActive = false;
            };

            agent.commands[name].isActive = false;
        }

        /**
         * Creates a switch type command
         * @param {string} name The name of the command
         */
        function createSwitchCommand(name) {

            agent.commands[name] = function () {
                var command = agent.commands[name];
                if (!command.__wasInvoked) {
                    command.isActive = !command.isActive;
                }

                command.__wasInvoked = 2;
            };

            agent.commands.__transientCommands.push(name);
            agent.commands[name].__flush = function () {
                var command = agent.commands[name];
                if (command.__wasInvoked > 0) {
                    command.__wasInvoked--;
                }
            };

            agent.commands[name].__wasInvoked = 0;
            agent.commands[name].isActive = false;
        }

        /**
         * Creates a event type command
         * @param {string} name The name of the command
         */
        function createEventCommand(name) {

            agent.commands[name] = function () {
                var command = agent.commands[name];
                if (!command.__wasInvoked) {
                    command.isActive = true;
                }

                command.__wasInvoked = 2;
            };

            agent.commands.__transientCommands.push(name);
            agent.commands[name].__flush = function () {
                var command = agent.commands[name];
                command.isActive = false;
                if (command.__wasInvoked > 0) {
                    command.__wasInvoked--;
                }
            };

            agent.commands[name].__wasInvoked = 0;
            agent.commands[name].isActive = false;
        }

        /**
         * Creates a value type command. The value is a decimal [0..1] range number
         * @param {string} name The name of the command
         * @param {number=} increment The value incrementing or decrementing the value
         */
        function createValueCommand(name, increment) {

            agent.commands[name] = function (value) {
                agent.commands[name].value = Math.max(0, Math.min(value, 1));
            };

            agent.commands[name].value = 0;
            agent.commands[name].increment = increment || 0.1;

            var increaseCommandName = 'increase{0}'.format(name.toPascalCase());
            agent.commands[increaseCommandName] = function (value) {
                var currentValue = +(agent.commands[name].value);
                var incrementValue = +(value) || +(agent.commands[name].increment);
                agent.commands[name](currentValue + incrementValue);
            };

            var decreaseCommandName = 'decrease{0}'.format(name.toPascalCase());
            agent.commands[decreaseCommandName] = function (value) {
                var currentValue = +(agent.commands[name].value);
                var incrementValue = +(value) || +(agent.commands[name].increment);
                agent.commands[name](currentValue - incrementValue);
            };
        }

        /**
         * Flushes the commands of the current agent instance
         */
        function resetCommands() {
            for (var i = 0; i < agent.commands.__transientCommands.length; i++) {
                var commandName = agent.commands.__transientCommands[i];
                var command = agent.commands[commandName];
                command.__flush();
            }
        }
    }
})();