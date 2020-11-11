/// <reference path="_intellisense.js" />

if (!I) window.I = {};

log('I.Agent... in progress');

I.AgentOld = (function () {
    'use strict';

    function Type() {
        this.getX = function () {
            /// <summary>Gets the X position of the agent</summary>
            /// <returns type="Number" />
        };
        this.getY = function () {
            /// <summary>Gets the Y position of the agent</summary>
            /// <returns type="Number" />
        };
        this.setX = function (value) {
            /// <summary>Sets the X position of the agent</summary>
            /// <param name="value" type="Number">The value to be set</param>
        };
        this.setY = function (value) {
            /// <summary>Sets the Y position of the agent</summary>
            /// <param name="value" type="Number">The value to be set</param>
        };
        this.load = function () {
            /// <returns type="Q.Promise" />
        };
        this.update = function () {

        };
        this.render = function () {

        };

        this.positionCropped = function () {
            /// <summary>The position of the agent have been cropped during last step</summary>
        };

        this.goRight = function (value) {
            /// <param name="value" type="Number">The amount of stimulation</param>
        };
        this.goLeft = function (value) {
            /// <param name="value" type="Number">The amount of stimulation</param>
        };
        this.goTop = function (value) {
            /// <param name="value" type="Number">The amount of stimulation</param>
        };
        this.goBottom = function (value) {
            /// <param name="value" type="Number">The amount of stimulation</param>
        };
        this.increasePower = function (value) {
            /// <param name="value" type="Number">The amount of stimulation</param>
        };
        this.decreasePower = function (value) {
            /// <param name="value" type="Number">The amount of stimulation</param>
        };
        this.setPower = function (value) {
            /// <param name="value" type="Number">The absolute value of power between 0 and 1</param>
        };
        this.flipRoll = function () {

        };
    }

    return Type;
})();

log('I.Agent... done');