/// <reference path="_intellisense.js" />

if (!I) window.I = {};
log('I.AeroplaneProperties... in progress');

I.AeroplaneProperties = (function () {
    'use strict';

    function Type() {

        /// <field name="x" type="Number">The x coordinate</field>
        this.x = 0;

        /// <field name="y" type="Number">The y coordinate</field>
        this.y = 0;


        /// <field name="id" type="String">The value identifying the airplane. Matches with the name of the folder in wich resources are</field>
        this.id = '';
    };

    return Type;
})();

log('I.AeroplaneProperties... done');