/// <reference path="../_references.js" />

/** @namespace */
var app = (function () {
    'use strict';

    function logDebug(message) {
        if (app.context.isInDebugMode) {
            console.debug(message);
        }
    }

    function log(message) {
        console.log(message);
    }

    var app = {
        _isNamespace: true,

        /** @namespace */
        object: {
            _isNamespace: true
        },

        /** @namespace */
        data: {
            _isNamespace: true,

            /// <field name="controllers" type="Array" elementType="I.Controller">The declared controllers for the current application</field>
            controllers: [],

            /// <field name="agents" type="Array" elementType="I.Agent">The declared agents for the current application</field>
            agents: []
        },

        /** @namespace */
        debug:{
            _isNamespace: true,

            /// <field name="datGui" type="dat.GUI">Dat.Gui interface</field>
            datGui: new dat.GUI()
        },

        /** @namespace */
        context: {
            _isNamespace: true,

            /// <field name="isInDebugMode" type="Boolean">Determines whether the application is in debug mode</field>
            isInDebugMode: true,

            isInTestMode: false,

            /// <field name="renderer" type="THREE.WebGLRenderer">The active THREEjs renderer</field>
            renderer: undefined,

            /// <field name="scene" type="THREE.Scene">The active THREEjs scene</field>
            scene: undefined,

            /// <field name="currentAgent" type="I.Agent">The active THREEjs scene</field>
            currentAgent: undefined,

            /// <field name="stepRate" type="Number">The rate of steps targeted</field>
            stepRate: 1 / 60,

            physic: {
                _isNamespace: true,
                gravity: 9.81,
                unitPerMeter: 1 / 10
            }
        }
    };

    app.log = log;
    app.log.debug = logDebug;

    app.data.controllers.load = function () {
        var _arguments = arguments;
        var _promises = [];
        app.data.controllers.forEach(function (controller) {
            /// <param name="controller" type="I.Controller">The current controller</param>
            var promise = controller.load.apply(controller, arguments);
            _promises.push(promise);
        });

        return _promises;
    };

    app.data.controllers.update = function () {
        var _arguments = arguments;
        app.data.controllers.forEach(function (controller) {
            /// <param name="controller" type="I.Controller">The current controller</param>
            controller.update.apply(controller, arguments);
        });
    };

    app.data.controllers.render = function () {
        var _arguments = arguments;
        app.data.controllers.forEach(function (controller) {
            /// <param name="controller" type="I.Controller">The current controller</param>
            controller.render.apply(controller, arguments);
        });
    };


    app.data.agents.load = function () {
        var _arguments = arguments;
        var _promises = [];
        app.data.agents.forEach(function (agent) {
            /// <param name="agent" type="I.Controller">The current agent</param>
            var promise = agent.load.apply(agent, arguments);
            _promises.push(promise);
        });

        return _promises;
    };
    app.data.agents.update = function () {
        var _arguments = arguments;
        app.data.agents.forEach(function (agent) {
            /// <param name="agent" type="I.Controller">The current agent</param>
            agent.update.apply(agent, arguments);
        });
    };
    app.data.agents.render = function () {
        var _arguments = arguments;
        app.data.agents.forEach(function (agent) {
            /// <param name="agent" type="I.Controller">The current agent</param>
            agent.render.apply(agent, arguments);
        });
    };

    return app;
})();