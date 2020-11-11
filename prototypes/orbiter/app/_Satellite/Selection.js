import context from 'context';

const maxSize = 0.7;
const minSize = 0.4;

export default class Selection {
    /**
     *
     * @param {{satellite: Satellite}} config
     */
    constructor(config) {
        this.satellite = config.satellite;
        this.active = false;

        this.BABYLON = {
            selection: create.apply(this)
        };
    }

    start() {
        if (this.BABYLON.selection.sprite) this.BABYLON.selection.sprite.dispose();

        let spriteManager = this.BABYLON.selection.spriteManager;
        let sprite = new BABYLON.Sprite('satellite-selection', spriteManager);
        sprite.size = 0;
        this.BABYLON.selection.sprite = sprite;
        this.BABYLON.selection.targetedSize = maxSize;
        this.BABYLON.selection.transitionCoef = 0.1;
        this.active = true;
    }

    stop() {
        this.active = false;
        this.BABYLON.selection.targetedSize = 0;
        this.BABYLON.selection.transitionCoef = 0.1;
    }

    update() {
        if (this.BABYLON.selection.sprite) {
            this.BABYLON.selection.sprite.size += (this.BABYLON.selection.targetedSize - this.BABYLON.selection.sprite.size) * this.BABYLON.selection.transitionCoef;
            if (Math.abs(this.BABYLON.selection.sprite.size - this.BABYLON.selection.targetedSize) < 0.1) {
                if(this.active) {
                    this.BABYLON.selection.targetedSize = this.BABYLON.selection.targetedSize === maxSize ? minSize : maxSize;
                    this.BABYLON.selection.transitionCoef = 0.01;
                } else {
                    disposeSprite.apply(this);
                }
            }
        }
    }

    render() {
        if (this.BABYLON.selection.sprite) {
            this.BABYLON.selection.sprite.position.x = this.satellite.position.x;
            this.BABYLON.selection.sprite.position.y = this.satellite.position.y;
        }
    }
}

/**
 * @this {Com}
 */
function disposeSprite() {
    if (this.BABYLON.selection.sprite) {
        this.BABYLON.selection.sprite.dispose();
        this.BABYLON.selection.sprite = null;
    }
}

/**
 * @this {Com}
 * @return {{spriteManager: BABYLON.SpriteManager, sprite: BABYLON.Sprite}}
 */
function create() {
    let scene = context.BABYLON.scene;
    let spriteManager = new BABYLON.SpriteManager('satellite-selectionSpriteManager', 'data/objects/satellite/selection-sprite.png', 90, 90, scene);
    return {
        spriteManager: spriteManager,
        sprite: null,
        targetedSize: 1,
        transitionCoef: 0.1
    };
}