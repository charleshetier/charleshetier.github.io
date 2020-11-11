/// <reference path="_intellisense.js" />

if (!I) window.I = {};

log('I.Camera... in progress');

I.Camera = (function () {
    'use strict';

    function Type() {
        this.track = function (agent) {
            /// <summary>Tracks the specified agent, or remove tracking if not agent is specified</summary>
            /// <param name="agent" type="I.Agent">The agent to track</param>
        };

        this.zoomIn = function () { };

        this.zoomOut = function () { };

        this.goRight = function () { };

        this.goLeft = function () { };

        this.goUp = function () { };

        this.goDown = function () { };
    }

    return Type;
})();

log('I.Camera... done');