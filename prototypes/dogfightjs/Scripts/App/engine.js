/// <reference path="../_references.js" />

(function (app) {
    'use strict';

    var stats = new Stats();
    stats.setMode(0); // 0: fps, 1: ms
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);


    var scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xaaddff, 30, 60);
    var sceneOverlay = new THREE.Scene();
    var camera2D = new THREE.OrthographicCamera(-window.innerWidth / 2, window.innerWidth / 2, window.innerHeight / 2, -window.innerHeight / 2, 1, 100);
//     var camera2D = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera2D.position.set(0,0,0);
    //camera2D.lookAt(0,0,10);
    var sceneOverlay2D = new THREE.Scene();
    sceneOverlay2D.add(camera2D);
    var canvas = document.getElementById('renderer');
    var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xaaddff, 0);
    //renderer.sortObjects = true;
    //renderer.shadowMapEnabled = true;
    //renderer.shadowMapType = THREE.PCFSoftShadowMap;
    renderer.autoClear = false;

    app.context.camera2D = camera2D;
    app.context.renderer = renderer;
    app.context.scene = scene;
    app.context.sceneOverlay = sceneOverlay;
    app.context.sceneOverlay2D = sceneOverlay2D;

    var aeroplane = new app.object.Aeroplane({
        init: {x: 5, y: 5},
        id: 'extra300s',
        physic: {
            enginePower: 1000,
            mass: 100,
            cz:{
                min: {vx: 0, value: 0},
                max: {vx: 40, value: 1}
            },
            frictionCoef:{
                x: 0.001,
                y: 0.0001
            }
        }});

    var keyboardController = new app.object.KeyboardController(aeroplane, app.data.camera);
    var aeroplaneHelper = new app.object.AeroplaneHelper(aeroplane);
    var aeroplanePhysic = new app.object.AeroplanePhysic(aeroplane);
    var aeroplaneDebugRenderer = new app.object.AgentDebugRenderer(aeroplane);

    app.context.currentAgent = aeroplane;
    app.data.agents.push(aeroplane);
    app.data.controllers.push(keyboardController);
    app.data.camera.track(aeroplane);

    function step() {
        /// <summary>Increments the engine state</summary>

        stats.begin();

        app.data.world.update();
        app.data.water.update();
        app.data.controllers.update();
        app.data.agents.update();
        app.data.camera.update();

        app.data.world.render();
        app.data.water.render();
        app.data.controllers.render();
        app.data.agents.render();
        app.data.camera.render();

        renderer.clear();
        renderer.render(scene, app.data.camera.THREE.camera);
        renderer.clearDepth();
        renderer.render(sceneOverlay, app.data.camera.THREE.camera);
        renderer.clearDepth();
        renderer.render(sceneOverlay2D, app.context.camera2D);

        stats.end();

        requestAnimationFrame(step);
    }

    function start() {
        /// <summary>Starts the engine loop</summary>

        requestAnimationFrame(step);
    }


    Q.all([
        app.data.world.load(),
        app.data.camera.load(),
        app.data.water.load()]
        .and(app.data.agents.load())
        .and(app.data.controllers.load())).then(start);

    window.addEventListener('resize', function () {
        renderer.setSize(window.innerWidth, window.innerHeight);
        app.data.camera.onWindowResize(window.innerWidth, window.innerHeight);
    });

})(window.app);