import context from 'context';

const velocityCoef = 0.002;

export default class Com {
    /**
     *
     * @param {{satellite: Satellite, radius: number}} config
     */
    constructor(config) {
        this.satellite = config.satellite;
        this.active = false;
        this.count = 20;
        this.iterationCoef = 0;
        this.opacity = 1;
        this.radius = config.radius;

        this.BABYLON = {
            com: create.apply(this)
        };
    }

    start() {
        this.active = true;
    }

    stop() {
        this.active = false;
    }

    update() {
        for(let billboard of this.BABYLON.com.billboards) {
            billboard.position.x = this.satellite.position.x;
            billboard.position.y = this.satellite.position.y;
        }

        this.iterationCoef = (this.iterationCoef + velocityCoef) % 1;

        if(this.active) {
            this.opacity += (1 - this.opacity) * 0.05;
        } else if(this.opacity > 0) {
            this.opacity -= this.opacity * 0.05;
        }

    }

    render() {
        if(this.opacity > 0) {

            if(!this.active && this.opacity < 0.1) {
                this.opacity = 0;
            }

            for (let i = 0; i < this.count; i++) {
                /** @type BABYLON.Mesh */
                let mesh = this.BABYLON.com.billboards[i];

                let scale = (this.iterationCoef + i / this.count) % 1;
                mesh.scaling.x = scale;
                mesh.scaling.y = scale;
                mesh.visibility = (1 - scale)* this.opacity;
            }
        }
    }
}

/**
 * @this {Com}
 */
function disposeSprite() {

}

/**
 * @this {Com}
 * @return {{billboards: Array<BABYLON.Mesh>, material: BABYLON.Material}}
 */
function create() {
    let scene = context.BABYLON.scene;

    let billboards = [];
    let texture = new BABYLON.Texture('data/objects/satellite/com-sprite.png', scene);
    texture.hasAlpha = true;
    let material = new BABYLON.StandardMaterial("satellite-com-material", scene);
    material.backFaceCulling = false;
    material.useAlphaFromDiffuseTexture = true;
    material.diffuseTexture = texture;
    material.specularColor = new BABYLON.Color3(0,0,0);

    for(let i = 0; i < this.count; i++) {
        let mesh = BABYLON.Mesh.CreatePlane(`satellite-com-${i}`, this.radius * 2, scene);
        //mesh.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;
        mesh.material = material;
        //mesh.parent = this.satellite.BABYLON.mesh;
        billboards.push(mesh);
        //mesh.visibility = 0.5;
    }

    return {
        billboards: billboards,
        material: material
    };
}