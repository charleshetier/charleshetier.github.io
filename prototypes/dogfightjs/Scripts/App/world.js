/// <reference path="../_references.js" />

app.data.world = (function (app) {
    'use strict';

    /// <var name="mesh" type="THREE.Mesh">The mesh of the world</var>
    var mesh = undefined;

    /// <var name="mesh2" type="THREE.Mesh">The mesh of the world used to simulate infinity</var>
    var mesh2 = undefined;

    var worldWidthDeferal = Q.defer();

    /// <var name="worldWidth" type="Number">The width of the world</var>
    var worldWidth = undefined;

    function load() {
        /// <returns type="Q.Promise" />

        var deferal = Q.defer();
        var scene = app.context.scene;

        if(app.context.isInDebugMode) {
            var size = 3;
            var gridHelper = new THREE.GridHelper(size, 1);
            gridHelper.rotateX(Math.PI * 0.5);
            gridHelper.position.x = size + 4;
            gridHelper.position.y = size;
            scene.add(gridHelper);

            var gridHelperScale = new THREE.GridHelper(0.5, app.context.physic.unitPerMeter);
            gridHelperScale.rotateX(Math.PI * 0.5);
            gridHelperScale.position.x = 1 + 4;
            gridHelperScale.position.y = 1;
            scene.add(gridHelperScale);
        }

        var loader = new THREE.JSONLoader();
        loader.load('Content/Assets/scenes/world/geometry.json', function (geometry) {
            /// <param name="geometry" type="THREE.Geometry">The fethed geometry of the world</param>

            geometry.computeBoundingBox();
            var boundingBox = geometry.boundingBox.clone();
            var width = boundingBox.max.x;
            worldWidth = width;
            worldWidthDeferal.resolve(width);

            var material = new THREE.MeshBasicMaterial({
                map: THREE.ImageUtils.loadTexture('Content/Assets/scenes/world/diffuse.png')
            });

            mesh = new THREE.Mesh(
                geometry,
                material
            );

            mesh2 = new THREE.Mesh(
                geometry,
                material
            );

            mesh2.position.x = -width;

            mesh.receiveShadow = true;
            mesh2.receiveShadow = true;

            scene.add(mesh);
            scene.add(mesh2);

            app.data.world.isReady = true;

            deferal.resolve();
        });

        return deferal.promise;
    }

    function update() {
    }

    function render() {

        var width = app.data.world.getWidth();
        mesh2.position.x = app.data.camera.getPosition().x > width * 0.5 ? width : -width;
    }


    return {
        load: load,
        update: update,
        render: render,
        isReady: false,
        getWidthAsync: function () { return worldWidthDeferal.promise; },
        getWidth: function () { return worldWidth; }
    };

})(window.app);