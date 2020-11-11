import {spawn, async} from 'system';
import Ship from './Ship';
import Planet from './Planet';
import context from 'context';
import * as provider from './provider';
import ITarget from './ITarget';
import Script from './Script';
import Satellite from './Satellite';
require('./TargetPoint'); // ITarget implementation
require('./TargetOrbit'); // ITarget implementation

/**
 * Initializes the global game context
 * @returns Promise
 */
export const initializeAsync = async(function* () {

    var levels = yield provider.getLevels();

    if (levels && levels.length) {
        console.info('levels loaded successfully');
        levels.forEach(level => console.log(` - Level[${level.id}] "${level.name}"\n   ${level.description}`));
    }

    context.levels = levels;
});

/**
 * Initializes the specified level in the current context
 * @param String The Id of the level to initialize
 * @Returns Promise
 */
export const initializeLevelAsync = async(function* (levelId) {

    let canvas = /** @type HTMLCanvasElement */ document.getElementById('render-surface');
    let overlay = document.getElementById('overlay');
    let consoleHost = document.getElementById('console');
    let dockCommand = document.getElementById('dock-command');
    let undockCommand = document.getElementById('undock-command');
    overlay.innerHTML = '';

    context.DOM.canvas = canvas;
    context.DOM.overlay = overlay;
    context.DOM.console = consoleHost;
    context.DOM.dockCommand = dockCommand;
    context.DOM.undockCommand = undockCommand;

    context.api.say = say;
    context.api.target.set = ITarget.set;
    context.api.target.clear = ITarget.clear;

    let engine = new BABYLON.Engine(canvas, true);
    context.BABYLON.engine = engine;

    var level = context.levels.filter(currentLevel => currentLevel.id === levelId)[0];
    if (!level) throw 'no level found';

    let scene = yield provider.createBabylonSceneAsync(levelId);
    context.BABYLON.scene = scene;

    console.info('Loading level script...');
    context.script = new Script(yield provider.getSceneScript(levelId));

    console.info('Loading planets...');
    let planets = [for(mesh of scene.meshes.filter(mesh => mesh.name.match(Planet.nameRegex)))
        new Planet({
            mesh: mesh,
            metadata: [for (info of level.planets || []) if(info.id == mesh.name) info]
        })];
    context.planets = [for (planet of planets) if(planet.isActive) planet];
    yield Promise.all([for (planet of planets) planet.initializeAsync()]);

    console.info('Loading satellites...');
    let satellites = [for (mesh of scene.meshes.filter(mesh => mesh.name.match(Satellite.nameRegex))) new Satellite(mesh)];
    context.satellites = satellites;
    yield Promise.all([for (satellite of satellites) satellite.initializeAsync({
        moment: Math.PI * 0.081,
        planet: context.planets[0]
    })]);
    context.DOM.dockCommand.satellite = satellites[0];
    context.DOM.undockCommand.satellite = satellites[0];

    console.info('Loading ship...');
    let shipMesh = scene.getMeshByID('ship');
    let ship = new Ship({mesh: shipMesh, velocity: {x: 1.0, y: 0}, mass: 100});
    context.ship = ship;
    yield ship.initializeAsync();

    console.info('Loading camera...');
    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0.0000000000000001);
    let camera = new BABYLON.FreeCamera("camera-ship", new BABYLON.Vector3(0, 0, -30), scene);
    context.BABYLON.camera = camera;
    camera.fov = 0.3;
    camera.rotation = new BABYLON.Vector3(0, 0, 0);
    //camera.attachControl(canvas, false);

    console.info('Loading stars...');
    for (var pointSize = 1; pointSize <= 3; pointSize++) {
        let starsMesh3 = new BABYLON.Mesh(`stars${pointSize}`, scene);
        {
            const radius = 80;
            const depth = 100;
            const minZ = -1;
            let starsMaterial = new BABYLON.StandardMaterial(`starsMaterial${pointSize}`, scene);
            starsMaterial.pointsCloud = true;
            starsMaterial.pointSize = pointSize;
            starsMaterial.emissiveColor = new BABYLON.Color3(0.8, 0.8, 0.8);
            starsMesh3.material = starsMaterial;
            starsMaterial.backFaceCulling = false;

            let vertices = [];
            for (var i = 0; i < 500; i++) {
                vertices.push(Math.random() * radius - radius / 2, Math.random() * radius - radius / 2, minZ + Math.random() * depth);
            }

            starsMesh3.setVerticesData(BABYLON.VertexBuffer.PositionKind, vertices, true);
        }
    }

    console.info('The level is initialized.');
});

export function start() {
    console.info('Launching level...');

    const easingCoef = 0.1;

    let engine = context.BABYLON.engine;
    let canvas = context.DOM.canvas;
    let scene = context.BABYLON.scene;
    let camera = context.BABYLON.camera;
    let ship = context.ship;
    let shipMesh = ship.BABYLON.mesh;

    console.info('Compiling level script');
    context.script.initialize.apply(context);

    engine.runRenderLoop(function () {

        camera.position.x += (shipMesh.position.x - camera.position.x) * easingCoef;
        camera.position.y += (shipMesh.position.y - camera.position.y) * easingCoef;

        for (let planet of context.planets) planet.updating();
        for (let satellite of context.satellites) satellite.updating();
        ship.updating();

        for (let planet of context.planets)planet.update();
        for (let satellite of context.satellites) satellite.update();
        ship.update();
        if (context.target)context.target.update();


        for (let planet of context.planets) planet.updated();
        for (let satellite of context.satellites) satellite.updated();
        ship.updated();

        context.script.step.apply(context);
        if (context.ship.crashing && !context.ship.dead) {
            console.debug('Invoking script.crash');
            context.script.crash.apply(context);
        }

        for (let planet of context.planets)planet.render();
        for (let satellite of context.satellites) satellite.render();
        ship.render();
        if (context.target) context.target.render();

        scene.render();
    });

    //scene.debugLayer.show();
    window.addEventListener("resize", () => engine.resize());
    canvas.addEventListener('mousedown', e => ship.startEngine({x: e.x, y: e.y}));
    canvas.addEventListener('mouseup', e => ship.stopEngine());
    context.DOM.dockCommand.addEventListener('click', () => context.DOM.dockCommand.satellite.requestDocking());
    context.DOM.undockCommand.addEventListener('click', () => context.DOM.undockCommand.satellite.undock());

    console.info('The level is ready. The loop has started');
}

/**
 * Displays a message to the screen
 * @param message
 */
function say(message) {
    let htmlElement = document.createElement('LI');
    htmlElement.innerText = message;
    context.DOM.console.appendChild(htmlElement);
    let dispose = function () {
        context.DOM.console.removeChild(this);
    }.bind(htmlElement);
    setTimeout(dispose, 20000);
}