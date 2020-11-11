/**
 * Created by chetier on 26/12/2014.
 */

(function(){
    "use strict";

    var _projector = new THREE.Projector();

    /**
     *
     * @param {app.object.Agent} agent
     * @constructor
     */
    app.object.AgentDebugRenderer = function(agent){
        agent.subscribeLoading(load);
        agent.subscribeRendering(render);

        var canvas = document.createElement('canvas');
        canvas.width = 200;
        canvas.height = 100;
        var renderContext = canvas.getContext('2d');
        renderContext.fillStyle = '#ff0000';
        renderContext.fillRect(0,0,100,100);
        renderContext.fillStyle = '#000000';
        renderContext.fillText('This is a test', 10,10);
        
        //renderContext.textAlign = 'left';
        //renderContext.font = '9px Arial';

        //renderContext.fillRect(0,0,100,100);
        var texture = new THREE.Texture(canvas);
//         var texture = THREE.ImageUtils.loadTexture('Content/Assets/textures/waternormals.jpg');
        texture.needsUpdate = true;
        var material = new THREE.SpriteMaterial({
            map: texture,
            useScreenCoordinates: false,
            color: 0xffffff
        });
        var sprite = new THREE.Sprite(material);
        sprite.scale.set(canvas.width,canvas.height,1);

        function load(){
            /// <returns type="Q.Promise<undefined>" />

            var deferral = Q.defer();

            app.context.sceneOverlay2D.add(sprite);

            deferral.resolve(undefined);
            return deferral.promise;
        }

        function render(){
            var screenPosition = get2DPoint(agent._THREEPosition);
            sprite.position.set(screenPosition.x + canvas.width / 2 - 50,screenPosition.y + canvas.height / 2 + 40,-10);
            renderContext.clearRect(0,0,canvas.width,canvas.height);
            //renderContext.fillStyle = '#ff0000';
            //renderContext.fillRect(0,0,100,100);
            renderContext.textAlign = 'left';
            renderContext.textBaseline = 'bottom';
            renderContext.fillStyle = '#000000';
            for(var i = 0; i < agent.debug.length; i++){
                var debugItem = agent.debug[i];
                renderContext.fillText(debugItem.value, 0,canvas.height - i*10);
            }

            texture.needsUpdate = true;
        }

        /**
         * Transforms 3d world point into 2d coordinates
         * @param {{x: number, y: number, z:number}} worldPosition
         * @returns {{x: number, y: number}}
         */
        function get2DPoint(worldPosition)
        {
            var camera = app.data.camera.THREE.camera;
            var threeVector = new THREE.Vector3( worldPosition.x, worldPosition.y, worldPosition.z);
            var vector = _projector.projectVector(threeVector, camera);
            var halfWidth = app.context.renderer.domElement.width / 2;
            var halfHeight = app.context.renderer.domElement.height / 2;

            var x = Math.round(vector.x * halfWidth);
            var y = Math.round(-vector.y * halfHeight);
            return {x: x, y: -y};
        }
    };
})();