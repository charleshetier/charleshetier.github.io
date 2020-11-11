(function () {
    'use strict';

    var _cameraVelocity = 0.2;

    Camera.prototype.load = load;
    Camera.prototype.onWindowResize = onWindowResize;
    Camera.prototype.update = update;
    Camera.prototype.render = render;
    Camera.prototype.track = track;
    Camera.prototype.zoomIn = zoomIn;
    Camera.prototype.zoomOut = zoomOut;
    Camera.prototype.goRight = goRight;
    Camera.prototype.goLeft = goLeft;
    Camera.prototype.goUp = goUp;
    Camera.prototype.goDown = goDown;
    Camera.prototype.getPosition = function () { return this.THREE.camera.position.clone(); };

    app.data.camera = new Camera({});

    function Camera(config) {
        config.canIntercept = true;
        app.object.Agent.inherit(this, config);

        this.commands.__createStateCommand('goRight');
        this.commands.__createStateCommand('goLeft');
        this.commands.__createStateCommand('goUp');
        this.commands.__createStateCommand('goDown');
        this.commands.__createEventCommand('zoomIn');
        this.commands.__createEventCommand('zoomOut');
        this.commands.__createEventCommand('track');

        Object.defineProperty(this, 'THREE', { value:  {} });

        /** @type {THREE.PerspectiveCamera} */
        this.THREE.camera = null;

        this.trackedAgent = null;
        this.targetedPosition = {
            x: 8,
            y: 2,
            z: 20
        };
    }

    /**
     *
     * @returns {Q.Promise<undefined>}
     */
    function load() {

        var deferral = Q.defer();
        var scene = app.context.scene;

        if (!this.THREE.camera) {
            this.THREE.camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000);
            scene.add(this.THREE.camera);
        }

        this.THREE.camera.position.z = this.targetedPosition.z;

        deferral.resolve(undefined);

        return deferral.promise;
    }

    function onWindowResize(width, height) {

        var scene = app.context.scene;
        this.THREE.camera.aspect = width / height;
        this.THREE.camera.updateProjectionMatrix();
    }
    
    function update() {

        var trackedAgentHasBeenCropped = this.trackedAgent && this.trackedAgent.positionCropped;
        if (trackedAgentHasBeenCropped) {
            this.THREE.camera.position.x += this.trackedAgent.positionCropped;
        }

        if(this.commands.goLeft.isActive) this.goLeft();
        if(this.commands.goRight.isActive) this.goRight();
        if(this.commands.goUp.isActive) this.goUp();
        if(this.commands.goDown.isActive) this.goDown();
        if(this.commands.zoomIn.isActive) this.zoomIn();
        if(this.commands.zoomOut.isActive) this.zoomOut();
        if(this.commands.track.isActive) this.track(app.context.currentAgent);

        if (this.trackedAgent) {
            this.targetedPosition.x = this.trackedAgent.position.x;
            this.targetedPosition.y = this.trackedAgent.position.y;
        }

        if (!this.trackedAgent) {
            var width = app.data.world.getWidth();
            if (this.THREE.camera.position.x > width) {
                this.THREE.camera.position.x -= width;
                this.targetedPosition.x -= width;
            }
            else if (this.THREE.camera.position.x < 0) {
                this.THREE.camera.position.x += width;
                this.targetedPosition.x += width;
            }
        }

        if (this.targetedPosition.y < 1) this.targetedPosition.y = 1;

        var animationCoef = 0.08;
        this.THREE.camera.position.x += (this.targetedPosition.x - this.THREE.camera.position.x) * animationCoef;
        this.THREE.camera.position.y += (this.targetedPosition.y - this.THREE.camera.position.y) * animationCoef;
        this.THREE.camera.position.z += (this.targetedPosition.z - this.THREE.camera.position.z) * animationCoef;
    }

    function render() {

    }

    /**
     *
     * @param {app.object.Agent=} agent
     */
    function track(agent) {
        /// <summary>Tracks the specified agent, or remove tracking if not agent is specified</summary>
        /// <param name="agent" type="I.Agent">The agent to track</param>

        this.trackedAgent = agent;

        app.log.debug('camera tracking enabled: {0}'.format(this.trackedAgent ? 'true' : 'false'));
    }

    function zoomIn() {
        this.targetedPosition.z -=2;
    }

    function zoomOut() {
        this.targetedPosition.z +=2;
    }

    function goRight() {
        this.targetedPosition.x += _cameraVelocity;
        this.track();
    }

    function goLeft() {
        this.targetedPosition.x -= _cameraVelocity;
        this.track();
    }

    function goUp() {
        this.targetedPosition.y += _cameraVelocity;
        this.track();
    }

    function goDown() {
        this.targetedPosition.y -= _cameraVelocity;
        this.track();
    }

})();