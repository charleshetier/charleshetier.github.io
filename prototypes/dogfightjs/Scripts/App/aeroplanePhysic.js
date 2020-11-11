app.object.AeroplanePhysic = (function (app) {
    "use strict";

    /**
     *
     * @constructor
     * @param {app.object.Aeroplane} aeroplane
     * @memberOf app.object
     */
    function AeroplanePhysic(aeroplane) {

        var _this = this;

        var _lastX = 0;
        var _lastY = 0;
        var _targetedRotationRoll = 0;

        var _velocity = { x:0, y:0, localX:0, localY:0 };

        var debugPosition = {value: 'position...'};
        var debugVelocity = {value: 'velocity...'};
        var debugCz = {value: 'cz...'};
        aeroplane.debug.push(debugPosition);
        aeroplane.debug.push(debugVelocity);
        aeroplane.debug.push(debugCz);

        this.load = load;
        this.update = update;
        this.render = render;

        aeroplane.subscribeLoading(load);
        aeroplane.subscribeUpdating(update);
        aeroplane.subscribeRendering(render);

        aeroplane.physic = {
            _isNamespace: true,

            strengths: {
                gravity: { x: 0, y: 0 },
                engine: { x: 0, y: 0 },
                airFriction: { x: 0, y: 0 },
                bearing: { x: 0, y: 0 }
            }
        };

        function load() {
            /// <returns type="Q.Promise" />

            var deferral = Q.defer();

            _lastX = aeroplane.position.x;
            _lastY = aeroplane.position.y;
            aeroplane.physic.strengths.bearing.cz = 0;
            var folder = app.debug.datGui.addFolder('airplane velocity');
            folder.open();
            folder.add(_velocity, "localX").listen();
            folder.add(_velocity, "localY").listen();
            folder.add(_velocity, "x").listen();
            folder.add(_velocity, "y").listen();
            folder.add(aeroplane.physic.strengths.bearing, "cz").listen();

            deferral.resolve(undefined);
            return deferral.promise;
        }

        function update() {

            if(aeroplane.positionCropped) {
                _lastX += aeroplane.positionCropped;
            }

            var stepRate = app.context.stepRate;

            if(aeroplane.commands.goLeft.isActive){ aeroplane.rotation.pitch += 0.05; }
            if(aeroplane.commands.goRight.isActive){ aeroplane.rotation.pitch -= 0.05; }

            /** @type {{enginePower: number, mass: number, cz:{min:{vx: number, value: number}, max:{vx: number, value: number}}, frictionCoef:{x:number, y:number}}} */
            var config = aeroplane.config.physic;

            var anglePitch = aeroplane.rotation.pitch;
            var angleRoll = aeroplane.rotation.roll;
            var enginePowerCoef = aeroplane.commands.engine.value;
            var strengths = aeroplane.physic.strengths;

            /** current x position in meters */
            var x = unitsToMeters(aeroplane.position.x);
            /** current y position in meters */
            var y = unitsToMeters(aeroplane.position.y);

            /** x position backup in meters */
            var lastX = x;
            /** y position backup in meters */
            var lastY = y;


            _velocity.x = (x - unitsToMeters(_lastX)) / stepRate;
            _velocity.y = (y - unitsToMeters(_lastY)) / stepRate;
            _velocity.localX = _velocity.x*Math.cos(-anglePitch) - _velocity.y*Math.sin(-anglePitch);
            _velocity.localY = _velocity.x*Math.sin(-anglePitch) + _velocity.y*Math.cos(-anglePitch);


            strengths.gravity.x = 0;
            strengths.gravity.y = -app.context.physic.gravity * config.mass;

            strengths.engine.x = Math.cos(anglePitch) * enginePowerCoef * config.enginePower;
            strengths.engine.y = Math.sin(anglePitch) * enginePowerCoef * config.enginePower;

            // cz = (czmax - czmin)/vxmax*vx + czmin
            {
                var czmin = config.cz.min.value;
                var czmax = config.cz.max.value;
                var vxmin = config.cz.min.vx;
                var vxmax = config.cz.max.vx;
                var czAffine = _velocity.localX * ((czmax - czmin)/(vxmax - vxmin)) + czmax * (vxmax - vxmin) - vxmax*(czmax - czmin);
                strengths.bearing.cz = Math.min(Math.max(czAffine * czAffine * czAffine, czmin), czmax);
            }

            strengths.bearing.localX = 0;
            strengths.bearing.localY = -_velocity.localY * config.mass * strengths.bearing.cz / stepRate;
            strengths.bearing.x = (strengths.bearing.localX * Math.cos(anglePitch) - strengths.bearing.localY * Math.sin(anglePitch));
            strengths.bearing.y = (strengths.bearing.localX * Math.sin(anglePitch) + strengths.bearing.localY * Math.cos(anglePitch));

            strengths.airFriction.localX = -_velocity.localX * config.mass * config.frictionCoef.x / stepRate;
            strengths.airFriction.localY = -_velocity.localY * config.mass * config.frictionCoef.y /stepRate;
            strengths.airFriction.x = (strengths.airFriction.localX * Math.cos(anglePitch) - strengths.airFriction.localY * Math.sin(anglePitch));
            strengths.airFriction.y = (strengths.airFriction.localX * Math.sin(anglePitch) + strengths.airFriction.localY * Math.cos(anglePitch));
            
            var strengthSum = { x: 0, y: 0 };
            for (var i in strengths) {
                strengthSum.x += strengths[i].x;
                strengthSum.y += strengths[i].y;
            }

            var acceleration = {
                x: strengthSum.x / config.mass,
                y: strengthSum.y / config.mass
            };

            var newVelocity = {
                x: _velocity.x + acceleration.x*stepRate,
                y: _velocity.y + acceleration.y*stepRate
            };

            if(app.context.isInDebugMode) {
                debugPosition.value = 'x: {0}m ; y: {1}m'.format(x.toFixed(1), y.toFixed(1));
                debugCz.value = 'cz: {0}'.format(strengths.bearing.cz.toFixed(3));
                debugVelocity.value = 'vx: {0}m/s ; vy: {1}m/s'.format(
                    (newVelocity.x * Math.cos(-anglePitch) - newVelocity.y * Math.sin(-anglePitch)).toFixed(0),
                    (newVelocity.x * Math.sin(-anglePitch) + newVelocity.y * Math.cos(-anglePitch)).toFixed(3));
            }

            x += newVelocity.x * stepRate;
            y += newVelocity.y * stepRate;

            _lastX = metersToUnits(lastX);
            _lastY = metersToUnits(lastY);

            _targetedRotationRoll = aeroplane.commands.flipRoll.isActive ? Math.PI : 0;
            if (_targetedRotationRoll === 0 && angleRoll > -Math.PI * 2 && angleRoll > 0) {
                angleRoll -= Math.PI * 2;
            }

            angleRoll -= (angleRoll - _targetedRotationRoll) * 0.1;

            aeroplane.position.x = metersToUnits(x);
            aeroplane.position.y = metersToUnits(y);
            aeroplane.rotation.pitch = anglePitch;
            aeroplane.rotation.roll = angleRoll;
        }

        function render() {
        }

        /**
         * Converts meters into units
         * @param {number} meters
         * @returns {number}
         */
        function metersToUnits(meters) {
            return meters * app.context.physic.unitPerMeter;
        }

        /**
         * Converts units into meters
         * @param {number} units
         * @returns {number}
         */
        function unitsToMeters(units) {
            return units / app.context.physic.unitPerMeter;
        }
    }

    return AeroplanePhysic;

})(window.app);