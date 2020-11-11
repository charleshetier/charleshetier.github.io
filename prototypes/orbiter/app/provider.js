import context from 'context';

export function createBabylonSceneAsync(levelId) {
    return new Promise((resolve, reject) => {
        BABYLON.SceneLoader.Load(
            `data/scenes/${levelId}/`,
            'scene.babylon',
            context.BABYLON.engine,
            function(scene) {
                console.log('test');
                resolve(scene); });
    });
}

export function getObjectMetadata(objectId) {
    return $.ajax(`data/objects/${objectId}/metadata.json`);
}

//export function getPlanetAtmosphere(planetId) {
//    return $.ajax(`data/objects/${planetId}/atmosphere.png`);
//}

export function getSceneScript(levelId) {
    return $.ajax(`data/scenes/${levelId}/scene.js`)
}

export function getLevels() {
    return $.ajax('data/levels.json', {method: 'GET'});
}