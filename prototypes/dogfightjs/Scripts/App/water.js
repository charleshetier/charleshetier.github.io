/// <reference path="../_references.js" />

app.data.water = (function (app) {
    'use strict';

    var parameters = {
        width: 10,
        height: 10,
        widthSegments: 512,
        heightSegments: 512,
        depth: 1500,
        param: 4,
        filterparam: 1
    };

    /// <var name="water" type="THREE.Water">The water object</var>
    //var water;

    /// <var name="mesh2" type="THREE.Mesh">The mesh of the water used to simulate infinity</var>
    var mesh2 = undefined;

    function load() {
        /// <returns type="Q.Promise" />

        var deferal = Q.defer();
        var scene = app.context.scene;

        var directionalLight = new THREE.DirectionalLight(0xffff55);
        directionalLight.position.set(5, 30, 0);
        directionalLight.target.position.set(5, 0, 0);
        directionalLight.castShadow = true;
        //directionalLight.shadowDarkness = 0.5;
        //directionalLight.shadowCameraVisible = true;
        scene.add(directionalLight);
        scene.add(new THREE.DirectionalLightHelper(directionalLight, 2.5));

        app.data.world.getWidthAsync().then(function (worldWidth) {
            var plane = new THREE.PlaneGeometry(worldWidth, 30, Math.floor(worldWidth), 30);
            var material = new THREE.MeshBasicMaterial({ color: 0x5555dd, wireframe: true, transparent: true, opacity: 0.4 });

            var mesh = new THREE.Mesh(plane, material);
            mesh.rotation.x = -Math.PI * 0.5;
            mesh.position.x = worldWidth * 0.5;

            mesh2 = new THREE.Mesh(plane, material);
            mesh2.rotation.x = -Math.PI * 0.5;
            mesh2.position.x = worldWidth * 1.5;

            scene.add(mesh);
            scene.add(mesh2);
            deferal.resolve();
        });
        


        return deferal.promise;
    }

    function update() {

    }

    function render() {

        var worldWidth = app.data.world.getWidth();
        mesh2.position.x = app.data.camera.getPosition().x > worldWidth * 0.5 ? worldWidth * 1.5 : -worldWidth * 0.5;
    }

    return {
        load: load,
        update: update,
        render: render
    };

})(window.app);