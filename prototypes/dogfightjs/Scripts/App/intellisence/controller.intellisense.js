/// <reference path="../../Extensions/string-extensions.js" />
/// <reference path="_intellisense.js" />

if (!I) window.I = {};

log('I.Controller... in progress');

I.Controller = (function () {
    'use strict';

    function Type() {
        this.load = function () {
            /// <returns type="Q.Promise" />
        };
        this.update = function () {
            /// <summary>Updates the state of the controller instance</summary>
        };
        this.render = function () {

        };
    }

    return Type;
})();

log('I.Controller... done');