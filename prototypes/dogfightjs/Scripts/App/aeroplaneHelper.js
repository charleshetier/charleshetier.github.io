/// <reference path="aeroplanePhysic.js" />
/// <reference path="../_references.js" />

app.object.AeroplaneHelper = (function (app) {
    /// <param name="app" type="app">The current application</param>
    'use strict';

    function AeroplaneHelper(aeroplane) {
        /// <param name="aeroplane" type="app.object.Aeroplane">The decorated aeroplane</param>

        this.load = load;
        this.update = update;
        this.render = render;

        aeroplane.subscribeLoading(load);
        aeroplane.subscribeUpdated(update);
        aeroplane.subscribeRendered(render);

        var _this = this;
        var _renderCoefficient = 0.05;

        var _aeroplaneGroup = new THREE.Object3D();

        var _strengthsHelpers = [];

        function load() {
            /// <returns type="Q.Promise" />

            var deferral = Q.defer();

            for (var i in aeroplane.physic.strengths) {
                var strength = aeroplane.physic.strengths[i];
                var visual = new THREE.ArrowHelper(new THREE.Euler(0, -1, 0), new THREE.Vector3(0, 0, 0), 0.5, 0xff0000);
                _strengthsHelpers.push({
                    strength: strength,
                    visual: visual
                });

                _aeroplaneGroup.add(visual);
            }

            _aeroplaneGroup.position = aeroplane._THREEPosition;
            _aeroplaneGroup.rotation.set(0, 0, 0);
            _aeroplaneGroup.rotateZ(Math.PI * 0.5);
            app.context.sceneOverlay.add(_aeroplaneGroup);

            deferral.resolve();
            return deferral.promise;
        }

        function update() {

        }

        function render() {

            for (var i = 0; i < _strengthsHelpers.length; i++) {
                var strengthHelper = _strengthsHelpers[i];
                /// <var name="visual" type="THREE.ArrowHelper">Arrow helper</var>
                var visual = strengthHelper.visual;
                /// <var name="strength" type="Object">strength object</var>
                var strength = strengthHelper.strength;

                var endPosition = (strength.x || strength.y) ? new THREE.Vector3(strength.y, -strength.x, 0) : new THREE.Vector3(0, -1, 0);
                var length = endPosition.length() * 0.0008 || 0.001;
                visual.setDirection(endPosition.normalize());
                visual.setLength(length, 0.08, 0.06);
            }
        }
    }

    return AeroplaneHelper;

})(window.app);