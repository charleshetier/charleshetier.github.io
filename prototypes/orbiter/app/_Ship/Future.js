"use strict";
import context from 'context';
import * as physic from 'physic';

/** The multiplicator to apply to the stepRate to apply to the physic */
const stepRateCoef = 20;

/** The nb of future positions computed */
const futurePositionsAmount = 30;

export default class Future {

    /**
     *
     * @param {{ship: Ship}} config
     */
    constructor(config) {
        this.ship = config.ship;

        /**
         * The future positions of the related ship
         * @type Array<Position2D>
         */
        this.positions = [];

        this.BABYLON = {
            /** @type {BABYLON.Mesh} */
            path: null
        }
    }

    update() {

    }

    render() {
        let ghost = createTransientShip(this.ship);
        this.positions = computeFuturePositions(ghost);

        createFuturePath.apply(this);
        drawFuturePath.apply(this);
    }
}

/**
 * @this Future
 */
function drawFuturePath() {
    let path = this.BABYLON.path;

    let vertices = [];
    let normals = [];
    let uvs = [];
    let indices = [];

    for (var position of this.positions) {

        let indiceRef = vertices.length / 3;

        vertices.push(position.x - 0.01, position.y + 0.01, 0);
        normals.push(0, 0, 1);
        uvs.push(0, 0);

        vertices.push(position.x + 0.01, position.y - 0.01, 0);
        normals.push(0, 0, 1);
        uvs.push(0, 0);

        vertices.push(position.x - 0.01, position.y - 0.01, 0);
        normals.push(0, 0, 1);
        uvs.push(0, 0);

        vertices.push(position.x + 0.01, position.y + 0.01, 0);
        normals.push(0, 0, 1);
        uvs.push(0, 0);

        indices.push(indiceRef, indiceRef + 1, indiceRef + 2);
        indices.push(indiceRef, indiceRef + 3, indiceRef + 1);
    }

    path.setVerticesData(BABYLON.VertexBuffer.PositionKind, vertices, true);
    path.setVerticesData(BABYLON.VertexBuffer.NormalKind, normals, true);
    path.setIndices(indices);
    path.visibility = 0.6;
}

/**
 * @this Future
 */
function createFuturePath() {

    const futurePathMeshName = 'ShipFuturePathMesh';
    const futurePathMaterialName = 'ShipFuturePathMaterial';
    let scene = context.BABYLON.scene;

    if (!this.BABYLON.path) {

        let path = new BABYLON.Mesh(futurePathMeshName, scene);

        /** @type {BABYLON.Material} */
        let material = new BABYLON.StandardMaterial(futurePathMaterialName, scene);
        material.emissiveColor = new BABYLON.Color3(1, 1, 1);
        material.backFaceCulling = false;
        path.material = material;

        this.BABYLON.path = path;
    }
}

/**
 *
 * @param {VerletObject} ship
 * @return Array<Position2D>
 */
function computeFuturePositions(ship) {

    let positions = [];

    for (var i = 0; i < futurePositionsAmount; i++) {
        let planetStrengths = context.planets.map(planet => physic.gravity(planet)(ship));
        let lastX = ship.position.x;
        let lastY = ship.position.y;
        physic.apply(planetStrengths, context.stepRate * stepRateCoef)(ship);
        ship.last.position.x = lastX;
        ship.last.position.y = lastY;

        if (i > 0) positions.push({x: ship.position.x, y: ship.position.y});
    }

    return positions;
}

/**
 *
 * @param {Ship} fromShip
 * @return VerletObject
 */
function createTransientShip(fromShip) {
    let position = {x: fromShip.position.x, y: fromShip.position.y};
    let distanceFromLast = {
        x: position.x - fromShip.last.position.x,
        y: position.y - fromShip.last.position.y
    };
    let lastPosition = {
        x: position.x - distanceFromLast.x * stepRateCoef,
        y: position.y - distanceFromLast.y * stepRateCoef
    };
    return {
        position: position,
        last: {position: lastPosition},
        mass: fromShip.mass
    };
}