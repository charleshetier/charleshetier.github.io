(function () {
    "use strict";

    /**
     * Aeroplane object entity
     * @constructor
     * @param config
     * @implements {IStepAble}
     * @extends {app.object.Agent}
     * @property {ICraftCommands} commands
     */
    app.object.Aeroplane = function Aeroplane(config) {
        this.config = config;
        app.object.Agent.inherit(this, {canIntercept: true});

        this.commands.__createStateCommand('goRight');
        this.commands.__createStateCommand('goLeft');
        this.commands.__createSwitchCommand('flipRoll');
        this.commands.__createValueCommand('engine', 0.03);

        this.id = config.id;
        if(config.init){
            this.position.x = config.init.x || this.position.x;
            this.position.y = config.init.y || this.position.y;
        }

        // TODO: export in a THREE namespace for example
        this._THREEPosition = new THREE.Vector3(this.position.x, this.position.y, 0);
        this._THREERotation = new THREE.Euler();
    };

    /**
     * Contains the THREE mesh of the aeroplane
     * @type {THREE.Mesh}
     * @private
     */
    app.object.Aeroplane.prototype._mesh = null;

    /**
     * Determines the offset that just cropped the aeroplane in world boundary
     * @type {number}
     */
    app.object.Aeroplane.prototype.positionCropped = 0;

    /**
     * @inheritDoc
     * */
    app.object.Aeroplane.prototype.render = function () {

        this._mesh.position.x = this.position.x;
        this._mesh.position.y = this.position.y;
        this._mesh.rotation.x = 0;
        this._mesh.rotation.y = 0;
        this._mesh.rotation.z = 0;
        this._mesh.rotateY(-Math.PI * 0.5);
        this._mesh.rotateX(this.rotation.pitch);
        this._mesh.rotateZ(this.rotation.roll);

        this._THREEPosition.copy(this._mesh.position);
        this._THREERotation.copy(this._mesh.rotation);

    };

    /**
     * @inheritDoc
     * */
    app.object.Aeroplane.prototype.update = function () {

        var worldWidth = app.data.world.getWidth();
        if (this.position.x > worldWidth) {
            this.position.x -= worldWidth;
            this.positionCropped = -worldWidth;
        }
        else if (this.position.x < 0) {
            this.position.x += worldWidth;
            this.positionCropped = worldWidth;
        } else {
            this.positionCropped = 0;
        }

        if (this.position.y < 0.6) {
            this.position.y = 0.6; // dummy collision
        }
    };

    /**
     * @inheritDoc
     * */
    app.object.Aeroplane.prototype.load = function () {

        /**
         * @type {Q.Deferred<undefined>}
         */
        var deferral = Q.defer();

        this.commands.engine(0);
        var scene = app.context.scene;

        // check whether the id exists
        // TODO: create unit test context detection
        if(!this.id){
            deferral.resolve(undefined);
            return deferral.promise;
        }

        var loader = new THREE.JSONLoader();
        /** @type {app.object.Aeroplane} */var _this = this;

        loader.load('Content/Assets/aeroplanes/{0}/geometry.json'.format(this.id),

            /**
             * @param {THREE.Geometry} geometry
             */
            function (geometry) {

                var material = new THREE.MeshBasicMaterial({
                    map: THREE.ImageUtils.loadTexture('Content/Assets/aeroplanes/{0}/diffuse.png'.format(_this.id))
                });

                _this._mesh = new THREE.Mesh(
                    geometry,
                    material
                );

                _this._mesh.position.x = _this.position.x;
                _this._mesh.position.y = _this.position.y;
                _this._mesh.castShadow = true;

                scene.add(_this._mesh);

                deferral.resolve(undefined);
            }
        );
    };

})();