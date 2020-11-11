import context from 'context';
import Trail from './_Satellite/Trail';
import Selection from './_Satellite/Selection';
import Com from './_Satellite/Com';
import VerletObject from './core/VerletObject';

const hookDistanceTrigger = 0.1;
const communicationDistanceTrigger = 3;

export default class Satellite extends VerletObject {

    /**
     *
     * @param mesh
     */
    constructor(mesh) {
        super({mesh: mesh});

        this.shipInRange = false;
        this.canHook = true;
        this.dockRequested = false;
        this.docked = false;
        this.refuelingCompleted = false;
        this.trail = new Trail({satellite: this});
        this.selection = new Selection({satellite: this});
        this.com = new Com({satellite: this, radius: communicationDistanceTrigger});

        this.DOM = {
            /** @type HTMLElement */
            overlay: null
        };
    }

    requestDocking() {
        if(this.shipInRange) {
            if(!this.docked) {
                this.say('you are clear to dock');
                this.dockRequested = true;
                this.selection.start();
            }
        } else {
            context.api.say('Unable to communicate with the satellite');
        }
    }

    undock() {
        if(this.docked) {
            this.say("undocking...");
            this.selection.stop();
            this.com.start();
        }

        this.dockRequested = false;
    }


    /**
     * @param {{moment: number, planet: Planet}} config
     */
    initializeAsync(config) {

        let overlay = document.createElement('DIV');
        this.DOM.overlay = overlay;
        overlay.style.position = 'absolute';
        overlay.style.left = 0;
        overlay.style.top = 0;
        overlay.style.width = 0;
        overlay.style.height = 0;
        context.DOM.overlay.appendChild(overlay);

        let stats = document.createElement('UL');
        this.DOM.stats = stats;
        stats.style.position = 'absolute';
        stats.className='dialog-content';
        overlay.appendChild(stats);

        let scene = context.BABYLON.scene;

        this.moment = config.moment;
        this.planet = config.planet;
        this.orbits = !!this.planet;
        if (this.orbits) {
            this.radius = BABYLON.Vector2.Distance(this.planet.position, this.position);
            this.angle = Math.atan2(this.position.y, this.position.x);
        }

        this.trail.start();

        return new Promise(resolve => {

            let satelliteMesh = scene.getMeshByID('satellite');
            let material = new BABYLON.StandardMaterial('satelliteDiffuseMaterial', scene);
            material.diffuseTexture = new BABYLON.Texture('data/objects/satellite/diffuse.png', scene);
            material.specularColor = new BABYLON.Color3(0, 0, 0);
            satelliteMesh.material = material;

            resolve();
        });
    }

    update() {
        super.update();

        let last = {x: this.position.x, y: this.position.y};
        let ship = context.ship;

        if (this.orbits) {
            this.angle -= this.moment * context.stepRate;
            this.position.x = this.radius * Math.cos(this.angle) + this.planet.position.x;
            this.position.y = this.radius * Math.sin(this.angle) + this.planet.position.y;
        }

        let shipInRange = this.distance < communicationDistanceTrigger;
        if(this.shipInRange != shipInRange) {
            if(shipInRange) {
                this.say('ship in range :: communication on');
                this.com.start();
            } else {
                this.say('out of range :: disconnected');
                this.selection.stop();
                this.com.stop();
            }

            this.shipInRange = shipInRange;
            this.dockRequested &= shipInRange;
        }

        if (this.canHook && this.dockRequested) {
            if (this.distance < hookDistanceTrigger) {

                if(!this.docked) {
                    this.say('ship, docked and locked.');
                    this.say('refueling has started...');
                    this.refuelingCompleted = false;
                    this.selection.stop();
                    this.com.stop();
                    this.docked = true;
                }

                if(ship.refuel() && !this.refuelingCompleted){
                    this.say('refueling completed.');
                }

                ship.hooked = true;
                ship.position.x += this.position.x - last.x;
                ship.position.y += this.position.y - last.y;
                ship.position.x += (this.position.x - ship.position.x) * 0.03;
                ship.position.y += (this.position.y - ship.position.y) * 0.03;
            }
        } else {
            this.docked = false;
        }

        this.selection.update();
        this.com.update();
    }

    render() {
        super.render();

        let mesh = this.BABYLON.mesh;
        this.BABYLON.mesh.position.x = this.position.x;
        this.BABYLON.mesh.position.y = this.position.y;

        let projection = BABYLON.Vector3.Project(mesh.position,
            BABYLON.Matrix.Identity(),
            context.BABYLON.scene.getTransformMatrix(),
            context.BABYLON.camera.viewport.toGlobal(context.BABYLON.engine));
        let overlay = this.DOM.overlay;
        overlay.style.left = projection.x.toFixed(1) + 'px';
        overlay.style.top = projection.y.toFixed(1) + 'px';

        this.selection.render();
        this.com.render();
    }

    say(message) {
        let htmlElement = document.createElement('LI');
        let container = this.DOM.stats;
        htmlElement.innerText = message;
        container.appendChild(htmlElement);
        let dispose = function () {
            container.removeChild(this);
        }.bind(htmlElement);
        setTimeout(dispose, 10000);
    }
}

Satellite.nameRegex = /^satellite[^\.]*/;