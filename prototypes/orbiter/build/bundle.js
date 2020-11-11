(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = require("babel-core/polyfill");

},{"babel-core/polyfill":118}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _context = require("context");

var _context2 = _interopRequireDefault(_context);

"use strict";

/**
 * @abstract
 * @property {Position2D} position
 * @property {boolean} hit
 * @property {boolean} entering
 * @property {boolean} leaving
 */

var ITarget = (function () {
    function ITarget() {
        _classCallCheck(this, ITarget);
    }

    _createClass(ITarget, [{
        key: "dispose",
        value: function dispose() {}
    }, {
        key: "update",
        value: function update() {}
    }, {
        key: "render",
        value: function render() {}
    }], [{
        key: "set",
        value: function set(config) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = ITarget.targetSelectionChainOfResponsibility[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var handler = _step.value;

                    var target = handler(config);
                    if (target) {
                        _context2["default"].target = target;
                        return _context2["default"].target;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator["return"]) {
                        _iterator["return"]();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: "clear",
        value: function clear() {
            removeCurrentTarget();
        }
    }]);

    return ITarget;
})();

exports["default"] = ITarget;

ITarget.targetSelectionChainOfResponsibility = [];

function removeCurrentTarget() {
    if (_context2["default"].target) {
        _context2["default"].target.dispose();
        _context2["default"].target = null;
    }
}
module.exports = exports["default"];

},{"context":22}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _system = require('system');

var _provider = require('./provider');

var provider = _interopRequireWildcard(_provider);

var _context = require('context');

var _context2 = _interopRequireDefault(_context);

var _coreVerletObject = require('./core/VerletObject');

var _coreVerletObject2 = _interopRequireDefault(_coreVerletObject);

'use strict';

var Planet = (function (_VerletObject) {

    /**
     * Initializes a new instance of Planet
     * @param {{mesh: BABYLON.Mesh, metadata: Array<PlanetInfo>}} config
     */

    function Planet(config) {
        _classCallCheck(this, Planet);

        _get(Object.getPrototypeOf(Planet.prototype), 'constructor', this).call(this, config);

        var mesh = config.mesh;
        this.id = mesh.name;
        this.BABYLON = { mesh: mesh };

        /**
         * Determines whether the current planet instance has atmosphere
         * @type boolean
         */
        this.atmosphere = !!(function () {
            var _length = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = config.metadata[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var info = _step.value;

                    if (info.atmosphere) {
                        _length.push(info);
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return _length;
        })().length;

        /**
         * Determines whether the current planet is taken into account in physics
         * @type {boolean}
         */
        this.isActive = mesh.position.z === 0;

        /**
         * The radius of the current Planet
         * @type number
         * */
        this.radius = undefined;
    }

    _inherits(Planet, _VerletObject);

    _createClass(Planet, [{
        key: 'initializeAsync',

        /**
         *
         * @return Promise<Planet>
         */
        value: function initializeAsync() {

            var scene = _context2['default'].BABYLON.scene;

            return _system.async(regeneratorRuntime.mark(function callee$2$0() {
                var metadata, material;
                return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            console.info('Loading planet [' + this.id + '] data...');
                            context$3$0.next = 3;
                            return provider.getObjectMetadata(this.id);

                        case 3:
                            metadata = context$3$0.sent;

                            if (this.atmosphere) {}

                            if (metadata) {
                                context$3$0.next = 9;
                                break;
                            }

                            throw 'No metadata found for planet id ' + this.id + '}';

                        case 9:
                            if (!metadata.radius) console.warn('No radius found in metadata for planet id ' + this.id + '}');

                        case 10:
                            this.radius = metadata.radius;

                            material = new BABYLON.StandardMaterial('' + this.id + '_material', scene);

                            material.emissiveTexture = new BABYLON.Texture('data/objects/' + this.id + '/diffuse.png', scene);
                            material.diffuseColor = new BABYLON.Color3(0, 0, 0);
                            material.specularColor = new BABYLON.Color3(0, 0, 0);

                            this.BABYLON.mesh.material = material;

                            return context$3$0.abrupt('return', this);

                        case 17:
                        case 'end':
                            return context$3$0.stop();
                    }
                }, callee$2$0, this);
            }).bind(this))();
        }
    }, {
        key: 'update',
        value: function update() {
            _get(Object.getPrototypeOf(Planet.prototype), 'update', this).call(this);
        }
    }, {
        key: 'render',
        value: function render() {
            _get(Object.getPrototypeOf(Planet.prototype), 'render', this).call(this);
        }
    }, {
        key: 'hit',

        /**
         * Determines whether the body has hit the current planet instance
         * @param {VerletObject} body
         */
        value: function hit(body) {
            var centerDistance = BABYLON.Vector2.Distance(body.position, this.position);
            return centerDistance < this.radius;
        }
    }]);

    return Planet;
})(_coreVerletObject2['default']);

exports['default'] = Planet;

Planet.nameRegex = /^planet[^\.]*/;

function create() {
    var scene = _context2['default'].BABYLON.scene;

    var particleHost = BABYLON.Mesh.CreateBox('planet-atmosphereHost', 0.1, scene);
    particleHost.visibility = 0;
    particleHost.parent = this.BABYLON.mesh;
    particleHost.position.z = 0.15;

    var particleSystem = new BABYLON.ParticleSystem('planet-atmosphere', 7, scene);
    particleSystem.particleTexture = new BABYLON.Texture('data/objects/' + this.id + '/atmosphere.png', scene);
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
    particleSystem.emitter = particleHost;

    particleSystem.minEmitBox = new BABYLON.Vector3(0, 0, 0);
    particleSystem.maxEmitBox = new BABYLON.Vector3(0, 0, 0);
    particleSystem.emitRate = 1;

    var size = 6;
    particleSystem.maxSize = size + 1;
    particleSystem.minSize = size;

    particleSystem.direction1 = new BABYLON.Vector3(0, 0, 0);
    particleSystem.direction2 = new BABYLON.Vector3(0, 0, 0);

    particleSystem.minAngularSpeed = -1;
    particleSystem.maxAngularSpeed = 1;

    var lifeTime = 7;
    particleSystem.maxLifeTime = lifeTime;
    particleSystem.minLifeTime = lifeTime;

    return {
        particleSystem: particleSystem,
        host: particleHost
    };
}
module.exports = exports['default'];

//let particles = create.apply(this);
//particles.particleSystem.start();

},{"./core/VerletObject":25,"./provider":29,"context":22,"system":30}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _context = require('context');

var _context2 = _interopRequireDefault(_context);

var _SatelliteTrail = require('./_Satellite/Trail');

var _SatelliteTrail2 = _interopRequireDefault(_SatelliteTrail);

var _SatelliteSelection = require('./_Satellite/Selection');

var _SatelliteSelection2 = _interopRequireDefault(_SatelliteSelection);

var _SatelliteCom = require('./_Satellite/Com');

var _SatelliteCom2 = _interopRequireDefault(_SatelliteCom);

var _coreVerletObject = require('./core/VerletObject');

var _coreVerletObject2 = _interopRequireDefault(_coreVerletObject);

var hookDistanceTrigger = 0.1;
var communicationDistanceTrigger = 3;

var Satellite = (function (_VerletObject) {

    /**
     *
     * @param mesh
     */

    function Satellite(mesh) {
        _classCallCheck(this, Satellite);

        _get(Object.getPrototypeOf(Satellite.prototype), 'constructor', this).call(this, { mesh: mesh });

        this.shipInRange = false;
        this.canHook = true;
        this.dockRequested = false;
        this.docked = false;
        this.refuelingCompleted = false;
        this.trail = new _SatelliteTrail2['default']({ satellite: this });
        this.selection = new _SatelliteSelection2['default']({ satellite: this });
        this.com = new _SatelliteCom2['default']({ satellite: this, radius: communicationDistanceTrigger });

        this.DOM = {
            /** @type HTMLElement */
            overlay: null
        };
    }

    _inherits(Satellite, _VerletObject);

    _createClass(Satellite, [{
        key: 'requestDocking',
        value: function requestDocking() {
            if (this.shipInRange) {
                if (!this.docked) {
                    this.say('you are clear to dock');
                    this.dockRequested = true;
                    this.selection.start();
                }
            } else {
                _context2['default'].api.say('Unable to communicate with the satellite');
            }
        }
    }, {
        key: 'undock',
        value: function undock() {
            if (this.docked) {
                this.say('undocking...');
                this.selection.stop();
                this.com.start();
            }

            this.dockRequested = false;
        }
    }, {
        key: 'initializeAsync',

        /**
         * @param {{moment: number, planet: Planet}} config
         */
        value: function initializeAsync(config) {

            var overlay = document.createElement('DIV');
            this.DOM.overlay = overlay;
            overlay.style.position = 'absolute';
            overlay.style.left = 0;
            overlay.style.top = 0;
            overlay.style.width = 0;
            overlay.style.height = 0;
            _context2['default'].DOM.overlay.appendChild(overlay);

            var stats = document.createElement('UL');
            this.DOM.stats = stats;
            stats.style.position = 'absolute';
            stats.className = 'dialog-content';
            overlay.appendChild(stats);

            var scene = _context2['default'].BABYLON.scene;

            this.moment = config.moment;
            this.planet = config.planet;
            this.orbits = !!this.planet;
            if (this.orbits) {
                this.radius = BABYLON.Vector2.Distance(this.planet.position, this.position);
                this.angle = Math.atan2(this.position.y, this.position.x);
            }

            this.trail.start();

            return new Promise(function (resolve) {

                var satelliteMesh = scene.getMeshByID('satellite');
                var material = new BABYLON.StandardMaterial('satelliteDiffuseMaterial', scene);
                material.diffuseTexture = new BABYLON.Texture('data/objects/satellite/diffuse.png', scene);
                material.specularColor = new BABYLON.Color3(0, 0, 0);
                satelliteMesh.material = material;

                resolve();
            });
        }
    }, {
        key: 'update',
        value: function update() {
            _get(Object.getPrototypeOf(Satellite.prototype), 'update', this).call(this);

            var last = { x: this.position.x, y: this.position.y };
            var ship = _context2['default'].ship;

            if (this.orbits) {
                this.angle -= this.moment * _context2['default'].stepRate;
                this.position.x = this.radius * Math.cos(this.angle) + this.planet.position.x;
                this.position.y = this.radius * Math.sin(this.angle) + this.planet.position.y;
            }

            var shipInRange = this.distance < communicationDistanceTrigger;
            if (this.shipInRange != shipInRange) {
                if (shipInRange) {
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

                    if (!this.docked) {
                        this.say('ship, docked and locked.');
                        this.say('refueling has started...');
                        this.refuelingCompleted = false;
                        this.selection.stop();
                        this.com.stop();
                        this.docked = true;
                    }

                    if (ship.refuel() && !this.refuelingCompleted) {
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
    }, {
        key: 'render',
        value: function render() {
            _get(Object.getPrototypeOf(Satellite.prototype), 'render', this).call(this);

            var mesh = this.BABYLON.mesh;
            this.BABYLON.mesh.position.x = this.position.x;
            this.BABYLON.mesh.position.y = this.position.y;

            var projection = BABYLON.Vector3.Project(mesh.position, BABYLON.Matrix.Identity(), _context2['default'].BABYLON.scene.getTransformMatrix(), _context2['default'].BABYLON.camera.viewport.toGlobal(_context2['default'].BABYLON.engine));
            var overlay = this.DOM.overlay;
            overlay.style.left = projection.x.toFixed(1) + 'px';
            overlay.style.top = projection.y.toFixed(1) + 'px';

            this.selection.render();
            this.com.render();
        }
    }, {
        key: 'say',
        value: function say(message) {
            var htmlElement = document.createElement('LI');
            var container = this.DOM.stats;
            htmlElement.innerText = message;
            container.appendChild(htmlElement);
            var dispose = (function () {
                container.removeChild(this);
            }).bind(htmlElement);
            setTimeout(dispose, 10000);
        }
    }]);

    return Satellite;
})(_coreVerletObject2['default']);

exports['default'] = Satellite;

Satellite.nameRegex = /^satellite[^\.]*/;
module.exports = exports['default'];

},{"./_Satellite/Com":9,"./_Satellite/Selection":10,"./_Satellite/Trail":11,"./core/VerletObject":25,"context":22}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

/**
 * @property {Function} step
 * @property {Function} initialize
 * @property {Function} dispose
 * @property {Function} targetEntering
 * @property {Function} targetLeaving
 * @property {Function} crash
 */

var Script =

/**
 *
 * @param {String} script
 */
function Script(script) {
    _classCallCheck(this, Script);

    var proxyScript = '\n            (function() {\n\n                // == level custom script\n                ' + script + '\n                // == end of level custom script\n\n                ' + statementFor('step') + '\n                ' + statementFor('initialize') + '\n                ' + statementFor('dispose') + '\n                ' + statementFor('enteringPlanet') + '\n                ' + statementFor('leavingPlanet') + '\n                ' + statementFor('enteringCheckPoint') + '\n                ' + statementFor('leavingCheckPoint') + '\n                ' + statementFor('enteringSatelliteCom') + '\n                ' + statementFor('leavingSatelliteCom') + '\n                ' + statementFor('enteringSatelliteDock') + '\n                ' + statementFor('leavingSatelliteDock') + '\n                ' + statementFor('crash') + '\n            })';

    var proxyType = eval(proxyScript);
    var proxy = new proxyType();
    return proxy;
};

exports['default'] = Script;

function statementFor(member) {
    return '\n    try {\n        if(typeof ' + member + ' === \'function\') {\n            this.' + member + ' = ' + member + ';\n            console.debug(\'- "' + member + '" member: Yes\');\n        }\n        else {\n            this.' + member + ' = function() {};\n            console.debug(\'- "' + member + '" member: No\');\n        }\n    } catch(e) {\n        this.' + member + ' = function() {};\n        console.debug(\'- "' + member + '" member: No\');\n}';
}
module.exports = exports['default'];

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _context = require('context');

var _context2 = _interopRequireDefault(_context);

var _physic = require('physic');

var physic = _interopRequireWildcard(_physic);

var _system = require('system');

var _ShipEngine = require('./_Ship/Engine');

var _ShipEngine2 = _interopRequireDefault(_ShipEngine);

var _ShipHud = require('./_Ship/Hud');

var _ShipHud2 = _interopRequireDefault(_ShipHud);

var _ShipFuture = require('./_Ship/Future');

var _ShipFuture2 = _interopRequireDefault(_ShipFuture);

var _ShipTrail = require('./_Ship/Trail');

var _ShipTrail2 = _interopRequireDefault(_ShipTrail);

var _ShipExplosion = require('./_Ship/Explosion');

var _ShipExplosion2 = _interopRequireDefault(_ShipExplosion);

var _coreVerletObject = require('./core/VerletObject');

var _coreVerletObject2 = _interopRequireDefault(_coreVerletObject);

var Ship = (function (_VerletObject) {
    function Ship(config) {
        var _this2 = this;

        _classCallCheck(this, Ship);

        _get(Object.getPrototypeOf(Ship.prototype), 'constructor', this).call(this, config);

        if (_context2['default'].debug) {
            window.addEventListener('keydown', function (e) {
                if (e.keyCode === 69) {
                    // E
                    _this2.explode();
                }
            });
        }

        this.dead = false;
        this.crashing = false;

        /**
         * Determines whether another process handles update for next step
         * @type {boolean}
         */
        this.hooked = false;

        /**
         * @type Engine
         */
        this.engine = new _ShipEngine2['default']({ ship: this });

        /**
         * @type Hud
         */
        this.hud = new _ShipHud2['default']({ ship: this });

        /**
         * @type Future
         */
        this.future = new _ShipFuture2['default']({ ship: this });

        this.trail = new _ShipTrail2['default']({ ship: this });

        this.DOM = {
            /** @type HTMLElement */
            overlay: null
        };
    }

    _inherits(Ship, _VerletObject);

    _createClass(Ship, [{
        key: 'initializeAsync',

        /**
         *
         * @return Promise<Ship>
         */
        value: function initializeAsync() {

            var overlay = document.createElement('DIV');
            this.DOM.overlay = overlay;
            overlay.style.position = 'absolute';
            overlay.style.left = 0;
            overlay.style.top = 0;
            overlay.style.width = 0;
            overlay.style.height = 0;
            //overlay.style.border = '1px white solid';
            _context2['default'].DOM.overlay.appendChild(overlay);

            var stats = document.createElement('DIV');
            this.DOM.stats = stats;
            stats.style.position = 'absolute';
            stats.style.left = '40px';
            stats.style.bottom = '40px';
            stats.style.width = '70px';
            stats.className = 'info';
            overlay.appendChild(stats);

            var fuelContainer = document.createElement('DIV');
            fuelContainer.className = 'fuel';
            var fuelJauge = document.createElement('DIV');
            fuelJauge.className = 'indice';
            fuelContainer.appendChild(fuelJauge);
            this.DOM.fuel = {
                container: fuelContainer,
                jauge: fuelJauge
            };

            overlay.appendChild(fuelContainer);

            var scene = _context2['default'].BABYLON.scene;
            var mesh = this.BABYLON.mesh;

            this.trail.start();

            return _system.async(regeneratorRuntime.mark(function callee$2$0() {
                var material;
                return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            console.info('Loading ship data...');

                            material = new BABYLON.StandardMaterial('material3', scene);

                            material.diffuseTexture = new BABYLON.Texture('data/objects/ship/diffuse.png', scene);
                            material.specularColor = new BABYLON.Color3(0, 0, 0);
                            mesh.material = material;
                            context$3$0.next = 7;
                            return new Promise(function (resolve) {
                                return resolve();
                            });

                        case 7:
                            return context$3$0.abrupt('return', this);

                        case 8:
                        case 'end':
                            return context$3$0.stop();
                    }
                }, callee$2$0, this);
            }).bind(this))();
        }
    }, {
        key: 'update',

        /**
         * Updates the ship
         * @this Ship
         */
        value: function update() {
            var _this3 = this;

            _get(Object.getPrototypeOf(Ship.prototype), 'update', this).call(this);

            if (this.crashing) {
                this.dead = true;
                return;
            }

            if (!this.hooked) {
                var engineStrengthCoef = 25;

                var planetStrengths = _context2['default'].planets.map(function (planet) {
                    return physic.gravity(planet)(_this3);
                });
                var engineStrength = this.engine.active ? {
                    x: -Math.cos(this.engine.angle) * engineStrengthCoef,
                    y: -Math.sin(this.engine.angle) * engineStrengthCoef
                } : { x: 0, y: 0 };

                var strengths = [engineStrength].concat(planetStrengths);

                physic.apply(strengths, _context2['default'].stepRate)(this);
            }

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = _context2['default'].planets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var planet = _step.value;

                    if (planet.hit(this)) {
                        console.info('The ship has collided with "' + planet.id + '":');
                        console.log(planet);
                        this.explode();
                        return;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.engine.update();
            this.hooked = false;
            this.hud.update();
            this.future.update();
            this.trail.update();
        }
    }, {
        key: 'render',

        /**
         * Renders the ship
         */
        value: function render() {
            _get(Object.getPrototypeOf(Ship.prototype), 'render', this).call(this);

            var mesh = this.BABYLON.mesh;
            mesh.position.x = this.position.x;
            mesh.position.y = this.position.y;

            var projection = BABYLON.Vector3.Project(mesh.position, BABYLON.Matrix.Identity(), _context2['default'].BABYLON.scene.getTransformMatrix(), _context2['default'].BABYLON.camera.viewport.toGlobal(_context2['default'].BABYLON.engine));
            var overlay = this.DOM.overlay;
            overlay.style.left = projection.x.toFixed(1) + 'px';
            overlay.style.top = projection.y.toFixed(1) + 'px';

            var stats = this.DOM.stats;
            stats.innerHTML = '<div>x: ' + this.position.x.toFixed(2) + '</div>\n            <div>y: ' + this.position.y.toFixed(2) + '</div>\n            <div>target: ' + (_context2['default'].target ? 'yes' : 'no') + '</div>';

            this.DOM.fuel.jauge.style.width = '' + this.engine.fuel.value * 100 / this.engine.fuel.capacity + '%';

            this.engine.render();
            this.hud.render();
            this.future.render();
            this.trail.render();
        }
    }, {
        key: 'explode',

        /**
         * Makes the current ship instance exploding
         */
        value: function explode() {
            this.crashing = true;
            console.debug('exploding...');
            this.dead = true;
            this.BABYLON.mesh.visibility = 0;
            new _ShipExplosion2['default'](this.position);
        }
    }, {
        key: 'startEngine',

        /**
         * Sets the engine of the current ship instance on
         */
        value: function startEngine(at) {
            this.engine.start(at);
        }
    }, {
        key: 'stopEngine',

        /**
         * Sets the engine of the current ship instance off
         */
        value: function stopEngine() {
            this.engine.stop();
        }
    }, {
        key: 'refuel',

        /**
         * Adds a step fuel to the engine.
         * @returns {boolean} true if the refueling has completed.
         */
        value: function refuel() {
            var newValue = this.engine.fuel.value + 2;
            this.engine.fuel.value = Math.min(newValue, this.engine.fuel.capacity);
            return newValue === this.engine.fuel.capacity;
        }
    }]);

    return Ship;
})(_coreVerletObject2['default']);

exports['default'] = Ship;
module.exports = exports['default'];

},{"./_Ship/Engine":12,"./_Ship/Explosion":13,"./_Ship/Future":14,"./_Ship/Hud":15,"./_Ship/Trail":16,"./core/VerletObject":25,"context":22,"physic":28,"system":30}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _context = require('context');

var _context2 = _interopRequireDefault(_context);

var _ITarget2 = require('./ITarget');

var _ITarget3 = _interopRequireDefault(_ITarget2);

_ITarget3['default'].targetSelectionChainOfResponsibility.push(setTarget);
function setTarget(config) {
    if (!config.planet) return;

    _ITarget3['default'].clear();
    return new TargetOrbit(config.planet);
}

var TargetOrbit = (function (_ITarget) {
    /**
     *
     * @param {Planet} planet
     */

    function TargetOrbit(planet) {
        _classCallCheck(this, TargetOrbit);

        _get(Object.getPrototypeOf(TargetOrbit.prototype), 'constructor', this).call(this);

        this._initialize = initialize.bind(this);
        this._start = start.bind(this);

        this.position = {
            x: planet.position.x,
            y: planet.position.y
        };

        /**
         * The targeted planet
         * @type {Planet}
         */
        this.planet = planet;

        /**
         * The size applied to the sprite
         * @type {number}
         */
        this.size = planet.radius * 3 + 4;

        this._initialize();
        this._start();

        this.hit = false;
        this.entering = false;
        this.leaving = false;
    }

    _inherits(TargetOrbit, _ITarget);

    _createClass(TargetOrbit, [{
        key: 'dispose',
        value: function dispose() {
            this.BABYLON.circle.sprite.dispose();
        }
    }, {
        key: 'update',
        value: function update() {

            var planetPosition = this.planet.position;
            var shipPosition = _context2['default'].ship.position;
            var distanceSquared = BABYLON.Vector2.DistanceSquared(planetPosition, shipPosition);

            //let maxSquaredDistance = 0;
            //let minSquaredDistance = 10000000;

            //for(var shipPosition of context.ship.future.positions) {
            //    let squaredDistance = BABYLON.Vector2.DistanceSquared(planetPosition, shipPosition);
            //    if(maxSquaredDistance < squaredDistance) maxSquaredDistance = squaredDistance;
            //    if(minSquaredDistance > squaredDistance) minSquaredDistance = squaredDistance;
            //}

            //let distanceSquaredDiff = maxSquaredDistance - minSquaredDistance;

            var intoOrbit = distanceSquared < this.planet.radius * this.planet.radius * 4; // &&distanceSquaredDiff < 10;

            this.entering = intoOrbit && !this.hit;
            this.leaving = !intoOrbit && this.hit;
            this.hit = intoOrbit;
        }
    }, {
        key: 'render',
        value: function render() {

            if (this.BABYLON.circle.sprite) {

                var sprite = this.BABYLON.circle.sprite;
                sprite.angle += 0.001;
            }
        }
    }]);

    return TargetOrbit;
})(_ITarget3['default']);

exports['default'] = TargetOrbit;

/**
 * @this TargetOrbit
 */
function start() {
    var position = this.position;

    {
        var sprite = new BABYLON.Sprite('targetOrbit-circle', this.BABYLON.circle.spriteManager);
        sprite.position.x = position.x;
        sprite.position.y = position.y;
        sprite.size = this.size;
        this.BABYLON.circle.sprite = sprite;
    }
}

/**
 * Initializes the TargetPoint global behavior
 * @this TargetOrbit
 */
function initialize() {
    var spriteLength = 1024;

    if (!TargetOrbit.initialized) {
        var scene = _context2['default'].BABYLON.scene;

        TargetOrbit.initialized = true;
        TargetOrbit.BABYLON = {};

        TargetOrbit.BABYLON.circle = {
            spriteManager: new BABYLON.SpriteManager('targetOrbit-circle', 'data/objects/targetOrbit/circle-sprite.png', spriteLength, spriteLength, scene),
            /** @type BABYLON.Sprite */
            sprite: null
        };
    }

    this.BABYLON = TargetOrbit.BABYLON;
}
module.exports = exports['default'];

},{"./ITarget":2,"context":22}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _context = require('context');

var _context2 = _interopRequireDefault(_context);

var _ITarget2 = require('./ITarget');

var _ITarget3 = _interopRequireDefault(_ITarget2);

_ITarget3['default'].targetSelectionChainOfResponsibility.push(setTarget);
function setTarget(config) {
    if (!config.position) return;

    _ITarget3['default'].clear();
    return new TargetPoint(config.position);
}

var TargetPoint = (function (_ITarget) {
    /**
     *
     * @param {Position2D} position
     */

    function TargetPoint(position) {
        _classCallCheck(this, TargetPoint);

        _get(Object.getPrototypeOf(TargetPoint.prototype), 'constructor', this).call(this);

        this._initialize = initialize.bind(this);
        this._start = start.bind(this);

        this.position = {
            x: position.x,
            y: position.y
        };

        /**
         * The distance from the ship
         * @type {number}
         */
        this.distance = 0;

        this._initialize();
        this._start();

        this.hit = false;
        this.entering = false;
        this.leaving = false;
    }

    _inherits(TargetPoint, _ITarget);

    _createClass(TargetPoint, [{
        key: 'dispose',
        value: function dispose() {
            this.BABYLON.inner1.sprite.dispose();
            this.BABYLON.inner1.sprite = null;
            this.BABYLON.inner2.sprite.dispose();
            this.BABYLON.inner2.sprite = null;
            this.BABYLON.inner3.sprite.dispose();
            this.BABYLON.inner3.sprite = null;
            this.BABYLON.triangle.sprite.dispose();
            this.BABYLON.triangle.sprite = null;
            this.BABYLON.outer1.sprite.dispose();
            this.BABYLON.outer1.sprite = null;
            this.BABYLON.outer2.sprite.dispose();
            this.BABYLON.outer2.sprite = null;
        }
    }, {
        key: 'update',
        value: function update() {
            var distanceSquared = BABYLON.Vector2.DistanceSquared(_context2['default'].ship.position, this.position);

            var lastHit = this.hit;
            this.hit = distanceSquared < 0.08;
            this.entering = !lastHit && this.hit;
            this.leaving = lastHit && !this.hit;
        }
    }, {
        key: 'render',
        value: function render() {
            {
                var sprite = this.BABYLON.outer2.sprite;
                sprite.angle += 0.01;
            }

            {
                var from = 0;
                var to = 5;
                var threshold = 0.1;
                var velocityCoefTo = 0.02;
                var velocityCoefFrom = 0.05;
                var sprite = this.BABYLON.outer1.sprite;

                if (this.BABYLON.outer2.reverse) {
                    sprite.angle += (to - sprite.angle) * velocityCoefTo;
                    this.BABYLON.outer2.reverse = !(Math.abs(sprite.angle - to) < threshold);
                } else {
                    sprite.angle += (from - sprite.angle) * velocityCoefFrom;
                    this.BABYLON.outer2.reverse = Math.abs(sprite.angle - from) < threshold;
                }
            }

            {
                var sprite = this.BABYLON.inner3.sprite;
                sprite.angle -= 0.02;
            }

            {
                var sprite = this.BABYLON.inner1.sprite;
                sprite.angle += 0.03;
            }
        }
    }]);

    return TargetPoint;
})(_ITarget3['default']);

exports['default'] = TargetPoint;

/**
 * @this TargetPoint
 */
function start() {

    var position = this.position;

    {
        var sprite = new BABYLON.Sprite('targetPoint-outer1', this.BABYLON.outer1.spriteManager);
        sprite.position.x = position.x;
        sprite.position.y = position.y;
        this.BABYLON.outer1.sprite = sprite;
    }

    {
        var sprite = new BABYLON.Sprite('targetPoint-outer2', this.BABYLON.outer2.spriteManager);
        sprite.position.x = position.x;
        sprite.position.y = position.y;
        this.BABYLON.outer2.sprite = sprite;
    }

    {
        var sprite = new BABYLON.Sprite('targetPoint-inner1', this.BABYLON.inner1.spriteManager);
        sprite.position.x = position.x;
        sprite.position.y = position.y;
        this.BABYLON.inner1.sprite = sprite;
    }

    {
        var sprite = new BABYLON.Sprite('targetPoint-inner2', this.BABYLON.inner2.spriteManager);
        sprite.position.x = position.x;
        sprite.position.y = position.y;
        this.BABYLON.inner2.sprite = sprite;
    }

    {
        var sprite = new BABYLON.Sprite('targetPoint-inner3', this.BABYLON.inner3.spriteManager);
        sprite.position.x = position.x;
        sprite.position.y = position.y;
        this.BABYLON.inner3.sprite = sprite;
    }

    {
        var sprite = new BABYLON.Sprite('targetPoint-triangle', this.BABYLON.triangle.spriteManager);
        sprite.position.x = position.x;
        sprite.position.y = position.y;
        this.BABYLON.triangle.sprite = sprite;
    }
}

/**
 * Initializes the TargetPoint global behavior
 * @this TargetPoint
 */
function initialize() {
    var spriteLength = 335;

    if (!TargetPoint.initialized) {
        var scene = _context2['default'].BABYLON.scene;

        TargetPoint.initialized = true;
        TargetPoint.BABYLON = {};

        TargetPoint.BABYLON.outer1 = {
            spriteManager: new BABYLON.SpriteManager('targetPoint-outer1', 'data/objects/targetPoint/outer-sprite1.png', spriteLength, spriteLength, scene),
            /** @type BABYLON.Sprite */
            sprite: null
        };
        TargetPoint.BABYLON.outer2 = {
            spriteManager: new BABYLON.SpriteManager('targetPoint-outer2', 'data/objects/targetPoint/outer-sprite2.png', spriteLength, spriteLength, scene),
            /** @type BABYLON.Sprite */
            sprite: null
        };
        TargetPoint.BABYLON.inner1 = {
            spriteManager: new BABYLON.SpriteManager('targetPoint-inner1', 'data/objects/targetPoint/inner-sprite1.png', spriteLength, spriteLength, scene),
            /** @type BABYLON.Sprite */
            sprite: null
        };
        TargetPoint.BABYLON.inner2 = {
            spriteManager: new BABYLON.SpriteManager('targetPoint-inner2', 'data/objects/targetPoint/inner-sprite2.png', spriteLength, spriteLength, scene),
            /** @type BABYLON.Sprite */
            sprite: null
        };
        TargetPoint.BABYLON.inner3 = {
            spriteManager: new BABYLON.SpriteManager('targetPoint-inner3', 'data/objects/targetPoint/inner-sprite3.png', spriteLength, spriteLength, scene),
            /** @type BABYLON.Sprite */
            sprite: null
        };
        TargetPoint.BABYLON.triangle = {
            spriteManager: new BABYLON.SpriteManager('targetPoint-triangle', 'data/objects/targetPoint/triangle-sprite.png', spriteLength, spriteLength, scene),
            /** @type BABYLON.Sprite */
            sprite: null
        };
    }

    this.BABYLON = TargetPoint.BABYLON;
}
module.exports = exports['default'];

},{"./ITarget":2,"context":22}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _context = require('context');

var _context2 = _interopRequireDefault(_context);

var velocityCoef = 0.002;

var Com = (function () {
    /**
     *
     * @param {{satellite: Satellite, radius: number}} config
     */

    function Com(config) {
        _classCallCheck(this, Com);

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

    _createClass(Com, [{
        key: 'start',
        value: function start() {
            this.active = true;
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.active = false;
        }
    }, {
        key: 'update',
        value: function update() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.BABYLON.com.billboards[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var billboard = _step.value;

                    billboard.position.x = this.satellite.position.x;
                    billboard.position.y = this.satellite.position.y;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.iterationCoef = (this.iterationCoef + velocityCoef) % 1;

            if (this.active) {
                this.opacity += (1 - this.opacity) * 0.05;
            } else if (this.opacity > 0) {
                this.opacity -= this.opacity * 0.05;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.opacity > 0) {

                if (!this.active && this.opacity < 0.1) {
                    this.opacity = 0;
                }

                for (var i = 0; i < this.count; i++) {
                    /** @type BABYLON.Mesh */
                    var mesh = this.BABYLON.com.billboards[i];

                    var scale = (this.iterationCoef + i / this.count) % 1;
                    mesh.scaling.x = scale;
                    mesh.scaling.y = scale;
                    mesh.visibility = (1 - scale) * this.opacity;
                }
            }
        }
    }]);

    return Com;
})();

exports['default'] = Com;

/**
 * @this {Com}
 */
function disposeSprite() {}

/**
 * @this {Com}
 * @return {{billboards: Array<BABYLON.Mesh>, material: BABYLON.Material}}
 */
function create() {
    var scene = _context2['default'].BABYLON.scene;

    var billboards = [];
    var texture = new BABYLON.Texture('data/objects/satellite/com-sprite.png', scene);
    texture.hasAlpha = true;
    var material = new BABYLON.StandardMaterial('satellite-com-material', scene);
    material.backFaceCulling = false;
    material.useAlphaFromDiffuseTexture = true;
    material.diffuseTexture = texture;
    material.specularColor = new BABYLON.Color3(0, 0, 0);

    for (var i = 0; i < this.count; i++) {
        var mesh = BABYLON.Mesh.CreatePlane('satellite-com-' + i, this.radius * 2, scene);
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
module.exports = exports['default'];

},{"context":22}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _context = require('context');

var _context2 = _interopRequireDefault(_context);

var maxSize = 0.7;
var minSize = 0.4;

var Selection = (function () {
    /**
     *
     * @param {{satellite: Satellite}} config
     */

    function Selection(config) {
        _classCallCheck(this, Selection);

        this.satellite = config.satellite;
        this.active = false;

        this.BABYLON = {
            selection: create.apply(this)
        };
    }

    _createClass(Selection, [{
        key: 'start',
        value: function start() {
            if (this.BABYLON.selection.sprite) this.BABYLON.selection.sprite.dispose();

            var spriteManager = this.BABYLON.selection.spriteManager;
            var sprite = new BABYLON.Sprite('satellite-selection', spriteManager);
            sprite.size = 0;
            this.BABYLON.selection.sprite = sprite;
            this.BABYLON.selection.targetedSize = maxSize;
            this.BABYLON.selection.transitionCoef = 0.1;
            this.active = true;
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.active = false;
            this.BABYLON.selection.targetedSize = 0;
            this.BABYLON.selection.transitionCoef = 0.1;
        }
    }, {
        key: 'update',
        value: function update() {
            if (this.BABYLON.selection.sprite) {
                this.BABYLON.selection.sprite.size += (this.BABYLON.selection.targetedSize - this.BABYLON.selection.sprite.size) * this.BABYLON.selection.transitionCoef;
                if (Math.abs(this.BABYLON.selection.sprite.size - this.BABYLON.selection.targetedSize) < 0.1) {
                    if (this.active) {
                        this.BABYLON.selection.targetedSize = this.BABYLON.selection.targetedSize === maxSize ? minSize : maxSize;
                        this.BABYLON.selection.transitionCoef = 0.01;
                    } else {
                        disposeSprite.apply(this);
                    }
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.BABYLON.selection.sprite) {
                this.BABYLON.selection.sprite.position.x = this.satellite.position.x;
                this.BABYLON.selection.sprite.position.y = this.satellite.position.y;
            }
        }
    }]);

    return Selection;
})();

exports['default'] = Selection;

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
    var scene = _context2['default'].BABYLON.scene;
    var spriteManager = new BABYLON.SpriteManager('satellite-selectionSpriteManager', 'data/objects/satellite/selection-sprite.png', 90, 90, scene);
    return {
        spriteManager: spriteManager,
        sprite: null,
        targetedSize: 1,
        transitionCoef: 0.1
    };
}
module.exports = exports['default'];

},{"context":22}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _context = require('context');

var _context2 = _interopRequireDefault(_context);

var Trail = (function () {
    /**
     *
     * @param {{satellite: Satellite}} config
     */

    function Trail(config) {
        _classCallCheck(this, Trail);

        this.satellite = config.satellite;

        this.BABYLON = {
            trail: create.apply(this)
        };
    }

    _createClass(Trail, [{
        key: 'start',
        value: function start() {
            this.BABYLON.trail.particleSystem.start();
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.BABYLON.trail.particleSystem.stop();
        }
    }, {
        key: 'update',
        value: function update() {}
    }, {
        key: 'render',
        value: function render() {}
    }, {
        key: 'dispose',
        value: function dispose() {
            if (this.BABYLON.trail) {
                this.BABYLON.trail.particleSystem.dispose();
            }
        }
    }]);

    return Trail;
})();

exports['default'] = Trail;

function create() {
    var scene = _context2['default'].BABYLON.scene;

    var particleHost = BABYLON.Mesh.CreateBox('satellite-trailParticleHost', 0.1, scene);
    particleHost.visibility = 0;
    particleHost.parent = this.satellite.BABYLON.mesh;
    particleHost.position.z = 0.15;

    var particleSystem = new BABYLON.ParticleSystem('satellite-trailParticleSystem', 700, scene);
    particleSystem.particleTexture = new BABYLON.Texture('data/objects/satellite/satellite-trail-particle.png', scene);
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
    particleSystem.emitter = particleHost;

    particleSystem.minEmitBox = new BABYLON.Vector3(0, 0, 0);
    particleSystem.maxEmitBox = new BABYLON.Vector3(0, 0, 0);
    particleSystem.emitRate = 300;

    var size = 0.04;
    particleSystem.maxSize = size;
    particleSystem.minSize = size;

    particleSystem.direction1 = new BABYLON.Vector3(0, 0, 0);
    particleSystem.direction2 = new BABYLON.Vector3(0, 0, 0);

    var lifeTime = 2;
    particleSystem.maxLifeTime = lifeTime;
    particleSystem.minLifeTime = lifeTime;

    return {
        particleSystem: particleSystem,
        host: particleHost
    };
}
module.exports = exports['default'];

},{"context":22}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _context = require('context');

var _context2 = _interopRequireDefault(_context);

var _EngineSmoke = require('./_Engine/smoke');

var smoke = _interopRequireWildcard(_EngineSmoke);

var _EngineLighting = require('./_Engine/lighting');

var lighting = _interopRequireWildcard(_EngineLighting);

var _EngineFlame = require('./_Engine/flame');

var flame = _interopRequireWildcard(_EngineFlame);

'use strict';

var Engine = (function () {
    /**
     *
     * @param {{ship: Ship}} config
     */

    function Engine(config) {
        _classCallCheck(this, Engine);

        /**@private*/this._startSmoke = smoke.start.bind(this);
        /**@private*/this._stopSmoke = smoke.stop.bind(this);
        /**@private*/this._startLighting = lighting.start.bind(this);
        /**@private*/this._stopLighting = lighting.stop.bind(this);
        /**@private*/this._startFlame = flame.start.bind(this);
        /**@private*/this._stopFlame = flame.stop.bind(this);
        /**@private*/this._renderFlame = flame.render.bind(this);

        /**
         * Determines whether the engine is currently active
         * @type {boolean}
         */
        this.active = false;

        this.ship = config.ship;

        /**
         * The angle at which the engine is active
         * @type {number}
         */
        this.angle = 0;

        /** @namespace */
        this.BABYLON = {
            smoke: smoke.create.apply(this),
            lighting: lighting.create.apply(this),
            flame: flame.create.apply(this)
        };

        this.fuel = {
            capacity: 1000,
            value: 1000
        };
    }

    _createClass(Engine, [{
        key: 'start',

        /**
         *
         * @param {{x:number, y:number}} at
         */
        value: function start(at) {

            if (this.fuel.value > 0) {

                this.active = true;

                var cursorFromShip = new BABYLON.Vector2(at.x - window.innerWidth / 2, at.y - window.innerHeight / 2);
                var angle = Math.atan2(cursorFromShip.x, cursorFromShip.y) - Math.PI * 0.5;
                this.angle = angle;

                this._startFlame();
                this._startSmoke();
                this._startLighting();
            } else {
                _context2['default'].api.say('Engine cannot start: The fuel tank is empty!');
            }
        }
    }, {
        key: 'update',
        value: function update() {
            if (this.active) {
                this.fuel.value = Math.max(0, this.fuel.value - 1);
            }

            if (this.active && this.fuel.value <= 0) {
                this.stop();
                _context2['default'].api.say('Engine has stopped: The fuel tank is empty!');
            }
        }
    }, {
        key: 'render',
        value: function render() {
            this._renderFlame();
        }
    }, {
        key: 'stop',
        value: function stop() {

            this.active = false;

            this._stopFlame();
            this._stopSmoke();
            this._stopLighting();
        }
    }]);

    return Engine;
})();

exports['default'] = Engine;
module.exports = exports['default'];

},{"./_Engine/flame":17,"./_Engine/lighting":18,"./_Engine/smoke":19,"context":22}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _context = require('context');

var _context2 = _interopRequireDefault(_context);

var Explosion =

/**
 *
 * @param {Position2D} position
 */
function Explosion(position) {
    _classCallCheck(this, Explosion);

    this.BABYLON = { core: create() };
    this.BABYLON.core.host.position.x = position.x;
    this.BABYLON.core.host.position.y = position.y;
    this.BABYLON.core.host.position.z = -0.5;
    this.BABYLON.core.particleSystem.start();
};

exports['default'] = Explosion;

function create() {
    var scene = _context2['default'].BABYLON.scene;

    var particleHost = BABYLON.Mesh.CreateBox('ship-explosionCoreParticleHost', 0.1, scene);
    particleHost.visibility = 0;

    var particleSystem = new BABYLON.ParticleSystem('ship-explosionCoreParticleSystem', 2000, scene);
    particleSystem.particleTexture = new BABYLON.Texture('data/objects/ship/explosion-core-particle.png', scene);
    //particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
    particleSystem.emitter = particleHost;
    //particleSystem.manualEmitCount = 2000;
    particleSystem.targetStopDuration = 0.1;

    var boxLength = 0.4;
    particleSystem.minEmitBox = new BABYLON.Vector3(-boxLength, -boxLength, 0);
    particleSystem.maxEmitBox = new BABYLON.Vector3(boxLength, boxLength, 0);
    particleSystem.emitRate = 500;
    //
    particleSystem.maxSize = 3;
    particleSystem.minSize = 1;

    var velocity = 1;
    particleSystem.direction1 = new BABYLON.Vector3(velocity, velocity, 0);
    particleSystem.direction2 = new BABYLON.Vector3(-velocity, -velocity, 0);

    particleSystem.minAngularSpeed = 1;
    particleSystem.maxAngularSpeed = 2;

    //
    particleSystem.maxLifeTime = 2;
    particleSystem.minLifeTime = 0.5;
    //
    //particleSystem.minEmitPower = 0.01;
    //particleSystem.maxEmitPower = 0.05;

    return {
        particleSystem: particleSystem,
        host: particleHost
    };
}
module.exports = exports['default'];

},{"context":22}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _context = require('context');

var _context2 = _interopRequireDefault(_context);

var _physic = require('physic');

var physic = _interopRequireWildcard(_physic);

'use strict';

/** The multiplicator to apply to the stepRate to apply to the physic */
var stepRateCoef = 20;

/** The nb of future positions computed */
var futurePositionsAmount = 30;

var Future = (function () {

    /**
     *
     * @param {{ship: Ship}} config
     */

    function Future(config) {
        _classCallCheck(this, Future);

        this.ship = config.ship;

        /**
         * The future positions of the related ship
         * @type Array<Position2D>
         */
        this.positions = [];

        this.BABYLON = {
            /** @type {BABYLON.Mesh} */
            path: null
        };
    }

    _createClass(Future, [{
        key: 'update',
        value: function update() {}
    }, {
        key: 'render',
        value: function render() {
            var ghost = createTransientShip(this.ship);
            this.positions = computeFuturePositions(ghost);

            createFuturePath.apply(this);
            drawFuturePath.apply(this);
        }
    }]);

    return Future;
})();

exports['default'] = Future;

/**
 * @this Future
 */
function drawFuturePath() {
    var path = this.BABYLON.path;

    var vertices = [];
    var normals = [];
    var uvs = [];
    var indices = [];

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = this.positions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var position = _step.value;

            var indiceRef = vertices.length / 3;

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
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
                _iterator['return']();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
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

    var futurePathMeshName = 'ShipFuturePathMesh';
    var futurePathMaterialName = 'ShipFuturePathMaterial';
    var scene = _context2['default'].BABYLON.scene;

    if (!this.BABYLON.path) {

        var path = new BABYLON.Mesh(futurePathMeshName, scene);

        /** @type {BABYLON.Material} */
        var material = new BABYLON.StandardMaterial(futurePathMaterialName, scene);
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

    var positions = [];

    for (var i = 0; i < futurePositionsAmount; i++) {
        var planetStrengths = _context2['default'].planets.map(function (planet) {
            return physic.gravity(planet)(ship);
        });
        var lastX = ship.position.x;
        var lastY = ship.position.y;
        physic.apply(planetStrengths, _context2['default'].stepRate * stepRateCoef)(ship);
        ship.last.position.x = lastX;
        ship.last.position.y = lastY;

        if (i > 0) positions.push({ x: ship.position.x, y: ship.position.y });
    }

    return positions;
}

/**
 *
 * @param {Ship} fromShip
 * @return VerletObject
 */
function createTransientShip(fromShip) {
    var position = { x: fromShip.position.x, y: fromShip.position.y };
    var distanceFromLast = {
        x: position.x - fromShip.last.position.x,
        y: position.y - fromShip.last.position.y
    };
    var lastPosition = {
        x: position.x - distanceFromLast.x * stepRateCoef,
        y: position.y - distanceFromLast.y * stepRateCoef
    };
    return {
        position: position,
        last: { position: lastPosition },
        mass: fromShip.mass
    };
}
module.exports = exports['default'];

},{"context":22,"physic":28}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _context = require('context');

var _context2 = _interopRequireDefault(_context);

var _HudNormal = require('./_Hud/normal');

var normal = _interopRequireWildcard(_HudNormal);

var _HudTarget = require('./_Hud/target');

var target = _interopRequireWildcard(_HudTarget);

'use strict';

var Hud = (function () {
    /**
     *
     * @param {{ship: Ship}} config
     */

    function Hud(config) {
        _classCallCheck(this, Hud);

        /**@private*/this._renderNormal = normal.render.bind(this);
        /**@private*/this._renderTarget = target.render.bind(this);
        /**@private*/this._updateTarget = target.update.bind(this);

        this.ship = config.ship;

        /** @namespace */
        this.BABYLON = {
            normal: normal.create.apply(this),
            target: target.create.apply(this)
        };
    }

    _createClass(Hud, [{
        key: 'render',
        value: function render() {
            this._renderNormal();
            this._renderTarget();
        }
    }, {
        key: 'update',
        value: function update() {
            this._updateTarget();
        }
    }]);

    return Hud;
})();

exports['default'] = Hud;
module.exports = exports['default'];

},{"./_Hud/normal":20,"./_Hud/target":21,"context":22}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _context = require('context');

var _context2 = _interopRequireDefault(_context);

var Trail = (function () {
    /**
     *
     * @param {{ship: Ship}} config
     */

    function Trail(config) {
        _classCallCheck(this, Trail);

        this.ship = config.ship;

        this.BABYLON = {
            trail: create.apply(this)
        };
    }

    _createClass(Trail, [{
        key: 'start',
        value: function start() {
            this.BABYLON.trail.particleSystem.start();
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.BABYLON.trail.particleSystem.stop();
        }
    }, {
        key: 'update',
        value: function update() {}
    }, {
        key: 'render',
        value: function render() {}
    }, {
        key: 'dispose',
        value: function dispose() {
            if (this.BABYLON.trail) {
                this.BABYLON.trail.particleSystem.dispose();
            }
        }
    }]);

    return Trail;
})();

exports['default'] = Trail;

function create() {
    var scene = _context2['default'].BABYLON.scene;

    var particleHost = BABYLON.Mesh.CreateBox('ship-trailParticleHost', 0.1, scene);
    particleHost.visibility = 0;
    particleHost.parent = this.ship.BABYLON.mesh;
    particleHost.position.z = 0.15;

    var particleSystem = new BABYLON.ParticleSystem('ship-trailParticleSystem', 2500, scene);
    particleSystem.particleTexture = new BABYLON.Texture('data/objects/ship/ship-trail-particle.png', scene);
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
    particleSystem.emitter = particleHost;

    particleSystem.minEmitBox = new BABYLON.Vector3(0, 0, 0);
    particleSystem.maxEmitBox = new BABYLON.Vector3(0, 0, 0);
    particleSystem.emitRate = 300;

    var size = 0.05;
    particleSystem.maxSize = size;
    particleSystem.minSize = size;

    particleSystem.direction1 = new BABYLON.Vector3(0, 0, 0);
    particleSystem.direction2 = new BABYLON.Vector3(0, 0, 0);

    var lifeTime = 6;
    particleSystem.maxLifeTime = lifeTime;
    particleSystem.minLifeTime = lifeTime;

    return {
        particleSystem: particleSystem,
        host: particleHost
    };
}
module.exports = exports['default'];

},{"context":22}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

/**
 *
 * @this {Engine}
 */
exports.start = start;

/**
 *
 * @this {Engine}
 */
exports.stop = stop;

/**
 *
 * @this {Engine}
 */
exports.render = render;

/**
 *
 * @this {Engine}
 * @return {{spriteManager: BABYLON.SpriteManager, sprite: BABYLON.Sprite}}
 */
exports.create = create;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _context = require('context');

var _context2 = _interopRequireDefault(_context);

'use strict';

function start() {

    if (this.BABYLON.flame.sprite) {
        this.BABYLON.flame.sprite.dispose();
    }

    var flameSprite = new BABYLON.Sprite('ship-engineFlame', this.BABYLON.flame.spriteManager);
    flameSprite.size = 0.27;
    this.BABYLON.flame.sprite = flameSprite;
    flameSprite.angle = this.angle - Math.PI * 0.5;
}

function stop() {
    if (this.BABYLON.flame.sprite) {
        this.BABYLON.flame.sprite.dispose();
        this.BABYLON.flame.sprite = null;
    }
}

function render() {
    var distance = 0.25;
    var x = Math.cos(this.angle) * distance;
    var y = Math.sin(this.angle) * distance;

    if (this.active) {
        var sprite = this.BABYLON.flame.sprite;
        sprite.position.x = x + this.ship.position.x;
        sprite.position.y = y + this.ship.position.y;
        sprite.position.z = 0;
    }
}

function create() {
    var scene = _context2['default'].BABYLON.scene;
    var flameSpriteManager = new BABYLON.SpriteManager('ship-engineFlameSpriteManager', 'data/objects/ship/flame-sprite.png', 10, 100, scene);
    return {
        spriteManager: flameSpriteManager,
        sprite: null
    };
}

},{"context":22}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

/**
 * @this {Engine}
 */
exports.start = start;

/**
 * @this {Engine}
 */
exports.stop = stop;

/**
 *
 * @this {Engine}
 * @return {{main: BABYLON.PointLight}}
 */
exports.create = create;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _context = require('context');

var _context2 = _interopRequireDefault(_context);

'use strict';

function start() {
    var distance = 0.2;

    var x = Math.cos(this.angle) * distance;
    var y = Math.sin(this.angle) * distance;

    this.BABYLON.lighting.main.position.x = x;
    this.BABYLON.lighting.main.position.y = y;
    this.BABYLON.lighting.main.position.z = -0.15;

    this.BABYLON.lighting.main.setEnabled(true);
}

function stop() {
    this.BABYLON.lighting.main.setEnabled(false);
}

function create() {
    var scene = _context2['default'].BABYLON.scene;

    var powerLight = new BABYLON.PointLight('ship-engineLight', new BABYLON.Vector3(), scene);
    powerLight.parent = this.ship.BABYLON.mesh;
    powerLight.intensity = 2;
    powerLight.range = 2.5;
    powerLight.diffuse = new BABYLON.Color3(1, 0.3, 0.1);
    powerLight.setEnabled(false);

    return { main: powerLight };
}

},{"context":22}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

/**
 * @this {Engine}
 */
exports.start = start;

/**
 * @this {Engine}
 */
exports.stop = stop;

/**
 *
 * @this {Engine}
 * @return {{particleSystem: BABYLON.ParticleSystem, host:BABYLON.Mesh}}
 */
exports.create = create;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _context = require('context');

var _context2 = _interopRequireDefault(_context);

'use strict';

function start() {
    var distance = 0.2;

    var x = Math.cos(this.angle) * distance;
    var y = Math.sin(this.angle) * distance;

    this.BABYLON.smoke.host.position.x = x;
    this.BABYLON.smoke.host.position.y = y;
    this.BABYLON.smoke.host.position.z = 0.5;
    this.BABYLON.smoke.host.rotation.z = this.angle - Math.PI * 0.5;

    this.BABYLON.smoke.particleSystem.start();
}

function stop() {
    this.BABYLON.smoke.particleSystem.stop();
}

function create() {
    var scene = _context2['default'].BABYLON.scene;

    var smokeParticleHost = BABYLON.Mesh.CreateBox('ship-engineSmokeParticleHost', 0.1, scene);
    smokeParticleHost.parent = this.ship.BABYLON.mesh;
    smokeParticleHost.position.y = 0.5;
    smokeParticleHost.visibility = 0;

    var particleSystem = new BABYLON.ParticleSystem('ship-engineSmokeParticleSystem', 2000, scene);
    particleSystem.particleTexture = new BABYLON.Texture('data/objects/ship/smoke-particle.png', scene);
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
    particleSystem.emitter = smokeParticleHost;

    particleSystem.minEmitBox = new BABYLON.Vector3(-0.05, 0, 0);
    particleSystem.maxEmitBox = new BABYLON.Vector3(0.05, 0, 0);
    particleSystem.emitRate = 40;

    particleSystem.maxSize = 0.5;
    particleSystem.minSize = 0.2;

    particleSystem.maxLifeTime = 0.1;
    particleSystem.minLifeTime = 0.5;

    particleSystem.minEmitPower = 3;
    particleSystem.maxEmitPower = 2;

    return {
        particleSystem: particleSystem,
        host: smokeParticleHost
    };
}

},{"context":22}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

/**
 * @this {Hud}
 */
exports.render = render;

/**
 * @this {Hud}
 * @return {{spriteManager: BABYLON.SpriteManager, sprite: BABYLON.Sprite}}
 */
exports.create = create;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _context = require('context');

var _context2 = _interopRequireDefault(_context);

'use strict';

function render() {
    this.BABYLON.normal.sprite.position.x = this.ship.position.x;
    this.BABYLON.normal.sprite.position.y = this.ship.position.y;

    var lastPosition = this.ship.last.position;
    var nextPosition = this.ship.position;
    var angle = Math.atan2(lastPosition.y - nextPosition.y, lastPosition.x - nextPosition.x) + Math.PI;

    this.BABYLON.normal.sprite.angle = angle;
}

function create() {
    var scene = _context2['default'].BABYLON.scene;
    var spriteManager = new BABYLON.SpriteManager('ship-hudNormalSpriteManager', 'data/objects/ship/hud-normal-sprite.png', 140, 140, scene);
    var sprite = new BABYLON.Sprite('ship-hudNormal', spriteManager);
    return {
        spriteManager: spriteManager,
        sprite: sprite
    };
}

},{"context":22}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

/**
 * @this {Hud}
 */
exports.render = render;

/**
 * @this {Hud}
 */
exports.update = update;

/**
 * @this {Hud}
 * @return {{spriteManager: BABYLON.SpriteManager, sprite: BABYLON.Sprite}}
 */
exports.create = create;

/**
 * @this {Hud}
 */
exports.start = start;

/**
 * @this {Hud}
 */
exports.stop = stop;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _context = require('context');

var _context2 = _interopRequireDefault(_context);

'use strict';

function render() {
    if (this.BABYLON.target.sprite) {
        this.BABYLON.target.sprite.position.x = this.ship.position.x;
        this.BABYLON.target.sprite.position.y = this.ship.position.y;

        var shipPosition = this.ship.position;
        var targetPosition = _context2['default'].target.position;
        var angle = Math.atan2(shipPosition.y - targetPosition.y, shipPosition.x - targetPosition.x) - Math.PI * 0.5;

        this.BABYLON.target.sprite.angle = angle;
    }
}

function update() {
    var isActive = !!this.BABYLON.target.sprite;
    if (isActive) {
        if (!_context2['default'].target) stop.apply(this);
    } else {
        if (_context2['default'].target) start.apply(this);
    }
}

function create() {
    var scene = _context2['default'].BABYLON.scene;
    var spriteManager = new BABYLON.SpriteManager('ship-hudTargetSpriteManager', 'data/objects/ship/hud-target-sprite.png', 140, 140, scene);
    return {
        spriteManager: spriteManager,
        sprite: null
    };
}

function start() {
    if (this.BABYLON.target.sprite) this.BABYLON.target.sprite.dispose();

    var spriteManager = this.BABYLON.target.spriteManager;
    var sprite = new BABYLON.Sprite('ship-hudTarget', spriteManager);
    this.BABYLON.target.sprite = sprite;
}

function stop() {
    if (this.BABYLON.target.sprite) {
        this.BABYLON.target.sprite.dispose();
        this.BABYLON.sprite = null;
    }
}

},{"context":22}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @module context
 */

exports["default"] =
/**
 * @interface IContext
 * @implements IContext
 */

{
    debug: true,
    stepRate: 1 / 60,
    BABYLON: {
        /** @type BABYLON.Scene */
        scene: null,
        /** @type BABYLON.Engine */
        engine: null,

        /** @type BABYLON.Camera */
        camera: null
    },
    DOM: {
        /** @type HTMLCanvasElement */
        canvas: null,
        /** @type HTMLElement */
        overlay: null,

        /** @type HTMLElement */
        stats: null,

        /** type HTMLElement */
        console: null,

        /** type HTMLElement */
        dockCommand: null,

        /** type HTMLElement */
        undockCommand: null
    },
    /** @type Array<Level> */
    levels: null,
    /** @type Array<Planet> */
    planets: null,
    /** @type Array<Satellite> */
    satellites: null,
    /** @type Ship */
    ship: null,

    /** @type ITarget */
    target: null,

    script: null,

    api: {
        /**
         * @type Function(message:string)
         */
        say: null,

        target: {
            /**
             * @type Function({{position: Position2D}})
             */
            set: null,

            clear: null
        }
    }
};
module.exports = exports["default"];

},{}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _context = require('context');

var _context2 = _interopRequireDefault(_context);

var _Stepable2 = require('./Stepable');

var _Stepable3 = _interopRequireDefault(_Stepable2);

'use strict';

/**
 * @abstract
 */

var PositionableObject = (function (_Stepable) {
    function PositionableObject(config) {
        _classCallCheck(this, PositionableObject);

        _get(Object.getPrototypeOf(PositionableObject.prototype), 'constructor', this).call(this, config);

        this.BABYLON = {};
        if (config && config.mesh) this.BABYLON.mesh = config.mesh;

        /**
         * The distance from the ship
         * @type {number}
         */
        this.distance = 0;

        this.position = config && config.mesh ? { x: config.mesh.position.x, y: config.mesh.position.y } : { x: 0, y: 0 };
    }

    _inherits(PositionableObject, _Stepable);

    _createClass(PositionableObject, [{
        key: 'updating',
        value: function updating() {
            this.distance = BABYLON.Vector2.Distance(this.position, _context2['default'].ship.position);
            _get(Object.getPrototypeOf(PositionableObject.prototype), 'updating', this).call(this);
        }
    }, {
        key: 'updated',
        value: function updated() {
            this.distance = BABYLON.Vector2.Distance(this.position, _context2['default'].ship.position);
            _get(Object.getPrototypeOf(PositionableObject.prototype), 'updated', this).call(this);
        }
    }]);

    return PositionableObject;
})(_Stepable3['default']);

exports['default'] = PositionableObject;
module.exports = exports['default'];

},{"./Stepable":24,"context":22}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _context = require("context");

var _context2 = _interopRequireDefault(_context);

"use strict";

/**
 * Implements an entity stepped for each frame of the game
 * @abstract
 */

var Stepable = (function () {
    function Stepable(config) {
        _classCallCheck(this, Stepable);
    }

    _createClass(Stepable, [{
        key: "dispose",
        value: function dispose() {}
    }, {
        key: "updating",

        /**
         * Invoked before instance state update.
         * This step is not supposed to increase the state of the current instance.
         */
        value: function updating() {}
    }, {
        key: "update",

        /**
         * Invoked when Increase if the state of the current instance is required
         */
        value: function update() {}
    }, {
        key: "updated",

        /**
         * Invoked once the state the current instance has been increased.
         * This step is not supposed to increase the state of the current instance.
         */
        value: function updated() {}
    }, {
        key: "render",

        /**
         * Invoked when the current instance should be prepared for rendering
         */
        value: function render() {}
    }]);

    return Stepable;
})();

exports["default"] = Stepable;
module.exports = exports["default"];

},{"context":22}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { desc = parent = getter = undefined; _again = false; var object = _x,
    property = _x2,
    receiver = _x3; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _context = require('context');

var _context2 = _interopRequireDefault(_context);

var _PositionableObject2 = require('./PositionableObject');

var _PositionableObject3 = _interopRequireDefault(_PositionableObject2);

'use strict';

/**
 * @abstract
 */

var VerletObject = (function (_PositionableObject) {
    function VerletObject(config) {
        _classCallCheck(this, VerletObject);

        _get(Object.getPrototypeOf(VerletObject.prototype), 'constructor', this).call(this, config);

        this.mass = config ? config.mass || 0 : 0;

        this.last = {
            position: config && config.velocity ? { x: this.position.x - config.velocity.x * _context2['default'].stepRate,
                y: this.position.y - config.velocity.y * _context2['default'].stepRate } : { x: this.position.x, y: this.position.y }
        };
    }

    _inherits(VerletObject, _PositionableObject);

    _createClass(VerletObject, [{
        key: 'updating',
        value: function updating() {
            this._x = this.position.x;
            this._y = this.position.y;
            _get(Object.getPrototypeOf(VerletObject.prototype), 'updating', this).call(this);
        }
    }, {
        key: 'updated',
        value: function updated() {
            _get(Object.getPrototypeOf(VerletObject.prototype), 'updated', this).call(this);
            this.last.position.x = this._x;
            this.last.position.y = this._y;
        }
    }]);

    return VerletObject;
})(_PositionableObject3['default']);

exports['default'] = VerletObject;
module.exports = exports['default'];

},{"./PositionableObject":23,"context":22}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.start = start;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _system = require('system');

var _Ship = require('./Ship');

var _Ship2 = _interopRequireDefault(_Ship);

var _Planet = require('./Planet');

var _Planet2 = _interopRequireDefault(_Planet);

var _context = require('context');

var _context2 = _interopRequireDefault(_context);

var _provider = require('./provider');

var provider = _interopRequireWildcard(_provider);

var _ITarget = require('./ITarget');

var _ITarget2 = _interopRequireDefault(_ITarget);

var _Script = require('./Script');

var _Script2 = _interopRequireDefault(_Script);

var _Satellite = require('./Satellite');

var _Satellite2 = _interopRequireDefault(_Satellite);

require('./TargetPoint'); // ITarget implementation
require('./TargetOrbit'); // ITarget implementation

/**
 * Initializes the global game context
 * @returns Promise
 */
var initializeAsync = _system.async(regeneratorRuntime.mark(function callee$0$0() {
    var levels;
    return regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                context$1$0.next = 2;
                return provider.getLevels();

            case 2:
                levels = context$1$0.sent;

                if (levels && levels.length) {
                    console.info('levels loaded successfully');
                    levels.forEach(function (level) {
                        return console.log(' - Level[' + level.id + '] "' + level.name + '"\n   ' + level.description);
                    });
                }

                _context2['default'].levels = levels;

            case 5:
            case 'end':
                return context$1$0.stop();
        }
    }, callee$0$0, this);
}));

exports.initializeAsync = initializeAsync;
/**
 * Initializes the specified level in the current context
 * @param String The Id of the level to initialize
 * @Returns Promise
 */
var initializeLevelAsync = _system.async(regeneratorRuntime.mark(function callee$0$1(levelId) {
    var canvas, overlay, consoleHost, dockCommand, undockCommand, engine, level, scene, planets, satellites, shipMesh, ship, camera, pointSize, starsMesh3, radius, depth, minZ, starsMaterial, vertices, i;
    return regeneratorRuntime.wrap(function callee$0$1$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                canvas = /** @type HTMLCanvasElement */document.getElementById('render-surface');
                overlay = document.getElementById('overlay');
                consoleHost = document.getElementById('console');
                dockCommand = document.getElementById('dock-command');
                undockCommand = document.getElementById('undock-command');

                overlay.innerHTML = '';

                _context2['default'].DOM.canvas = canvas;
                _context2['default'].DOM.overlay = overlay;
                _context2['default'].DOM.console = consoleHost;
                _context2['default'].DOM.dockCommand = dockCommand;
                _context2['default'].DOM.undockCommand = undockCommand;

                _context2['default'].api.say = say;
                _context2['default'].api.target.set = _ITarget2['default'].set;
                _context2['default'].api.target.clear = _ITarget2['default'].clear;

                engine = new BABYLON.Engine(canvas, true);

                _context2['default'].BABYLON.engine = engine;

                level = _context2['default'].levels.filter(function (currentLevel) {
                    return currentLevel.id === levelId;
                })[0];

                if (level) {
                    context$1$0.next = 19;
                    break;
                }

                throw 'no level found';

            case 19:
                context$1$0.next = 21;
                return provider.createBabylonSceneAsync(levelId);

            case 21:
                scene = context$1$0.sent;

                _context2['default'].BABYLON.scene = scene;

                console.info('Loading level script...');
                context$1$0.next = 26;
                return provider.getSceneScript(levelId);

            case 26:
                context$1$0.t6 = context$1$0.sent;
                _context2['default'].script = new _Script2['default'](context$1$0.t6);

                console.info('Loading planets...');

                planets = (function () {
                    var _planets = [];
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        var _loop = function () {
                            var mesh = _step.value;

                            _planets.push(new _Planet2['default']({
                                mesh: mesh,
                                metadata: (function () {
                                    var _metadata = [];
                                    var _iteratorNormalCompletion2 = true;
                                    var _didIteratorError2 = false;
                                    var _iteratorError2 = undefined;

                                    try {
                                        for (var _iterator2 = (level.planets || [])[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                            var info = _step2.value;

                                            if (info.id == mesh.name) {
                                                _metadata.push(info);
                                            }
                                        }
                                    } catch (err) {
                                        _didIteratorError2 = true;
                                        _iteratorError2 = err;
                                    } finally {
                                        try {
                                            if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                                                _iterator2['return']();
                                            }
                                        } finally {
                                            if (_didIteratorError2) {
                                                throw _iteratorError2;
                                            }
                                        }
                                    }

                                    return _metadata;
                                })()
                            }));
                        };

                        for (var _iterator = scene.meshes.filter(function (mesh) {
                            return mesh.name.match(_Planet2['default'].nameRegex);
                        })[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            _loop();
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator['return']) {
                                _iterator['return']();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }

                    return _planets;
                })();

                _context2['default'].planets = (function () {
                    var _context$planets = [];
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator3 = planets[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var planet = _step3.value;

                            if (planet.isActive) {
                                _context$planets.push(planet);
                            }
                        }
                    } catch (err) {
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion3 && _iterator3['return']) {
                                _iterator3['return']();
                            }
                        } finally {
                            if (_didIteratorError3) {
                                throw _iteratorError3;
                            }
                        }
                    }

                    return _context$planets;
                })();
                context$1$0.next = 33;
                return Promise.all((function () {
                    var _Promise$all = [];
                    var _iteratorNormalCompletion4 = true;
                    var _didIteratorError4 = false;
                    var _iteratorError4 = undefined;

                    try {
                        for (var _iterator4 = planets[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                            var planet = _step4.value;

                            _Promise$all.push(planet.initializeAsync());
                        }
                    } catch (err) {
                        _didIteratorError4 = true;
                        _iteratorError4 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion4 && _iterator4['return']) {
                                _iterator4['return']();
                            }
                        } finally {
                            if (_didIteratorError4) {
                                throw _iteratorError4;
                            }
                        }
                    }

                    return _Promise$all;
                })());

            case 33:

                console.info('Loading satellites...');

                satellites = (function () {
                    var _satellites = [];
                    var _iteratorNormalCompletion5 = true;
                    var _didIteratorError5 = false;
                    var _iteratorError5 = undefined;

                    try {
                        for (var _iterator5 = scene.meshes.filter(function (mesh) {
                            return mesh.name.match(_Satellite2['default'].nameRegex);
                        })[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                            var mesh = _step5.value;

                            _satellites.push(new _Satellite2['default'](mesh));
                        }
                    } catch (err) {
                        _didIteratorError5 = true;
                        _iteratorError5 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion5 && _iterator5['return']) {
                                _iterator5['return']();
                            }
                        } finally {
                            if (_didIteratorError5) {
                                throw _iteratorError5;
                            }
                        }
                    }

                    return _satellites;
                })();

                _context2['default'].satellites = satellites;
                context$1$0.next = 38;
                return Promise.all((function () {
                    var _Promise$all2 = [];
                    var _iteratorNormalCompletion6 = true;
                    var _didIteratorError6 = false;
                    var _iteratorError6 = undefined;

                    try {
                        for (var _iterator6 = satellites[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                            var satellite = _step6.value;

                            _Promise$all2.push(satellite.initializeAsync({
                                moment: Math.PI * 0.081,
                                planet: _context2['default'].planets[0]
                            }));
                        }
                    } catch (err) {
                        _didIteratorError6 = true;
                        _iteratorError6 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion6 && _iterator6['return']) {
                                _iterator6['return']();
                            }
                        } finally {
                            if (_didIteratorError6) {
                                throw _iteratorError6;
                            }
                        }
                    }

                    return _Promise$all2;
                })());

            case 38:
                _context2['default'].DOM.dockCommand.satellite = satellites[0];
                _context2['default'].DOM.undockCommand.satellite = satellites[0];

                console.info('Loading ship...');
                shipMesh = scene.getMeshByID('ship');
                ship = new _Ship2['default']({ mesh: shipMesh, velocity: { x: 1, y: 0 }, mass: 100 });

                _context2['default'].ship = ship;
                context$1$0.next = 46;
                return ship.initializeAsync();

            case 46:

                console.info('Loading camera...');
                scene.clearColor = new BABYLON.Color4(0, 0, 0, 1e-16);
                camera = new BABYLON.FreeCamera('camera-ship', new BABYLON.Vector3(0, 0, -30), scene);

                _context2['default'].BABYLON.camera = camera;
                camera.fov = 0.3;
                camera.rotation = new BABYLON.Vector3(0, 0, 0);
                //camera.attachControl(canvas, false);

                console.info('Loading stars...');
                for (pointSize = 1; pointSize <= 3; pointSize++) {
                    starsMesh3 = new BABYLON.Mesh('stars' + pointSize, scene);

                    {
                        radius = 80;
                        depth = 100;
                        minZ = -1;
                        starsMaterial = new BABYLON.StandardMaterial('starsMaterial' + pointSize, scene);

                        starsMaterial.pointsCloud = true;
                        starsMaterial.pointSize = pointSize;
                        starsMaterial.emissiveColor = new BABYLON.Color3(0.8, 0.8, 0.8);
                        starsMesh3.material = starsMaterial;
                        starsMaterial.backFaceCulling = false;

                        vertices = [];

                        for (i = 0; i < 500; i++) {
                            vertices.push(Math.random() * radius - radius / 2, Math.random() * radius - radius / 2, minZ + Math.random() * depth);
                        }

                        starsMesh3.setVerticesData(BABYLON.VertexBuffer.PositionKind, vertices, true);
                    }
                }

                console.info('The level is initialized.');

            case 55:
            case 'end':
                return context$1$0.stop();
        }
    }, callee$0$1, this);
}));

exports.initializeLevelAsync = initializeLevelAsync;

function start() {
    console.info('Launching level...');

    var easingCoef = 0.1;

    var engine = _context2['default'].BABYLON.engine;
    var canvas = _context2['default'].DOM.canvas;
    var scene = _context2['default'].BABYLON.scene;
    var camera = _context2['default'].BABYLON.camera;
    var ship = _context2['default'].ship;
    var shipMesh = ship.BABYLON.mesh;

    console.info('Compiling level script');
    _context2['default'].script.initialize.apply(_context2['default']);

    engine.runRenderLoop(function () {

        camera.position.x += (shipMesh.position.x - camera.position.x) * easingCoef;
        camera.position.y += (shipMesh.position.y - camera.position.y) * easingCoef;

        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
            for (var _iterator7 = _context2['default'].planets[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                var planet = _step7.value;
                planet.updating();
            }
        } catch (err) {
            _didIteratorError7 = true;
            _iteratorError7 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion7 && _iterator7['return']) {
                    _iterator7['return']();
                }
            } finally {
                if (_didIteratorError7) {
                    throw _iteratorError7;
                }
            }
        }

        var _iteratorNormalCompletion8 = true;
        var _didIteratorError8 = false;
        var _iteratorError8 = undefined;

        try {
            for (var _iterator8 = _context2['default'].satellites[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                var satellite = _step8.value;
                satellite.updating();
            }
        } catch (err) {
            _didIteratorError8 = true;
            _iteratorError8 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion8 && _iterator8['return']) {
                    _iterator8['return']();
                }
            } finally {
                if (_didIteratorError8) {
                    throw _iteratorError8;
                }
            }
        }

        ship.updating();

        var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
            for (var _iterator9 = _context2['default'].planets[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                var planet = _step9.value;
                planet.update();
            }
        } catch (err) {
            _didIteratorError9 = true;
            _iteratorError9 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion9 && _iterator9['return']) {
                    _iterator9['return']();
                }
            } finally {
                if (_didIteratorError9) {
                    throw _iteratorError9;
                }
            }
        }

        var _iteratorNormalCompletion10 = true;
        var _didIteratorError10 = false;
        var _iteratorError10 = undefined;

        try {
            for (var _iterator10 = _context2['default'].satellites[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                var satellite = _step10.value;
                satellite.update();
            }
        } catch (err) {
            _didIteratorError10 = true;
            _iteratorError10 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion10 && _iterator10['return']) {
                    _iterator10['return']();
                }
            } finally {
                if (_didIteratorError10) {
                    throw _iteratorError10;
                }
            }
        }

        ship.update();
        if (_context2['default'].target) _context2['default'].target.update();

        var _iteratorNormalCompletion11 = true;
        var _didIteratorError11 = false;
        var _iteratorError11 = undefined;

        try {
            for (var _iterator11 = _context2['default'].planets[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                var planet = _step11.value;
                planet.updated();
            }
        } catch (err) {
            _didIteratorError11 = true;
            _iteratorError11 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion11 && _iterator11['return']) {
                    _iterator11['return']();
                }
            } finally {
                if (_didIteratorError11) {
                    throw _iteratorError11;
                }
            }
        }

        var _iteratorNormalCompletion12 = true;
        var _didIteratorError12 = false;
        var _iteratorError12 = undefined;

        try {
            for (var _iterator12 = _context2['default'].satellites[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                var satellite = _step12.value;
                satellite.updated();
            }
        } catch (err) {
            _didIteratorError12 = true;
            _iteratorError12 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion12 && _iterator12['return']) {
                    _iterator12['return']();
                }
            } finally {
                if (_didIteratorError12) {
                    throw _iteratorError12;
                }
            }
        }

        ship.updated();

        _context2['default'].script.step.apply(_context2['default']);
        if (_context2['default'].ship.crashing && !_context2['default'].ship.dead) {
            console.debug('Invoking script.crash');
            _context2['default'].script.crash.apply(_context2['default']);
        }

        var _iteratorNormalCompletion13 = true;
        var _didIteratorError13 = false;
        var _iteratorError13 = undefined;

        try {
            for (var _iterator13 = _context2['default'].planets[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                var planet = _step13.value;
                planet.render();
            }
        } catch (err) {
            _didIteratorError13 = true;
            _iteratorError13 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion13 && _iterator13['return']) {
                    _iterator13['return']();
                }
            } finally {
                if (_didIteratorError13) {
                    throw _iteratorError13;
                }
            }
        }

        var _iteratorNormalCompletion14 = true;
        var _didIteratorError14 = false;
        var _iteratorError14 = undefined;

        try {
            for (var _iterator14 = _context2['default'].satellites[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                var satellite = _step14.value;
                satellite.render();
            }
        } catch (err) {
            _didIteratorError14 = true;
            _iteratorError14 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion14 && _iterator14['return']) {
                    _iterator14['return']();
                }
            } finally {
                if (_didIteratorError14) {
                    throw _iteratorError14;
                }
            }
        }

        ship.render();
        if (_context2['default'].target) _context2['default'].target.render();

        scene.render();
    });

    //scene.debugLayer.show();
    window.addEventListener('resize', function () {
        return engine.resize();
    });
    canvas.addEventListener('mousedown', function (e) {
        return ship.startEngine({ x: e.x, y: e.y });
    });
    canvas.addEventListener('mouseup', function (e) {
        return ship.stopEngine();
    });
    _context2['default'].DOM.dockCommand.addEventListener('click', function () {
        return _context2['default'].DOM.dockCommand.satellite.requestDocking();
    });
    _context2['default'].DOM.undockCommand.addEventListener('click', function () {
        return _context2['default'].DOM.undockCommand.satellite.undock();
    });

    console.info('The level is ready. The loop has started');
}

/**
 * Displays a message to the screen
 * @param message
 */
function say(message) {
    var htmlElement = document.createElement('LI');
    htmlElement.innerText = message;
    _context2['default'].DOM.console.appendChild(htmlElement);
    var dispose = (function () {
        _context2['default'].DOM.console.removeChild(this);
    }).bind(htmlElement);
    setTimeout(dispose, 20000);
}

},{"./ITarget":2,"./Planet":3,"./Satellite":4,"./Script":5,"./Ship":6,"./TargetOrbit":7,"./TargetPoint":8,"./provider":29,"context":22,"system":30}],27:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.show = show;
exports.close = close;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _context = require('context');

var _context2 = _interopRequireDefault(_context);

var _react = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var _react2 = _interopRequireDefault(_react);

function show() {
    return new Promise(function (resolve, reject) {
        var menuHost = document.getElementById('menu');

        var LevelMenuItem = _react2['default'].createClass({
            displayName: 'LevelMenuItem',

            select: function select() {
                resolve(this.props.context);
                close();
            },
            render: function render() {
                return _react2['default'].createElement(
                    'li',
                    { onClick: this.select },
                    this.props.name
                );
            }
        });

        var LevelMenu = _react2['default'].createClass({
            displayName: 'LevelMenu',

            render: function render() {
                var createItem = function createItem(level) {
                    return _react2['default'].createElement(LevelMenuItem, { context: level, name: level.name });
                };
                return _react2['default'].createElement(
                    'ul',
                    { className: 'missions' },
                    _context2['default'].levels.map(createItem)
                );
            }
        });

        _react2['default'].render(_react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
                'h2',
                null,
                'Select a mission:'
            ),
            _react2['default'].createElement(LevelMenu, null)
        ), menuHost);
    });
}

function close() {
    var menu = document.getElementById('menu');
    var menuContainer = menu.getElementsByTagName('ul')[0];
    menuContainer.innerHTML = '';
    menu.style.display = 'none';
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"context":22}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _system = require('system');

var apply = _system.curry(applyStrengths);
exports.apply = apply;
var gravity = _system.curry(computeGravityStength);

exports.gravity = gravity;
/**
 * @typedef Object Position2D
 * @property x:Number
 * @property y:Number
 */

/**
 * @typedef Object Strength
 * @property x:Number
 * @property y:Number
 */

/**
 * @typedef Object VerletObject
 * @property {Position2D} position
 * @property {{position: Position2D}} last
 * @property mass: Number
 */

/**
 * Applies the specified strengths to the current verlet object
 * @param {Array<Strength>} strengths
 * @param {number} stepRate
 * @this {VerletObject}
 */
function applyStrengths(strengths, stepRate /* = context.stepRate*/) {

    var velocity = {
        x: (this.position.x - this.last.position.x) / stepRate,
        y: (this.position.y - this.last.position.y) / stepRate
    };

    var acceleration = { x: 0, y: 0 };

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = strengths[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var strength = _step.value;

            acceleration.x += strength.x / this.mass;
            acceleration.y += strength.y / this.mass;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
                _iterator['return']();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var newVelocity = {
        x: velocity.x + acceleration.x * stepRate,
        y: velocity.y + acceleration.y * stepRate
    };

    this.position.x += newVelocity.x * stepRate;
    this.position.y += newVelocity.y * stepRate;
}

/**
 * Computes the gravity strength for the specified planet
 * @param {Planet} planet
 * @this {VerletObject}
 * @return {Strength}
 */
function computeGravityStength(planet) {
    var re = planet.radius * 15;

    var distance = BABYLON.Vector2.Distance(this.position, planet.position);
    var angle = Math.atan2(this.position.x - planet.position.x, this.position.y - planet.position.y);
    var gravityStrengthNormal = computeGravityStrengthValue(distance, re) * this.mass;
    var strength = {
        x: -gravityStrengthNormal * Math.sin(angle),
        y: -gravityStrengthNormal * Math.cos(angle)
    };

    return strength;
}

function computeGravityStrengthValue(distance, re) {
    return re / (re + distance * distance * distance * distance);
}

/**
 * Computes the orbital velocity for the specified planet
 * @param {Planet} planet
 * @this {VerletObject}
 * @return {Position2D}
 */
function getOrbitalVelocity(planet) {

    var gravityStrength = computeGravityStength.apply(this, [planet]);
}

},{"system":30}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.createBabylonSceneAsync = createBabylonSceneAsync;
exports.getObjectMetadata = getObjectMetadata;

//export function getPlanetAtmosphere(planetId) {
//    return $.ajax(`data/objects/${planetId}/atmosphere.png`);
//}

exports.getSceneScript = getSceneScript;
exports.getLevels = getLevels;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _context = require('context');

var _context2 = _interopRequireDefault(_context);

function createBabylonSceneAsync(levelId) {
    return new Promise(function (resolve, reject) {
        BABYLON.SceneLoader.Load('data/scenes/' + levelId + '/', 'scene.babylon', _context2['default'].BABYLON.engine, function (scene) {
            console.log('test');
            resolve(scene);
        });
    });
}

function getObjectMetadata(objectId) {
    return $.ajax('data/objects/' + objectId + '/metadata.json');
}

function getSceneScript(levelId) {
    return $.ajax('data/scenes/' + levelId + '/scene.js');
}

function getLevels() {
    return $.ajax('data/levels.json', { method: 'GET' });
}

},{"context":22}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @module system
 */

/**
 * @alias module:system.spawn
 * @return {*}
 */
exports.spawn = spawn;

/**
 * @alias module:system.async
 * @return {function(...): Q.Promise<T>}
 */
exports.async = async;

/**
 * Applies curry transformation to the specified function
 * @param {function} invocation The function invoke
 * @return {Function}
 */
exports.curry = curry;

function spawn() {
  return Q.spawn.apply(this, arguments);
}

function async() {
  return Q.async.apply(this, arguments);
}

function curry(invocation) {
  return function () {
    var args = arguments;
    return function (target) {
      return invocation.apply(target, args);
    };
  };
}

},{}],31:[function(require,module,exports){
'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var marked0$0 = [bootstrapAsync].map(regeneratorRuntime.mark);

var _system = require('system');

var _appGame = require('./app/game');

var game = _interopRequireWildcard(_appGame);

var _appMenuJsx = require('./app/menu.jsx');

var menu = _interopRequireWildcard(_appMenuJsx);

_system.spawn(bootstrapAsync);

var autoStart = true; // TODO: compilation variable mechanism

/**
 *
 */
function bootstrapAsync() {
    var selectedLevel;
    return regeneratorRuntime.wrap(function bootstrapAsync$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                context$1$0.next = 2;
                return game.initializeAsync();

            case 2:
                if (!autoStart) {
                    context$1$0.next = 8;
                    break;
                }

                menu.close();
                context$1$0.next = 6;
                return game.initializeLevelAsync('sandbox');

            case 6:
                context$1$0.next = 14;
                break;

            case 8:
                context$1$0.next = 10;
                return menu.show();

            case 10:
                selectedLevel = context$1$0.sent;

                console.log(selectedLevel);
                context$1$0.next = 14;
                return game.initializeLevelAsync(selectedLevel.id);

            case 14:

                game.start();

            case 15:
            case 'end':
                return context$1$0.stop();
        }
    }, marked0$0[0], this);
}

},{"./app/game":26,"./app/menu.jsx":27,"system":30}],32:[function(require,module,exports){
(function (global){
"use strict";

require("core-js/shim");

require("regenerator/runtime");

if (global._babelPolyfill) {
  throw new Error("only one instance of babel/polyfill is allowed");
}
global._babelPolyfill = true;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"core-js/shim":116,"regenerator/runtime":117}],33:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var $ = require('./$');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = $.toObject($this)
      , length = $.toLength(O.length)
      , index  = $.toIndex(fromIndex, length)
      , value;
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index;
    } return !IS_INCLUDES && -1;
  };
};
},{"./$":53}],34:[function(require,module,exports){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var $   = require('./$')
  , ctx = require('./$.ctx');
module.exports = function(TYPE){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX;
  return function($this, callbackfn, that){
    var O      = Object($.assertDefined($this))
      , self   = $.ES5Object(O)
      , f      = ctx(callbackfn, that, 3)
      , length = $.toLength(self.length)
      , index  = 0
      , result = IS_MAP ? Array(length) : IS_FILTER ? [] : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};
},{"./$":53,"./$.ctx":42}],35:[function(require,module,exports){
var $ = require('./$');
function assert(condition, msg1, msg2){
  if(!condition)throw TypeError(msg2 ? msg1 + msg2 : msg1);
}
assert.def = $.assertDefined;
assert.fn = function(it){
  if(!$.isFunction(it))throw TypeError(it + ' is not a function!');
  return it;
};
assert.obj = function(it){
  if(!$.isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
assert.inst = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};
module.exports = assert;
},{"./$":53}],36:[function(require,module,exports){
var $        = require('./$')
  , enumKeys = require('./$.enum-keys');
// 19.1.2.1 Object.assign(target, source, ...)
/* eslint-disable no-unused-vars */
module.exports = Object.assign || function assign(target, source){
/* eslint-enable no-unused-vars */
  var T = Object($.assertDefined(target))
    , l = arguments.length
    , i = 1;
  while(l > i){
    var S      = $.ES5Object(arguments[i++])
      , keys   = enumKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)T[key = keys[j++]] = S[key];
  }
  return T;
};
},{"./$":53,"./$.enum-keys":45}],37:[function(require,module,exports){
var $        = require('./$')
  , TAG      = require('./$.wks')('toStringTag')
  , toString = {}.toString;
function cof(it){
  return toString.call(it).slice(8, -1);
}
cof.classof = function(it){
  var O, T;
  return it == undefined ? it === undefined ? 'Undefined' : 'Null'
    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T : cof(O);
};
cof.set = function(it, tag, stat){
  if(it && !$.has(it = stat ? it : it.prototype, TAG))$.hide(it, TAG, tag);
};
module.exports = cof;
},{"./$":53,"./$.wks":67}],38:[function(require,module,exports){
'use strict';
var $        = require('./$')
  , ctx      = require('./$.ctx')
  , safe     = require('./$.uid').safe
  , assert   = require('./$.assert')
  , forOf    = require('./$.for-of')
  , step     = require('./$.iter').step
  , has      = $.has
  , set      = $.set
  , isObject = $.isObject
  , hide     = $.hide
  , isFrozen = Object.isFrozen || $.core.Object.isFrozen
  , ID       = safe('id')
  , O1       = safe('O1')
  , LAST     = safe('last')
  , FIRST    = safe('first')
  , ITER     = safe('iter')
  , SIZE     = $.DESC ? safe('size') : 'size'
  , id       = 0;

function fastKey(it, create){
  // return primitive with prefix
  if(!isObject(it))return (typeof it == 'string' ? 'S' : 'P') + it;
  // can't set id to frozen object
  if(isFrozen(it))return 'F';
  if(!has(it, ID)){
    // not necessary to add id
    if(!create)return 'E';
    // add missing object id
    hide(it, ID, ++id);
  // return object id with prefix
  } return 'O' + it[ID];
}

function getEntry(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index != 'F')return that[O1][index];
  // frozen object case
  for(entry = that[FIRST]; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
}

module.exports = {
  getConstructor: function(NAME, IS_MAP, ADDER){
    function C(){
      var that     = assert.inst(this, C, NAME)
        , iterable = arguments[0];
      set(that, O1, $.create(null));
      set(that, SIZE, 0);
      set(that, LAST, undefined);
      set(that, FIRST, undefined);
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    }
    $.mix(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that[O1], entry = that[FIRST]; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that[FIRST] = that[LAST] = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that[O1][entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that[FIRST] == entry)that[FIRST] = next;
          if(that[LAST] == entry)that[LAST] = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        var f = ctx(callbackfn, arguments[1], 3)
          , entry;
        while(entry = entry ? entry.n : this[FIRST]){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if($.DESC)$.setDesc(C.prototype, 'size', {
      get: function(){
        return assert.def(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that[LAST] = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that[LAST],          // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that[FIRST])that[FIRST] = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index != 'F')that[O1][index] = entry;
    } return that;
  },
  getEntry: getEntry,
  // add .keys, .values, .entries, [@@iterator]
  // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
  setIter: function(C, NAME, IS_MAP){
    require('./$.iter-define')(C, NAME, function(iterated, kind){
      set(this, ITER, {o: iterated, k: kind});
    }, function(){
      var iter  = this[ITER]
        , kind  = iter.k
        , entry = iter.l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!iter.o || !(iter.l = entry = entry ? entry.n : iter.o[FIRST])){
        // or finish the iteration
        iter.o = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
  }
};
},{"./$":53,"./$.assert":35,"./$.ctx":42,"./$.for-of":46,"./$.iter":52,"./$.iter-define":50,"./$.uid":65}],39:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $def  = require('./$.def')
  , forOf = require('./$.for-of');
module.exports = function(NAME){
  $def($def.P, NAME, {
    toJSON: function toJSON(){
      var arr = [];
      forOf(this, false, arr.push, arr);
      return arr;
    }
  });
};
},{"./$.def":43,"./$.for-of":46}],40:[function(require,module,exports){
'use strict';
var $         = require('./$')
  , safe      = require('./$.uid').safe
  , assert    = require('./$.assert')
  , forOf     = require('./$.for-of')
  , _has      = $.has
  , isObject  = $.isObject
  , hide      = $.hide
  , isFrozen  = Object.isFrozen || $.core.Object.isFrozen
  , id        = 0
  , ID        = safe('id')
  , WEAK      = safe('weak')
  , LEAK      = safe('leak')
  , method    = require('./$.array-methods')
  , find      = method(5)
  , findIndex = method(6);
function findFrozen(store, key){
  return find(store.array, function(it){
    return it[0] === key;
  });
}
// fallback for frozen keys
function leakStore(that){
  return that[LEAK] || hide(that, LEAK, {
    array: [],
    get: function(key){
      var entry = findFrozen(this, key);
      if(entry)return entry[1];
    },
    has: function(key){
      return !!findFrozen(this, key);
    },
    set: function(key, value){
      var entry = findFrozen(this, key);
      if(entry)entry[1] = value;
      else this.array.push([key, value]);
    },
    'delete': function(key){
      var index = findIndex(this.array, function(it){
        return it[0] === key;
      });
      if(~index)this.array.splice(index, 1);
      return !!~index;
    }
  })[LEAK];
}

module.exports = {
  getConstructor: function(NAME, IS_MAP, ADDER){
    function C(){
      $.set(assert.inst(this, C, NAME), ID, id++);
      var iterable = arguments[0];
      if(iterable != undefined)forOf(iterable, IS_MAP, this[ADDER], this);
    }
    $.mix(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function(key){
        if(!isObject(key))return false;
        if(isFrozen(key))return leakStore(this)['delete'](key);
        return _has(key, WEAK) && _has(key[WEAK], this[ID]) && delete key[WEAK][this[ID]];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key){
        if(!isObject(key))return false;
        if(isFrozen(key))return leakStore(this).has(key);
        return _has(key, WEAK) && _has(key[WEAK], this[ID]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    if(isFrozen(assert.obj(key))){
      leakStore(that).set(key, value);
    } else {
      _has(key, WEAK) || hide(key, WEAK, {});
      key[WEAK][that[ID]] = value;
    } return that;
  },
  leakStore: leakStore,
  WEAK: WEAK,
  ID: ID
};
},{"./$":53,"./$.array-methods":34,"./$.assert":35,"./$.for-of":46,"./$.uid":65}],41:[function(require,module,exports){
'use strict';
var $     = require('./$')
  , $def  = require('./$.def')
  , BUGGY = require('./$.iter').BUGGY
  , forOf = require('./$.for-of')
  , species = require('./$.species')
  , assertInstance = require('./$.assert').inst;

module.exports = function(NAME, methods, common, IS_MAP, IS_WEAK){
  var Base  = $.g[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  function fixMethod(KEY, CHAIN){
    var method = proto[KEY];
    if($.FW)proto[KEY] = function(a, b){
      var result = method.call(this, a === 0 ? 0 : a, b);
      return CHAIN ? this : result;
    };
  }
  if(!$.isFunction(C) || !(IS_WEAK || !BUGGY && proto.forEach && proto.entries)){
    // create collection constructor
    C = common.getConstructor(NAME, IS_MAP, ADDER);
    $.mix(C.prototype, methods);
  } else {
    var inst  = new C
      , chain = inst[ADDER](IS_WEAK ? {} : -0, 1)
      , buggyZero;
    // wrap for init collections from iterable
    if(!require('./$.iter-detect')(function(iter){ new C(iter); })){ // eslint-disable-line no-new
      C = function(){
        assertInstance(this, C, NAME);
        var that     = new Base
          , iterable = arguments[0];
        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      };
      C.prototype = proto;
      if($.FW)proto.constructor = C;
    }
    IS_WEAK || inst.forEach(function(val, key){
      buggyZero = 1 / key === -Infinity;
    });
    // fix converting -0 key to +0
    if(buggyZero){
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    // + fix .add & .set for chaining
    if(buggyZero || chain !== inst)fixMethod(ADDER, true);
  }

  require('./$.cof').set(C, NAME);

  O[NAME] = C;
  $def($def.G + $def.W + $def.F * (C != Base), O);
  species(C);
  species($.core[NAME]); // for wrapper

  if(!IS_WEAK)common.setIter(C, NAME, IS_MAP);

  return C;
};
},{"./$":53,"./$.assert":35,"./$.cof":37,"./$.def":43,"./$.for-of":46,"./$.iter":52,"./$.iter-detect":51,"./$.species":59}],42:[function(require,module,exports){
// Optional / simple context binding
var assertFunction = require('./$.assert').fn;
module.exports = function(fn, that, length){
  assertFunction(fn);
  if(~length && that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  } return function(/* ...args */){
      return fn.apply(that, arguments);
    };
};
},{"./$.assert":35}],43:[function(require,module,exports){
var $          = require('./$')
  , global     = $.g
  , core       = $.core
  , isFunction = $.isFunction;
function ctx(fn, that){
  return function(){
    return fn.apply(that, arguments);
  };
}
global.core = core;
// type bitmap
$def.F = 1;  // forced
$def.G = 2;  // global
$def.S = 4;  // static
$def.P = 8;  // proto
$def.B = 16; // bind
$def.W = 32; // wrap
function $def(type, name, source){
  var key, own, out, exp
    , isGlobal = type & $def.G
    , target   = isGlobal ? global : type & $def.S
        ? global[name] : (global[name] || {}).prototype
    , exports  = isGlobal ? core : core[name] || (core[name] = {});
  if(isGlobal)source = name;
  for(key in source){
    // contains in native
    own = !(type & $def.F) && target && key in target;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    if(type & $def.B && own)exp = ctx(out, global);
    else exp = type & $def.P && isFunction(out) ? ctx(Function.call, out) : out;
    // extend global
    if(target && !own){
      if(isGlobal)target[key] = out;
      else delete target[key] && $.hide(target, key, out);
    }
    // export
    if(exports[key] != out)$.hide(exports, key, exp);
  }
}
module.exports = $def;
},{"./$":53}],44:[function(require,module,exports){
var $        = require('./$')
  , document = $.g.document
  , isObject = $.isObject
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./$":53}],45:[function(require,module,exports){
var $ = require('./$');
module.exports = function(it){
  var keys       = $.getKeys(it)
    , getDesc    = $.getDesc
    , getSymbols = $.getSymbols;
  if(getSymbols)$.each.call(getSymbols(it), function(key){
    if(getDesc(it, key).enumerable)keys.push(key);
  });
  return keys;
};
},{"./$":53}],46:[function(require,module,exports){
var ctx  = require('./$.ctx')
  , get  = require('./$.iter').get
  , call = require('./$.iter-call');
module.exports = function(iterable, entries, fn, that){
  var iterator = get(iterable)
    , f        = ctx(fn, that, entries ? 2 : 1)
    , step;
  while(!(step = iterator.next()).done){
    if(call(iterator, f, step.value, entries) === false){
      return call.close(iterator);
    }
  }
};
},{"./$.ctx":42,"./$.iter":52,"./$.iter-call":49}],47:[function(require,module,exports){
module.exports = function($){
  $.FW   = true;
  $.path = $.g;
  return $;
};
},{}],48:[function(require,module,exports){
// Fast apply
// http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
    case 5: return un ? fn(args[0], args[1], args[2], args[3], args[4])
                      : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
  } return              fn.apply(that, args);
};
},{}],49:[function(require,module,exports){
var assertObject = require('./$.assert').obj;
function close(iterator){
  var ret = iterator['return'];
  if(ret !== undefined)assertObject(ret.call(iterator));
}
function call(iterator, fn, value, entries){
  try {
    return entries ? fn(assertObject(value)[0], value[1]) : fn(value);
  } catch(e){
    close(iterator);
    throw e;
  }
}
call.close = close;
module.exports = call;
},{"./$.assert":35}],50:[function(require,module,exports){
var $def            = require('./$.def')
  , $               = require('./$')
  , cof             = require('./$.cof')
  , $iter           = require('./$.iter')
  , SYMBOL_ITERATOR = require('./$.wks')('iterator')
  , FF_ITERATOR     = '@@iterator'
  , KEYS            = 'keys'
  , VALUES          = 'values'
  , Iterators       = $iter.Iterators;
module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
  $iter.create(Constructor, NAME, next);
  function createMethod(kind){
    function $$(that){
      return new Constructor(that, kind);
    }
    switch(kind){
      case KEYS: return function keys(){ return $$(this); };
      case VALUES: return function values(){ return $$(this); };
    } return function entries(){ return $$(this); };
  }
  var TAG      = NAME + ' Iterator'
    , proto    = Base.prototype
    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , _default = _native || createMethod(DEFAULT)
    , methods, key;
  // Fix native
  if(_native){
    var IteratorPrototype = $.getProto(_default.call(new Base));
    // Set @@toStringTag to native iterators
    cof.set(IteratorPrototype, TAG, true);
    // FF fix
    if($.FW && $.has(proto, FF_ITERATOR))$iter.set(IteratorPrototype, $.that);
  }
  // Define iterator
  if($.FW)$iter.set(proto, _default);
  // Plug for library
  Iterators[NAME] = _default;
  Iterators[TAG]  = $.that;
  if(DEFAULT){
    methods = {
      keys:    IS_SET            ? _default : createMethod(KEYS),
      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
      entries: DEFAULT != VALUES ? _default : createMethod('entries')
    };
    if(FORCE)for(key in methods){
      if(!(key in proto))$.hide(proto, key, methods[key]);
    } else $def($def.P + $def.F * $iter.BUGGY, NAME, methods);
  }
};
},{"./$":53,"./$.cof":37,"./$.def":43,"./$.iter":52,"./$.wks":67}],51:[function(require,module,exports){
var SYMBOL_ITERATOR = require('./$.wks')('iterator')
  , SAFE_CLOSING    = false;
try {
  var riter = [7][SYMBOL_ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }
module.exports = function(exec){
  if(!SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[SYMBOL_ITERATOR]();
    iter.next = function(){ safe = true; };
    arr[SYMBOL_ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./$.wks":67}],52:[function(require,module,exports){
'use strict';
var $                 = require('./$')
  , cof               = require('./$.cof')
  , assertObject      = require('./$.assert').obj
  , SYMBOL_ITERATOR   = require('./$.wks')('iterator')
  , FF_ITERATOR       = '@@iterator'
  , Iterators         = {}
  , IteratorPrototype = {};
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
setIterator(IteratorPrototype, $.that);
function setIterator(O, value){
  $.hide(O, SYMBOL_ITERATOR, value);
  // Add iterator for FF iterator protocol
  if(FF_ITERATOR in [])$.hide(O, FF_ITERATOR, value);
}

module.exports = {
  // Safari has buggy iterators w/o `next`
  BUGGY: 'keys' in [] && !('next' in [].keys()),
  Iterators: Iterators,
  step: function(done, value){
    return {value: value, done: !!done};
  },
  is: function(it){
    var O      = Object(it)
      , Symbol = $.g.Symbol
      , SYM    = Symbol && Symbol.iterator || FF_ITERATOR;
    return SYM in O || SYMBOL_ITERATOR in O || $.has(Iterators, cof.classof(O));
  },
  get: function(it){
    var Symbol  = $.g.Symbol
      , ext     = it[Symbol && Symbol.iterator || FF_ITERATOR]
      , getIter = ext || it[SYMBOL_ITERATOR] || Iterators[cof.classof(it)];
    return assertObject(getIter.call(it));
  },
  set: setIterator,
  create: function(Constructor, NAME, next, proto){
    Constructor.prototype = $.create(proto || IteratorPrototype, {next: $.desc(1, next)});
    cof.set(Constructor, NAME + ' Iterator');
  }
};
},{"./$":53,"./$.assert":35,"./$.cof":37,"./$.wks":67}],53:[function(require,module,exports){
'use strict';
var global = typeof self != 'undefined' ? self : Function('return this')()
  , core   = {}
  , defineProperty = Object.defineProperty
  , hasOwnProperty = {}.hasOwnProperty
  , ceil  = Math.ceil
  , floor = Math.floor
  , max   = Math.max
  , min   = Math.min;
// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
var DESC = !!function(){
  try {
    return defineProperty({}, 'a', {get: function(){ return 2; }}).a == 2;
  } catch(e){ /* empty */ }
}();
var hide = createDefiner(1);
// 7.1.4 ToInteger
function toInteger(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
}
function desc(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
}
function simpleSet(object, key, value){
  object[key] = value;
  return object;
}
function createDefiner(bitmap){
  return DESC ? function(object, key, value){
    return $.setDesc(object, key, desc(bitmap, value));
  } : simpleSet;
}

function isObject(it){
  return it !== null && (typeof it == 'object' || typeof it == 'function');
}
function isFunction(it){
  return typeof it == 'function';
}
function assertDefined(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
}

var $ = module.exports = require('./$.fw')({
  g: global,
  core: core,
  html: global.document && document.documentElement,
  // http://jsperf.com/core-js-isobject
  isObject:   isObject,
  isFunction: isFunction,
  it: function(it){
    return it;
  },
  that: function(){
    return this;
  },
  // 7.1.4 ToInteger
  toInteger: toInteger,
  // 7.1.15 ToLength
  toLength: function(it){
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  },
  toIndex: function(index, length){
    index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
  },
  has: function(it, key){
    return hasOwnProperty.call(it, key);
  },
  create:     Object.create,
  getProto:   Object.getPrototypeOf,
  DESC:       DESC,
  desc:       desc,
  getDesc:    Object.getOwnPropertyDescriptor,
  setDesc:    defineProperty,
  setDescs:   Object.defineProperties,
  getKeys:    Object.keys,
  getNames:   Object.getOwnPropertyNames,
  getSymbols: Object.getOwnPropertySymbols,
  assertDefined: assertDefined,
  // Dummy, fix for not array-like ES3 string in es5 module
  ES5Object: Object,
  toObject: function(it){
    return $.ES5Object(assertDefined(it));
  },
  hide: hide,
  def: createDefiner(0),
  set: global.Symbol ? simpleSet : hide,
  mix: function(target, src){
    for(var key in src)hide(target, key, src[key]);
    return target;
  },
  each: [].forEach
});
/* eslint-disable no-undef */
if(typeof __e != 'undefined')__e = core;
if(typeof __g != 'undefined')__g = global;
},{"./$.fw":47}],54:[function(require,module,exports){
var $ = require('./$');
module.exports = function(object, el){
  var O      = $.toObject(object)
    , keys   = $.getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./$":53}],55:[function(require,module,exports){
var $            = require('./$')
  , assertObject = require('./$.assert').obj;
module.exports = function ownKeys(it){
  assertObject(it);
  var keys       = $.getNames(it)
    , getSymbols = $.getSymbols;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};
},{"./$":53,"./$.assert":35}],56:[function(require,module,exports){
'use strict';
var $      = require('./$')
  , invoke = require('./$.invoke')
  , assertFunction = require('./$.assert').fn;
module.exports = function(/* ...pargs */){
  var fn     = assertFunction(this)
    , length = arguments.length
    , pargs  = Array(length)
    , i      = 0
    , _      = $.path._
    , holder = false;
  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
  return function(/* ...args */){
    var that    = this
      , _length = arguments.length
      , j = 0, k = 0, args;
    if(!holder && !_length)return invoke(fn, pargs, that);
    args = pargs.slice();
    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
    while(_length > k)args.push(arguments[k++]);
    return invoke(fn, args, that);
  };
};
},{"./$":53,"./$.assert":35,"./$.invoke":48}],57:[function(require,module,exports){
'use strict';
module.exports = function(regExp, replace, isStatic){
  var replacer = replace === Object(replace) ? function(part){
    return replace[part];
  } : replace;
  return function(it){
    return String(isStatic ? it : this).replace(regExp, replacer);
  };
};
},{}],58:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var $      = require('./$')
  , assert = require('./$.assert');
function check(O, proto){
  assert.obj(O);
  assert(proto === null || $.isObject(proto), proto, ": can't set as prototype!");
}
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} // eslint-disable-line
    ? function(buggy, set){
        try {
          set = require('./$.ctx')(Function.call, $.getDesc(Object.prototype, '__proto__').set, 2);
          set({}, []);
        } catch(e){ buggy = true; }
        return function setPrototypeOf(O, proto){
          check(O, proto);
          if(buggy)O.__proto__ = proto;
          else set(O, proto);
          return O;
        };
      }()
    : undefined),
  check: check
};
},{"./$":53,"./$.assert":35,"./$.ctx":42}],59:[function(require,module,exports){
var $       = require('./$')
  , SPECIES = require('./$.wks')('species');
module.exports = function(C){
  if($.DESC && !(SPECIES in C))$.setDesc(C, SPECIES, {
    configurable: true,
    get: $.that
  });
};
},{"./$":53,"./$.wks":67}],60:[function(require,module,exports){
// true  -> String#at
// false -> String#codePointAt
var $ = require('./$');
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String($.assertDefined(that))
      , i = $.toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l
      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./$":53}],61:[function(require,module,exports){
// http://wiki.ecmascript.org/doku.php?id=strawman:string_padding
var $      = require('./$')
  , repeat = require('./$.string-repeat');

module.exports = function(that, minLength, fillChar, left){
  // 1. Let O be CheckObjectCoercible(this value).
  // 2. Let S be ToString(O).
  var S = String($.assertDefined(that));
  // 4. If intMinLength is undefined, return S.
  if(minLength === undefined)return S;
  // 4. Let intMinLength be ToInteger(minLength).
  var intMinLength = $.toInteger(minLength);
  // 5. Let fillLen be the number of characters in S minus intMinLength.
  var fillLen = intMinLength - S.length;
  // 6. If fillLen < 0, then throw a RangeError exception.
  // 7. If fillLen is +∞, then throw a RangeError exception.
  if(fillLen < 0 || fillLen === Infinity){
    throw new RangeError('Cannot satisfy string length ' + minLength + ' for string: ' + S);
  }
  // 8. Let sFillStr be the string represented by fillStr.
  // 9. If sFillStr is undefined, let sFillStr be a space character.
  var sFillStr = fillChar === undefined ? ' ' : String(fillChar);
  // 10. Let sFillVal be a String made of sFillStr, repeated until fillLen is met.
  var sFillVal = repeat.call(sFillStr, Math.ceil(fillLen / sFillStr.length));
  // truncate if we overflowed
  if(sFillVal.length > fillLen)sFillVal = left
    ? sFillVal.slice(sFillVal.length - fillLen)
    : sFillVal.slice(0, fillLen);
  // 11. Return a string made from sFillVal, followed by S.
  // 11. Return a String made from S, followed by sFillVal.
  return left ? sFillVal.concat(S) : S.concat(sFillVal);
};
},{"./$":53,"./$.string-repeat":62}],62:[function(require,module,exports){
'use strict';
var $ = require('./$');

module.exports = function repeat(count){
  var str = String($.assertDefined(this))
    , res = ''
    , n   = $.toInteger(count);
  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
  return res;
};
},{"./$":53}],63:[function(require,module,exports){
'use strict';
var $      = require('./$')
  , ctx    = require('./$.ctx')
  , cof    = require('./$.cof')
  , invoke = require('./$.invoke')
  , cel    = require('./$.dom-create')
  , global             = $.g
  , isFunction         = $.isFunction
  , html               = $.html
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , postMessage        = global.postMessage
  , addEventListener   = global.addEventListener
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
function run(){
  var id = +this;
  if($.has(queue, id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
}
function listner(event){
  run.call(event.data);
}
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!isFunction(setTask) || !isFunction(clearTask)){
  setTask = function(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(isFunction(fn) ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(cof(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Modern browsers, skip implementation for WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is object
  } else if(addEventListener && isFunction(postMessage) && !global.importScripts){
    defer = function(id){
      postMessage(id, '*');
    };
    addEventListener('message', listner, false);
  // WebWorkers
  } else if(isFunction(MessageChannel)){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listner;
    defer = ctx(port.postMessage, port, 1);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"./$":53,"./$.cof":37,"./$.ctx":42,"./$.dom-create":44,"./$.invoke":48}],64:[function(require,module,exports){
module.exports = function(exec){
  try {
    exec();
    return false;
  } catch(e){
    return true;
  }
};
},{}],65:[function(require,module,exports){
var sid = 0;
function uid(key){
  return 'Symbol(' + key + ')_' + (++sid + Math.random()).toString(36);
}
uid.safe = require('./$').g.Symbol || uid;
module.exports = uid;
},{"./$":53}],66:[function(require,module,exports){
// 22.1.3.31 Array.prototype[@@unscopables]
var $           = require('./$')
  , UNSCOPABLES = require('./$.wks')('unscopables');
if($.FW && !(UNSCOPABLES in []))$.hide(Array.prototype, UNSCOPABLES, {});
module.exports = function(key){
  if($.FW)[][UNSCOPABLES][key] = true;
};
},{"./$":53,"./$.wks":67}],67:[function(require,module,exports){
var global = require('./$').g
  , store  = {};
module.exports = function(name){
  return store[name] || (store[name] =
    global.Symbol && global.Symbol[name] || require('./$.uid').safe('Symbol.' + name));
};
},{"./$":53,"./$.uid":65}],68:[function(require,module,exports){
var $                = require('./$')
  , cel              = require('./$.dom-create')
  , cof              = require('./$.cof')
  , $def             = require('./$.def')
  , invoke           = require('./$.invoke')
  , arrayMethod      = require('./$.array-methods')
  , IE_PROTO         = require('./$.uid').safe('__proto__')
  , assert           = require('./$.assert')
  , assertObject     = assert.obj
  , ObjectProto      = Object.prototype
  , html             = $.html
  , A                = []
  , _slice           = A.slice
  , _join            = A.join
  , indexOf          = A.indexOf
  , classof          = cof.classof
  , has              = $.has
  , defineProperty   = $.setDesc
  , getOwnDescriptor = $.getDesc
  , defineProperties = $.setDescs
  , isFunction       = $.isFunction
  , toObject         = $.toObject
  , toLength         = $.toLength
  , toIndex          = $.toIndex
  , IE8_DOM_DEFINE   = false
  , $indexOf         = require('./$.array-includes')(false)
  , $forEach         = arrayMethod(0)
  , $map             = arrayMethod(1)
  , $filter          = arrayMethod(2)
  , $some            = arrayMethod(3)
  , $every           = arrayMethod(4);

if(!$.DESC){
  try {
    IE8_DOM_DEFINE = defineProperty(cel('div'), 'x',
      {get: function(){ return 8; }}
    ).x == 8;
  } catch(e){ /* empty */ }
  $.setDesc = function(O, P, Attributes){
    if(IE8_DOM_DEFINE)try {
      return defineProperty(O, P, Attributes);
    } catch(e){ /* empty */ }
    if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
    if('value' in Attributes)assertObject(O)[P] = Attributes.value;
    return O;
  };
  $.getDesc = function(O, P){
    if(IE8_DOM_DEFINE)try {
      return getOwnDescriptor(O, P);
    } catch(e){ /* empty */ }
    if(has(O, P))return $.desc(!ObjectProto.propertyIsEnumerable.call(O, P), O[P]);
  };
  $.setDescs = defineProperties = function(O, Properties){
    assertObject(O);
    var keys   = $.getKeys(Properties)
      , length = keys.length
      , i = 0
      , P;
    while(length > i)$.setDesc(O, P = keys[i++], Properties[P]);
    return O;
  };
}
$def($def.S + $def.F * !$.DESC, 'Object', {
  // 19.1.2.6 / 15.2.3.3 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $.getDesc,
  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
  defineProperty: $.setDesc,
  // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
  defineProperties: defineProperties
});

  // IE 8- don't enum bug keys
var keys1 = ('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,' +
            'toLocaleString,toString,valueOf').split(',')
  // Additional keys for getOwnPropertyNames
  , keys2 = keys1.concat('length', 'prototype')
  , keysLen1 = keys1.length;

// Create object with `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = cel('iframe')
    , i      = keysLen1
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write('<script>document.F=Object</script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict.prototype[keys1[i]];
  return createDict();
};
function createGetKeys(names, length){
  return function(object){
    var O      = toObject(object)
      , i      = 0
      , result = []
      , key;
    for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while(length > i)if(has(O, key = names[i++])){
      ~indexOf.call(result, key) || result.push(key);
    }
    return result;
  };
}
function isPrimitive(it){ return !$.isObject(it); }
function Empty(){}
$def($def.S, 'Object', {
  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
  getPrototypeOf: $.getProto = $.getProto || function(O){
    O = Object(assert.def(O));
    if(has(O, IE_PROTO))return O[IE_PROTO];
    if(isFunction(O.constructor) && O instanceof O.constructor){
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectProto : null;
  },
  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $.getNames = $.getNames || createGetKeys(keys2, keys2.length, true),
  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
  create: $.create = $.create || function(O, /*?*/Properties){
    var result;
    if(O !== null){
      Empty.prototype = assertObject(O);
      result = new Empty();
      Empty.prototype = null;
      // add "__proto__" for Object.getPrototypeOf shim
      result[IE_PROTO] = O;
    } else result = createDict();
    return Properties === undefined ? result : defineProperties(result, Properties);
  },
  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
  keys: $.getKeys = $.getKeys || createGetKeys(keys1, keysLen1, false),
  // 19.1.2.17 / 15.2.3.8 Object.seal(O)
  seal: $.it, // <- cap
  // 19.1.2.5 / 15.2.3.9 Object.freeze(O)
  freeze: $.it, // <- cap
  // 19.1.2.15 / 15.2.3.10 Object.preventExtensions(O)
  preventExtensions: $.it, // <- cap
  // 19.1.2.13 / 15.2.3.11 Object.isSealed(O)
  isSealed: isPrimitive, // <- cap
  // 19.1.2.12 / 15.2.3.12 Object.isFrozen(O)
  isFrozen: isPrimitive, // <- cap
  // 19.1.2.11 / 15.2.3.13 Object.isExtensible(O)
  isExtensible: $.isObject // <- cap
});

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
$def($def.P, 'Function', {
  bind: function(that /*, args... */){
    var fn       = assert.fn(this)
      , partArgs = _slice.call(arguments, 1);
    function bound(/* args... */){
      var args = partArgs.concat(_slice.call(arguments));
      return invoke(fn, args, this instanceof bound ? $.create(fn.prototype) : that);
    }
    if(fn.prototype)bound.prototype = fn.prototype;
    return bound;
  }
});

// Fix for not array-like ES3 string and DOM objects
if(!(0 in Object('z') && 'z'[0] == 'z')){
  $.ES5Object = function(it){
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
}

var buggySlice = true;
try {
  if(html)_slice.call(html);
  buggySlice = false;
} catch(e){ /* empty */ }

$def($def.P + $def.F * buggySlice, 'Array', {
  slice: function slice(begin, end){
    var len   = toLength(this.length)
      , klass = cof(this);
    end = end === undefined ? len : end;
    if(klass == 'Array')return _slice.call(this, begin, end);
    var start  = toIndex(begin, len)
      , upTo   = toIndex(end, len)
      , size   = toLength(upTo - start)
      , cloned = Array(size)
      , i      = 0;
    for(; i < size; i++)cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});

$def($def.P + $def.F * ($.ES5Object != Object), 'Array', {
  join: function join(){
    return _join.apply($.ES5Object(this), arguments);
  }
});

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
$def($def.S, 'Array', {
  isArray: function(arg){
    return cof(arg) == 'Array';
  }
});
function createArrayReduce(isRight){
  return function(callbackfn, memo){
    assert.fn(callbackfn);
    var O      = toObject(this)
      , length = toLength(O.length)
      , index  = isRight ? length - 1 : 0
      , i      = isRight ? -1 : 1;
    if(arguments.length < 2)for(;;){
      if(index in O){
        memo = O[index];
        index += i;
        break;
      }
      index += i;
      assert(isRight ? index >= 0 : length > index, 'Reduce of empty array with no initial value');
    }
    for(;isRight ? index >= 0 : length > index; index += i)if(index in O){
      memo = callbackfn(memo, O[index], index, this);
    }
    return memo;
  };
}
$def($def.P, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: $.each = $.each || function forEach(callbackfn/*, that = undefined */){
    return $forEach(this, callbackfn, arguments[1]);
  },
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn/*, that = undefined */){
    return $map(this, callbackfn, arguments[1]);
  },
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn/*, that = undefined */){
    return $filter(this, callbackfn, arguments[1]);
  },
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn/*, that = undefined */){
    return $some(this, callbackfn, arguments[1]);
  },
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn/*, that = undefined */){
    return $every(this, callbackfn, arguments[1]);
  },
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: createArrayReduce(false),
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: createArrayReduce(true),
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: indexOf = indexOf || function indexOf(el /*, fromIndex = 0 */){
    return $indexOf(this, el, arguments[1]);
  },
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function(el, fromIndex /* = @[*-1] */){
    var O      = toObject(this)
      , length = toLength(O.length)
      , index  = length - 1;
    if(arguments.length > 1)index = Math.min(index, $.toInteger(fromIndex));
    if(index < 0)index = toLength(length + index);
    for(;index >= 0; index--)if(index in O)if(O[index] === el)return index;
    return -1;
  }
});

// 21.1.3.25 / 15.5.4.20 String.prototype.trim()
$def($def.P, 'String', {trim: require('./$.replacer')(/^\s*([\s\S]*\S)?\s*$/, '$1')});

// 20.3.3.1 / 15.9.4.4 Date.now()
$def($def.S, 'Date', {now: function(){
  return +new Date;
}});

function lz(num){
  return num > 9 ? num : '0' + num;
}

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
// PhantomJS and old webkit had a broken Date implementation.
var date       = new Date(-5e13 - 1)
  , brokenDate = !(date.toISOString && date.toISOString() == '0385-07-25T07:06:39.999Z'
      && require('./$.throws')(function(){ new Date(NaN).toISOString(); }));
$def($def.P + $def.F * brokenDate, 'Date', {toISOString: function(){
  if(!isFinite(this))throw RangeError('Invalid time value');
  var d = this
    , y = d.getUTCFullYear()
    , m = d.getUTCMilliseconds()
    , s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
}});

if(classof(function(){ return arguments; }()) == 'Object')cof.classof = function(it){
  var tag = classof(it);
  return tag == 'Object' && isFunction(it.callee) ? 'Arguments' : tag;
};
},{"./$":53,"./$.array-includes":33,"./$.array-methods":34,"./$.assert":35,"./$.cof":37,"./$.def":43,"./$.dom-create":44,"./$.invoke":48,"./$.replacer":57,"./$.throws":64,"./$.uid":65}],69:[function(require,module,exports){
'use strict';
var $       = require('./$')
  , $def    = require('./$.def')
  , toIndex = $.toIndex;
$def($def.P, 'Array', {
  // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
  copyWithin: function copyWithin(target/* = 0 */, start /* = 0, end = @length */){
    var O     = Object($.assertDefined(this))
      , len   = $.toLength(O.length)
      , to    = toIndex(target, len)
      , from  = toIndex(start, len)
      , end   = arguments[2]
      , fin   = end === undefined ? len : toIndex(end, len)
      , count = Math.min(fin - from, len - to)
      , inc   = 1;
    if(from < to && to < from + count){
      inc  = -1;
      from = from + count - 1;
      to   = to   + count - 1;
    }
    while(count-- > 0){
      if(from in O)O[to] = O[from];
      else delete O[to];
      to   += inc;
      from += inc;
    } return O;
  }
});
require('./$.unscope')('copyWithin');
},{"./$":53,"./$.def":43,"./$.unscope":66}],70:[function(require,module,exports){
'use strict';
var $       = require('./$')
  , $def    = require('./$.def')
  , toIndex = $.toIndex;
$def($def.P, 'Array', {
  // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
  fill: function fill(value /*, start = 0, end = @length */){
    var O      = Object($.assertDefined(this))
      , length = $.toLength(O.length)
      , index  = toIndex(arguments[1], length)
      , end    = arguments[2]
      , endPos = end === undefined ? length : toIndex(end, length);
    while(endPos > index)O[index++] = value;
    return O;
  }
});
require('./$.unscope')('fill');
},{"./$":53,"./$.def":43,"./$.unscope":66}],71:[function(require,module,exports){
'use strict';
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var KEY    = 'findIndex'
  , $def   = require('./$.def')
  , forced = true
  , $find  = require('./$.array-methods')(6);
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$def($def.P + $def.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments[1]);
  }
});
require('./$.unscope')(KEY);
},{"./$.array-methods":34,"./$.def":43,"./$.unscope":66}],72:[function(require,module,exports){
'use strict';
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var KEY    = 'find'
  , $def   = require('./$.def')
  , forced = true
  , $find  = require('./$.array-methods')(5);
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$def($def.P + $def.F * forced, 'Array', {
  find: function find(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments[1]);
  }
});
require('./$.unscope')(KEY);
},{"./$.array-methods":34,"./$.def":43,"./$.unscope":66}],73:[function(require,module,exports){
var $     = require('./$')
  , ctx   = require('./$.ctx')
  , $def  = require('./$.def')
  , $iter = require('./$.iter')
  , call  = require('./$.iter-call');
$def($def.S + $def.F * !require('./$.iter-detect')(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = Object($.assertDefined(arrayLike))
      , mapfn   = arguments[1]
      , mapping = mapfn !== undefined
      , f       = mapping ? ctx(mapfn, arguments[2], 2) : undefined
      , index   = 0
      , length, result, step, iterator;
    if($iter.is(O)){
      iterator = $iter.get(O);
      // strange IE quirks mode bug -> use typeof instead of isFunction
      result   = new (typeof this == 'function' ? this : Array);
      for(; !(step = iterator.next()).done; index++){
        result[index] = mapping ? call(iterator, f, [step.value, index], true) : step.value;
      }
    } else {
      // strange IE quirks mode bug -> use typeof instead of isFunction
      result = new (typeof this == 'function' ? this : Array)(length = $.toLength(O.length));
      for(; length > index; index++){
        result[index] = mapping ? f(O[index], index) : O[index];
      }
    }
    result.length = index;
    return result;
  }
});
},{"./$":53,"./$.ctx":42,"./$.def":43,"./$.iter":52,"./$.iter-call":49,"./$.iter-detect":51}],74:[function(require,module,exports){
var $          = require('./$')
  , setUnscope = require('./$.unscope')
  , ITER       = require('./$.uid').safe('iter')
  , $iter      = require('./$.iter')
  , step       = $iter.step
  , Iterators  = $iter.Iterators;

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
require('./$.iter-define')(Array, 'Array', function(iterated, kind){
  $.set(this, ITER, {o: $.toObject(iterated), i: 0, k: kind});
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var iter  = this[ITER]
    , O     = iter.o
    , kind  = iter.k
    , index = iter.i++;
  if(!O || index >= O.length){
    iter.o = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

setUnscope('keys');
setUnscope('values');
setUnscope('entries');
},{"./$":53,"./$.iter":52,"./$.iter-define":50,"./$.uid":65,"./$.unscope":66}],75:[function(require,module,exports){
var $def = require('./$.def');
$def($def.S, 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */){
    var index  = 0
      , length = arguments.length
      // strange IE quirks mode bug -> use typeof instead of isFunction
      , result = new (typeof this == 'function' ? this : Array)(length);
    while(length > index)result[index] = arguments[index++];
    result.length = length;
    return result;
  }
});
},{"./$.def":43}],76:[function(require,module,exports){
require('./$.species')(Array);
},{"./$.species":59}],77:[function(require,module,exports){
var $             = require('./$')
  , HAS_INSTANCE  = require('./$.wks')('hasInstance')
  , FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if(!(HAS_INSTANCE in FunctionProto))$.setDesc(FunctionProto, HAS_INSTANCE, {value: function(O){
  if(!$.isFunction(this) || !$.isObject(O))return false;
  if(!$.isObject(this.prototype))return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while(O = $.getProto(O))if(this.prototype === O)return true;
  return false;
}});
},{"./$":53,"./$.wks":67}],78:[function(require,module,exports){
'use strict';
var $    = require('./$')
  , NAME = 'name'
  , setDesc = $.setDesc
  , FunctionProto = Function.prototype;
// 19.2.4.2 name
NAME in FunctionProto || $.FW && $.DESC && setDesc(FunctionProto, NAME, {
  configurable: true,
  get: function(){
    var match = String(this).match(/^\s*function ([^ (]*)/)
      , name  = match ? match[1] : '';
    $.has(this, NAME) || setDesc(this, NAME, $.desc(5, name));
    return name;
  },
  set: function(value){
    $.has(this, NAME) || setDesc(this, NAME, $.desc(0, value));
  }
});
},{"./$":53}],79:[function(require,module,exports){
'use strict';
var strong = require('./$.collection-strong');

// 23.1 Map Objects
require('./$.collection')('Map', {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);
},{"./$.collection":41,"./$.collection-strong":38}],80:[function(require,module,exports){
var Infinity = 1 / 0
  , $def  = require('./$.def')
  , E     = Math.E
  , pow   = Math.pow
  , abs   = Math.abs
  , exp   = Math.exp
  , log   = Math.log
  , sqrt  = Math.sqrt
  , ceil  = Math.ceil
  , floor = Math.floor
  , EPSILON   = pow(2, -52)
  , EPSILON32 = pow(2, -23)
  , MAX32     = pow(2, 127) * (2 - EPSILON32)
  , MIN32     = pow(2, -126);
function roundTiesToEven(n){
  return n + 1 / EPSILON - 1 / EPSILON;
}

// 20.2.2.28 Math.sign(x)
function sign(x){
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
}
// 20.2.2.5 Math.asinh(x)
function asinh(x){
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log(x + sqrt(x * x + 1));
}
// 20.2.2.14 Math.expm1(x)
function expm1(x){
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : exp(x) - 1;
}

$def($def.S, 'Math', {
  // 20.2.2.3 Math.acosh(x)
  acosh: function acosh(x){
    return (x = +x) < 1 ? NaN : isFinite(x) ? log(x / E + sqrt(x + 1) * sqrt(x - 1) / E) + 1 : x;
  },
  // 20.2.2.5 Math.asinh(x)
  asinh: asinh,
  // 20.2.2.7 Math.atanh(x)
  atanh: function atanh(x){
    return (x = +x) == 0 ? x : log((1 + x) / (1 - x)) / 2;
  },
  // 20.2.2.9 Math.cbrt(x)
  cbrt: function cbrt(x){
    return sign(x = +x) * pow(abs(x), 1 / 3);
  },
  // 20.2.2.11 Math.clz32(x)
  clz32: function clz32(x){
    return (x >>>= 0) ? 31 - floor(log(x + 0.5) * Math.LOG2E) : 32;
  },
  // 20.2.2.12 Math.cosh(x)
  cosh: function cosh(x){
    return (exp(x = +x) + exp(-x)) / 2;
  },
  // 20.2.2.14 Math.expm1(x)
  expm1: expm1,
  // 20.2.2.16 Math.fround(x)
  fround: function fround(x){
    var $abs  = abs(x)
      , $sign = sign(x)
      , a, result;
    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs);
    if(result > MAX32 || result != result)return $sign * Infinity;
    return $sign * result;
  },
  // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
    var sum  = 0
      , len1 = arguments.length
      , len2 = len1
      , args = Array(len1)
      , larg = -Infinity
      , arg;
    while(len1--){
      arg = args[len1] = +arguments[len1];
      if(arg == Infinity || arg == -Infinity)return Infinity;
      if(arg > larg)larg = arg;
    }
    larg = arg || 1;
    while(len2--)sum += pow(args[len2] / larg, 2);
    return larg * sqrt(sum);
  },
  // 20.2.2.18 Math.imul(x, y)
  imul: function imul(x, y){
    var UInt16 = 0xffff
      , xn = +x
      , yn = +y
      , xl = UInt16 & xn
      , yl = UInt16 & yn;
    return 0 | xl * yl + ((UInt16 & xn >>> 16) * yl + xl * (UInt16 & yn >>> 16) << 16 >>> 0);
  },
  // 20.2.2.20 Math.log1p(x)
  log1p: function log1p(x){
    return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : log(1 + x);
  },
  // 20.2.2.21 Math.log10(x)
  log10: function log10(x){
    return log(x) / Math.LN10;
  },
  // 20.2.2.22 Math.log2(x)
  log2: function log2(x){
    return log(x) / Math.LN2;
  },
  // 20.2.2.28 Math.sign(x)
  sign: sign,
  // 20.2.2.30 Math.sinh(x)
  sinh: function sinh(x){
    return abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (E / 2);
  },
  // 20.2.2.33 Math.tanh(x)
  tanh: function tanh(x){
    var a = expm1(x = +x)
      , b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  },
  // 20.2.2.34 Math.trunc(x)
  trunc: function trunc(it){
    return (it > 0 ? floor : ceil)(it);
  }
});
},{"./$.def":43}],81:[function(require,module,exports){
'use strict';
var $          = require('./$')
  , isObject   = $.isObject
  , isFunction = $.isFunction
  , NUMBER     = 'Number'
  , $Number    = $.g[NUMBER]
  , Base       = $Number
  , proto      = $Number.prototype;
function toPrimitive(it){
  var fn, val;
  if(isFunction(fn = it.valueOf) && !isObject(val = fn.call(it)))return val;
  if(isFunction(fn = it.toString) && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to number");
}
function toNumber(it){
  if(isObject(it))it = toPrimitive(it);
  if(typeof it == 'string' && it.length > 2 && it.charCodeAt(0) == 48){
    var binary = false;
    switch(it.charCodeAt(1)){
      case 66 : case 98  : binary = true;
      case 79 : case 111 : return parseInt(it.slice(2), binary ? 2 : 8);
    }
  } return +it;
}
if($.FW && !($Number('0o1') && $Number('0b1'))){
  $Number = function Number(it){
    return this instanceof $Number ? new Base(toNumber(it)) : toNumber(it);
  };
  $.each.call($.DESC ? $.getNames(Base) : (
      // ES3:
      'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
      // ES6 (in case, if modules with ES6 Number statics required before):
      'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
      'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
    ).split(','), function(key){
      if($.has(Base, key) && !$.has($Number, key)){
        $.setDesc($Number, key, $.getDesc(Base, key));
      }
    }
  );
  $Number.prototype = proto;
  proto.constructor = $Number;
  $.hide($.g, NUMBER, $Number);
}
},{"./$":53}],82:[function(require,module,exports){
var $     = require('./$')
  , $def  = require('./$.def')
  , abs   = Math.abs
  , floor = Math.floor
  , _isFinite = $.g.isFinite
  , MAX_SAFE_INTEGER = 0x1fffffffffffff; // pow(2, 53) - 1 == 9007199254740991;
function isInteger(it){
  return !$.isObject(it) && _isFinite(it) && floor(it) === it;
}
$def($def.S, 'Number', {
  // 20.1.2.1 Number.EPSILON
  EPSILON: Math.pow(2, -52),
  // 20.1.2.2 Number.isFinite(number)
  isFinite: function isFinite(it){
    return typeof it == 'number' && _isFinite(it);
  },
  // 20.1.2.3 Number.isInteger(number)
  isInteger: isInteger,
  // 20.1.2.4 Number.isNaN(number)
  isNaN: function isNaN(number){
    return number != number;
  },
  // 20.1.2.5 Number.isSafeInteger(number)
  isSafeInteger: function isSafeInteger(number){
    return isInteger(number) && abs(number) <= MAX_SAFE_INTEGER;
  },
  // 20.1.2.6 Number.MAX_SAFE_INTEGER
  MAX_SAFE_INTEGER: MAX_SAFE_INTEGER,
  // 20.1.2.10 Number.MIN_SAFE_INTEGER
  MIN_SAFE_INTEGER: -MAX_SAFE_INTEGER,
  // 20.1.2.12 Number.parseFloat(string)
  parseFloat: parseFloat,
  // 20.1.2.13 Number.parseInt(string, radix)
  parseInt: parseInt
});
},{"./$":53,"./$.def":43}],83:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $def = require('./$.def');
$def($def.S, 'Object', {assign: require('./$.assign')});
},{"./$.assign":36,"./$.def":43}],84:[function(require,module,exports){
// 19.1.3.10 Object.is(value1, value2)
var $def = require('./$.def');
$def($def.S, 'Object', {
  is: function is(x, y){
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  }
});
},{"./$.def":43}],85:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $def = require('./$.def');
$def($def.S, 'Object', {setPrototypeOf: require('./$.set-proto').set});
},{"./$.def":43,"./$.set-proto":58}],86:[function(require,module,exports){
var $        = require('./$')
  , $def     = require('./$.def')
  , isObject = $.isObject
  , toObject = $.toObject;
function wrapObjectMethod(METHOD, MODE){
  var fn  = ($.core.Object || {})[METHOD] || Object[METHOD]
    , f   = 0
    , o   = {};
  o[METHOD] = MODE == 1 ? function(it){
    return isObject(it) ? fn(it) : it;
  } : MODE == 2 ? function(it){
    return isObject(it) ? fn(it) : true;
  } : MODE == 3 ? function(it){
    return isObject(it) ? fn(it) : false;
  } : MODE == 4 ? function getOwnPropertyDescriptor(it, key){
    return fn(toObject(it), key);
  } : MODE == 5 ? function getPrototypeOf(it){
    return fn(Object($.assertDefined(it)));
  } : function(it){
    return fn(toObject(it));
  };
  try {
    fn('z');
  } catch(e){
    f = 1;
  }
  $def($def.S + $def.F * f, 'Object', o);
}
wrapObjectMethod('freeze', 1);
wrapObjectMethod('seal', 1);
wrapObjectMethod('preventExtensions', 1);
wrapObjectMethod('isFrozen', 2);
wrapObjectMethod('isSealed', 2);
wrapObjectMethod('isExtensible', 3);
wrapObjectMethod('getOwnPropertyDescriptor', 4);
wrapObjectMethod('getPrototypeOf', 5);
wrapObjectMethod('keys');
wrapObjectMethod('getOwnPropertyNames');
},{"./$":53,"./$.def":43}],87:[function(require,module,exports){
'use strict';
// 19.1.3.6 Object.prototype.toString()
var $   = require('./$')
  , cof = require('./$.cof')
  , tmp = {};
tmp[require('./$.wks')('toStringTag')] = 'z';
if($.FW && cof(tmp) != 'z')$.hide(Object.prototype, 'toString', function toString(){
  return '[object ' + cof.classof(this) + ']';
});
},{"./$":53,"./$.cof":37,"./$.wks":67}],88:[function(require,module,exports){
'use strict';
var $        = require('./$')
  , ctx      = require('./$.ctx')
  , cof      = require('./$.cof')
  , $def     = require('./$.def')
  , assert   = require('./$.assert')
  , forOf    = require('./$.for-of')
  , setProto = require('./$.set-proto').set
  , species  = require('./$.species')
  , SPECIES  = require('./$.wks')('species')
  , RECORD   = require('./$.uid').safe('record')
  , PROMISE  = 'Promise'
  , global   = $.g
  , process  = global.process
  , asap     = process && process.nextTick || require('./$.task').set
  , P        = global[PROMISE]
  , isFunction     = $.isFunction
  , isObject       = $.isObject
  , assertFunction = assert.fn
  , assertObject   = assert.obj;

var useNative = function(){
  var test, works = false;
  function P2(x){
    var self = new P(x);
    setProto(self, P2.prototype);
    return self;
  }
  try {
    works = isFunction(P) && isFunction(P.resolve) && P.resolve(test = new P(function(){})) == test;
    setProto(P2, P);
    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
    // actual Firefox has broken subclass support, test that
    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
      works = false;
    }
  } catch(e){ works = false; }
  return works;
}();

// helpers
function getConstructor(C){
  var S = assertObject(C)[SPECIES];
  return S != undefined ? S : C;
}
function isThenable(it){
  var then;
  if(isObject(it))then = it.then;
  return isFunction(then) ? then : false;
}
function notify(record){
  var chain = record.c;
  if(chain.length)asap(function(){
    var value = record.v
      , ok    = record.s == 1
      , i     = 0;
    function run(react){
      var cb = ok ? react.ok : react.fail
        , ret, then;
      try {
        if(cb){
          if(!ok)record.h = true;
          ret = cb === true ? value : cb(value);
          if(ret === react.P){
            react.rej(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(ret)){
            then.call(ret, react.res, react.rej);
          } else react.res(ret);
        } else react.rej(value);
      } catch(err){
        react.rej(err);
      }
    }
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    chain.length = 0;
  });
}
function isUnhandled(promise){
  var record = promise[RECORD]
    , chain  = record.a || record.c
    , i      = 0
    , react;
  if(record.h)return false;
  while(chain.length > i){
    react = chain[i++];
    if(react.fail || !isUnhandled(react.P))return false;
  } return true;
}
function $reject(value){
  var record = this
    , promise;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  record.v = value;
  record.s = 2;
  record.a = record.c.slice();
  setTimeout(function(){
    asap(function(){
      if(isUnhandled(promise = record.p)){
        if(cof(process) == 'process'){
          process.emit('unhandledRejection', value, promise);
        } else if(global.console && isFunction(console.error)){
          console.error('Unhandled promise rejection', value);
        }
      }
      record.a = undefined;
    });
  }, 1);
  notify(record);
}
function $resolve(value){
  var record = this
    , then, wrapper;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  try {
    if(then = isThenable(value)){
      wrapper = {r: record, d: false}; // wrap
      then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
    } else {
      record.v = value;
      record.s = 1;
      notify(record);
    }
  } catch(err){
    $reject.call(wrapper || {r: record, d: false}, err); // wrap
  }
}

// constructor polyfill
if(!useNative){
  // 25.4.3.1 Promise(executor)
  P = function Promise(executor){
    assertFunction(executor);
    var record = {
      p: assert.inst(this, P, PROMISE),       // <- promise
      c: [],                                  // <- awaiting reactions
      a: undefined,                           // <- checked in isUnhandled reactions
      s: 0,                                   // <- state
      d: false,                               // <- done
      v: undefined,                           // <- value
      h: false                                // <- handled rejection
    };
    $.hide(this, RECORD, record);
    try {
      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
    } catch(err){
      $reject.call(record, err);
    }
  };
  $.mix(P.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var S = assertObject(assertObject(this).constructor)[SPECIES];
      var react = {
        ok:   isFunction(onFulfilled) ? onFulfilled : true,
        fail: isFunction(onRejected)  ? onRejected  : false
      };
      var promise = react.P = new (S != undefined ? S : P)(function(res, rej){
        react.res = assertFunction(res);
        react.rej = assertFunction(rej);
      });
      var record = this[RECORD];
      record.c.push(react);
      if(record.a)record.a.push(react);
      record.s && notify(record);
      return promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
}

// export
$def($def.G + $def.W + $def.F * !useNative, {Promise: P});
cof.set(P, PROMISE);
species(P);
species($.core[PROMISE]); // for wrapper

// statics
$def($def.S + $def.F * !useNative, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    return new (getConstructor(this))(function(res, rej){
      rej(r);
    });
  },
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    return isObject(x) && RECORD in x && $.getProto(x) === this.prototype
      ? x : new (getConstructor(this))(function(res){
        res(x);
      });
  }
});
$def($def.S + $def.F * !(useNative && require('./$.iter-detect')(function(iter){
  P.all(iter)['catch'](function(){});
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C      = getConstructor(this)
      , values = [];
    return new C(function(res, rej){
      forOf(iterable, false, values.push, values);
      var remaining = values.length
        , results   = Array(remaining);
      if(remaining)$.each.call(values, function(promise, index){
        C.resolve(promise).then(function(value){
          results[index] = value;
          --remaining || res(results);
        }, rej);
      });
      else res(results);
    });
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C = getConstructor(this);
    return new C(function(res, rej){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(res, rej);
      });
    });
  }
});
},{"./$":53,"./$.assert":35,"./$.cof":37,"./$.ctx":42,"./$.def":43,"./$.for-of":46,"./$.iter-detect":51,"./$.set-proto":58,"./$.species":59,"./$.task":63,"./$.uid":65,"./$.wks":67}],89:[function(require,module,exports){
var $         = require('./$')
  , $def      = require('./$.def')
  , setProto  = require('./$.set-proto')
  , $iter     = require('./$.iter')
  , ITERATOR  = require('./$.wks')('iterator')
  , ITER      = require('./$.uid').safe('iter')
  , step      = $iter.step
  , assert    = require('./$.assert')
  , isObject  = $.isObject
  , getProto  = $.getProto
  , $Reflect  = $.g.Reflect
  , _apply    = Function.apply
  , assertObject = assert.obj
  , _isExtensible = Object.isExtensible || $.isObject
  , _preventExtensions = Object.preventExtensions || $.it
  // IE TP has broken Reflect.enumerate
  , buggyEnumerate = !($Reflect && $Reflect.enumerate && ITERATOR in $Reflect.enumerate({}));

function Enumerate(iterated){
  $.set(this, ITER, {o: iterated, k: undefined, i: 0});
}
$iter.create(Enumerate, 'Object', function(){
  var iter = this[ITER]
    , keys = iter.k
    , key;
  if(keys == undefined){
    iter.k = keys = [];
    for(key in iter.o)keys.push(key);
  }
  do {
    if(iter.i >= keys.length)return step(1);
  } while(!((key = keys[iter.i++]) in iter.o));
  return step(0, key);
});

var reflect = {
  // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
  apply: function apply(target, thisArgument, argumentsList){
    return _apply.call(target, thisArgument, argumentsList);
  },
  // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
  construct: function construct(target, argumentsList /*, newTarget*/){
    var proto    = assert.fn(arguments.length < 3 ? target : arguments[2]).prototype
      , instance = $.create(isObject(proto) ? proto : Object.prototype)
      , result   = _apply.call(target, instance, argumentsList);
    return isObject(result) ? result : instance;
  },
  // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
  defineProperty: function defineProperty(target, propertyKey, attributes){
    assertObject(target);
    try {
      $.setDesc(target, propertyKey, attributes);
      return true;
    } catch(e){
      return false;
    }
  },
  // 26.1.4 Reflect.deleteProperty(target, propertyKey)
  deleteProperty: function deleteProperty(target, propertyKey){
    var desc = $.getDesc(assertObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  },
  // 26.1.6 Reflect.get(target, propertyKey [, receiver])
  get: function get(target, propertyKey/*, receiver*/){
    var receiver = arguments.length < 3 ? target : arguments[2]
      , desc = $.getDesc(assertObject(target), propertyKey), proto;
    if(desc)return $.has(desc, 'value')
      ? desc.value
      : desc.get === undefined
        ? undefined
        : desc.get.call(receiver);
    return isObject(proto = getProto(target))
      ? get(proto, propertyKey, receiver)
      : undefined;
  },
  // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
    return $.getDesc(assertObject(target), propertyKey);
  },
  // 26.1.8 Reflect.getPrototypeOf(target)
  getPrototypeOf: function getPrototypeOf(target){
    return getProto(assertObject(target));
  },
  // 26.1.9 Reflect.has(target, propertyKey)
  has: function has(target, propertyKey){
    return propertyKey in target;
  },
  // 26.1.10 Reflect.isExtensible(target)
  isExtensible: function isExtensible(target){
    return _isExtensible(assertObject(target));
  },
  // 26.1.11 Reflect.ownKeys(target)
  ownKeys: require('./$.own-keys'),
  // 26.1.12 Reflect.preventExtensions(target)
  preventExtensions: function preventExtensions(target){
    assertObject(target);
    try {
      _preventExtensions(target);
      return true;
    } catch(e){
      return false;
    }
  },
  // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
  set: function set(target, propertyKey, V/*, receiver*/){
    var receiver = arguments.length < 4 ? target : arguments[3]
      , ownDesc  = $.getDesc(assertObject(target), propertyKey)
      , existingDescriptor, proto;
    if(!ownDesc){
      if(isObject(proto = getProto(target))){
        return set(proto, propertyKey, V, receiver);
      }
      ownDesc = $.desc(0);
    }
    if($.has(ownDesc, 'value')){
      if(ownDesc.writable === false || !isObject(receiver))return false;
      existingDescriptor = $.getDesc(receiver, propertyKey) || $.desc(0);
      existingDescriptor.value = V;
      $.setDesc(receiver, propertyKey, existingDescriptor);
      return true;
    }
    return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
  }
};
// 26.1.14 Reflect.setPrototypeOf(target, proto)
if(setProto)reflect.setPrototypeOf = function setPrototypeOf(target, proto){
  setProto.check(target, proto);
  try {
    setProto.set(target, proto);
    return true;
  } catch(e){
    return false;
  }
};

$def($def.G, {Reflect: {}});

$def($def.S + $def.F * buggyEnumerate, 'Reflect', {
  // 26.1.5 Reflect.enumerate(target)
  enumerate: function enumerate(target){
    return new Enumerate(assertObject(target));
  }
});

$def($def.S, 'Reflect', reflect);
},{"./$":53,"./$.assert":35,"./$.def":43,"./$.iter":52,"./$.own-keys":55,"./$.set-proto":58,"./$.uid":65,"./$.wks":67}],90:[function(require,module,exports){
var $       = require('./$')
  , cof     = require('./$.cof')
  , $RegExp = $.g.RegExp
  , Base    = $RegExp
  , proto   = $RegExp.prototype
  , re      = /a/g
  // "new" creates a new object
  , CORRECT_NEW = new $RegExp(re) !== re
  // RegExp allows a regex with flags as the pattern
  , ALLOWS_RE_WITH_FLAGS = function(){
    try {
      return $RegExp(re, 'i') == '/a/i';
    } catch(e){ /* empty */ }
  }();
if($.FW && $.DESC){
  if(!CORRECT_NEW || !ALLOWS_RE_WITH_FLAGS){
    $RegExp = function RegExp(pattern, flags){
      var patternIsRegExp  = cof(pattern) == 'RegExp'
        , flagsIsUndefined = flags === undefined;
      if(!(this instanceof $RegExp) && patternIsRegExp && flagsIsUndefined)return pattern;
      return CORRECT_NEW
        ? new Base(patternIsRegExp && !flagsIsUndefined ? pattern.source : pattern, flags)
        : new Base(patternIsRegExp ? pattern.source : pattern
          , patternIsRegExp && flagsIsUndefined ? pattern.flags : flags);
    };
    $.each.call($.getNames(Base), function(key){
      key in $RegExp || $.setDesc($RegExp, key, {
        configurable: true,
        get: function(){ return Base[key]; },
        set: function(it){ Base[key] = it; }
      });
    });
    proto.constructor = $RegExp;
    $RegExp.prototype = proto;
    $.hide($.g, 'RegExp', $RegExp);
  }
  // 21.2.5.3 get RegExp.prototype.flags()
  if(/./g.flags != 'g')$.setDesc(proto, 'flags', {
    configurable: true,
    get: require('./$.replacer')(/^.*\/(\w*)$/, '$1')
  });
}
require('./$.species')($RegExp);
},{"./$":53,"./$.cof":37,"./$.replacer":57,"./$.species":59}],91:[function(require,module,exports){
'use strict';
var strong = require('./$.collection-strong');

// 23.2 Set Objects
require('./$.collection')('Set', {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);
},{"./$.collection":41,"./$.collection-strong":38}],92:[function(require,module,exports){
'use strict';
var $def = require('./$.def')
  , $at  = require('./$.string-at')(false);
$def($def.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos){
    return $at(this, pos);
  }
});
},{"./$.def":43,"./$.string-at":60}],93:[function(require,module,exports){
'use strict';
var $    = require('./$')
  , cof  = require('./$.cof')
  , $def = require('./$.def')
  , toLength = $.toLength;

// should throw error on regex
$def($def.P + $def.F * !require('./$.throws')(function(){ 'q'.endsWith(/./); }), 'String', {
  // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
  endsWith: function endsWith(searchString /*, endPosition = @length */){
    if(cof(searchString) == 'RegExp')throw TypeError();
    var that = String($.assertDefined(this))
      , endPosition = arguments[1]
      , len = toLength(that.length)
      , end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    searchString += '';
    return that.slice(end - searchString.length, end) === searchString;
  }
});
},{"./$":53,"./$.cof":37,"./$.def":43,"./$.throws":64}],94:[function(require,module,exports){
var $def    = require('./$.def')
  , toIndex = require('./$').toIndex
  , fromCharCode = String.fromCharCode
  , $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$def($def.S + $def.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
    var res = []
      , len = arguments.length
      , i   = 0
      , code;
    while(len > i){
      code = +arguments[i++];
      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});
},{"./$":53,"./$.def":43}],95:[function(require,module,exports){
'use strict';
var $    = require('./$')
  , cof  = require('./$.cof')
  , $def = require('./$.def');

$def($def.P, 'String', {
  // 21.1.3.7 String.prototype.includes(searchString, position = 0)
  includes: function includes(searchString /*, position = 0 */){
    if(cof(searchString) == 'RegExp')throw TypeError();
    return !!~String($.assertDefined(this)).indexOf(searchString, arguments[1]);
  }
});
},{"./$":53,"./$.cof":37,"./$.def":43}],96:[function(require,module,exports){
var set   = require('./$').set
  , $at   = require('./$.string-at')(true)
  , ITER  = require('./$.uid').safe('iter')
  , $iter = require('./$.iter')
  , step  = $iter.step;

// 21.1.3.27 String.prototype[@@iterator]()
require('./$.iter-define')(String, 'String', function(iterated){
  set(this, ITER, {o: String(iterated), i: 0});
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var iter  = this[ITER]
    , O     = iter.o
    , index = iter.i
    , point;
  if(index >= O.length)return step(1);
  point = $at(O, index);
  iter.i += point.length;
  return step(0, point);
});
},{"./$":53,"./$.iter":52,"./$.iter-define":50,"./$.string-at":60,"./$.uid":65}],97:[function(require,module,exports){
var $    = require('./$')
  , $def = require('./$.def');

$def($def.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite){
    var tpl = $.toObject(callSite.raw)
      , len = $.toLength(tpl.length)
      , sln = arguments.length
      , res = []
      , i   = 0;
    while(len > i){
      res.push(String(tpl[i++]));
      if(i < sln)res.push(String(arguments[i]));
    } return res.join('');
  }
});
},{"./$":53,"./$.def":43}],98:[function(require,module,exports){
var $def = require('./$.def');

$def($def.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: require('./$.string-repeat')
});
},{"./$.def":43,"./$.string-repeat":62}],99:[function(require,module,exports){
'use strict';
var $    = require('./$')
  , cof  = require('./$.cof')
  , $def = require('./$.def');

// should throw error on regex
$def($def.P + $def.F * !require('./$.throws')(function(){ 'q'.startsWith(/./); }), 'String', {
  // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
  startsWith: function startsWith(searchString /*, position = 0 */){
    if(cof(searchString) == 'RegExp')throw TypeError();
    var that  = String($.assertDefined(this))
      , index = $.toLength(Math.min(arguments[1], that.length));
    searchString += '';
    return that.slice(index, index + searchString.length) === searchString;
  }
});
},{"./$":53,"./$.cof":37,"./$.def":43,"./$.throws":64}],100:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var $        = require('./$')
  , setTag   = require('./$.cof').set
  , uid      = require('./$.uid')
  , $def     = require('./$.def')
  , keyOf    = require('./$.keyof')
  , enumKeys = require('./$.enum-keys')
  , assertObject = require('./$.assert').obj
  , has      = $.has
  , $create  = $.create
  , getDesc  = $.getDesc
  , setDesc  = $.setDesc
  , desc     = $.desc
  , getNames = $.getNames
  , toObject = $.toObject
  , $Symbol  = $.g.Symbol
  , setter   = false
  , TAG      = uid('tag')
  , HIDDEN   = uid('hidden')
  , SymbolRegistry = {}
  , AllSymbols = {}
  , useNative = $.isFunction($Symbol);

function wrap(tag){
  var sym = AllSymbols[tag] = $.set($create($Symbol.prototype), TAG, tag);
  $.DESC && setter && setDesc(Object.prototype, tag, {
    configurable: true,
    set: function(value){
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setDesc(this, tag, desc(1, value));
    }
  });
  return sym;
}

function defineProperty(it, key, D){
  if(D && has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))setDesc(it, HIDDEN, desc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D.enumerable = false;
    }
  } return setDesc(it, key, D);
}
function defineProperties(it, P){
  assertObject(it);
  var keys = enumKeys(P = toObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)defineProperty(it, key = keys[i++], P[key]);
  return it;
}
function create(it, P){
  return P === undefined ? $create(it) : defineProperties($create(it), P);
}
function getOwnPropertyDescriptor(it, key){
  var D = getDesc(it = toObject(it), key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
}
function getOwnPropertyNames(it){
  var names  = getNames(toObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
  return result;
}
function getOwnPropertySymbols(it){
  var names  = getNames(toObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
  return result;
}

// 19.4.1.1 Symbol([description])
if(!useNative){
  $Symbol = function Symbol(description){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor');
    return wrap(uid(description));
  };
  $.hide($Symbol.prototype, 'toString', function(){
    return this[TAG];
  });

  $.create     = create;
  $.setDesc    = defineProperty;
  $.getDesc    = getOwnPropertyDescriptor;
  $.setDescs   = defineProperties;
  $.getNames   = getOwnPropertyNames;
  $.getSymbols = getOwnPropertySymbols;
}

var symbolStatics = {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    return keyOf(SymbolRegistry, key);
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
};
// 19.4.2.2 Symbol.hasInstance
// 19.4.2.3 Symbol.isConcatSpreadable
// 19.4.2.4 Symbol.iterator
// 19.4.2.6 Symbol.match
// 19.4.2.8 Symbol.replace
// 19.4.2.9 Symbol.search
// 19.4.2.10 Symbol.species
// 19.4.2.11 Symbol.split
// 19.4.2.12 Symbol.toPrimitive
// 19.4.2.13 Symbol.toStringTag
// 19.4.2.14 Symbol.unscopables
$.each.call((
    'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
    'species,split,toPrimitive,toStringTag,unscopables'
  ).split(','), function(it){
    var sym = require('./$.wks')(it);
    symbolStatics[it] = useNative ? sym : wrap(sym);
  }
);

setter = true;

$def($def.G + $def.W, {Symbol: $Symbol});

$def($def.S, 'Symbol', symbolStatics);

$def($def.S + $def.F * !useNative, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: getOwnPropertySymbols
});

// 19.4.3.5 Symbol.prototype[@@toStringTag]
setTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setTag($.g.JSON, 'JSON', true);
},{"./$":53,"./$.assert":35,"./$.cof":37,"./$.def":43,"./$.enum-keys":45,"./$.keyof":54,"./$.uid":65,"./$.wks":67}],101:[function(require,module,exports){
'use strict';
var $         = require('./$')
  , weak      = require('./$.collection-weak')
  , leakStore = weak.leakStore
  , ID        = weak.ID
  , WEAK      = weak.WEAK
  , has       = $.has
  , isObject  = $.isObject
  , isFrozen  = Object.isFrozen || $.core.Object.isFrozen
  , tmp       = {};

// 23.3 WeakMap Objects
var WeakMap = require('./$.collection')('WeakMap', {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key){
    if(isObject(key)){
      if(isFrozen(key))return leakStore(this).get(key);
      if(has(key, WEAK))return key[WEAK][this[ID]];
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value){
    return weak.def(this, key, value);
  }
}, weak, true, true);

// IE11 WeakMap frozen keys fix
if($.FW && new WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
  $.each.call(['delete', 'has', 'get', 'set'], function(key){
    var method = WeakMap.prototype[key];
    WeakMap.prototype[key] = function(a, b){
      // store frozen objects on leaky map
      if(isObject(a) && isFrozen(a)){
        var result = leakStore(this)[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    };
  });
}
},{"./$":53,"./$.collection":41,"./$.collection-weak":40}],102:[function(require,module,exports){
'use strict';
var weak = require('./$.collection-weak');

// 23.4 WeakSet Objects
require('./$.collection')('WeakSet', {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value){
    return weak.def(this, value, true);
  }
}, weak, false, true);
},{"./$.collection":41,"./$.collection-weak":40}],103:[function(require,module,exports){
// https://github.com/domenic/Array.prototype.includes
var $def      = require('./$.def')
  , $includes = require('./$.array-includes')(true);
$def($def.P, 'Array', {
  includes: function includes(el /*, fromIndex = 0 */){
    return $includes(this, el, arguments[1]);
  }
});
require('./$.unscope')('includes');
},{"./$.array-includes":33,"./$.def":43,"./$.unscope":66}],104:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
require('./$.collection-to-json')('Map');
},{"./$.collection-to-json":39}],105:[function(require,module,exports){
// https://gist.github.com/WebReflection/9353781
var $       = require('./$')
  , $def    = require('./$.def')
  , ownKeys = require('./$.own-keys');

$def($def.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
    var O      = $.toObject(object)
      , result = {};
    $.each.call(ownKeys(O), function(key){
      $.setDesc(result, key, $.desc(0, $.getDesc(O, key)));
    });
    return result;
  }
});
},{"./$":53,"./$.def":43,"./$.own-keys":55}],106:[function(require,module,exports){
// http://goo.gl/XkBrjD
var $    = require('./$')
  , $def = require('./$.def');
function createObjectToArray(isEntries){
  return function(object){
    var O      = $.toObject(object)
      , keys   = $.getKeys(O)
      , length = keys.length
      , i      = 0
      , result = Array(length)
      , key;
    if(isEntries)while(length > i)result[i] = [key = keys[i++], O[key]];
    else while(length > i)result[i] = O[keys[i++]];
    return result;
  };
}
$def($def.S, 'Object', {
  values:  createObjectToArray(false),
  entries: createObjectToArray(true)
});
},{"./$":53,"./$.def":43}],107:[function(require,module,exports){
// https://gist.github.com/kangax/9698100
var $def = require('./$.def');
$def($def.S, 'RegExp', {
  escape: require('./$.replacer')(/([\\\-[\]{}()*+?.,^$|])/g, '\\$1', true)
});
},{"./$.def":43,"./$.replacer":57}],108:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
require('./$.collection-to-json')('Set');
},{"./$.collection-to-json":39}],109:[function(require,module,exports){
// https://github.com/mathiasbynens/String.prototype.at
'use strict';
var $def = require('./$.def')
  , $at  = require('./$.string-at')(true);
$def($def.P, 'String', {
  at: function at(pos){
    return $at(this, pos);
  }
});
},{"./$.def":43,"./$.string-at":60}],110:[function(require,module,exports){
'use strict';
var $def = require('./$.def')
  , $pad = require('./$.string-pad');
$def($def.P, 'String', {
  lpad: function lpad(n){
    return $pad(this, n, arguments[1], true);
  }
});
},{"./$.def":43,"./$.string-pad":61}],111:[function(require,module,exports){
'use strict';
var $def = require('./$.def')
  , $pad = require('./$.string-pad');
$def($def.P, 'String', {
  rpad: function rpad(n){
    return $pad(this, n, arguments[1], false);
  }
});
},{"./$.def":43,"./$.string-pad":61}],112:[function(require,module,exports){
// JavaScript 1.6 / Strawman array statics shim
var $       = require('./$')
  , $def    = require('./$.def')
  , $Array  = $.core.Array || Array
  , statics = {};
function setStatics(keys, length){
  $.each.call(keys.split(','), function(key){
    if(length == undefined && key in $Array)statics[key] = $Array[key];
    else if(key in [])statics[key] = require('./$.ctx')(Function.call, [][key], length);
  });
}
setStatics('pop,reverse,shift,keys,values,entries', 1);
setStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
setStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
           'reduce,reduceRight,copyWithin,fill,turn');
$def($def.S, 'Array', statics);
},{"./$":53,"./$.ctx":42,"./$.def":43}],113:[function(require,module,exports){
require('./es6.array.iterator');
var $           = require('./$')
  , Iterators   = require('./$.iter').Iterators
  , ITERATOR    = require('./$.wks')('iterator')
  , ArrayValues = Iterators.Array
  , NodeList    = $.g.NodeList;
if($.FW && NodeList && !(ITERATOR in NodeList.prototype)){
  $.hide(NodeList.prototype, ITERATOR, ArrayValues);
}
Iterators.NodeList = ArrayValues;
},{"./$":53,"./$.iter":52,"./$.wks":67,"./es6.array.iterator":74}],114:[function(require,module,exports){
var $def  = require('./$.def')
  , $task = require('./$.task');
$def($def.G + $def.B, {
  setImmediate:   $task.set,
  clearImmediate: $task.clear
});
},{"./$.def":43,"./$.task":63}],115:[function(require,module,exports){
// ie9- setTimeout & setInterval additional parameters fix
var $         = require('./$')
  , $def      = require('./$.def')
  , invoke    = require('./$.invoke')
  , partial   = require('./$.partial')
  , navigator = $.g.navigator
  , MSIE      = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
function wrap(set){
  return MSIE ? function(fn, time /*, ...args */){
    return set(invoke(
      partial,
      [].slice.call(arguments, 2),
      $.isFunction(fn) ? fn : Function(fn)
    ), time);
  } : set;
}
$def($def.G + $def.B + $def.F * MSIE, {
  setTimeout:  wrap($.g.setTimeout),
  setInterval: wrap($.g.setInterval)
});
},{"./$":53,"./$.def":43,"./$.invoke":48,"./$.partial":56}],116:[function(require,module,exports){
require('./modules/es5');
require('./modules/es6.symbol');
require('./modules/es6.object.assign');
require('./modules/es6.object.is');
require('./modules/es6.object.set-prototype-of');
require('./modules/es6.object.to-string');
require('./modules/es6.object.statics-accept-primitives');
require('./modules/es6.function.name');
require('./modules/es6.function.has-instance');
require('./modules/es6.number.constructor');
require('./modules/es6.number.statics');
require('./modules/es6.math');
require('./modules/es6.string.from-code-point');
require('./modules/es6.string.raw');
require('./modules/es6.string.iterator');
require('./modules/es6.string.code-point-at');
require('./modules/es6.string.ends-with');
require('./modules/es6.string.includes');
require('./modules/es6.string.repeat');
require('./modules/es6.string.starts-with');
require('./modules/es6.array.from');
require('./modules/es6.array.of');
require('./modules/es6.array.iterator');
require('./modules/es6.array.species');
require('./modules/es6.array.copy-within');
require('./modules/es6.array.fill');
require('./modules/es6.array.find');
require('./modules/es6.array.find-index');
require('./modules/es6.regexp');
require('./modules/es6.promise');
require('./modules/es6.map');
require('./modules/es6.set');
require('./modules/es6.weak-map');
require('./modules/es6.weak-set');
require('./modules/es6.reflect');
require('./modules/es7.array.includes');
require('./modules/es7.string.at');
require('./modules/es7.string.lpad');
require('./modules/es7.string.rpad');
require('./modules/es7.regexp.escape');
require('./modules/es7.object.get-own-property-descriptors');
require('./modules/es7.object.to-array');
require('./modules/es7.map.to-json');
require('./modules/es7.set.to-json');
require('./modules/js.array.statics');
require('./modules/web.timers');
require('./modules/web.immediate');
require('./modules/web.dom.iterable');
module.exports = require('./modules/$').core;

},{"./modules/$":53,"./modules/es5":68,"./modules/es6.array.copy-within":69,"./modules/es6.array.fill":70,"./modules/es6.array.find":72,"./modules/es6.array.find-index":71,"./modules/es6.array.from":73,"./modules/es6.array.iterator":74,"./modules/es6.array.of":75,"./modules/es6.array.species":76,"./modules/es6.function.has-instance":77,"./modules/es6.function.name":78,"./modules/es6.map":79,"./modules/es6.math":80,"./modules/es6.number.constructor":81,"./modules/es6.number.statics":82,"./modules/es6.object.assign":83,"./modules/es6.object.is":84,"./modules/es6.object.set-prototype-of":85,"./modules/es6.object.statics-accept-primitives":86,"./modules/es6.object.to-string":87,"./modules/es6.promise":88,"./modules/es6.reflect":89,"./modules/es6.regexp":90,"./modules/es6.set":91,"./modules/es6.string.code-point-at":92,"./modules/es6.string.ends-with":93,"./modules/es6.string.from-code-point":94,"./modules/es6.string.includes":95,"./modules/es6.string.iterator":96,"./modules/es6.string.raw":97,"./modules/es6.string.repeat":98,"./modules/es6.string.starts-with":99,"./modules/es6.symbol":100,"./modules/es6.weak-map":101,"./modules/es6.weak-set":102,"./modules/es7.array.includes":103,"./modules/es7.map.to-json":104,"./modules/es7.object.get-own-property-descriptors":105,"./modules/es7.object.to-array":106,"./modules/es7.regexp.escape":107,"./modules/es7.set.to-json":108,"./modules/es7.string.at":109,"./modules/es7.string.lpad":110,"./modules/es7.string.rpad":111,"./modules/js.array.statics":112,"./modules/web.dom.iterable":113,"./modules/web.immediate":114,"./modules/web.timers":115}],117:[function(require,module,exports){
(function (global){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var iteratorSymbol =
    typeof Symbol === "function" && Symbol.iterator || "@@iterator";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided, then outerFn.prototype instanceof Generator.
    var generator = Object.create((outerFn || Generator).prototype);

    generator._invoke = makeInvokeMethod(
      innerFn, self || null,
      new Context(tryLocsList || [])
    );

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = "GeneratorFunction";

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    genFun.__proto__ = GeneratorFunctionPrototype;
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    return new Promise(function(resolve, reject) {
      var generator = wrap(innerFn, outerFn, self, tryLocsList);
      var callNext = step.bind(generator, "next");
      var callThrow = step.bind(generator, "throw");

      function step(method, arg) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
          return;
        }

        var info = record.arg;
        if (info.done) {
          resolve(info.value);
        } else {
          Promise.resolve(info.value).then(callNext, callThrow);
        }
      }

      callNext();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" ||
              (method === "throw" && delegate.iterator[method] === undefined)) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(
            delegate.iterator[method],
            delegate.iterator,
            arg
          );

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          if (state === GenStateSuspendedYield) {
            context.sent = arg;
          } else {
            delete context.sent;
          }

        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }

        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  function defineGeneratorMethod(method) {
    Gp[method] = function(arg) {
      return this._invoke(method, arg);
    };
  }
  defineGeneratorMethod("next");
  defineGeneratorMethod("throw");
  defineGeneratorMethod("return");

  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset();
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function() {
      this.prev = 0;
      this.next = 0;
      this.sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      // Pre-initialize at least 20 temporary variables to enable hidden
      // class optimizations for simple generators.
      for (var tempIndex = 0, tempName;
           hasOwn.call(this, tempName = "t" + tempIndex) || tempIndex < 20;
           ++tempIndex) {
        this[tempName] = null;
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          return this.complete(entry.completion, entry.afterLoc);
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],118:[function(require,module,exports){
module.exports = require("./lib/babel/polyfill");

},{"./lib/babel/polyfill":32}]},{},[1,31])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJiYWJlbGlmeS9wb2x5ZmlsbCIsImQ6L1Byb2plY3RzL09yYml0ZXIvYXBwL0lUYXJnZXQuanMiLCJkOi9Qcm9qZWN0cy9PcmJpdGVyL2FwcC9QbGFuZXQuanMiLCJkOi9Qcm9qZWN0cy9PcmJpdGVyL2FwcC9TYXRlbGxpdGUuanMiLCJkOi9Qcm9qZWN0cy9PcmJpdGVyL2FwcC9TY3JpcHQuanMiLCJkOi9Qcm9qZWN0cy9PcmJpdGVyL2FwcC9TaGlwLmpzIiwiZDovUHJvamVjdHMvT3JiaXRlci9hcHAvVGFyZ2V0T3JiaXQuanMiLCJkOi9Qcm9qZWN0cy9PcmJpdGVyL2FwcC9UYXJnZXRQb2ludC5qcyIsImQ6L1Byb2plY3RzL09yYml0ZXIvYXBwL19TYXRlbGxpdGUvQ29tLmpzIiwiZDovUHJvamVjdHMvT3JiaXRlci9hcHAvX1NhdGVsbGl0ZS9TZWxlY3Rpb24uanMiLCJkOi9Qcm9qZWN0cy9PcmJpdGVyL2FwcC9fU2F0ZWxsaXRlL1RyYWlsLmpzIiwiZDovUHJvamVjdHMvT3JiaXRlci9hcHAvX1NoaXAvRW5naW5lLmpzIiwiZDovUHJvamVjdHMvT3JiaXRlci9hcHAvX1NoaXAvRXhwbG9zaW9uLmpzIiwiZDovUHJvamVjdHMvT3JiaXRlci9hcHAvX1NoaXAvRnV0dXJlLmpzIiwiZDovUHJvamVjdHMvT3JiaXRlci9hcHAvX1NoaXAvSHVkLmpzIiwiZDovUHJvamVjdHMvT3JiaXRlci9hcHAvX1NoaXAvVHJhaWwuanMiLCJkOi9Qcm9qZWN0cy9PcmJpdGVyL2FwcC9fU2hpcC9fRW5naW5lL2ZsYW1lLmpzIiwiZDovUHJvamVjdHMvT3JiaXRlci9hcHAvX1NoaXAvX0VuZ2luZS9saWdodGluZy5qcyIsImQ6L1Byb2plY3RzL09yYml0ZXIvYXBwL19TaGlwL19FbmdpbmUvc21va2UuanMiLCJkOi9Qcm9qZWN0cy9PcmJpdGVyL2FwcC9fU2hpcC9fSHVkL25vcm1hbC5qcyIsImQ6L1Byb2plY3RzL09yYml0ZXIvYXBwL19TaGlwL19IdWQvdGFyZ2V0LmpzIiwiZDovUHJvamVjdHMvT3JiaXRlci9hcHAvY29udGV4dC5qcyIsImQ6L1Byb2plY3RzL09yYml0ZXIvYXBwL2NvcmUvUG9zaXRpb25hYmxlT2JqZWN0LmpzIiwiZDovUHJvamVjdHMvT3JiaXRlci9hcHAvY29yZS9TdGVwYWJsZS5qcyIsImQ6L1Byb2plY3RzL09yYml0ZXIvYXBwL2NvcmUvVmVybGV0T2JqZWN0LmpzIiwiZDovUHJvamVjdHMvT3JiaXRlci9hcHAvZ2FtZS5qcyIsImQ6L1Byb2plY3RzL09yYml0ZXIvYXBwL21lbnUuanN4IiwiZDovUHJvamVjdHMvT3JiaXRlci9hcHAvcGh5c2ljLmpzIiwiZDovUHJvamVjdHMvT3JiaXRlci9hcHAvcHJvdmlkZXIuanMiLCJkOi9Qcm9qZWN0cy9PcmJpdGVyL2FwcC9zeXN0ZW0vaW5kZXguanMiLCJkOi9Qcm9qZWN0cy9PcmJpdGVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL2xpYi9iYWJlbC9wb2x5ZmlsbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQuYXJyYXktaW5jbHVkZXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy8kLmFycmF5LW1ldGhvZHMuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy8kLmFzc2VydC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQuYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC5jb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy8kLmNvbGxlY3Rpb24tc3Ryb25nLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC5jb2xsZWN0aW9uLXRvLWpzb24uanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy8kLmNvbGxlY3Rpb24td2Vhay5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQuY29sbGVjdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQuY3R4LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC5kZWYuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy8kLmRvbS1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy8kLmVudW0ta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQuZm9yLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC5mdy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQuaW52b2tlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC5pdGVyLWNhbGwuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy8kLml0ZXItZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC5pdGVyLWRldGVjdC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQuaXRlci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy8kLmtleW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC5vd24ta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQucGFydGlhbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQucmVwbGFjZXIuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy8kLnNldC1wcm90by5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQuc3BlY2llcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQuc3RyaW5nLWF0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC5zdHJpbmctcGFkLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC5zdHJpbmctcmVwZWF0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC50YXNrLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvJC50aHJvd3MuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy8kLnVpZC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQudW5zY29wZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzLyQud2tzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM1LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmNvcHktd2l0aGluLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbGwuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmluZC1pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkub2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc3BlY2llcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5oYXMtaW5zdGFuY2UuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5tYXAuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuY29uc3RydWN0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnN0YXRpY3MuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnN0YXRpY3MtYWNjZXB0LXByaW1pdGl2ZXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnNldC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuY29kZS1wb2ludC1hdC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZW5kcy13aXRoLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5mcm9tLWNvZGUtcG9pbnQuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmluY2x1ZGVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcucmF3LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5yZXBlYXQuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnN0YXJ0cy13aXRoLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLW1hcC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLXNldC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5hcnJheS5pbmNsdWRlcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QudG8tYXJyYXkuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucmVnZXhwLmVzY2FwZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5zZXQudG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcuYXQuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLmxwYWQuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLnJwYWQuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9qcy5hcnJheS5zdGF0aWNzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5pbW1lZGlhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9jb3JlLWpzL3NoaW0uanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yL3J1bnRpbWUuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvcG9seWZpbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozt1QkNBb0IsU0FBUzs7OztBQUQ3QixZQUFZLENBQUM7Ozs7Ozs7Ozs7SUFVUSxPQUFPO2FBQVAsT0FBTzs4QkFBUCxPQUFPOzs7aUJBQVAsT0FBTzs7ZUFFakIsbUJBQUcsRUFBRTs7O2VBQ04sa0JBQUcsRUFBRTs7O2VBQ0wsa0JBQUcsRUFBRTs7O2VBRUQsYUFBQyxNQUFNLEVBQUU7Ozs7OztBQUNmLHFDQUFtQixPQUFPLENBQUMsb0NBQW9DLDhIQUFFO3dCQUF6RCxPQUFPOztBQUNYLHdCQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0Isd0JBQUcsTUFBTSxFQUFFO0FBQ1AsNkNBQVEsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUN4QiwrQkFBTyxxQkFBUSxN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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDcGpCQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLWNvcmUvcG9seWZpbGxcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuaW1wb3J0IGNvbnRleHQgZnJvbSAnY29udGV4dCc7XHJcblxyXG4vKipcclxuICogQGFic3RyYWN0XHJcbiAqIEBwcm9wZXJ0eSB7UG9zaXRpb24yRH0gcG9zaXRpb25cclxuICogQHByb3BlcnR5IHtib29sZWFufSBoaXRcclxuICogQHByb3BlcnR5IHtib29sZWFufSBlbnRlcmluZ1xyXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGxlYXZpbmdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElUYXJnZXQge1xyXG5cclxuICAgIGRpc3Bvc2UoKSB7fVxyXG4gICAgdXBkYXRlKCkge31cclxuICAgIHJlbmRlcigpIHt9XHJcblxyXG4gICAgc3RhdGljIHNldChjb25maWcpIHtcclxuICAgICAgICBmb3IodmFyIGhhbmRsZXIgb2YgSVRhcmdldC50YXJnZXRTZWxlY3Rpb25DaGFpbk9mUmVzcG9uc2liaWxpdHkpIHtcclxuICAgICAgICAgICAgbGV0IHRhcmdldCA9IGhhbmRsZXIoY29uZmlnKTtcclxuICAgICAgICAgICAgaWYodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnRhcmdldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2xlYXIoKSB7XHJcbiAgICAgICAgcmVtb3ZlQ3VycmVudFRhcmdldCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5JVGFyZ2V0LnRhcmdldFNlbGVjdGlvbkNoYWluT2ZSZXNwb25zaWJpbGl0eSA9IFtdO1xyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQ3VycmVudFRhcmdldCgpIHtcclxuICAgIGlmIChjb250ZXh0LnRhcmdldCkge1xyXG4gICAgICAgIGNvbnRleHQudGFyZ2V0LmRpc3Bvc2UoKTtcclxuICAgICAgICBjb250ZXh0LnRhcmdldCA9IG51bGw7XHJcbiAgICB9XHJcbn0iLCJcInVzZSBzdHJpY3RcIjtcclxuaW1wb3J0IHthc3luY30gZnJvbSAnc3lzdGVtJztcclxuaW1wb3J0ICogYXMgcHJvdmlkZXIgZnJvbSAnLi9wcm92aWRlcic7XHJcbmltcG9ydCBjb250ZXh0IGZyb20gJ2NvbnRleHQnO1xyXG5pbXBvcnQgVmVybGV0T2JqZWN0IGZyb20gJy4vY29yZS9WZXJsZXRPYmplY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhbmV0IGV4dGVuZHMgVmVybGV0T2JqZWN0IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIGEgbmV3IGluc3RhbmNlIG9mIFBsYW5ldFxyXG4gICAgICogQHBhcmFtIHt7bWVzaDogQkFCWUxPTi5NZXNoLCBtZXRhZGF0YTogQXJyYXk8UGxhbmV0SW5mbz59fSBjb25maWdcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuXHJcbiAgICAgICAgbGV0IG1lc2ggPSBjb25maWcubWVzaDtcclxuICAgICAgICB0aGlzLmlkID0gbWVzaC5uYW1lO1xyXG4gICAgICAgIHRoaXMuQkFCWUxPTiA9IHttZXNoOiBtZXNofTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjdXJyZW50IHBsYW5ldCBpbnN0YW5jZSBoYXMgYXRtb3NwaGVyZVxyXG4gICAgICAgICAqIEB0eXBlIGJvb2xlYW5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmF0bW9zcGhlcmUgPSAhIVtmb3IgKGluZm8gb2YgY29uZmlnLm1ldGFkYXRhKSBpZihpbmZvLmF0bW9zcGhlcmUpIGluZm9dLmxlbmd0aDtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjdXJyZW50IHBsYW5ldCBpcyB0YWtlbiBpbnRvIGFjY291bnQgaW4gcGh5c2ljc1xyXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBtZXNoLnBvc2l0aW9uLnogPT09IDA7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSByYWRpdXMgb2YgdGhlIGN1cnJlbnQgUGxhbmV0XHJcbiAgICAgICAgICogQHR5cGUgbnVtYmVyXHJcbiAgICAgICAgICogKi9cclxuICAgICAgICB0aGlzLnJhZGl1cyA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuIFByb21pc2U8UGxhbmV0PlxyXG4gICAgICovXHJcbiAgICBpbml0aWFsaXplQXN5bmMoKSB7XHJcblxyXG4gICAgICAgIGxldCBzY2VuZSA9IGNvbnRleHQuQkFCWUxPTi5zY2VuZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFzeW5jKGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhgTG9hZGluZyBwbGFuZXQgWyR7dGhpcy5pZH1dIGRhdGEuLi5gKTtcclxuICAgICAgICAgICAgbGV0IG1ldGFkYXRhID0geWllbGQgcHJvdmlkZXIuZ2V0T2JqZWN0TWV0YWRhdGEodGhpcy5pZCk7XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmF0bW9zcGhlcmUpIHtcclxuICAgICAgICAgICAgICAgIC8vbGV0IHBhcnRpY2xlcyA9IGNyZWF0ZS5hcHBseSh0aGlzKTtcclxuICAgICAgICAgICAgICAgIC8vcGFydGljbGVzLnBhcnRpY2xlU3lzdGVtLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghbWV0YWRhdGEpIHRocm93IGBObyBtZXRhZGF0YSBmb3VuZCBmb3IgcGxhbmV0IGlkICR7dGhpcy5pZH19YDtcclxuICAgICAgICAgICAgZWxzZSBpZiAoIW1ldGFkYXRhLnJhZGl1cykgY29uc29sZS53YXJuKGBObyByYWRpdXMgZm91bmQgaW4gbWV0YWRhdGEgZm9yIHBsYW5ldCBpZCAke3RoaXMuaWR9fWApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yYWRpdXMgPSBtZXRhZGF0YS5yYWRpdXM7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IG1hdGVyaWFsID0gbmV3IEJBQllMT04uU3RhbmRhcmRNYXRlcmlhbChgJHt0aGlzLmlkfV9tYXRlcmlhbGAsIHNjZW5lKTtcclxuICAgICAgICAgICAgbWF0ZXJpYWwuZW1pc3NpdmVUZXh0dXJlID0gbmV3IEJBQllMT04uVGV4dHVyZShgZGF0YS9vYmplY3RzLyR7dGhpcy5pZH0vZGlmZnVzZS5wbmdgLCBzY2VuZSk7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsLmRpZmZ1c2VDb2xvciA9IG5ldyBCQUJZTE9OLkNvbG9yMygwLCAwLCAwKTtcclxuICAgICAgICAgICAgbWF0ZXJpYWwuc3BlY3VsYXJDb2xvciA9IG5ldyBCQUJZTE9OLkNvbG9yMygwLCAwLCAwKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuQkFCWUxPTi5tZXNoLm1hdGVyaWFsID0gbWF0ZXJpYWw7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9LmJpbmQodGhpcykpKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBzdXBlci5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgYm9keSBoYXMgaGl0IHRoZSBjdXJyZW50IHBsYW5ldCBpbnN0YW5jZVxyXG4gICAgICogQHBhcmFtIHtWZXJsZXRPYmplY3R9IGJvZHlcclxuICAgICAqL1xyXG4gICAgaGl0KGJvZHkpIHtcclxuICAgICAgICBsZXQgY2VudGVyRGlzdGFuY2UgPSBCQUJZTE9OLlZlY3RvcjIuRGlzdGFuY2UoYm9keS5wb3NpdGlvbiwgdGhpcy5wb3NpdGlvbik7XHJcbiAgICAgICAgcmV0dXJuIGNlbnRlckRpc3RhbmNlIDwgdGhpcy5yYWRpdXM7XHJcbiAgICB9XHJcbn1cclxuXHJcblBsYW5ldC5uYW1lUmVnZXggPSAvXnBsYW5ldFteXFwuXSovO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlKCkge1xyXG4gICAgbGV0IHNjZW5lID0gY29udGV4dC5CQUJZTE9OLnNjZW5lO1xyXG5cclxuICAgIGxldCBwYXJ0aWNsZUhvc3QgPSBCQUJZTE9OLk1lc2guQ3JlYXRlQm94KCdwbGFuZXQtYXRtb3NwaGVyZUhvc3QnLCAwLjEsIHNjZW5lKTtcclxuICAgIHBhcnRpY2xlSG9zdC52aXNpYmlsaXR5ID0gMDtcclxuICAgIHBhcnRpY2xlSG9zdC5wYXJlbnQgPSB0aGlzLkJBQllMT04ubWVzaDtcclxuICAgIHBhcnRpY2xlSG9zdC5wb3NpdGlvbi56ID0gMC4xNTtcclxuXHJcbiAgICBsZXQgcGFydGljbGVTeXN0ZW0gPSBuZXcgQkFCWUxPTi5QYXJ0aWNsZVN5c3RlbSgncGxhbmV0LWF0bW9zcGhlcmUnLCA3LCBzY2VuZSk7XHJcbiAgICBwYXJ0aWNsZVN5c3RlbS5wYXJ0aWNsZVRleHR1cmUgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKGBkYXRhL29iamVjdHMvJHt0aGlzLmlkfS9hdG1vc3BoZXJlLnBuZ2AsIHNjZW5lKTtcclxuICAgIHBhcnRpY2xlU3lzdGVtLmJsZW5kTW9kZSA9IEJBQllMT04uUGFydGljbGVTeXN0ZW0uQkxFTkRNT0RFX09ORU9ORTtcclxuICAgIHBhcnRpY2xlU3lzdGVtLmVtaXR0ZXIgPSBwYXJ0aWNsZUhvc3Q7XHJcblxyXG4gICAgcGFydGljbGVTeXN0ZW0ubWluRW1pdEJveCA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICBwYXJ0aWNsZVN5c3RlbS5tYXhFbWl0Qm94ID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwKTtcclxuICAgIHBhcnRpY2xlU3lzdGVtLmVtaXRSYXRlID0gMTtcclxuXHJcbiAgICBjb25zdCBzaXplID0gNjtcclxuICAgIHBhcnRpY2xlU3lzdGVtLm1heFNpemUgPSBzaXplICsgMTtcclxuICAgIHBhcnRpY2xlU3lzdGVtLm1pblNpemUgPSBzaXplO1xyXG5cclxuICAgIHBhcnRpY2xlU3lzdGVtLmRpcmVjdGlvbjEgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIDApO1xyXG4gICAgcGFydGljbGVTeXN0ZW0uZGlyZWN0aW9uMiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMCk7XHJcblxyXG4gICAgcGFydGljbGVTeXN0ZW0ubWluQW5ndWxhclNwZWVkID0gLTE7XHJcbiAgICBwYXJ0aWNsZVN5c3RlbS5tYXhBbmd1bGFyU3BlZWQgPSAxO1xyXG5cclxuICAgIGNvbnN0IGxpZmVUaW1lID0gNztcclxuICAgIHBhcnRpY2xlU3lzdGVtLm1heExpZmVUaW1lID0gbGlmZVRpbWU7XHJcbiAgICBwYXJ0aWNsZVN5c3RlbS5taW5MaWZlVGltZSA9IGxpZmVUaW1lO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGFydGljbGVTeXN0ZW06IHBhcnRpY2xlU3lzdGVtLFxyXG4gICAgICAgIGhvc3Q6IHBhcnRpY2xlSG9zdFxyXG4gICAgfTtcclxufSIsImltcG9ydCBjb250ZXh0IGZyb20gJ2NvbnRleHQnO1xyXG5pbXBvcnQgVHJhaWwgZnJvbSAnLi9fU2F0ZWxsaXRlL1RyYWlsJztcclxuaW1wb3J0IFNlbGVjdGlvbiBmcm9tICcuL19TYXRlbGxpdGUvU2VsZWN0aW9uJztcclxuaW1wb3J0IENvbSBmcm9tICcuL19TYXRlbGxpdGUvQ29tJztcclxuaW1wb3J0IFZlcmxldE9iamVjdCBmcm9tICcuL2NvcmUvVmVybGV0T2JqZWN0JztcclxuXHJcbmNvbnN0IGhvb2tEaXN0YW5jZVRyaWdnZXIgPSAwLjE7XHJcbmNvbnN0IGNvbW11bmljYXRpb25EaXN0YW5jZVRyaWdnZXIgPSAzO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2F0ZWxsaXRlIGV4dGVuZHMgVmVybGV0T2JqZWN0IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbWVzaFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNoKSB7XHJcbiAgICAgICAgc3VwZXIoe21lc2g6IG1lc2h9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zaGlwSW5SYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2FuSG9vayA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kb2NrUmVxdWVzdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kb2NrZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlZnVlbGluZ0NvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudHJhaWwgPSBuZXcgVHJhaWwoe3NhdGVsbGl0ZTogdGhpc30pO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbih7c2F0ZWxsaXRlOiB0aGlzfSk7XHJcbiAgICAgICAgdGhpcy5jb20gPSBuZXcgQ29tKHtzYXRlbGxpdGU6IHRoaXMsIHJhZGl1czogY29tbXVuaWNhdGlvbkRpc3RhbmNlVHJpZ2dlcn0pO1xyXG5cclxuICAgICAgICB0aGlzLkRPTSA9IHtcclxuICAgICAgICAgICAgLyoqIEB0eXBlIEhUTUxFbGVtZW50ICovXHJcbiAgICAgICAgICAgIG92ZXJsYXk6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3REb2NraW5nKCkge1xyXG4gICAgICAgIGlmKHRoaXMuc2hpcEluUmFuZ2UpIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuZG9ja2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNheSgneW91IGFyZSBjbGVhciB0byBkb2NrJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvY2tSZXF1ZXN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uc3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuYXBpLnNheSgnVW5hYmxlIHRvIGNvbW11bmljYXRlIHdpdGggdGhlIHNhdGVsbGl0ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1bmRvY2soKSB7XHJcbiAgICAgICAgaWYodGhpcy5kb2NrZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zYXkoXCJ1bmRvY2tpbmcuLi5cIik7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnN0b3AoKTtcclxuICAgICAgICAgICAgdGhpcy5jb20uc3RhcnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZG9ja1JlcXVlc3RlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7e21vbWVudDogbnVtYmVyLCBwbGFuZXQ6IFBsYW5ldH19IGNvbmZpZ1xyXG4gICAgICovXHJcbiAgICBpbml0aWFsaXplQXN5bmMoY29uZmlnKSB7XHJcblxyXG4gICAgICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XHJcbiAgICAgICAgdGhpcy5ET00ub3ZlcmxheSA9IG92ZXJsYXk7XHJcbiAgICAgICAgb3ZlcmxheS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgb3ZlcmxheS5zdHlsZS5sZWZ0ID0gMDtcclxuICAgICAgICBvdmVybGF5LnN0eWxlLnRvcCA9IDA7XHJcbiAgICAgICAgb3ZlcmxheS5zdHlsZS53aWR0aCA9IDA7XHJcbiAgICAgICAgb3ZlcmxheS5zdHlsZS5oZWlnaHQgPSAwO1xyXG4gICAgICAgIGNvbnRleHQuRE9NLm92ZXJsYXkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XHJcblxyXG4gICAgICAgIGxldCBzdGF0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1VMJyk7XHJcbiAgICAgICAgdGhpcy5ET00uc3RhdHMgPSBzdGF0cztcclxuICAgICAgICBzdGF0cy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgc3RhdHMuY2xhc3NOYW1lPSdkaWFsb2ctY29udGVudCc7XHJcbiAgICAgICAgb3ZlcmxheS5hcHBlbmRDaGlsZChzdGF0cyk7XHJcblxyXG4gICAgICAgIGxldCBzY2VuZSA9IGNvbnRleHQuQkFCWUxPTi5zY2VuZTtcclxuXHJcbiAgICAgICAgdGhpcy5tb21lbnQgPSBjb25maWcubW9tZW50O1xyXG4gICAgICAgIHRoaXMucGxhbmV0ID0gY29uZmlnLnBsYW5ldDtcclxuICAgICAgICB0aGlzLm9yYml0cyA9ICEhdGhpcy5wbGFuZXQ7XHJcbiAgICAgICAgaWYgKHRoaXMub3JiaXRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmFkaXVzID0gQkFCWUxPTi5WZWN0b3IyLkRpc3RhbmNlKHRoaXMucGxhbmV0LnBvc2l0aW9uLCB0aGlzLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IE1hdGguYXRhbjIodGhpcy5wb3NpdGlvbi55LCB0aGlzLnBvc2l0aW9uLngpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50cmFpbC5zdGFydCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc2F0ZWxsaXRlTWVzaCA9IHNjZW5lLmdldE1lc2hCeUlEKCdzYXRlbGxpdGUnKTtcclxuICAgICAgICAgICAgbGV0IG1hdGVyaWFsID0gbmV3IEJBQllMT04uU3RhbmRhcmRNYXRlcmlhbCgnc2F0ZWxsaXRlRGlmZnVzZU1hdGVyaWFsJywgc2NlbmUpO1xyXG4gICAgICAgICAgICBtYXRlcmlhbC5kaWZmdXNlVGV4dHVyZSA9IG5ldyBCQUJZTE9OLlRleHR1cmUoJ2RhdGEvb2JqZWN0cy9zYXRlbGxpdGUvZGlmZnVzZS5wbmcnLCBzY2VuZSk7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsLnNwZWN1bGFyQ29sb3IgPSBuZXcgQkFCWUxPTi5Db2xvcjMoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHNhdGVsbGl0ZU1lc2gubWF0ZXJpYWwgPSBtYXRlcmlhbDtcclxuXHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKCk7XHJcblxyXG4gICAgICAgIGxldCBsYXN0ID0ge3g6IHRoaXMucG9zaXRpb24ueCwgeTogdGhpcy5wb3NpdGlvbi55fTtcclxuICAgICAgICBsZXQgc2hpcCA9IGNvbnRleHQuc2hpcDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMub3JiaXRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgLT0gdGhpcy5tb21lbnQgKiBjb250ZXh0LnN0ZXBSYXRlO1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLnJhZGl1cyAqIE1hdGguY29zKHRoaXMuYW5nbGUpICsgdGhpcy5wbGFuZXQucG9zaXRpb24ueDtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5yYWRpdXMgKiBNYXRoLnNpbih0aGlzLmFuZ2xlKSArIHRoaXMucGxhbmV0LnBvc2l0aW9uLnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc2hpcEluUmFuZ2UgPSB0aGlzLmRpc3RhbmNlIDwgY29tbXVuaWNhdGlvbkRpc3RhbmNlVHJpZ2dlcjtcclxuICAgICAgICBpZih0aGlzLnNoaXBJblJhbmdlICE9IHNoaXBJblJhbmdlKSB7XHJcbiAgICAgICAgICAgIGlmKHNoaXBJblJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNheSgnc2hpcCBpbiByYW5nZSA6OiBjb21tdW5pY2F0aW9uIG9uJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbS5zdGFydCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXkoJ291dCBvZiByYW5nZSA6OiBkaXNjb25uZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tLnN0b3AoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zaGlwSW5SYW5nZSA9IHNoaXBJblJhbmdlO1xyXG4gICAgICAgICAgICB0aGlzLmRvY2tSZXF1ZXN0ZWQgJj0gc2hpcEluUmFuZ2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jYW5Ib29rICYmIHRoaXMuZG9ja1JlcXVlc3RlZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXN0YW5jZSA8IGhvb2tEaXN0YW5jZVRyaWdnZXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5kb2NrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNheSgnc2hpcCwgZG9ja2VkIGFuZCBsb2NrZWQuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXkoJ3JlZnVlbGluZyBoYXMgc3RhcnRlZC4uLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmdWVsaW5nQ29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24uc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoc2hpcC5yZWZ1ZWwoKSAmJiAhdGhpcy5yZWZ1ZWxpbmdDb21wbGV0ZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F5KCdyZWZ1ZWxpbmcgY29tcGxldGVkLicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNoaXAuaG9va2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHNoaXAucG9zaXRpb24ueCArPSB0aGlzLnBvc2l0aW9uLnggLSBsYXN0Lng7XHJcbiAgICAgICAgICAgICAgICBzaGlwLnBvc2l0aW9uLnkgKz0gdGhpcy5wb3NpdGlvbi55IC0gbGFzdC55O1xyXG4gICAgICAgICAgICAgICAgc2hpcC5wb3NpdGlvbi54ICs9ICh0aGlzLnBvc2l0aW9uLnggLSBzaGlwLnBvc2l0aW9uLngpICogMC4wMztcclxuICAgICAgICAgICAgICAgIHNoaXAucG9zaXRpb24ueSArPSAodGhpcy5wb3NpdGlvbi55IC0gc2hpcC5wb3NpdGlvbi55KSAqIDAuMDM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRvY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24udXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5jb20udXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHN1cGVyLnJlbmRlcigpO1xyXG5cclxuICAgICAgICBsZXQgbWVzaCA9IHRoaXMuQkFCWUxPTi5tZXNoO1xyXG4gICAgICAgIHRoaXMuQkFCWUxPTi5tZXNoLnBvc2l0aW9uLnggPSB0aGlzLnBvc2l0aW9uLng7XHJcbiAgICAgICAgdGhpcy5CQUJZTE9OLm1lc2gucG9zaXRpb24ueSA9IHRoaXMucG9zaXRpb24ueTtcclxuXHJcbiAgICAgICAgbGV0IHByb2plY3Rpb24gPSBCQUJZTE9OLlZlY3RvcjMuUHJvamVjdChtZXNoLnBvc2l0aW9uLFxyXG4gICAgICAgICAgICBCQUJZTE9OLk1hdHJpeC5JZGVudGl0eSgpLFxyXG4gICAgICAgICAgICBjb250ZXh0LkJBQllMT04uc2NlbmUuZ2V0VHJhbnNmb3JtTWF0cml4KCksXHJcbiAgICAgICAgICAgIGNvbnRleHQuQkFCWUxPTi5jYW1lcmEudmlld3BvcnQudG9HbG9iYWwoY29udGV4dC5CQUJZTE9OLmVuZ2luZSkpO1xyXG4gICAgICAgIGxldCBvdmVybGF5ID0gdGhpcy5ET00ub3ZlcmxheTtcclxuICAgICAgICBvdmVybGF5LnN0eWxlLmxlZnQgPSBwcm9qZWN0aW9uLngudG9GaXhlZCgxKSArICdweCc7XHJcbiAgICAgICAgb3ZlcmxheS5zdHlsZS50b3AgPSBwcm9qZWN0aW9uLnkudG9GaXhlZCgxKSArICdweCc7XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuY29tLnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNheShtZXNzYWdlKSB7XHJcbiAgICAgICAgbGV0IGh0bWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTEknKTtcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gdGhpcy5ET00uc3RhdHM7XHJcbiAgICAgICAgaHRtbEVsZW1lbnQuaW5uZXJUZXh0ID0gbWVzc2FnZTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaHRtbEVsZW1lbnQpO1xyXG4gICAgICAgIGxldCBkaXNwb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgfS5iaW5kKGh0bWxFbGVtZW50KTtcclxuICAgICAgICBzZXRUaW1lb3V0KGRpc3Bvc2UsIDEwMDAwKTtcclxuICAgIH1cclxufVxyXG5cclxuU2F0ZWxsaXRlLm5hbWVSZWdleCA9IC9ec2F0ZWxsaXRlW15cXC5dKi87IiwiLyoqXHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IHN0ZXBcclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gaW5pdGlhbGl6ZVxyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBkaXNwb3NlXHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IHRhcmdldEVudGVyaW5nXHJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IHRhcmdldExlYXZpbmdcclxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY3Jhc2hcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmlwdCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHNjcmlwdFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihzY3JpcHQpIHtcclxuXHJcbiAgICAgICAgbGV0IHByb3h5U2NyaXB0ID1cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gPT0gbGV2ZWwgY3VzdG9tIHNjcmlwdFxyXG4gICAgICAgICAgICAgICAgJHtzY3JpcHR9XHJcbiAgICAgICAgICAgICAgICAvLyA9PSBlbmQgb2YgbGV2ZWwgY3VzdG9tIHNjcmlwdFxyXG5cclxuICAgICAgICAgICAgICAgICR7c3RhdGVtZW50Rm9yKCdzdGVwJyl9XHJcbiAgICAgICAgICAgICAgICAke3N0YXRlbWVudEZvcignaW5pdGlhbGl6ZScpfVxyXG4gICAgICAgICAgICAgICAgJHtzdGF0ZW1lbnRGb3IoJ2Rpc3Bvc2UnKX1cclxuICAgICAgICAgICAgICAgICR7c3RhdGVtZW50Rm9yKCdlbnRlcmluZ1BsYW5ldCcpfVxyXG4gICAgICAgICAgICAgICAgJHtzdGF0ZW1lbnRGb3IoJ2xlYXZpbmdQbGFuZXQnKX1cclxuICAgICAgICAgICAgICAgICR7c3RhdGVtZW50Rm9yKCdlbnRlcmluZ0NoZWNrUG9pbnQnKX1cclxuICAgICAgICAgICAgICAgICR7c3RhdGVtZW50Rm9yKCdsZWF2aW5nQ2hlY2tQb2ludCcpfVxyXG4gICAgICAgICAgICAgICAgJHtzdGF0ZW1lbnRGb3IoJ2VudGVyaW5nU2F0ZWxsaXRlQ29tJyl9XHJcbiAgICAgICAgICAgICAgICAke3N0YXRlbWVudEZvcignbGVhdmluZ1NhdGVsbGl0ZUNvbScpfVxyXG4gICAgICAgICAgICAgICAgJHtzdGF0ZW1lbnRGb3IoJ2VudGVyaW5nU2F0ZWxsaXRlRG9jaycpfVxyXG4gICAgICAgICAgICAgICAgJHtzdGF0ZW1lbnRGb3IoJ2xlYXZpbmdTYXRlbGxpdGVEb2NrJyl9XHJcbiAgICAgICAgICAgICAgICAke3N0YXRlbWVudEZvcignY3Jhc2gnKX1cclxuICAgICAgICAgICAgfSlgO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IHByb3h5VHlwZSA9IGV2YWwocHJveHlTY3JpcHQpO1xyXG4gICAgICAgIHZhciBwcm94eSA9IG5ldyBwcm94eVR5cGUoKTtcclxuICAgICAgICByZXR1cm4gcHJveHk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXRlbWVudEZvcihtZW1iZXIpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmKHR5cGVvZiAke21lbWJlcn0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhpcy4ke21lbWJlcn0gPSAke21lbWJlcn07XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJy0gXCIke21lbWJlcn1cIiBtZW1iZXI6IFllcycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy4ke21lbWJlcn0gPSBmdW5jdGlvbigpIHt9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKCctIFwiJHttZW1iZXJ9XCIgbWVtYmVyOiBObycpO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgIHRoaXMuJHttZW1iZXJ9ID0gZnVuY3Rpb24oKSB7fTtcclxuICAgICAgICBjb25zb2xlLmRlYnVnKCctIFwiJHttZW1iZXJ9XCIgbWVtYmVyOiBObycpO1xyXG59YDtcclxufSIsImltcG9ydCBjb250ZXh0IGZyb20gJ2NvbnRleHQnO1xyXG5pbXBvcnQgKiBhcyBwaHlzaWMgZnJvbSAncGh5c2ljJztcclxuaW1wb3J0IHthc3luY30gZnJvbSAnc3lzdGVtJztcclxuaW1wb3J0IEVuZ2luZSBmcm9tICcuL19TaGlwL0VuZ2luZSc7XHJcbmltcG9ydCBIdWQgZnJvbSAnLi9fU2hpcC9IdWQnO1xyXG5pbXBvcnQgRnV0dXJlIGZyb20gJy4vX1NoaXAvRnV0dXJlJztcclxuaW1wb3J0IFRyYWlsIGZyb20gJy4vX1NoaXAvVHJhaWwnO1xyXG5pbXBvcnQgRXhwbG9zaW9uIGZyb20gJy4vX1NoaXAvRXhwbG9zaW9uJztcclxuaW1wb3J0IFZlcmxldE9iamVjdCBmcm9tICcuL2NvcmUvVmVybGV0T2JqZWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAgZXh0ZW5kcyBWZXJsZXRPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcblxyXG4gICAgICAgIGlmIChjb250ZXh0LmRlYnVnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDY5KSB7IC8vIEVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGxvZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRlYWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNyYXNoaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERldGVybWluZXMgd2hldGhlciBhbm90aGVyIHByb2Nlc3MgaGFuZGxlcyB1cGRhdGUgZm9yIG5leHQgc3RlcFxyXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuaG9va2VkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEB0eXBlIEVuZ2luZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuZW5naW5lID0gbmV3IEVuZ2luZSh7c2hpcDogdGhpc30pO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAdHlwZSBIdWRcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmh1ZCA9IG5ldyBIdWQoe3NoaXA6IHRoaXN9KTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHR5cGUgRnV0dXJlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5mdXR1cmUgPSBuZXcgRnV0dXJlKHtzaGlwOiB0aGlzfSk7XHJcblxyXG4gICAgICAgIHRoaXMudHJhaWwgPSBuZXcgVHJhaWwoe3NoaXA6IHRoaXN9KTtcclxuXHJcbiAgICAgICAgdGhpcy5ET00gPSB7XHJcbiAgICAgICAgICAgIC8qKiBAdHlwZSBIVE1MRWxlbWVudCAqL1xyXG4gICAgICAgICAgICBvdmVybGF5OiBudWxsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybiBQcm9taXNlPFNoaXA+XHJcbiAgICAgKi9cclxuICAgIGluaXRpYWxpemVBc3luYygpIHtcclxuXHJcbiAgICAgICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuICAgICAgICB0aGlzLkRPTS5vdmVybGF5ID0gb3ZlcmxheTtcclxuICAgICAgICBvdmVybGF5LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICBvdmVybGF5LnN0eWxlLmxlZnQgPSAwO1xyXG4gICAgICAgIG92ZXJsYXkuc3R5bGUudG9wID0gMDtcclxuICAgICAgICBvdmVybGF5LnN0eWxlLndpZHRoID0gMDtcclxuICAgICAgICBvdmVybGF5LnN0eWxlLmhlaWdodCA9IDA7XHJcbiAgICAgICAgLy9vdmVybGF5LnN0eWxlLmJvcmRlciA9ICcxcHggd2hpdGUgc29saWQnO1xyXG4gICAgICAgIGNvbnRleHQuRE9NLm92ZXJsYXkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XHJcblxyXG4gICAgICAgIGxldCBzdGF0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG4gICAgICAgIHRoaXMuRE9NLnN0YXRzID0gc3RhdHM7XHJcbiAgICAgICAgc3RhdHMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIHN0YXRzLnN0eWxlLmxlZnQgPSAnNDBweCc7XHJcbiAgICAgICAgc3RhdHMuc3R5bGUuYm90dG9tID0gJzQwcHgnO1xyXG4gICAgICAgIHN0YXRzLnN0eWxlLndpZHRoID0gJzcwcHgnO1xyXG4gICAgICAgIHN0YXRzLmNsYXNzTmFtZSA9ICdpbmZvJztcclxuICAgICAgICBvdmVybGF5LmFwcGVuZENoaWxkKHN0YXRzKTtcclxuXHJcbiAgICAgICAgbGV0IGZ1ZWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuICAgICAgICBmdWVsQ29udGFpbmVyLmNsYXNzTmFtZT0nZnVlbCc7XHJcbiAgICAgICAgbGV0IGZ1ZWxKYXVnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG4gICAgICAgIGZ1ZWxKYXVnZS5jbGFzc05hbWU9J2luZGljZSc7XHJcbiAgICAgICAgZnVlbENvbnRhaW5lci5hcHBlbmRDaGlsZChmdWVsSmF1Z2UpO1xyXG4gICAgICAgIHRoaXMuRE9NLmZ1ZWwgPSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lcjogZnVlbENvbnRhaW5lcixcclxuICAgICAgICAgICAgamF1Z2U6IGZ1ZWxKYXVnZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQoZnVlbENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIGxldCBzY2VuZSA9IGNvbnRleHQuQkFCWUxPTi5zY2VuZTtcclxuICAgICAgICBsZXQgbWVzaCA9IHRoaXMuQkFCWUxPTi5tZXNoO1xyXG5cclxuICAgICAgICB0aGlzLnRyYWlsLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiBhc3luYyhmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmluZm8oYExvYWRpbmcgc2hpcCBkYXRhLi4uYCk7XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWF0ZXJpYWwgPSBuZXcgQkFCWUxPTi5TdGFuZGFyZE1hdGVyaWFsKCdtYXRlcmlhbDMnLCBzY2VuZSk7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5kaWZmdXNlVGV4dHVyZSA9IG5ldyBCQUJZTE9OLlRleHR1cmUoJ2RhdGEvb2JqZWN0cy9zaGlwL2RpZmZ1c2UucG5nJywgc2NlbmUpO1xyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuc3BlY3VsYXJDb2xvciA9IG5ldyBCQUJZTE9OLkNvbG9yMygwLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIG1lc2gubWF0ZXJpYWwgPSBtYXRlcmlhbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgeWllbGQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiByZXNvbHZlKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9LmJpbmQodGhpcykpKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHRoZSBzaGlwXHJcbiAgICAgKiBAdGhpcyBTaGlwXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBzdXBlci51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3Jhc2hpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmhvb2tlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBlbmdpbmVTdHJlbmd0aENvZWYgPSAyNTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwbGFuZXRTdHJlbmd0aHMgPSBjb250ZXh0LnBsYW5ldHMubWFwKHBsYW5ldCA9PiBwaHlzaWMuZ3Jhdml0eShwbGFuZXQpKHRoaXMpKTtcclxuICAgICAgICAgICAgbGV0IGVuZ2luZVN0cmVuZ3RoID0gdGhpcy5lbmdpbmUuYWN0aXZlID8ge1xyXG4gICAgICAgICAgICAgICAgeDogLU1hdGguY29zKHRoaXMuZW5naW5lLmFuZ2xlKSAqIGVuZ2luZVN0cmVuZ3RoQ29lZixcclxuICAgICAgICAgICAgICAgIHk6IC1NYXRoLnNpbih0aGlzLmVuZ2luZS5hbmdsZSkgKiBlbmdpbmVTdHJlbmd0aENvZWZcclxuICAgICAgICAgICAgfSA6IHt4OiAwLCB5OiAwfTtcclxuXHJcbiAgICAgICAgICAgIGxldCBzdHJlbmd0aHMgPSBbZW5naW5lU3RyZW5ndGhdLmNvbmNhdChwbGFuZXRTdHJlbmd0aHMpO1xyXG5cclxuICAgICAgICAgICAgcGh5c2ljLmFwcGx5KHN0cmVuZ3RocywgY29udGV4dC5zdGVwUmF0ZSkodGhpcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBwbGFuZXQgb2YgY29udGV4dC5wbGFuZXRzKSB7XHJcbiAgICAgICAgICAgIGlmIChwbGFuZXQuaGl0KHRoaXMpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oYFRoZSBzaGlwIGhhcyBjb2xsaWRlZCB3aXRoIFwiJHtwbGFuZXQuaWR9XCI6YCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwbGFuZXQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leHBsb2RlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZW5naW5lLnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuaG9va2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5odWQudXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5mdXR1cmUudXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy50cmFpbC51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlcnMgdGhlIHNoaXBcclxuICAgICAqL1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHN1cGVyLnJlbmRlcigpO1xyXG5cclxuICAgICAgICBsZXQgbWVzaCA9IHRoaXMuQkFCWUxPTi5tZXNoO1xyXG4gICAgICAgIG1lc2gucG9zaXRpb24ueCA9IHRoaXMucG9zaXRpb24ueDtcclxuICAgICAgICBtZXNoLnBvc2l0aW9uLnkgPSB0aGlzLnBvc2l0aW9uLnk7XHJcblxyXG4gICAgICAgIGxldCBwcm9qZWN0aW9uID0gQkFCWUxPTi5WZWN0b3IzLlByb2plY3QobWVzaC5wb3NpdGlvbixcclxuICAgICAgICAgICAgQkFCWUxPTi5NYXRyaXguSWRlbnRpdHkoKSxcclxuICAgICAgICAgICAgY29udGV4dC5CQUJZTE9OLnNjZW5lLmdldFRyYW5zZm9ybU1hdHJpeCgpLFxyXG4gICAgICAgICAgICBjb250ZXh0LkJBQllMT04uY2FtZXJhLnZpZXdwb3J0LnRvR2xvYmFsKGNvbnRleHQuQkFCWUxPTi5lbmdpbmUpKTtcclxuICAgICAgICBsZXQgb3ZlcmxheSA9IHRoaXMuRE9NLm92ZXJsYXk7XHJcbiAgICAgICAgb3ZlcmxheS5zdHlsZS5sZWZ0ID0gcHJvamVjdGlvbi54LnRvRml4ZWQoMSkgKyAncHgnO1xyXG4gICAgICAgIG92ZXJsYXkuc3R5bGUudG9wID0gcHJvamVjdGlvbi55LnRvRml4ZWQoMSkgKyAncHgnO1xyXG5cclxuICAgICAgICBsZXQgc3RhdHMgPSB0aGlzLkRPTS5zdGF0cztcclxuICAgICAgICBzdGF0cy5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICBgPGRpdj54OiAke3RoaXMucG9zaXRpb24ueC50b0ZpeGVkKDIpfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2Pnk6ICR7dGhpcy5wb3NpdGlvbi55LnRvRml4ZWQoMil9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+dGFyZ2V0OiAke2NvbnRleHQudGFyZ2V0ID8gJ3llcycgOiAnbm8nfTwvZGl2PmA7XHJcblxyXG4gICAgICAgIHRoaXMuRE9NLmZ1ZWwuamF1Z2Uuc3R5bGUud2lkdGggPSBgJHt0aGlzLmVuZ2luZS5mdWVsLnZhbHVlKjEwMCAvIHRoaXMuZW5naW5lLmZ1ZWwuY2FwYWNpdHl9JWA7XHJcblxyXG4gICAgICAgIHRoaXMuZW5naW5lLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuaHVkLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuZnV0dXJlLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMudHJhaWwucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYWtlcyB0aGUgY3VycmVudCBzaGlwIGluc3RhbmNlIGV4cGxvZGluZ1xyXG4gICAgICovXHJcbiAgICBleHBsb2RlKCkge1xyXG4gICAgICAgIHRoaXMuY3Jhc2hpbmcgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUuZGVidWcoJ2V4cGxvZGluZy4uLicpO1xyXG4gICAgICAgIHRoaXMuZGVhZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5CQUJZTE9OLm1lc2gudmlzaWJpbGl0eSA9IDA7XHJcbiAgICAgICAgbmV3IEV4cGxvc2lvbih0aGlzLnBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGVuZ2luZSBvZiB0aGUgY3VycmVudCBzaGlwIGluc3RhbmNlIG9uXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0RW5naW5lKGF0KSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuc3RhcnQoYXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgZW5naW5lIG9mIHRoZSBjdXJyZW50IHNoaXAgaW5zdGFuY2Ugb2ZmXHJcbiAgICAgKi9cclxuICAgIHN0b3BFbmdpbmUoKSB7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuc3RvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhIHN0ZXAgZnVlbCB0byB0aGUgZW5naW5lLlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIHJlZnVlbGluZyBoYXMgY29tcGxldGVkLlxyXG4gICAgICovXHJcbiAgICByZWZ1ZWwoKSB7XHJcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gdGhpcy5lbmdpbmUuZnVlbC52YWx1ZSArIDI7XHJcbiAgICAgICAgdGhpcy5lbmdpbmUuZnVlbC52YWx1ZSA9IE1hdGgubWluKG5ld1ZhbHVlLCB0aGlzLmVuZ2luZS5mdWVsLmNhcGFjaXR5KTtcclxuICAgICAgICByZXR1cm4gbmV3VmFsdWUgPT09IHRoaXMuZW5naW5lLmZ1ZWwuY2FwYWNpdHk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgY29udGV4dCBmcm9tICdjb250ZXh0JztcclxuaW1wb3J0IElUYXJnZXQgZnJvbSAnLi9JVGFyZ2V0JztcclxuXHJcbklUYXJnZXQudGFyZ2V0U2VsZWN0aW9uQ2hhaW5PZlJlc3BvbnNpYmlsaXR5LnB1c2goc2V0VGFyZ2V0KTtcclxuZnVuY3Rpb24gc2V0VGFyZ2V0KGNvbmZpZykge1xyXG4gICAgaWYoIWNvbmZpZy5wbGFuZXQpIHJldHVybjtcclxuXHJcbiAgICBJVGFyZ2V0LmNsZWFyKCk7XHJcbiAgICByZXR1cm4gbmV3IFRhcmdldE9yYml0KGNvbmZpZy5wbGFuZXQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXJnZXRPcmJpdCBleHRlbmRzIElUYXJnZXQge1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtQbGFuZXR9IHBsYW5ldFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihwbGFuZXQpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZSA9IGluaXRpYWxpemUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9zdGFydCA9IHN0YXJ0LmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgIHg6IHBsYW5ldC5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB5OiBwbGFuZXQucG9zaXRpb24ueVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSB0YXJnZXRlZCBwbGFuZXRcclxuICAgICAgICAgKiBAdHlwZSB7UGxhbmV0fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMucGxhbmV0ID0gcGxhbmV0O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgc2l6ZSBhcHBsaWVkIHRvIHRoZSBzcHJpdGVcclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHBsYW5ldC5yYWRpdXMgKiAzICsgNDtcclxuXHJcbiAgICAgICAgdGhpcy5faW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuaGl0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbnRlcmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubGVhdmluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5CQUJZTE9OLmNpcmNsZS5zcHJpdGUuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuXHJcbiAgICAgICAgbGV0IHBsYW5ldFBvc2l0aW9uID0gdGhpcy5wbGFuZXQucG9zaXRpb247XHJcbiAgICAgICAgbGV0IHNoaXBQb3NpdGlvbiA9IGNvbnRleHQuc2hpcC5wb3NpdGlvbjtcclxuICAgICAgICBsZXQgZGlzdGFuY2VTcXVhcmVkID0gQkFCWUxPTi5WZWN0b3IyLkRpc3RhbmNlU3F1YXJlZChwbGFuZXRQb3NpdGlvbiwgc2hpcFBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgLy9sZXQgbWF4U3F1YXJlZERpc3RhbmNlID0gMDtcclxuICAgICAgICAvL2xldCBtaW5TcXVhcmVkRGlzdGFuY2UgPSAxMDAwMDAwMDtcclxuXHJcbiAgICAgICAgLy9mb3IodmFyIHNoaXBQb3NpdGlvbiBvZiBjb250ZXh0LnNoaXAuZnV0dXJlLnBvc2l0aW9ucykge1xyXG4gICAgICAgIC8vICAgIGxldCBzcXVhcmVkRGlzdGFuY2UgPSBCQUJZTE9OLlZlY3RvcjIuRGlzdGFuY2VTcXVhcmVkKHBsYW5ldFBvc2l0aW9uLCBzaGlwUG9zaXRpb24pO1xyXG4gICAgICAgIC8vICAgIGlmKG1heFNxdWFyZWREaXN0YW5jZSA8IHNxdWFyZWREaXN0YW5jZSkgbWF4U3F1YXJlZERpc3RhbmNlID0gc3F1YXJlZERpc3RhbmNlO1xyXG4gICAgICAgIC8vICAgIGlmKG1pblNxdWFyZWREaXN0YW5jZSA+IHNxdWFyZWREaXN0YW5jZSkgbWluU3F1YXJlZERpc3RhbmNlID0gc3F1YXJlZERpc3RhbmNlO1xyXG4gICAgICAgIC8vfVxyXG5cclxuICAgICAgICAvL2xldCBkaXN0YW5jZVNxdWFyZWREaWZmID0gbWF4U3F1YXJlZERpc3RhbmNlIC0gbWluU3F1YXJlZERpc3RhbmNlO1xyXG5cclxuICAgICAgICBsZXQgaW50b09yYml0ID0gZGlzdGFuY2VTcXVhcmVkIDwgdGhpcy5wbGFuZXQucmFkaXVzICogdGhpcy5wbGFuZXQucmFkaXVzICogNDsgLy8gJiZkaXN0YW5jZVNxdWFyZWREaWZmIDwgMTA7XHJcblxyXG4gICAgICAgIHRoaXMuZW50ZXJpbmcgPSBpbnRvT3JiaXQgJiYgIXRoaXMuaGl0O1xyXG4gICAgICAgIHRoaXMubGVhdmluZyA9ICFpbnRvT3JiaXQgJiYgdGhpcy5oaXQ7XHJcbiAgICAgICAgdGhpcy5oaXQgPSBpbnRvT3JiaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBpZih0aGlzLkJBQllMT04uY2lyY2xlLnNwcml0ZSkge1xyXG5cclxuICAgICAgICAgICAgbGV0IHNwcml0ZSA9IHRoaXMuQkFCWUxPTi5jaXJjbGUuc3ByaXRlO1xyXG4gICAgICAgICAgICBzcHJpdGUuYW5nbGUgKz0gMC4wMDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHRoaXMgVGFyZ2V0T3JiaXRcclxuICovXHJcbmZ1bmN0aW9uIHN0YXJ0KCkge1xyXG4gICAgbGV0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbjtcclxuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHNwcml0ZSA9IG5ldyBCQUJZTE9OLlNwcml0ZSgndGFyZ2V0T3JiaXQtY2lyY2xlJywgdGhpcy5CQUJZTE9OLmNpcmNsZS5zcHJpdGVNYW5hZ2VyKTtcclxuICAgICAgICBzcHJpdGUucG9zaXRpb24ueCA9IHBvc2l0aW9uLng7XHJcbiAgICAgICAgc3ByaXRlLnBvc2l0aW9uLnkgPSBwb3NpdGlvbi55O1xyXG4gICAgICAgIHNwcml0ZS5zaXplID0gdGhpcy5zaXplO1xyXG4gICAgICAgIHRoaXMuQkFCWUxPTi5jaXJjbGUuc3ByaXRlID0gc3ByaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZXMgdGhlIFRhcmdldFBvaW50IGdsb2JhbCBiZWhhdmlvclxyXG4gKiBAdGhpcyBUYXJnZXRPcmJpdFxyXG4gKi9cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuICAgIGNvbnN0IHNwcml0ZUxlbmd0aCA9IDEwMjQ7XHJcblxyXG4gICAgaWYgKCFUYXJnZXRPcmJpdC5pbml0aWFsaXplZCkge1xyXG4gICAgICAgIGxldCBzY2VuZSA9IGNvbnRleHQuQkFCWUxPTi5zY2VuZTtcclxuXHJcbiAgICAgICAgVGFyZ2V0T3JiaXQuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICAgIFRhcmdldE9yYml0LkJBQllMT04gPSB7fTtcclxuXHJcbiAgICAgICAgVGFyZ2V0T3JiaXQuQkFCWUxPTi5jaXJjbGUgPSB7XHJcbiAgICAgICAgICAgIHNwcml0ZU1hbmFnZXI6IG5ldyBCQUJZTE9OLlNwcml0ZU1hbmFnZXIoJ3RhcmdldE9yYml0LWNpcmNsZScsICdkYXRhL29iamVjdHMvdGFyZ2V0T3JiaXQvY2lyY2xlLXNwcml0ZS5wbmcnLCBzcHJpdGVMZW5ndGgsIHNwcml0ZUxlbmd0aCwgc2NlbmUpLFxyXG4gICAgICAgICAgICAvKiogQHR5cGUgQkFCWUxPTi5TcHJpdGUgKi9cclxuICAgICAgICAgICAgc3ByaXRlOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLkJBQllMT04gPSBUYXJnZXRPcmJpdC5CQUJZTE9OO1xyXG59IiwiaW1wb3J0IGNvbnRleHQgZnJvbSAnY29udGV4dCc7XHJcbmltcG9ydCBJVGFyZ2V0IGZyb20gJy4vSVRhcmdldCc7XHJcblxyXG5JVGFyZ2V0LnRhcmdldFNlbGVjdGlvbkNoYWluT2ZSZXNwb25zaWJpbGl0eS5wdXNoKHNldFRhcmdldCk7XHJcbmZ1bmN0aW9uIHNldFRhcmdldChjb25maWcpIHtcclxuICAgIGlmKCFjb25maWcucG9zaXRpb24pIHJldHVybjtcclxuXHJcbiAgICBJVGFyZ2V0LmNsZWFyKCk7XHJcbiAgICByZXR1cm4gbmV3IFRhcmdldFBvaW50KGNvbmZpZy5wb3NpdGlvbik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhcmdldFBvaW50IGV4dGVuZHMgSVRhcmdldCB7XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1Bvc2l0aW9uMkR9IHBvc2l0aW9uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uKSB7XHJcblxyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2luaXRpYWxpemUgPSBpbml0aWFsaXplLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fc3RhcnQgPSBzdGFydC5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICB4OiBwb3NpdGlvbi54LFxyXG4gICAgICAgICAgICB5OiBwb3NpdGlvbi55XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGRpc3RhbmNlIGZyb20gdGhlIHNoaXBcclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuZGlzdGFuY2UgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLl9pbml0aWFsaXplKCk7XHJcbiAgICAgICAgdGhpcy5fc3RhcnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy5oaXQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVudGVyaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sZWF2aW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcG9zZSgpIHtcclxuICAgICAgICB0aGlzLkJBQllMT04uaW5uZXIxLnNwcml0ZS5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5CQUJZTE9OLmlubmVyMS5zcHJpdGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuQkFCWUxPTi5pbm5lcjIuc3ByaXRlLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLkJBQllMT04uaW5uZXIyLnNwcml0ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5CQUJZTE9OLmlubmVyMy5zcHJpdGUuZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuQkFCWUxPTi5pbm5lcjMuc3ByaXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLkJBQllMT04udHJpYW5nbGUuc3ByaXRlLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLkJBQllMT04udHJpYW5nbGUuc3ByaXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLkJBQllMT04ub3V0ZXIxLnNwcml0ZS5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5CQUJZTE9OLm91dGVyMS5zcHJpdGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuQkFCWUxPTi5vdXRlcjIuc3ByaXRlLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLkJBQllMT04ub3V0ZXIyLnNwcml0ZSA9ICBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB2YXIgZGlzdGFuY2VTcXVhcmVkID0gQkFCWUxPTi5WZWN0b3IyLkRpc3RhbmNlU3F1YXJlZChjb250ZXh0LnNoaXAucG9zaXRpb24sIHRoaXMucG9zaXRpb24pO1xyXG5cclxuICAgICAgICBsZXQgbGFzdEhpdCA9IHRoaXMuaGl0O1xyXG4gICAgICAgIHRoaXMuaGl0ID0gZGlzdGFuY2VTcXVhcmVkIDwgMC4wODtcclxuICAgICAgICB0aGlzLmVudGVyaW5nID0gIWxhc3RIaXQgJiYgdGhpcy5oaXQ7XHJcbiAgICAgICAgdGhpcy5sZWF2aW5nID0gbGFzdEhpdCAmJiAhdGhpcy5oaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHNwcml0ZSA9IHRoaXMuQkFCWUxPTi5vdXRlcjIuc3ByaXRlO1xyXG4gICAgICAgICAgICBzcHJpdGUuYW5nbGUgKz0gMC4wMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgZnJvbSA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvID0gNTtcclxuICAgICAgICAgICAgY29uc3QgdGhyZXNob2xkID0gMC4xO1xyXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0eUNvZWZUbyA9IDAuMDI7XHJcbiAgICAgICAgICAgIGNvbnN0IHZlbG9jaXR5Q29lZkZyb20gPSAwLjA1O1xyXG4gICAgICAgICAgICBsZXQgc3ByaXRlID0gdGhpcy5CQUJZTE9OLm91dGVyMS5zcHJpdGU7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5CQUJZTE9OLm91dGVyMi5yZXZlcnNlKSB7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuYW5nbGUgKz0gKHRvIC0gc3ByaXRlLmFuZ2xlKSAqIHZlbG9jaXR5Q29lZlRvO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5CQUJZTE9OLm91dGVyMi5yZXZlcnNlID0gIShNYXRoLmFicyhzcHJpdGUuYW5nbGUgLSB0bykgPCB0aHJlc2hvbGQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlLmFuZ2xlICs9IChmcm9tIC0gc3ByaXRlLmFuZ2xlKSAqIHZlbG9jaXR5Q29lZkZyb207XHJcbiAgICAgICAgICAgICAgICB0aGlzLkJBQllMT04ub3V0ZXIyLnJldmVyc2UgPSAoTWF0aC5hYnMoc3ByaXRlLmFuZ2xlIC0gZnJvbSkgPCB0aHJlc2hvbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBzcHJpdGUgPSB0aGlzLkJBQllMT04uaW5uZXIzLnNwcml0ZTtcclxuICAgICAgICAgICAgc3ByaXRlLmFuZ2xlIC09IDAuMDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBzcHJpdGUgPSB0aGlzLkJBQllMT04uaW5uZXIxLnNwcml0ZTtcclxuICAgICAgICAgICAgc3ByaXRlLmFuZ2xlICs9IDAuMDM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHRoaXMgVGFyZ2V0UG9pbnRcclxuICovXHJcbmZ1bmN0aW9uIHN0YXJ0KCkge1xyXG5cclxuICAgIGxldCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb247XHJcblxyXG4gICAge1xyXG4gICAgICAgIGxldCBzcHJpdGUgPSBuZXcgQkFCWUxPTi5TcHJpdGUoJ3RhcmdldFBvaW50LW91dGVyMScsIHRoaXMuQkFCWUxPTi5vdXRlcjEuc3ByaXRlTWFuYWdlcik7XHJcbiAgICAgICAgc3ByaXRlLnBvc2l0aW9uLnggPSBwb3NpdGlvbi54O1xyXG4gICAgICAgIHNwcml0ZS5wb3NpdGlvbi55ID0gcG9zaXRpb24ueTtcclxuICAgICAgICB0aGlzLkJBQllMT04ub3V0ZXIxLnNwcml0ZSA9IHNwcml0ZTtcclxuICAgIH1cclxuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHNwcml0ZSA9IG5ldyBCQUJZTE9OLlNwcml0ZSgndGFyZ2V0UG9pbnQtb3V0ZXIyJywgdGhpcy5CQUJZTE9OLm91dGVyMi5zcHJpdGVNYW5hZ2VyKTtcclxuICAgICAgICBzcHJpdGUucG9zaXRpb24ueCA9IHBvc2l0aW9uLng7XHJcbiAgICAgICAgc3ByaXRlLnBvc2l0aW9uLnkgPSBwb3NpdGlvbi55O1xyXG4gICAgICAgIHRoaXMuQkFCWUxPTi5vdXRlcjIuc3ByaXRlID0gc3ByaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHtcclxuICAgICAgICBsZXQgc3ByaXRlID0gbmV3IEJBQllMT04uU3ByaXRlKCd0YXJnZXRQb2ludC1pbm5lcjEnLCB0aGlzLkJBQllMT04uaW5uZXIxLnNwcml0ZU1hbmFnZXIpO1xyXG4gICAgICAgIHNwcml0ZS5wb3NpdGlvbi54ID0gcG9zaXRpb24ueDtcclxuICAgICAgICBzcHJpdGUucG9zaXRpb24ueSA9IHBvc2l0aW9uLnk7XHJcbiAgICAgICAgdGhpcy5CQUJZTE9OLmlubmVyMS5zcHJpdGUgPSBzcHJpdGU7XHJcbiAgICB9XHJcblxyXG4gICAge1xyXG4gICAgICAgIGxldCBzcHJpdGUgPSBuZXcgQkFCWUxPTi5TcHJpdGUoJ3RhcmdldFBvaW50LWlubmVyMicsIHRoaXMuQkFCWUxPTi5pbm5lcjIuc3ByaXRlTWFuYWdlcik7XHJcbiAgICAgICAgc3ByaXRlLnBvc2l0aW9uLnggPSBwb3NpdGlvbi54O1xyXG4gICAgICAgIHNwcml0ZS5wb3NpdGlvbi55ID0gcG9zaXRpb24ueTtcclxuICAgICAgICB0aGlzLkJBQllMT04uaW5uZXIyLnNwcml0ZSA9IHNwcml0ZTtcclxuICAgIH1cclxuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHNwcml0ZSA9IG5ldyBCQUJZTE9OLlNwcml0ZSgndGFyZ2V0UG9pbnQtaW5uZXIzJywgdGhpcy5CQUJZTE9OLmlubmVyMy5zcHJpdGVNYW5hZ2VyKTtcclxuICAgICAgICBzcHJpdGUucG9zaXRpb24ueCA9IHBvc2l0aW9uLng7XHJcbiAgICAgICAgc3ByaXRlLnBvc2l0aW9uLnkgPSBwb3NpdGlvbi55O1xyXG4gICAgICAgIHRoaXMuQkFCWUxPTi5pbm5lcjMuc3ByaXRlID0gc3ByaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHtcclxuICAgICAgICBsZXQgc3ByaXRlID0gbmV3IEJBQllMT04uU3ByaXRlKCd0YXJnZXRQb2ludC10cmlhbmdsZScsIHRoaXMuQkFCWUxPTi50cmlhbmdsZS5zcHJpdGVNYW5hZ2VyKTtcclxuICAgICAgICBzcHJpdGUucG9zaXRpb24ueCA9IHBvc2l0aW9uLng7XHJcbiAgICAgICAgc3ByaXRlLnBvc2l0aW9uLnkgPSBwb3NpdGlvbi55O1xyXG4gICAgICAgIHRoaXMuQkFCWUxPTi50cmlhbmdsZS5zcHJpdGUgPSBzcHJpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplcyB0aGUgVGFyZ2V0UG9pbnQgZ2xvYmFsIGJlaGF2aW9yXHJcbiAqIEB0aGlzIFRhcmdldFBvaW50XHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gICAgY29uc3Qgc3ByaXRlTGVuZ3RoID0gMzM1O1xyXG5cclxuICAgIGlmICghVGFyZ2V0UG9pbnQuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICBsZXQgc2NlbmUgPSBjb250ZXh0LkJBQllMT04uc2NlbmU7XHJcblxyXG4gICAgICAgIFRhcmdldFBvaW50LmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICBUYXJnZXRQb2ludC5CQUJZTE9OID0ge307XHJcblxyXG4gICAgICAgIFRhcmdldFBvaW50LkJBQllMT04ub3V0ZXIxID0ge1xyXG4gICAgICAgICAgICBzcHJpdGVNYW5hZ2VyOiBuZXcgQkFCWUxPTi5TcHJpdGVNYW5hZ2VyKCd0YXJnZXRQb2ludC1vdXRlcjEnLCAnZGF0YS9vYmplY3RzL3RhcmdldFBvaW50L291dGVyLXNwcml0ZTEucG5nJywgc3ByaXRlTGVuZ3RoLCBzcHJpdGVMZW5ndGgsIHNjZW5lKSxcclxuICAgICAgICAgICAgLyoqIEB0eXBlIEJBQllMT04uU3ByaXRlICovXHJcbiAgICAgICAgICAgIHNwcml0ZTogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgVGFyZ2V0UG9pbnQuQkFCWUxPTi5vdXRlcjIgPSB7XHJcbiAgICAgICAgICAgIHNwcml0ZU1hbmFnZXI6IG5ldyBCQUJZTE9OLlNwcml0ZU1hbmFnZXIoJ3RhcmdldFBvaW50LW91dGVyMicsICdkYXRhL29iamVjdHMvdGFyZ2V0UG9pbnQvb3V0ZXItc3ByaXRlMi5wbmcnLCBzcHJpdGVMZW5ndGgsIHNwcml0ZUxlbmd0aCwgc2NlbmUpLFxyXG4gICAgICAgICAgICAvKiogQHR5cGUgQkFCWUxPTi5TcHJpdGUgKi9cclxuICAgICAgICAgICAgc3ByaXRlOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBUYXJnZXRQb2ludC5CQUJZTE9OLmlubmVyMSA9IHtcclxuICAgICAgICAgICAgc3ByaXRlTWFuYWdlcjogbmV3IEJBQllMT04uU3ByaXRlTWFuYWdlcigndGFyZ2V0UG9pbnQtaW5uZXIxJywgJ2RhdGEvb2JqZWN0cy90YXJnZXRQb2ludC9pbm5lci1zcHJpdGUxLnBuZycsIHNwcml0ZUxlbmd0aCwgc3ByaXRlTGVuZ3RoLCBzY2VuZSksXHJcbiAgICAgICAgICAgIC8qKiBAdHlwZSBCQUJZTE9OLlNwcml0ZSAqL1xyXG4gICAgICAgICAgICBzcHJpdGU6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgICAgIFRhcmdldFBvaW50LkJBQllMT04uaW5uZXIyID0ge1xyXG4gICAgICAgICAgICBzcHJpdGVNYW5hZ2VyOiBuZXcgQkFCWUxPTi5TcHJpdGVNYW5hZ2VyKCd0YXJnZXRQb2ludC1pbm5lcjInLCAnZGF0YS9vYmplY3RzL3RhcmdldFBvaW50L2lubmVyLXNwcml0ZTIucG5nJywgc3ByaXRlTGVuZ3RoLCBzcHJpdGVMZW5ndGgsIHNjZW5lKSxcclxuICAgICAgICAgICAgLyoqIEB0eXBlIEJBQllMT04uU3ByaXRlICovXHJcbiAgICAgICAgICAgIHNwcml0ZTogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgVGFyZ2V0UG9pbnQuQkFCWUxPTi5pbm5lcjMgPSB7XHJcbiAgICAgICAgICAgIHNwcml0ZU1hbmFnZXI6IG5ldyBCQUJZTE9OLlNwcml0ZU1hbmFnZXIoJ3RhcmdldFBvaW50LWlubmVyMycsICdkYXRhL29iamVjdHMvdGFyZ2V0UG9pbnQvaW5uZXItc3ByaXRlMy5wbmcnLCBzcHJpdGVMZW5ndGgsIHNwcml0ZUxlbmd0aCwgc2NlbmUpLFxyXG4gICAgICAgICAgICAvKiogQHR5cGUgQkFCWUxPTi5TcHJpdGUgKi9cclxuICAgICAgICAgICAgc3ByaXRlOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBUYXJnZXRQb2ludC5CQUJZTE9OLnRyaWFuZ2xlID0ge1xyXG4gICAgICAgICAgICBzcHJpdGVNYW5hZ2VyOiBuZXcgQkFCWUxPTi5TcHJpdGVNYW5hZ2VyKCd0YXJnZXRQb2ludC10cmlhbmdsZScsICdkYXRhL29iamVjdHMvdGFyZ2V0UG9pbnQvdHJpYW5nbGUtc3ByaXRlLnBuZycsIHNwcml0ZUxlbmd0aCwgc3ByaXRlTGVuZ3RoLCBzY2VuZSksXHJcbiAgICAgICAgICAgIC8qKiBAdHlwZSBCQUJZTE9OLlNwcml0ZSAqL1xyXG4gICAgICAgICAgICBzcHJpdGU6IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuQkFCWUxPTiA9IFRhcmdldFBvaW50LkJBQllMT047XHJcbn0iLCJpbXBvcnQgY29udGV4dCBmcm9tICdjb250ZXh0JztcclxuXHJcbmNvbnN0IHZlbG9jaXR5Q29lZiA9IDAuMDAyO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tIHtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7e3NhdGVsbGl0ZTogU2F0ZWxsaXRlLCByYWRpdXM6IG51bWJlcn19IGNvbmZpZ1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICB0aGlzLnNhdGVsbGl0ZSA9IGNvbmZpZy5zYXRlbGxpdGU7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvdW50ID0gMjA7XHJcbiAgICAgICAgdGhpcy5pdGVyYXRpb25Db2VmID0gMDtcclxuICAgICAgICB0aGlzLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gY29uZmlnLnJhZGl1cztcclxuXHJcbiAgICAgICAgdGhpcy5CQUJZTE9OID0ge1xyXG4gICAgICAgICAgICBjb206IGNyZWF0ZS5hcHBseSh0aGlzKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgZm9yKGxldCBiaWxsYm9hcmQgb2YgdGhpcy5CQUJZTE9OLmNvbS5iaWxsYm9hcmRzKSB7XHJcbiAgICAgICAgICAgIGJpbGxib2FyZC5wb3NpdGlvbi54ID0gdGhpcy5zYXRlbGxpdGUucG9zaXRpb24ueDtcclxuICAgICAgICAgICAgYmlsbGJvYXJkLnBvc2l0aW9uLnkgPSB0aGlzLnNhdGVsbGl0ZS5wb3NpdGlvbi55O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pdGVyYXRpb25Db2VmID0gKHRoaXMuaXRlcmF0aW9uQ29lZiArIHZlbG9jaXR5Q29lZikgJSAxO1xyXG5cclxuICAgICAgICBpZih0aGlzLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9wYWNpdHkgKz0gKDEgLSB0aGlzLm9wYWNpdHkpICogMC4wNTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5vcGFjaXR5ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wYWNpdHkgLT0gdGhpcy5vcGFjaXR5ICogMC4wNTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZih0aGlzLm9wYWNpdHkgPiAwKSB7XHJcblxyXG4gICAgICAgICAgICBpZighdGhpcy5hY3RpdmUgJiYgdGhpcy5vcGFjaXR5IDwgMC4xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgLyoqIEB0eXBlIEJBQllMT04uTWVzaCAqL1xyXG4gICAgICAgICAgICAgICAgbGV0IG1lc2ggPSB0aGlzLkJBQllMT04uY29tLmJpbGxib2FyZHNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHNjYWxlID0gKHRoaXMuaXRlcmF0aW9uQ29lZiArIGkgLyB0aGlzLmNvdW50KSAlIDE7XHJcbiAgICAgICAgICAgICAgICBtZXNoLnNjYWxpbmcueCA9IHNjYWxlO1xyXG4gICAgICAgICAgICAgICAgbWVzaC5zY2FsaW5nLnkgPSBzY2FsZTtcclxuICAgICAgICAgICAgICAgIG1lc2gudmlzaWJpbGl0eSA9ICgxIC0gc2NhbGUpKiB0aGlzLm9wYWNpdHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAdGhpcyB7Q29tfVxyXG4gKi9cclxuZnVuY3Rpb24gZGlzcG9zZVNwcml0ZSgpIHtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAdGhpcyB7Q29tfVxyXG4gKiBAcmV0dXJuIHt7YmlsbGJvYXJkczogQXJyYXk8QkFCWUxPTi5NZXNoPiwgbWF0ZXJpYWw6IEJBQllMT04uTWF0ZXJpYWx9fVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlKCkge1xyXG4gICAgbGV0IHNjZW5lID0gY29udGV4dC5CQUJZTE9OLnNjZW5lO1xyXG5cclxuICAgIGxldCBiaWxsYm9hcmRzID0gW107XHJcbiAgICBsZXQgdGV4dHVyZSA9IG5ldyBCQUJZTE9OLlRleHR1cmUoJ2RhdGEvb2JqZWN0cy9zYXRlbGxpdGUvY29tLXNwcml0ZS5wbmcnLCBzY2VuZSk7XHJcbiAgICB0ZXh0dXJlLmhhc0FscGhhID0gdHJ1ZTtcclxuICAgIGxldCBtYXRlcmlhbCA9IG5ldyBCQUJZTE9OLlN0YW5kYXJkTWF0ZXJpYWwoXCJzYXRlbGxpdGUtY29tLW1hdGVyaWFsXCIsIHNjZW5lKTtcclxuICAgIG1hdGVyaWFsLmJhY2tGYWNlQ3VsbGluZyA9IGZhbHNlO1xyXG4gICAgbWF0ZXJpYWwudXNlQWxwaGFGcm9tRGlmZnVzZVRleHR1cmUgPSB0cnVlO1xyXG4gICAgbWF0ZXJpYWwuZGlmZnVzZVRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgbWF0ZXJpYWwuc3BlY3VsYXJDb2xvciA9IG5ldyBCQUJZTE9OLkNvbG9yMygwLDAsMCk7XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQ7IGkrKykge1xyXG4gICAgICAgIGxldCBtZXNoID0gQkFCWUxPTi5NZXNoLkNyZWF0ZVBsYW5lKGBzYXRlbGxpdGUtY29tLSR7aX1gLCB0aGlzLnJhZGl1cyAqIDIsIHNjZW5lKTtcclxuICAgICAgICAvL21lc2guYmlsbGJvYXJkTW9kZSA9IEJBQllMT04uTWVzaC5CSUxMQk9BUkRNT0RFX0FMTDtcclxuICAgICAgICBtZXNoLm1hdGVyaWFsID0gbWF0ZXJpYWw7XHJcbiAgICAgICAgLy9tZXNoLnBhcmVudCA9IHRoaXMuc2F0ZWxsaXRlLkJBQllMT04ubWVzaDtcclxuICAgICAgICBiaWxsYm9hcmRzLnB1c2gobWVzaCk7XHJcbiAgICAgICAgLy9tZXNoLnZpc2liaWxpdHkgPSAwLjU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBiaWxsYm9hcmRzOiBiaWxsYm9hcmRzLFxyXG4gICAgICAgIG1hdGVyaWFsOiBtYXRlcmlhbFxyXG4gICAgfTtcclxufSIsImltcG9ydCBjb250ZXh0IGZyb20gJ2NvbnRleHQnO1xyXG5cclxuY29uc3QgbWF4U2l6ZSA9IDAuNztcclxuY29uc3QgbWluU2l6ZSA9IDAuNDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdGlvbiB7XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3tzYXRlbGxpdGU6IFNhdGVsbGl0ZX19IGNvbmZpZ1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICB0aGlzLnNhdGVsbGl0ZSA9IGNvbmZpZy5zYXRlbGxpdGU7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5CQUJZTE9OID0ge1xyXG4gICAgICAgICAgICBzZWxlY3Rpb246IGNyZWF0ZS5hcHBseSh0aGlzKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuQkFCWUxPTi5zZWxlY3Rpb24uc3ByaXRlKSB0aGlzLkJBQllMT04uc2VsZWN0aW9uLnNwcml0ZS5kaXNwb3NlKCk7XHJcblxyXG4gICAgICAgIGxldCBzcHJpdGVNYW5hZ2VyID0gdGhpcy5CQUJZTE9OLnNlbGVjdGlvbi5zcHJpdGVNYW5hZ2VyO1xyXG4gICAgICAgIGxldCBzcHJpdGUgPSBuZXcgQkFCWUxPTi5TcHJpdGUoJ3NhdGVsbGl0ZS1zZWxlY3Rpb24nLCBzcHJpdGVNYW5hZ2VyKTtcclxuICAgICAgICBzcHJpdGUuc2l6ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5CQUJZTE9OLnNlbGVjdGlvbi5zcHJpdGUgPSBzcHJpdGU7XHJcbiAgICAgICAgdGhpcy5CQUJZTE9OLnNlbGVjdGlvbi50YXJnZXRlZFNpemUgPSBtYXhTaXplO1xyXG4gICAgICAgIHRoaXMuQkFCWUxPTi5zZWxlY3Rpb24udHJhbnNpdGlvbkNvZWYgPSAwLjE7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkJBQllMT04uc2VsZWN0aW9uLnRhcmdldGVkU2l6ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5CQUJZTE9OLnNlbGVjdGlvbi50cmFuc2l0aW9uQ29lZiA9IDAuMTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuQkFCWUxPTi5zZWxlY3Rpb24uc3ByaXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQkFCWUxPTi5zZWxlY3Rpb24uc3ByaXRlLnNpemUgKz0gKHRoaXMuQkFCWUxPTi5zZWxlY3Rpb24udGFyZ2V0ZWRTaXplIC0gdGhpcy5CQUJZTE9OLnNlbGVjdGlvbi5zcHJpdGUuc2l6ZSkgKiB0aGlzLkJBQllMT04uc2VsZWN0aW9uLnRyYW5zaXRpb25Db2VmO1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5CQUJZTE9OLnNlbGVjdGlvbi5zcHJpdGUuc2l6ZSAtIHRoaXMuQkFCWUxPTi5zZWxlY3Rpb24udGFyZ2V0ZWRTaXplKSA8IDAuMSkge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJBQllMT04uc2VsZWN0aW9uLnRhcmdldGVkU2l6ZSA9IHRoaXMuQkFCWUxPTi5zZWxlY3Rpb24udGFyZ2V0ZWRTaXplID09PSBtYXhTaXplID8gbWluU2l6ZSA6IG1heFNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5CQUJZTE9OLnNlbGVjdGlvbi50cmFuc2l0aW9uQ29lZiA9IDAuMDE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3Bvc2VTcHJpdGUuYXBwbHkodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLkJBQllMT04uc2VsZWN0aW9uLnNwcml0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLkJBQllMT04uc2VsZWN0aW9uLnNwcml0ZS5wb3NpdGlvbi54ID0gdGhpcy5zYXRlbGxpdGUucG9zaXRpb24ueDtcclxuICAgICAgICAgICAgdGhpcy5CQUJZTE9OLnNlbGVjdGlvbi5zcHJpdGUucG9zaXRpb24ueSA9IHRoaXMuc2F0ZWxsaXRlLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHRoaXMge0NvbX1cclxuICovXHJcbmZ1bmN0aW9uIGRpc3Bvc2VTcHJpdGUoKSB7XHJcbiAgICBpZiAodGhpcy5CQUJZTE9OLnNlbGVjdGlvbi5zcHJpdGUpIHtcclxuICAgICAgICB0aGlzLkJBQllMT04uc2VsZWN0aW9uLnNwcml0ZS5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5CQUJZTE9OLnNlbGVjdGlvbi5zcHJpdGUgPSBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHRoaXMge0NvbX1cclxuICogQHJldHVybiB7e3Nwcml0ZU1hbmFnZXI6IEJBQllMT04uU3ByaXRlTWFuYWdlciwgc3ByaXRlOiBCQUJZTE9OLlNwcml0ZX19XHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGUoKSB7XHJcbiAgICBsZXQgc2NlbmUgPSBjb250ZXh0LkJBQllMT04uc2NlbmU7XHJcbiAgICBsZXQgc3ByaXRlTWFuYWdlciA9IG5ldyBCQUJZTE9OLlNwcml0ZU1hbmFnZXIoJ3NhdGVsbGl0ZS1zZWxlY3Rpb25TcHJpdGVNYW5hZ2VyJywgJ2RhdGEvb2JqZWN0cy9zYXRlbGxpdGUvc2VsZWN0aW9uLXNwcml0ZS5wbmcnLCA5MCwgOTAsIHNjZW5lKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc3ByaXRlTWFuYWdlcjogc3ByaXRlTWFuYWdlcixcclxuICAgICAgICBzcHJpdGU6IG51bGwsXHJcbiAgICAgICAgdGFyZ2V0ZWRTaXplOiAxLFxyXG4gICAgICAgIHRyYW5zaXRpb25Db2VmOiAwLjFcclxuICAgIH07XHJcbn0iLCJpbXBvcnQgY29udGV4dCBmcm9tICdjb250ZXh0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWlsIHtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7e3NhdGVsbGl0ZTogU2F0ZWxsaXRlfX0gY29uZmlnXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuc2F0ZWxsaXRlID0gY29uZmlnLnNhdGVsbGl0ZTtcclxuXHJcbiAgICAgICAgdGhpcy5CQUJZTE9OID0ge1xyXG4gICAgICAgICAgICB0cmFpbDogY3JlYXRlLmFwcGx5KHRoaXMpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLkJBQllMT04udHJhaWwucGFydGljbGVTeXN0ZW0uc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wKCkge1xyXG4gICAgICAgIHRoaXMuQkFCWUxPTi50cmFpbC5wYXJ0aWNsZVN5c3RlbS5zdG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge31cclxuXHJcbiAgICByZW5kZXIoKSB7fVxyXG5cclxuICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgaWYodGhpcy5CQUJZTE9OLnRyYWlsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQkFCWUxPTi50cmFpbC5wYXJ0aWNsZVN5c3RlbS5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGUoKSB7XHJcbiAgICBsZXQgc2NlbmUgPSBjb250ZXh0LkJBQllMT04uc2NlbmU7XHJcblxyXG4gICAgbGV0IHBhcnRpY2xlSG9zdCA9IEJBQllMT04uTWVzaC5DcmVhdGVCb3goJ3NhdGVsbGl0ZS10cmFpbFBhcnRpY2xlSG9zdCcsIDAuMSwgc2NlbmUpO1xyXG4gICAgcGFydGljbGVIb3N0LnZpc2liaWxpdHkgPSAwO1xyXG4gICAgcGFydGljbGVIb3N0LnBhcmVudCA9IHRoaXMuc2F0ZWxsaXRlLkJBQllMT04ubWVzaDtcclxuICAgIHBhcnRpY2xlSG9zdC5wb3NpdGlvbi56ID0gMC4xNTtcclxuXHJcbiAgICBsZXQgcGFydGljbGVTeXN0ZW0gPSBuZXcgQkFCWUxPTi5QYXJ0aWNsZVN5c3RlbSgnc2F0ZWxsaXRlLXRyYWlsUGFydGljbGVTeXN0ZW0nLCA3MDAsIHNjZW5lKTtcclxuICAgIHBhcnRpY2xlU3lzdGVtLnBhcnRpY2xlVGV4dHVyZSA9IG5ldyBCQUJZTE9OLlRleHR1cmUoJ2RhdGEvb2JqZWN0cy9zYXRlbGxpdGUvc2F0ZWxsaXRlLXRyYWlsLXBhcnRpY2xlLnBuZycsIHNjZW5lKTtcclxuICAgIHBhcnRpY2xlU3lzdGVtLmJsZW5kTW9kZSA9IEJBQllMT04uUGFydGljbGVTeXN0ZW0uQkxFTkRNT0RFX09ORU9ORTtcclxuICAgIHBhcnRpY2xlU3lzdGVtLmVtaXR0ZXIgPSBwYXJ0aWNsZUhvc3Q7XHJcblxyXG4gICAgcGFydGljbGVTeXN0ZW0ubWluRW1pdEJveCA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICBwYXJ0aWNsZVN5c3RlbS5tYXhFbWl0Qm94ID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwKTtcclxuICAgIHBhcnRpY2xlU3lzdGVtLmVtaXRSYXRlID0gMzAwO1xyXG5cclxuICAgIGNvbnN0IHNpemUgPSAwLjA0O1xyXG4gICAgcGFydGljbGVTeXN0ZW0ubWF4U2l6ZSA9IHNpemU7XHJcbiAgICBwYXJ0aWNsZVN5c3RlbS5taW5TaXplID0gc2l6ZTtcclxuXHJcbiAgICBwYXJ0aWNsZVN5c3RlbS5kaXJlY3Rpb24xID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwKTtcclxuICAgIHBhcnRpY2xlU3lzdGVtLmRpcmVjdGlvbjIgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIDApO1xyXG5cclxuICAgIGNvbnN0IGxpZmVUaW1lID0gMjtcclxuICAgIHBhcnRpY2xlU3lzdGVtLm1heExpZmVUaW1lID0gbGlmZVRpbWU7XHJcbiAgICBwYXJ0aWNsZVN5c3RlbS5taW5MaWZlVGltZSA9IGxpZmVUaW1lO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGFydGljbGVTeXN0ZW06IHBhcnRpY2xlU3lzdGVtLFxyXG4gICAgICAgIGhvc3Q6IHBhcnRpY2xlSG9zdFxyXG4gICAgfTtcclxufSIsIlwidXNlIHN0cmljdFwiO1xyXG5pbXBvcnQgY29udGV4dCBmcm9tICdjb250ZXh0JztcclxuaW1wb3J0ICogYXMgc21va2UgZnJvbSAnLi9fRW5naW5lL3Ntb2tlJztcclxuaW1wb3J0ICogYXMgbGlnaHRpbmcgZnJvbSAnLi9fRW5naW5lL2xpZ2h0aW5nJztcclxuaW1wb3J0ICogYXMgZmxhbWUgZnJvbSAnLi9fRW5naW5lL2ZsYW1lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZ2luZSB7XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3tzaGlwOiBTaGlwfX0gY29uZmlnXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG5cclxuICAgICAgICAvKipAcHJpdmF0ZSovdGhpcy5fc3RhcnRTbW9rZSA9IHNtb2tlLnN0YXJ0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgLyoqQHByaXZhdGUqL3RoaXMuX3N0b3BTbW9rZSA9IHNtb2tlLnN0b3AuYmluZCh0aGlzKTtcclxuICAgICAgICAvKipAcHJpdmF0ZSovdGhpcy5fc3RhcnRMaWdodGluZyA9IGxpZ2h0aW5nLnN0YXJ0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgLyoqQHByaXZhdGUqL3RoaXMuX3N0b3BMaWdodGluZyA9IGxpZ2h0aW5nLnN0b3AuYmluZCh0aGlzKTtcclxuICAgICAgICAvKipAcHJpdmF0ZSovdGhpcy5fc3RhcnRGbGFtZSA9IGZsYW1lLnN0YXJ0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgLyoqQHByaXZhdGUqL3RoaXMuX3N0b3BGbGFtZSA9IGZsYW1lLnN0b3AuYmluZCh0aGlzKTtcclxuICAgICAgICAvKipAcHJpdmF0ZSovdGhpcy5fcmVuZGVyRmxhbWUgPSBmbGFtZS5yZW5kZXIuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBlbmdpbmUgaXMgY3VycmVudGx5IGFjdGl2ZVxyXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuc2hpcCA9IGNvbmZpZy5zaGlwO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgYW5nbGUgYXQgd2hpY2ggdGhlIGVuZ2luZSBpcyBhY3RpdmVcclxuICAgICAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuYW5nbGUgPSAwO1xyXG5cclxuICAgICAgICAvKiogQG5hbWVzcGFjZSAqL1xyXG4gICAgICAgIHRoaXMuQkFCWUxPTiA9IHtcclxuICAgICAgICAgICAgc21va2U6IHNtb2tlLmNyZWF0ZS5hcHBseSh0aGlzKSxcclxuICAgICAgICAgICAgbGlnaHRpbmc6IGxpZ2h0aW5nLmNyZWF0ZS5hcHBseSh0aGlzKSxcclxuICAgICAgICAgICAgZmxhbWU6IGZsYW1lLmNyZWF0ZS5hcHBseSh0aGlzKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZnVlbCA9IHtcclxuICAgICAgICAgICAgY2FwYWNpdHk6IDEwMDAsXHJcbiAgICAgICAgICAgIHZhbHVlOiAxMDAwXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3t4Om51bWJlciwgeTpudW1iZXJ9fSBhdFxyXG4gICAgICovXHJcbiAgICBzdGFydChhdCkge1xyXG5cclxuICAgICAgICBpZih0aGlzLmZ1ZWwudmFsdWUgPiAwKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBsZXQgY3Vyc29yRnJvbVNoaXAgPSBuZXcgQkFCWUxPTi5WZWN0b3IyKGF0LnggLSB3aW5kb3cuaW5uZXJXaWR0aCAvIDIsIGF0LnkgLSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKTtcclxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMihjdXJzb3JGcm9tU2hpcC54LCBjdXJzb3JGcm9tU2hpcC55KSAtIE1hdGguUEkgKiAwLjU7XHJcbiAgICAgICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0RmxhbWUoKTtcclxuICAgICAgICAgICAgdGhpcy5fc3RhcnRTbW9rZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9zdGFydExpZ2h0aW5nKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29udGV4dC5hcGkuc2F5KCdFbmdpbmUgY2Fubm90IHN0YXJ0OiBUaGUgZnVlbCB0YW5rIGlzIGVtcHR5IScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgaWYodGhpcy5hY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5mdWVsLnZhbHVlID0gTWF0aC5tYXgoMCx0aGlzLmZ1ZWwudmFsdWUgLSAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYWN0aXZlICYmIHRoaXMuZnVlbC52YWx1ZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmFwaS5zYXkoJ0VuZ2luZSBoYXMgc3RvcHBlZDogVGhlIGZ1ZWwgdGFuayBpcyBlbXB0eSEnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlckZsYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5fc3RvcEZsYW1lKCk7XHJcbiAgICAgICAgdGhpcy5fc3RvcFNtb2tlKCk7XHJcbiAgICAgICAgdGhpcy5fc3RvcExpZ2h0aW5nKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgY29udGV4dCBmcm9tICdjb250ZXh0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cGxvc2lvbiB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtQb3NpdGlvbjJEfSBwb3NpdGlvblxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMuQkFCWUxPTiA9IHtjb3JlOiBjcmVhdGUoKX07XHJcbiAgICAgICAgdGhpcy5CQUJZTE9OLmNvcmUuaG9zdC5wb3NpdGlvbi54ID0gcG9zaXRpb24ueDtcclxuICAgICAgICB0aGlzLkJBQllMT04uY29yZS5ob3N0LnBvc2l0aW9uLnkgPSBwb3NpdGlvbi55O1xyXG4gICAgICAgIHRoaXMuQkFCWUxPTi5jb3JlLmhvc3QucG9zaXRpb24ueiA9IC0wLjU7XHJcbiAgICAgICAgdGhpcy5CQUJZTE9OLmNvcmUucGFydGljbGVTeXN0ZW0uc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlKCkge1xyXG4gICAgbGV0IHNjZW5lID0gY29udGV4dC5CQUJZTE9OLnNjZW5lO1xyXG5cclxuICAgIGxldCBwYXJ0aWNsZUhvc3QgPSBCQUJZTE9OLk1lc2guQ3JlYXRlQm94KCdzaGlwLWV4cGxvc2lvbkNvcmVQYXJ0aWNsZUhvc3QnLCAwLjEsIHNjZW5lKTtcclxuICAgIHBhcnRpY2xlSG9zdC52aXNpYmlsaXR5ID0gMDtcclxuXHJcbiAgICBsZXQgcGFydGljbGVTeXN0ZW0gPSBuZXcgQkFCWUxPTi5QYXJ0aWNsZVN5c3RlbSgnc2hpcC1leHBsb3Npb25Db3JlUGFydGljbGVTeXN0ZW0nLCAyMDAwLCBzY2VuZSk7XHJcbiAgICBwYXJ0aWNsZVN5c3RlbS5wYXJ0aWNsZVRleHR1cmUgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKCdkYXRhL29iamVjdHMvc2hpcC9leHBsb3Npb24tY29yZS1wYXJ0aWNsZS5wbmcnLCBzY2VuZSk7XHJcbiAgICAvL3BhcnRpY2xlU3lzdGVtLmJsZW5kTW9kZSA9IEJBQllMT04uUGFydGljbGVTeXN0ZW0uQkxFTkRNT0RFX09ORU9ORTtcclxuICAgIHBhcnRpY2xlU3lzdGVtLmVtaXR0ZXIgPSBwYXJ0aWNsZUhvc3Q7XHJcbiAgICAvL3BhcnRpY2xlU3lzdGVtLm1hbnVhbEVtaXRDb3VudCA9IDIwMDA7XHJcbiAgICBwYXJ0aWNsZVN5c3RlbS50YXJnZXRTdG9wRHVyYXRpb24gPSAwLjE7XHJcblxyXG4gICAgY29uc3QgYm94TGVuZ3RoID0gMC40O1xyXG4gICAgcGFydGljbGVTeXN0ZW0ubWluRW1pdEJveCA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoLWJveExlbmd0aCwgLWJveExlbmd0aCwgMCk7XHJcbiAgICBwYXJ0aWNsZVN5c3RlbS5tYXhFbWl0Qm94ID0gbmV3IEJBQllMT04uVmVjdG9yMyhib3hMZW5ndGgsIGJveExlbmd0aCwgMCk7XHJcbiAgICBwYXJ0aWNsZVN5c3RlbS5lbWl0UmF0ZSA9IDUwMDtcclxuICAgIC8vXHJcbiAgICBwYXJ0aWNsZVN5c3RlbS5tYXhTaXplID0gMztcclxuICAgIHBhcnRpY2xlU3lzdGVtLm1pblNpemUgPSAxO1xyXG5cclxuICAgIGNvbnN0IHZlbG9jaXR5ID0gMTtcclxuICAgIHBhcnRpY2xlU3lzdGVtLmRpcmVjdGlvbjEgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKHZlbG9jaXR5LHZlbG9jaXR5LDApO1xyXG4gICAgcGFydGljbGVTeXN0ZW0uZGlyZWN0aW9uMiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoLXZlbG9jaXR5LC12ZWxvY2l0eSwwKTtcclxuXHJcbiAgICBwYXJ0aWNsZVN5c3RlbS5taW5Bbmd1bGFyU3BlZWQgPSAxO1xyXG4gICAgcGFydGljbGVTeXN0ZW0ubWF4QW5ndWxhclNwZWVkID0gMjtcclxuXHJcbiAgICAvL1xyXG4gICAgcGFydGljbGVTeXN0ZW0ubWF4TGlmZVRpbWUgPSAyO1xyXG4gICAgcGFydGljbGVTeXN0ZW0ubWluTGlmZVRpbWUgPSAwLjU7XHJcbiAgICAvL1xyXG4gICAgLy9wYXJ0aWNsZVN5c3RlbS5taW5FbWl0UG93ZXIgPSAwLjAxO1xyXG4gICAgLy9wYXJ0aWNsZVN5c3RlbS5tYXhFbWl0UG93ZXIgPSAwLjA1O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGFydGljbGVTeXN0ZW06IHBhcnRpY2xlU3lzdGVtLFxyXG4gICAgICAgIGhvc3Q6IHBhcnRpY2xlSG9zdFxyXG4gICAgfTtcclxufSIsIlwidXNlIHN0cmljdFwiO1xyXG5pbXBvcnQgY29udGV4dCBmcm9tICdjb250ZXh0JztcclxuaW1wb3J0ICogYXMgcGh5c2ljIGZyb20gJ3BoeXNpYyc7XHJcblxyXG4vKiogVGhlIG11bHRpcGxpY2F0b3IgdG8gYXBwbHkgdG8gdGhlIHN0ZXBSYXRlIHRvIGFwcGx5IHRvIHRoZSBwaHlzaWMgKi9cclxuY29uc3Qgc3RlcFJhdGVDb2VmID0gMjA7XHJcblxyXG4vKiogVGhlIG5iIG9mIGZ1dHVyZSBwb3NpdGlvbnMgY29tcHV0ZWQgKi9cclxuY29uc3QgZnV0dXJlUG9zaXRpb25zQW1vdW50ID0gMzA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdXR1cmUge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7e3NoaXA6IFNoaXB9fSBjb25maWdcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5zaGlwID0gY29uZmlnLnNoaXA7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBmdXR1cmUgcG9zaXRpb25zIG9mIHRoZSByZWxhdGVkIHNoaXBcclxuICAgICAgICAgKiBAdHlwZSBBcnJheTxQb3NpdGlvbjJEPlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25zID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuQkFCWUxPTiA9IHtcclxuICAgICAgICAgICAgLyoqIEB0eXBlIHtCQUJZTE9OLk1lc2h9ICovXHJcbiAgICAgICAgICAgIHBhdGg6IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGdob3N0ID0gY3JlYXRlVHJhbnNpZW50U2hpcCh0aGlzLnNoaXApO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25zID0gY29tcHV0ZUZ1dHVyZVBvc2l0aW9ucyhnaG9zdCk7XHJcblxyXG4gICAgICAgIGNyZWF0ZUZ1dHVyZVBhdGguYXBwbHkodGhpcyk7XHJcbiAgICAgICAgZHJhd0Z1dHVyZVBhdGguYXBwbHkodGhpcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAdGhpcyBGdXR1cmVcclxuICovXHJcbmZ1bmN0aW9uIGRyYXdGdXR1cmVQYXRoKCkge1xyXG4gICAgbGV0IHBhdGggPSB0aGlzLkJBQllMT04ucGF0aDtcclxuXHJcbiAgICBsZXQgdmVydGljZXMgPSBbXTtcclxuICAgIGxldCBub3JtYWxzID0gW107XHJcbiAgICBsZXQgdXZzID0gW107XHJcbiAgICBsZXQgaW5kaWNlcyA9IFtdO1xyXG5cclxuICAgIGZvciAodmFyIHBvc2l0aW9uIG9mIHRoaXMucG9zaXRpb25zKSB7XHJcblxyXG4gICAgICAgIGxldCBpbmRpY2VSZWYgPSB2ZXJ0aWNlcy5sZW5ndGggLyAzO1xyXG5cclxuICAgICAgICB2ZXJ0aWNlcy5wdXNoKHBvc2l0aW9uLnggLSAwLjAxLCBwb3NpdGlvbi55ICsgMC4wMSwgMCk7XHJcbiAgICAgICAgbm9ybWFscy5wdXNoKDAsIDAsIDEpO1xyXG4gICAgICAgIHV2cy5wdXNoKDAsIDApO1xyXG5cclxuICAgICAgICB2ZXJ0aWNlcy5wdXNoKHBvc2l0aW9uLnggKyAwLjAxLCBwb3NpdGlvbi55IC0gMC4wMSwgMCk7XHJcbiAgICAgICAgbm9ybWFscy5wdXNoKDAsIDAsIDEpO1xyXG4gICAgICAgIHV2cy5wdXNoKDAsIDApO1xyXG5cclxuICAgICAgICB2ZXJ0aWNlcy5wdXNoKHBvc2l0aW9uLnggLSAwLjAxLCBwb3NpdGlvbi55IC0gMC4wMSwgMCk7XHJcbiAgICAgICAgbm9ybWFscy5wdXNoKDAsIDAsIDEpO1xyXG4gICAgICAgIHV2cy5wdXNoKDAsIDApO1xyXG5cclxuICAgICAgICB2ZXJ0aWNlcy5wdXNoKHBvc2l0aW9uLnggKyAwLjAxLCBwb3NpdGlvbi55ICsgMC4wMSwgMCk7XHJcbiAgICAgICAgbm9ybWFscy5wdXNoKDAsIDAsIDEpO1xyXG4gICAgICAgIHV2cy5wdXNoKDAsIDApO1xyXG5cclxuICAgICAgICBpbmRpY2VzLnB1c2goaW5kaWNlUmVmLCBpbmRpY2VSZWYgKyAxLCBpbmRpY2VSZWYgKyAyKTtcclxuICAgICAgICBpbmRpY2VzLnB1c2goaW5kaWNlUmVmLCBpbmRpY2VSZWYgKyAzLCBpbmRpY2VSZWYgKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXRoLnNldFZlcnRpY2VzRGF0YShCQUJZTE9OLlZlcnRleEJ1ZmZlci5Qb3NpdGlvbktpbmQsIHZlcnRpY2VzLCB0cnVlKTtcclxuICAgIHBhdGguc2V0VmVydGljZXNEYXRhKEJBQllMT04uVmVydGV4QnVmZmVyLk5vcm1hbEtpbmQsIG5vcm1hbHMsIHRydWUpO1xyXG4gICAgcGF0aC5zZXRJbmRpY2VzKGluZGljZXMpO1xyXG4gICAgcGF0aC52aXNpYmlsaXR5ID0gMC42O1xyXG59XHJcblxyXG4vKipcclxuICogQHRoaXMgRnV0dXJlXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVGdXR1cmVQYXRoKCkge1xyXG5cclxuICAgIGNvbnN0IGZ1dHVyZVBhdGhNZXNoTmFtZSA9ICdTaGlwRnV0dXJlUGF0aE1lc2gnO1xyXG4gICAgY29uc3QgZnV0dXJlUGF0aE1hdGVyaWFsTmFtZSA9ICdTaGlwRnV0dXJlUGF0aE1hdGVyaWFsJztcclxuICAgIGxldCBzY2VuZSA9IGNvbnRleHQuQkFCWUxPTi5zY2VuZTtcclxuXHJcbiAgICBpZiAoIXRoaXMuQkFCWUxPTi5wYXRoKSB7XHJcblxyXG4gICAgICAgIGxldCBwYXRoID0gbmV3IEJBQllMT04uTWVzaChmdXR1cmVQYXRoTWVzaE5hbWUsIHNjZW5lKTtcclxuXHJcbiAgICAgICAgLyoqIEB0eXBlIHtCQUJZTE9OLk1hdGVyaWFsfSAqL1xyXG4gICAgICAgIGxldCBtYXRlcmlhbCA9IG5ldyBCQUJZTE9OLlN0YW5kYXJkTWF0ZXJpYWwoZnV0dXJlUGF0aE1hdGVyaWFsTmFtZSwgc2NlbmUpO1xyXG4gICAgICAgIG1hdGVyaWFsLmVtaXNzaXZlQ29sb3IgPSBuZXcgQkFCWUxPTi5Db2xvcjMoMSwgMSwgMSk7XHJcbiAgICAgICAgbWF0ZXJpYWwuYmFja0ZhY2VDdWxsaW5nID0gZmFsc2U7XHJcbiAgICAgICAgcGF0aC5tYXRlcmlhbCA9IG1hdGVyaWFsO1xyXG5cclxuICAgICAgICB0aGlzLkJBQllMT04ucGF0aCA9IHBhdGg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZlcmxldE9iamVjdH0gc2hpcFxyXG4gKiBAcmV0dXJuIEFycmF5PFBvc2l0aW9uMkQ+XHJcbiAqL1xyXG5mdW5jdGlvbiBjb21wdXRlRnV0dXJlUG9zaXRpb25zKHNoaXApIHtcclxuXHJcbiAgICBsZXQgcG9zaXRpb25zID0gW107XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmdXR1cmVQb3NpdGlvbnNBbW91bnQ7IGkrKykge1xyXG4gICAgICAgIGxldCBwbGFuZXRTdHJlbmd0aHMgPSBjb250ZXh0LnBsYW5ldHMubWFwKHBsYW5ldCA9PiBwaHlzaWMuZ3Jhdml0eShwbGFuZXQpKHNoaXApKTtcclxuICAgICAgICBsZXQgbGFzdFggPSBzaGlwLnBvc2l0aW9uLng7XHJcbiAgICAgICAgbGV0IGxhc3RZID0gc2hpcC5wb3NpdGlvbi55O1xyXG4gICAgICAgIHBoeXNpYy5hcHBseShwbGFuZXRTdHJlbmd0aHMsIGNvbnRleHQuc3RlcFJhdGUgKiBzdGVwUmF0ZUNvZWYpKHNoaXApO1xyXG4gICAgICAgIHNoaXAubGFzdC5wb3NpdGlvbi54ID0gbGFzdFg7XHJcbiAgICAgICAgc2hpcC5sYXN0LnBvc2l0aW9uLnkgPSBsYXN0WTtcclxuXHJcbiAgICAgICAgaWYgKGkgPiAwKSBwb3NpdGlvbnMucHVzaCh7eDogc2hpcC5wb3NpdGlvbi54LCB5OiBzaGlwLnBvc2l0aW9uLnl9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcG9zaXRpb25zO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtTaGlwfSBmcm9tU2hpcFxyXG4gKiBAcmV0dXJuIFZlcmxldE9iamVjdFxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlVHJhbnNpZW50U2hpcChmcm9tU2hpcCkge1xyXG4gICAgbGV0IHBvc2l0aW9uID0ge3g6IGZyb21TaGlwLnBvc2l0aW9uLngsIHk6IGZyb21TaGlwLnBvc2l0aW9uLnl9O1xyXG4gICAgbGV0IGRpc3RhbmNlRnJvbUxhc3QgPSB7XHJcbiAgICAgICAgeDogcG9zaXRpb24ueCAtIGZyb21TaGlwLmxhc3QucG9zaXRpb24ueCxcclxuICAgICAgICB5OiBwb3NpdGlvbi55IC0gZnJvbVNoaXAubGFzdC5wb3NpdGlvbi55XHJcbiAgICB9O1xyXG4gICAgbGV0IGxhc3RQb3NpdGlvbiA9IHtcclxuICAgICAgICB4OiBwb3NpdGlvbi54IC0gZGlzdGFuY2VGcm9tTGFzdC54ICogc3RlcFJhdGVDb2VmLFxyXG4gICAgICAgIHk6IHBvc2l0aW9uLnkgLSBkaXN0YW5jZUZyb21MYXN0LnkgKiBzdGVwUmF0ZUNvZWZcclxuICAgIH07XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcclxuICAgICAgICBsYXN0OiB7cG9zaXRpb246IGxhc3RQb3NpdGlvbn0sXHJcbiAgICAgICAgbWFzczogZnJvbVNoaXAubWFzc1xyXG4gICAgfTtcclxufSIsIlwidXNlIHN0cmljdFwiO1xyXG5pbXBvcnQgY29udGV4dCBmcm9tICdjb250ZXh0JztcclxuaW1wb3J0ICogYXMgbm9ybWFsIGZyb20gJy4vX0h1ZC9ub3JtYWwnO1xyXG5pbXBvcnQgKiBhcyB0YXJnZXQgZnJvbSAnLi9fSHVkL3RhcmdldCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdWQge1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHt7c2hpcDogU2hpcH19IGNvbmZpZ1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuXHJcbiAgICAgICAgLyoqQHByaXZhdGUqL3RoaXMuX3JlbmRlck5vcm1hbCA9IG5vcm1hbC5yZW5kZXIuYmluZCh0aGlzKTtcclxuICAgICAgICAvKipAcHJpdmF0ZSovdGhpcy5fcmVuZGVyVGFyZ2V0ID0gdGFyZ2V0LnJlbmRlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8qKkBwcml2YXRlKi90aGlzLl91cGRhdGVUYXJnZXQgPSB0YXJnZXQudXBkYXRlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hpcCA9IGNvbmZpZy5zaGlwO1xyXG5cclxuICAgICAgICAvKiogQG5hbWVzcGFjZSAqL1xyXG4gICAgICAgIHRoaXMuQkFCWUxPTiA9IHtcclxuICAgICAgICAgICAgbm9ybWFsOiBub3JtYWwuY3JlYXRlLmFwcGx5KHRoaXMpLFxyXG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldC5jcmVhdGUuYXBwbHkodGhpcylcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJOb3JtYWwoKTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJUYXJnZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlVGFyZ2V0KCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgY29udGV4dCBmcm9tICdjb250ZXh0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWlsIHtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7e3NoaXA6IFNoaXB9fSBjb25maWdcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5zaGlwID0gY29uZmlnLnNoaXA7XHJcblxyXG4gICAgICAgIHRoaXMuQkFCWUxPTiA9IHtcclxuICAgICAgICAgICAgdHJhaWw6IGNyZWF0ZS5hcHBseSh0aGlzKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5CQUJZTE9OLnRyYWlsLnBhcnRpY2xlU3lzdGVtLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCgpIHtcclxuICAgICAgICB0aGlzLkJBQllMT04udHJhaWwucGFydGljbGVTeXN0ZW0uc3RvcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHt9XHJcblxyXG4gICAgcmVuZGVyKCkge31cclxuXHJcbiAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgIGlmKHRoaXMuQkFCWUxPTi50cmFpbCkge1xyXG4gICAgICAgICAgICB0aGlzLkJBQllMT04udHJhaWwucGFydGljbGVTeXN0ZW0uZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlKCkge1xyXG4gICAgbGV0IHNjZW5lID0gY29udGV4dC5CQUJZTE9OLnNjZW5lO1xyXG5cclxuICAgIGxldCBwYXJ0aWNsZUhvc3QgPSBCQUJZTE9OLk1lc2guQ3JlYXRlQm94KCdzaGlwLXRyYWlsUGFydGljbGVIb3N0JywgMC4xLCBzY2VuZSk7XHJcbiAgICBwYXJ0aWNsZUhvc3QudmlzaWJpbGl0eSA9IDA7XHJcbiAgICBwYXJ0aWNsZUhvc3QucGFyZW50ID0gdGhpcy5zaGlwLkJBQllMT04ubWVzaDtcclxuICAgIHBhcnRpY2xlSG9zdC5wb3NpdGlvbi56ID0gMC4xNTtcclxuXHJcbiAgICBsZXQgcGFydGljbGVTeXN0ZW0gPSBuZXcgQkFCWUxPTi5QYXJ0aWNsZVN5c3RlbSgnc2hpcC10cmFpbFBhcnRpY2xlU3lzdGVtJywgMjUwMCwgc2NlbmUpO1xyXG4gICAgcGFydGljbGVTeXN0ZW0ucGFydGljbGVUZXh0dXJlID0gbmV3IEJBQllMT04uVGV4dHVyZSgnZGF0YS9vYmplY3RzL3NoaXAvc2hpcC10cmFpbC1wYXJ0aWNsZS5wbmcnLCBzY2VuZSk7XHJcbiAgICBwYXJ0aWNsZVN5c3RlbS5ibGVuZE1vZGUgPSBCQUJZTE9OLlBhcnRpY2xlU3lzdGVtLkJMRU5ETU9ERV9PTkVPTkU7XHJcbiAgICBwYXJ0aWNsZVN5c3RlbS5lbWl0dGVyID0gcGFydGljbGVIb3N0O1xyXG5cclxuICAgIHBhcnRpY2xlU3lzdGVtLm1pbkVtaXRCb3ggPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIDApO1xyXG4gICAgcGFydGljbGVTeXN0ZW0ubWF4RW1pdEJveCA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICBwYXJ0aWNsZVN5c3RlbS5lbWl0UmF0ZSA9IDMwMDtcclxuXHJcbiAgICBjb25zdCBzaXplID0gMC4wNTtcclxuICAgIHBhcnRpY2xlU3lzdGVtLm1heFNpemUgPSBzaXplO1xyXG4gICAgcGFydGljbGVTeXN0ZW0ubWluU2l6ZSA9IHNpemU7XHJcblxyXG4gICAgcGFydGljbGVTeXN0ZW0uZGlyZWN0aW9uMSA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICBwYXJ0aWNsZVN5c3RlbS5kaXJlY3Rpb24yID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwKTtcclxuXHJcbiAgICBjb25zdCBsaWZlVGltZSA9IDY7XHJcbiAgICBwYXJ0aWNsZVN5c3RlbS5tYXhMaWZlVGltZSA9IGxpZmVUaW1lO1xyXG4gICAgcGFydGljbGVTeXN0ZW0ubWluTGlmZVRpbWUgPSBsaWZlVGltZTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhcnRpY2xlU3lzdGVtOiBwYXJ0aWNsZVN5c3RlbSxcclxuICAgICAgICBob3N0OiBwYXJ0aWNsZUhvc3RcclxuICAgIH07XHJcbn0iLCJcInVzZSBzdHJpY3RcIjtcclxuaW1wb3J0IGNvbnRleHQgZnJvbSAnY29udGV4dCc7XHJcblxyXG4vKipcclxuICpcclxuICogQHRoaXMge0VuZ2luZX1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydCgpIHtcclxuXHJcbiAgICBpZiAodGhpcy5CQUJZTE9OLmZsYW1lLnNwcml0ZSkge1xyXG4gICAgICAgIHRoaXMuQkFCWUxPTi5mbGFtZS5zcHJpdGUuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBmbGFtZVNwcml0ZSA9IG5ldyBCQUJZTE9OLlNwcml0ZSgnc2hpcC1lbmdpbmVGbGFtZScsIHRoaXMuQkFCWUxPTi5mbGFtZS5zcHJpdGVNYW5hZ2VyKTtcclxuICAgIGZsYW1lU3ByaXRlLnNpemUgPSAwLjI3O1xyXG4gICAgdGhpcy5CQUJZTE9OLmZsYW1lLnNwcml0ZSA9IGZsYW1lU3ByaXRlO1xyXG4gICAgZmxhbWVTcHJpdGUuYW5nbGUgPSB0aGlzLmFuZ2xlIC0gTWF0aC5QSSAqIDAuNTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEB0aGlzIHtFbmdpbmV9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3RvcCgpIHtcclxuICAgIGlmICh0aGlzLkJBQllMT04uZmxhbWUuc3ByaXRlKSB7XHJcbiAgICAgICAgdGhpcy5CQUJZTE9OLmZsYW1lLnNwcml0ZS5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5CQUJZTE9OLmZsYW1lLnNwcml0ZSA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAdGhpcyB7RW5naW5lfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGRpc3RhbmNlID0gMC4yNTtcclxuICAgIGxldCB4ID0gTWF0aC5jb3ModGhpcy5hbmdsZSkgKiBkaXN0YW5jZTtcclxuICAgIGxldCB5ID0gTWF0aC5zaW4odGhpcy5hbmdsZSkgKiBkaXN0YW5jZTtcclxuXHJcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcclxuICAgICAgICBsZXQgc3ByaXRlID0gdGhpcy5CQUJZTE9OLmZsYW1lLnNwcml0ZTtcclxuICAgICAgICBzcHJpdGUucG9zaXRpb24ueCA9IHggKyB0aGlzLnNoaXAucG9zaXRpb24ueDtcclxuICAgICAgICBzcHJpdGUucG9zaXRpb24ueSA9IHkgKyB0aGlzLnNoaXAucG9zaXRpb24ueTtcclxuICAgICAgICBzcHJpdGUucG9zaXRpb24ueiA9IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAdGhpcyB7RW5naW5lfVxyXG4gKiBAcmV0dXJuIHt7c3ByaXRlTWFuYWdlcjogQkFCWUxPTi5TcHJpdGVNYW5hZ2VyLCBzcHJpdGU6IEJBQllMT04uU3ByaXRlfX1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XHJcbiAgICBsZXQgc2NlbmUgPSBjb250ZXh0LkJBQllMT04uc2NlbmU7XHJcbiAgICBsZXQgZmxhbWVTcHJpdGVNYW5hZ2VyID0gbmV3IEJBQllMT04uU3ByaXRlTWFuYWdlcignc2hpcC1lbmdpbmVGbGFtZVNwcml0ZU1hbmFnZXInLCAnZGF0YS9vYmplY3RzL3NoaXAvZmxhbWUtc3ByaXRlLnBuZycsIDEwLCAxMDAsIHNjZW5lKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc3ByaXRlTWFuYWdlcjogZmxhbWVTcHJpdGVNYW5hZ2VyLFxyXG4gICAgICAgIHNwcml0ZTogbnVsbFxyXG4gICAgfTtcclxufSIsIlwidXNlIHN0cmljdFwiO1xyXG5pbXBvcnQgY29udGV4dCBmcm9tICdjb250ZXh0JztcclxuXHJcbi8qKlxyXG4gKiBAdGhpcyB7RW5naW5lfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0KCkge1xyXG4gICAgY29uc3QgZGlzdGFuY2UgPSAwLjI7XHJcblxyXG4gICAgbGV0IHggPSBNYXRoLmNvcyh0aGlzLmFuZ2xlKSAqIGRpc3RhbmNlO1xyXG4gICAgbGV0IHkgPSBNYXRoLnNpbih0aGlzLmFuZ2xlKSAqIGRpc3RhbmNlO1xyXG5cclxuICAgIHRoaXMuQkFCWUxPTi5saWdodGluZy5tYWluLnBvc2l0aW9uLnggPSB4O1xyXG4gICAgdGhpcy5CQUJZTE9OLmxpZ2h0aW5nLm1haW4ucG9zaXRpb24ueSA9IHk7XHJcbiAgICB0aGlzLkJBQllMT04ubGlnaHRpbmcubWFpbi5wb3NpdGlvbi56ID0gLTAuMTU7XHJcblxyXG4gICAgdGhpcy5CQUJZTE9OLmxpZ2h0aW5nLm1haW4uc2V0RW5hYmxlZCh0cnVlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEB0aGlzIHtFbmdpbmV9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3RvcCgpIHtcclxuICAgIHRoaXMuQkFCWUxPTi5saWdodGluZy5tYWluLnNldEVuYWJsZWQoZmFsc2UpO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHRoaXMge0VuZ2luZX1cclxuICogQHJldHVybiB7e21haW46IEJBQllMT04uUG9pbnRMaWdodH19XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKCkge1xyXG4gICAgbGV0IHNjZW5lID0gY29udGV4dC5CQUJZTE9OLnNjZW5lO1xyXG5cclxuICAgIGxldCBwb3dlckxpZ2h0ID0gbmV3IEJBQllMT04uUG9pbnRMaWdodCgnc2hpcC1lbmdpbmVMaWdodCcsIG5ldyBCQUJZTE9OLlZlY3RvcjMoKSwgc2NlbmUpO1xyXG4gICAgcG93ZXJMaWdodC5wYXJlbnQgPSB0aGlzLnNoaXAuQkFCWUxPTi5tZXNoO1xyXG4gICAgcG93ZXJMaWdodC5pbnRlbnNpdHkgPSAyO1xyXG4gICAgcG93ZXJMaWdodC5yYW5nZSA9IDIuNTtcclxuICAgIHBvd2VyTGlnaHQuZGlmZnVzZSA9IG5ldyBCQUJZTE9OLkNvbG9yMygxLCAwLjMsIDAuMSk7XHJcbiAgICBwb3dlckxpZ2h0LnNldEVuYWJsZWQoZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiB7bWFpbjogcG93ZXJMaWdodH07XHJcbn0iLCJcInVzZSBzdHJpY3RcIjtcclxuaW1wb3J0IGNvbnRleHQgZnJvbSAnY29udGV4dCc7XHJcblxyXG4vKipcclxuICogQHRoaXMge0VuZ2luZX1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydCgpIHtcclxuICAgIGNvbnN0IGRpc3RhbmNlID0gMC4yO1xyXG5cclxuICAgIGxldCB4ID0gTWF0aC5jb3ModGhpcy5hbmdsZSkgKiBkaXN0YW5jZTtcclxuICAgIGxldCB5ID0gTWF0aC5zaW4odGhpcy5hbmdsZSkgKiBkaXN0YW5jZTtcclxuXHJcbiAgICB0aGlzLkJBQllMT04uc21va2UuaG9zdC5wb3NpdGlvbi54ID0geDtcclxuICAgIHRoaXMuQkFCWUxPTi5zbW9rZS5ob3N0LnBvc2l0aW9uLnkgPSB5O1xyXG4gICAgdGhpcy5CQUJZTE9OLnNtb2tlLmhvc3QucG9zaXRpb24ueiA9IDAuNTtcclxuICAgIHRoaXMuQkFCWUxPTi5zbW9rZS5ob3N0LnJvdGF0aW9uLnogPSB0aGlzLmFuZ2xlIC0gTWF0aC5QSSAqIDAuNTtcclxuXHJcbiAgICB0aGlzLkJBQllMT04uc21va2UucGFydGljbGVTeXN0ZW0uc3RhcnQoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEB0aGlzIHtFbmdpbmV9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3RvcCgpIHtcclxuICAgIHRoaXMuQkFCWUxPTi5zbW9rZS5wYXJ0aWNsZVN5c3RlbS5zdG9wKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAdGhpcyB7RW5naW5lfVxyXG4gKiBAcmV0dXJuIHt7cGFydGljbGVTeXN0ZW06IEJBQllMT04uUGFydGljbGVTeXN0ZW0sIGhvc3Q6QkFCWUxPTi5NZXNofX1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XHJcbiAgICBsZXQgc2NlbmUgPSBjb250ZXh0LkJBQllMT04uc2NlbmU7XHJcblxyXG4gICAgbGV0IHNtb2tlUGFydGljbGVIb3N0ID0gQkFCWUxPTi5NZXNoLkNyZWF0ZUJveCgnc2hpcC1lbmdpbmVTbW9rZVBhcnRpY2xlSG9zdCcsIDAuMSwgc2NlbmUpO1xyXG4gICAgc21va2VQYXJ0aWNsZUhvc3QucGFyZW50ID0gdGhpcy5zaGlwLkJBQllMT04ubWVzaDtcclxuICAgIHNtb2tlUGFydGljbGVIb3N0LnBvc2l0aW9uLnkgPSAwLjU7XHJcbiAgICBzbW9rZVBhcnRpY2xlSG9zdC52aXNpYmlsaXR5ID0gMDtcclxuXHJcbiAgICBsZXQgcGFydGljbGVTeXN0ZW0gPSBuZXcgQkFCWUxPTi5QYXJ0aWNsZVN5c3RlbSgnc2hpcC1lbmdpbmVTbW9rZVBhcnRpY2xlU3lzdGVtJywgMjAwMCwgc2NlbmUpO1xyXG4gICAgcGFydGljbGVTeXN0ZW0ucGFydGljbGVUZXh0dXJlID0gbmV3IEJBQllMT04uVGV4dHVyZSgnZGF0YS9vYmplY3RzL3NoaXAvc21va2UtcGFydGljbGUucG5nJywgc2NlbmUpO1xyXG4gICAgcGFydGljbGVTeXN0ZW0uYmxlbmRNb2RlID0gQkFCWUxPTi5QYXJ0aWNsZVN5c3RlbS5CTEVORE1PREVfT05FT05FO1xyXG4gICAgcGFydGljbGVTeXN0ZW0uZW1pdHRlciA9IHNtb2tlUGFydGljbGVIb3N0O1xyXG5cclxuICAgIHBhcnRpY2xlU3lzdGVtLm1pbkVtaXRCb3ggPSBuZXcgQkFCWUxPTi5WZWN0b3IzKC0wLjA1LCAwLCAwKTtcclxuICAgIHBhcnRpY2xlU3lzdGVtLm1heEVtaXRCb3ggPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAuMDUsIDAsIDApO1xyXG4gICAgcGFydGljbGVTeXN0ZW0uZW1pdFJhdGUgPSA0MDtcclxuXHJcbiAgICBwYXJ0aWNsZVN5c3RlbS5tYXhTaXplID0gMC41O1xyXG4gICAgcGFydGljbGVTeXN0ZW0ubWluU2l6ZSA9IDAuMjtcclxuXHJcbiAgICBwYXJ0aWNsZVN5c3RlbS5tYXhMaWZlVGltZSA9IDAuMTtcclxuICAgIHBhcnRpY2xlU3lzdGVtLm1pbkxpZmVUaW1lID0gMC41O1xyXG5cclxuICAgIHBhcnRpY2xlU3lzdGVtLm1pbkVtaXRQb3dlciA9IDM7XHJcbiAgICBwYXJ0aWNsZVN5c3RlbS5tYXhFbWl0UG93ZXIgPSAyO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGFydGljbGVTeXN0ZW06IHBhcnRpY2xlU3lzdGVtLFxyXG4gICAgICAgIGhvc3Q6IHNtb2tlUGFydGljbGVIb3N0XHJcbiAgICB9O1xyXG59IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmltcG9ydCBjb250ZXh0IGZyb20gJ2NvbnRleHQnO1xyXG5cclxuLyoqXHJcbiAqIEB0aGlzIHtIdWR9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICAgdGhpcy5CQUJZTE9OLm5vcm1hbC5zcHJpdGUucG9zaXRpb24ueCA9IHRoaXMuc2hpcC5wb3NpdGlvbi54O1xyXG4gICAgdGhpcy5CQUJZTE9OLm5vcm1hbC5zcHJpdGUucG9zaXRpb24ueSA9IHRoaXMuc2hpcC5wb3NpdGlvbi55O1xyXG5cclxuICAgIGxldCBsYXN0UG9zaXRpb24gPSB0aGlzLnNoaXAubGFzdC5wb3NpdGlvbjtcclxuICAgIGxldCBuZXh0UG9zaXRpb24gPSB0aGlzLnNoaXAucG9zaXRpb247XHJcbiAgICBsZXQgYW5nbGUgPSBNYXRoLmF0YW4yKGxhc3RQb3NpdGlvbi55IC0gbmV4dFBvc2l0aW9uLnkgLGxhc3RQb3NpdGlvbi54IC0gbmV4dFBvc2l0aW9uLngpICsgTWF0aC5QSTtcclxuXHJcbiAgICB0aGlzLkJBQllMT04ubm9ybWFsLnNwcml0ZS5hbmdsZSA9IGFuZ2xlO1xyXG59XHJcblxyXG4vKipcclxuICogQHRoaXMge0h1ZH1cclxuICogQHJldHVybiB7e3Nwcml0ZU1hbmFnZXI6IEJBQllMT04uU3ByaXRlTWFuYWdlciwgc3ByaXRlOiBCQUJZTE9OLlNwcml0ZX19XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKCkge1xyXG4gICAgbGV0IHNjZW5lID0gY29udGV4dC5CQUJZTE9OLnNjZW5lO1xyXG4gICAgbGV0IHNwcml0ZU1hbmFnZXIgPSBuZXcgQkFCWUxPTi5TcHJpdGVNYW5hZ2VyKCdzaGlwLWh1ZE5vcm1hbFNwcml0ZU1hbmFnZXInLCAnZGF0YS9vYmplY3RzL3NoaXAvaHVkLW5vcm1hbC1zcHJpdGUucG5nJywgMTQwLCAxNDAsIHNjZW5lKTtcclxuICAgIGxldCBzcHJpdGUgPSBuZXcgQkFCWUxPTi5TcHJpdGUoJ3NoaXAtaHVkTm9ybWFsJywgc3ByaXRlTWFuYWdlcik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNwcml0ZU1hbmFnZXI6IHNwcml0ZU1hbmFnZXIsXHJcbiAgICAgICAgc3ByaXRlOiBzcHJpdGVcclxuICAgIH07XHJcbn0iLCJcInVzZSBzdHJpY3RcIjtcclxuaW1wb3J0IGNvbnRleHQgZnJvbSAnY29udGV4dCc7XHJcblxyXG4vKipcclxuICogQHRoaXMge0h1ZH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICBpZih0aGlzLkJBQllMT04udGFyZ2V0LnNwcml0ZSkge1xyXG4gICAgICAgIHRoaXMuQkFCWUxPTi50YXJnZXQuc3ByaXRlLnBvc2l0aW9uLnggPSB0aGlzLnNoaXAucG9zaXRpb24ueDtcclxuICAgICAgICB0aGlzLkJBQllMT04udGFyZ2V0LnNwcml0ZS5wb3NpdGlvbi55ID0gdGhpcy5zaGlwLnBvc2l0aW9uLnk7XHJcblxyXG4gICAgICAgIGxldCBzaGlwUG9zaXRpb24gPSB0aGlzLnNoaXAucG9zaXRpb247XHJcbiAgICAgICAgbGV0IHRhcmdldFBvc2l0aW9uID0gY29udGV4dC50YXJnZXQucG9zaXRpb247XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMihzaGlwUG9zaXRpb24ueSAtIHRhcmdldFBvc2l0aW9uLnksIHNoaXBQb3NpdGlvbi54IC0gdGFyZ2V0UG9zaXRpb24ueCkgLSBNYXRoLlBJICogMC41O1xyXG5cclxuICAgICAgICB0aGlzLkJBQllMT04udGFyZ2V0LnNwcml0ZS5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHRoaXMge0h1ZH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGUoKSB7XHJcbiAgICBsZXQgaXNBY3RpdmUgPSAhIXRoaXMuQkFCWUxPTi50YXJnZXQuc3ByaXRlO1xyXG4gICAgaWYoaXNBY3RpdmUpIHtcclxuICAgICAgICBpZighY29udGV4dC50YXJnZXQpIHN0b3AuYXBwbHkodGhpcyk7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgaWYoY29udGV4dC50YXJnZXQpIHN0YXJ0LmFwcGx5KHRoaXMpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHRoaXMge0h1ZH1cclxuICogQHJldHVybiB7e3Nwcml0ZU1hbmFnZXI6IEJBQllMT04uU3ByaXRlTWFuYWdlciwgc3ByaXRlOiBCQUJZTE9OLlNwcml0ZX19XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKCkge1xyXG4gICAgbGV0IHNjZW5lID0gY29udGV4dC5CQUJZTE9OLnNjZW5lO1xyXG4gICAgbGV0IHNwcml0ZU1hbmFnZXIgPSBuZXcgQkFCWUxPTi5TcHJpdGVNYW5hZ2VyKCdzaGlwLWh1ZFRhcmdldFNwcml0ZU1hbmFnZXInLCAnZGF0YS9vYmplY3RzL3NoaXAvaHVkLXRhcmdldC1zcHJpdGUucG5nJywgMTQwLCAxNDAsIHNjZW5lKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc3ByaXRlTWFuYWdlcjogc3ByaXRlTWFuYWdlcixcclxuICAgICAgICBzcHJpdGU6IG51bGxcclxuICAgIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAdGhpcyB7SHVkfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0KCkge1xyXG4gICAgaWYodGhpcy5CQUJZTE9OLnRhcmdldC5zcHJpdGUpIHRoaXMuQkFCWUxPTi50YXJnZXQuc3ByaXRlLmRpc3Bvc2UoKTtcclxuXHJcbiAgICBsZXQgc3ByaXRlTWFuYWdlciA9IHRoaXMuQkFCWUxPTi50YXJnZXQuc3ByaXRlTWFuYWdlcjtcclxuICAgIGxldCBzcHJpdGUgPSBuZXcgQkFCWUxPTi5TcHJpdGUoJ3NoaXAtaHVkVGFyZ2V0Jywgc3ByaXRlTWFuYWdlcik7XHJcbiAgICB0aGlzLkJBQllMT04udGFyZ2V0LnNwcml0ZSA9IHNwcml0ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEB0aGlzIHtIdWR9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3RvcCgpIHtcclxuICAgIGlmKHRoaXMuQkFCWUxPTi50YXJnZXQuc3ByaXRlKSB7XHJcbiAgICAgICAgdGhpcy5CQUJZTE9OLnRhcmdldC5zcHJpdGUuZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuQkFCWUxPTi5zcHJpdGUgPSBudWxsO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIEBtb2R1bGUgY29udGV4dFxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0XHJcbi8qKlxyXG4gKiBAaW50ZXJmYWNlIElDb250ZXh0XHJcbiAqIEBpbXBsZW1lbnRzIElDb250ZXh0XHJcbiAqL1xyXG57XHJcbiAgICBkZWJ1ZzogdHJ1ZSxcclxuICAgIHN0ZXBSYXRlOiAxIC8gNjAsXHJcbiAgICBCQUJZTE9OOiB7XHJcbiAgICAgICAgLyoqIEB0eXBlIEJBQllMT04uU2NlbmUgKi9cclxuICAgICAgICBzY2VuZTogbnVsbCxcclxuICAgICAgICAvKiogQHR5cGUgQkFCWUxPTi5FbmdpbmUgKi9cclxuICAgICAgICBlbmdpbmU6IG51bGwsXHJcblxyXG4gICAgICAgIC8qKiBAdHlwZSBCQUJZTE9OLkNhbWVyYSAqL1xyXG4gICAgICAgIGNhbWVyYTogbnVsbFxyXG4gICAgfSxcclxuICAgIERPTToge1xyXG4gICAgICAgIC8qKiBAdHlwZSBIVE1MQ2FudmFzRWxlbWVudCAqL1xyXG4gICAgICAgIGNhbnZhczogbnVsbCxcclxuICAgICAgICAvKiogQHR5cGUgSFRNTEVsZW1lbnQgKi9cclxuICAgICAgICBvdmVybGF5OiBudWxsLFxyXG5cclxuICAgICAgICAvKiogQHR5cGUgSFRNTEVsZW1lbnQgKi9cclxuICAgICAgICBzdGF0czogbnVsbCxcclxuXHJcbiAgICAgICAgLyoqIHR5cGUgSFRNTEVsZW1lbnQgKi9cclxuICAgICAgICBjb25zb2xlOiBudWxsLFxyXG5cclxuICAgICAgICAvKiogdHlwZSBIVE1MRWxlbWVudCAqL1xyXG4gICAgICAgIGRvY2tDb21tYW5kOiBudWxsLFxyXG5cclxuICAgICAgICAvKiogdHlwZSBIVE1MRWxlbWVudCAqL1xyXG4gICAgICAgIHVuZG9ja0NvbW1hbmQ6IG51bGxcclxuICAgIH0sXHJcbiAgICAvKiogQHR5cGUgQXJyYXk8TGV2ZWw+ICovXHJcbiAgICBsZXZlbHM6IG51bGwsXHJcbiAgICAvKiogQHR5cGUgQXJyYXk8UGxhbmV0PiAqL1xyXG4gICAgcGxhbmV0czogbnVsbCxcclxuICAgIC8qKiBAdHlwZSBBcnJheTxTYXRlbGxpdGU+ICovXHJcbiAgICBzYXRlbGxpdGVzOiBudWxsLFxyXG4gICAgLyoqIEB0eXBlIFNoaXAgKi9cclxuICAgIHNoaXA6IG51bGwsXHJcblxyXG4gICAgLyoqIEB0eXBlIElUYXJnZXQgKi9cclxuICAgIHRhcmdldDogbnVsbCxcclxuXHJcbiAgICBzY3JpcHQ6IG51bGwsXHJcblxyXG4gICAgYXBpOiB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHR5cGUgRnVuY3Rpb24obWVzc2FnZTpzdHJpbmcpXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2F5OiBudWxsLFxyXG5cclxuICAgICAgICB0YXJnZXQgOiB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBAdHlwZSBGdW5jdGlvbih7e3Bvc2l0aW9uOiBQb3NpdGlvbjJEfX0pXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzZXQgOiBudWxsLFxyXG5cclxuICAgICAgICAgICAgY2xlYXI6IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmltcG9ydCBjb250ZXh0IGZyb20gJ2NvbnRleHQnO1xyXG5pbXBvcnQgU3RlcGFibGUgZnJvbSAnLi9TdGVwYWJsZSdcclxuXHJcbi8qKlxyXG4gKiBAYWJzdHJhY3RcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc2l0aW9uYWJsZU9iamVjdCBleHRlbmRzIFN0ZXBhYmxlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuXHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuXHJcbiAgICAgICAgdGhpcy5CQUJZTE9OID0ge307XHJcbiAgICAgICAgaWYoY29uZmlnICYmIGNvbmZpZy5tZXNoKSB0aGlzLkJBQllMT04ubWVzaCA9IGNvbmZpZy5tZXNoO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgZGlzdGFuY2UgZnJvbSB0aGUgc2hpcFxyXG4gICAgICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5kaXN0YW5jZSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSAoY29uZmlnICYmIGNvbmZpZy5tZXNoKVxyXG4gICAgICAgICAgICA/IHt4OiBjb25maWcubWVzaC5wb3NpdGlvbi54LCB5OiBjb25maWcubWVzaC5wb3NpdGlvbi55fVxyXG4gICAgICAgICAgICA6IHt4OiAwLCB5OiAwfTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGluZygpIHtcclxuICAgICAgICB0aGlzLmRpc3RhbmNlID0gQkFCWUxPTi5WZWN0b3IyLkRpc3RhbmNlKHRoaXMucG9zaXRpb24sIGNvbnRleHQuc2hpcC5wb3NpdGlvbik7XHJcbiAgICAgICAgc3VwZXIudXBkYXRpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVkKCkge1xyXG4gICAgICAgIHRoaXMuZGlzdGFuY2UgPSBCQUJZTE9OLlZlY3RvcjIuRGlzdGFuY2UodGhpcy5wb3NpdGlvbiwgY29udGV4dC5zaGlwLnBvc2l0aW9uKTtcclxuICAgICAgICBzdXBlci51cGRhdGVkKCk7XHJcbiAgICB9XHJcbn0iLCJcInVzZSBzdHJpY3RcIjtcclxuaW1wb3J0IGNvbnRleHQgZnJvbSAnY29udGV4dCc7XHJcblxyXG4vKipcclxuICogSW1wbGVtZW50cyBhbiBlbnRpdHkgc3RlcHBlZCBmb3IgZWFjaCBmcmFtZSBvZiB0aGUgZ2FtZVxyXG4gKiBAYWJzdHJhY3RcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0ZXBhYmxlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHt9XHJcblxyXG4gICAgZGlzcG9zZSgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnZva2VkIGJlZm9yZSBpbnN0YW5jZSBzdGF0ZSB1cGRhdGUuXHJcbiAgICAgKiBUaGlzIHN0ZXAgaXMgbm90IHN1cHBvc2VkIHRvIGluY3JlYXNlIHRoZSBzdGF0ZSBvZiB0aGUgY3VycmVudCBpbnN0YW5jZS5cclxuICAgICAqL1xyXG4gICAgdXBkYXRpbmcoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlZCB3aGVuIEluY3JlYXNlIGlmIHRoZSBzdGF0ZSBvZiB0aGUgY3VycmVudCBpbnN0YW5jZSBpcyByZXF1aXJlZFxyXG4gICAgICovXHJcbiAgICB1cGRhdGUoKSB7fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW52b2tlZCBvbmNlIHRoZSBzdGF0ZSB0aGUgY3VycmVudCBpbnN0YW5jZSBoYXMgYmVlbiBpbmNyZWFzZWQuXHJcbiAgICAgKiBUaGlzIHN0ZXAgaXMgbm90IHN1cHBvc2VkIHRvIGluY3JlYXNlIHRoZSBzdGF0ZSBvZiB0aGUgY3VycmVudCBpbnN0YW5jZS5cclxuICAgICAqL1xyXG4gICAgdXBkYXRlZCgpIHt9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnZva2VkIHdoZW4gdGhlIGN1cnJlbnQgaW5zdGFuY2Ugc2hvdWxkIGJlIHByZXBhcmVkIGZvciByZW5kZXJpbmdcclxuICAgICAqL1xyXG4gICAgcmVuZGVyKCkge31cclxufSIsIlwidXNlIHN0cmljdFwiO1xyXG5pbXBvcnQgY29udGV4dCBmcm9tICdjb250ZXh0JztcclxuaW1wb3J0IFBvc2l0aW9uYWJsZU9iamVjdCBmcm9tICcuL1Bvc2l0aW9uYWJsZU9iamVjdCc7XHJcblxyXG4vKipcclxuICogQGFic3RyYWN0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJsZXRPYmplY3QgZXh0ZW5kcyBQb3NpdGlvbmFibGVPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcblxyXG4gICAgICAgIHRoaXMubWFzcyA9IGNvbmZpZyA/IChjb25maWcubWFzcyB8fCAwKSA6IDA7XHJcblxyXG4gICAgICAgIHRoaXMubGFzdCA9IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGNvbmZpZyAmJiBjb25maWcudmVsb2NpdHlcclxuICAgICAgICAgICAgICAgID8geyB4OiAodGhpcy5wb3NpdGlvbi54IC0gY29uZmlnLnZlbG9jaXR5IC54ICogY29udGV4dC5zdGVwUmF0ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgeTogKHRoaXMucG9zaXRpb24ueSAtIGNvbmZpZy52ZWxvY2l0eSAueSAqIGNvbnRleHQuc3RlcFJhdGUpIH1cclxuICAgICAgICAgICAgICAgIDogeyB4OiB0aGlzLnBvc2l0aW9uLngsIHk6IHRoaXMucG9zaXRpb24ueSB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGluZygpIHtcclxuICAgICAgICB0aGlzLl94ID0gdGhpcy5wb3NpdGlvbi54O1xyXG4gICAgICAgIHRoaXMuX3kgPSB0aGlzLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgc3VwZXIudXBkYXRpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVkKCkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZWQoKTtcclxuICAgICAgICB0aGlzLmxhc3QucG9zaXRpb24ueCA9IHRoaXMuX3g7XHJcbiAgICAgICAgdGhpcy5sYXN0LnBvc2l0aW9uLnkgPSB0aGlzLl95O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtzcGF3biwgYXN5bmN9IGZyb20gJ3N5c3RlbSc7XHJcbmltcG9ydCBTaGlwIGZyb20gJy4vU2hpcCc7XHJcbmltcG9ydCBQbGFuZXQgZnJvbSAnLi9QbGFuZXQnO1xyXG5pbXBvcnQgY29udGV4dCBmcm9tICdjb250ZXh0JztcclxuaW1wb3J0ICogYXMgcHJvdmlkZXIgZnJvbSAnLi9wcm92aWRlcic7XHJcbmltcG9ydCBJVGFyZ2V0IGZyb20gJy4vSVRhcmdldCc7XHJcbmltcG9ydCBTY3JpcHQgZnJvbSAnLi9TY3JpcHQnO1xyXG5pbXBvcnQgU2F0ZWxsaXRlIGZyb20gJy4vU2F0ZWxsaXRlJztcclxucmVxdWlyZSgnLi9UYXJnZXRQb2ludCcpOyAvLyBJVGFyZ2V0IGltcGxlbWVudGF0aW9uXHJcbnJlcXVpcmUoJy4vVGFyZ2V0T3JiaXQnKTsgLy8gSVRhcmdldCBpbXBsZW1lbnRhdGlvblxyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemVzIHRoZSBnbG9iYWwgZ2FtZSBjb250ZXh0XHJcbiAqIEByZXR1cm5zIFByb21pc2VcclxuICovXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplQXN5bmMgPSBhc3luYyhmdW5jdGlvbiogKCkge1xyXG5cclxuICAgIHZhciBsZXZlbHMgPSB5aWVsZCBwcm92aWRlci5nZXRMZXZlbHMoKTtcclxuXHJcbiAgICBpZiAobGV2ZWxzICYmIGxldmVscy5sZW5ndGgpIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ2xldmVscyBsb2FkZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgbGV2ZWxzLmZvckVhY2gobGV2ZWwgPT4gY29uc29sZS5sb2coYCAtIExldmVsWyR7bGV2ZWwuaWR9XSBcIiR7bGV2ZWwubmFtZX1cIlxcbiAgICR7bGV2ZWwuZGVzY3JpcHRpb259YCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRleHQubGV2ZWxzID0gbGV2ZWxzO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplcyB0aGUgc3BlY2lmaWVkIGxldmVsIGluIHRoZSBjdXJyZW50IGNvbnRleHRcclxuICogQHBhcmFtIFN0cmluZyBUaGUgSWQgb2YgdGhlIGxldmVsIHRvIGluaXRpYWxpemVcclxuICogQFJldHVybnMgUHJvbWlzZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVMZXZlbEFzeW5jID0gYXN5bmMoZnVuY3Rpb24qIChsZXZlbElkKSB7XHJcblxyXG4gICAgbGV0IGNhbnZhcyA9IC8qKiBAdHlwZSBIVE1MQ2FudmFzRWxlbWVudCAqLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVuZGVyLXN1cmZhY2UnKTtcclxuICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTtcclxuICAgIGxldCBjb25zb2xlSG9zdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25zb2xlJyk7XHJcbiAgICBsZXQgZG9ja0NvbW1hbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9jay1jb21tYW5kJyk7XHJcbiAgICBsZXQgdW5kb2NrQ29tbWFuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bmRvY2stY29tbWFuZCcpO1xyXG4gICAgb3ZlcmxheS5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICBjb250ZXh0LkRPTS5jYW52YXMgPSBjYW52YXM7XHJcbiAgICBjb250ZXh0LkRPTS5vdmVybGF5ID0gb3ZlcmxheTtcclxuICAgIGNvbnRleHQuRE9NLmNvbnNvbGUgPSBjb25zb2xlSG9zdDtcclxuICAgIGNvbnRleHQuRE9NLmRvY2tDb21tYW5kID0gZG9ja0NvbW1hbmQ7XHJcbiAgICBjb250ZXh0LkRPTS51bmRvY2tDb21tYW5kID0gdW5kb2NrQ29tbWFuZDtcclxuXHJcbiAgICBjb250ZXh0LmFwaS5zYXkgPSBzYXk7XHJcbiAgICBjb250ZXh0LmFwaS50YXJnZXQuc2V0ID0gSVRhcmdldC5zZXQ7XHJcbiAgICBjb250ZXh0LmFwaS50YXJnZXQuY2xlYXIgPSBJVGFyZ2V0LmNsZWFyO1xyXG5cclxuICAgIGxldCBlbmdpbmUgPSBuZXcgQkFCWUxPTi5FbmdpbmUoY2FudmFzLCB0cnVlKTtcclxuICAgIGNvbnRleHQuQkFCWUxPTi5lbmdpbmUgPSBlbmdpbmU7XHJcblxyXG4gICAgdmFyIGxldmVsID0gY29udGV4dC5sZXZlbHMuZmlsdGVyKGN1cnJlbnRMZXZlbCA9PiBjdXJyZW50TGV2ZWwuaWQgPT09IGxldmVsSWQpWzBdO1xyXG4gICAgaWYgKCFsZXZlbCkgdGhyb3cgJ25vIGxldmVsIGZvdW5kJztcclxuXHJcbiAgICBsZXQgc2NlbmUgPSB5aWVsZCBwcm92aWRlci5jcmVhdGVCYWJ5bG9uU2NlbmVBc3luYyhsZXZlbElkKTtcclxuICAgIGNvbnRleHQuQkFCWUxPTi5zY2VuZSA9IHNjZW5lO1xyXG5cclxuICAgIGNvbnNvbGUuaW5mbygnTG9hZGluZyBsZXZlbCBzY3JpcHQuLi4nKTtcclxuICAgIGNvbnRleHQuc2NyaXB0ID0gbmV3IFNjcmlwdCh5aWVsZCBwcm92aWRlci5nZXRTY2VuZVNjcmlwdChsZXZlbElkKSk7XHJcblxyXG4gICAgY29uc29sZS5pbmZvKCdMb2FkaW5nIHBsYW5ldHMuLi4nKTtcclxuICAgIGxldCBwbGFuZXRzID0gW2ZvcihtZXNoIG9mIHNjZW5lLm1lc2hlcy5maWx0ZXIobWVzaCA9PiBtZXNoLm5hbWUubWF0Y2goUGxhbmV0Lm5hbWVSZWdleCkpKVxyXG4gICAgICAgIG5ldyBQbGFuZXQoe1xyXG4gICAgICAgICAgICBtZXNoOiBtZXNoLFxyXG4gICAgICAgICAgICBtZXRhZGF0YTogW2ZvciAoaW5mbyBvZiBsZXZlbC5wbGFuZXRzIHx8IFtdKSBpZihpbmZvLmlkID09IG1lc2gubmFtZSkgaW5mb11cclxuICAgICAgICB9KV07XHJcbiAgICBjb250ZXh0LnBsYW5ldHMgPSBbZm9yIChwbGFuZXQgb2YgcGxhbmV0cykgaWYocGxhbmV0LmlzQWN0aXZlKSBwbGFuZXRdO1xyXG4gICAgeWllbGQgUHJvbWlzZS5hbGwoW2ZvciAocGxhbmV0IG9mIHBsYW5ldHMpIHBsYW5ldC5pbml0aWFsaXplQXN5bmMoKV0pO1xyXG5cclxuICAgIGNvbnNvbGUuaW5mbygnTG9hZGluZyBzYXRlbGxpdGVzLi4uJyk7XHJcbiAgICBsZXQgc2F0ZWxsaXRlcyA9IFtmb3IgKG1lc2ggb2Ygc2NlbmUubWVzaGVzLmZpbHRlcihtZXNoID0+IG1lc2gubmFtZS5tYXRjaChTYXRlbGxpdGUubmFtZVJlZ2V4KSkpIG5ldyBTYXRlbGxpdGUobWVzaCldO1xyXG4gICAgY29udGV4dC5zYXRlbGxpdGVzID0gc2F0ZWxsaXRlcztcclxuICAgIHlpZWxkIFByb21pc2UuYWxsKFtmb3IgKHNhdGVsbGl0ZSBvZiBzYXRlbGxpdGVzKSBzYXRlbGxpdGUuaW5pdGlhbGl6ZUFzeW5jKHtcclxuICAgICAgICBtb21lbnQ6IE1hdGguUEkgKiAwLjA4MSxcclxuICAgICAgICBwbGFuZXQ6IGNvbnRleHQucGxhbmV0c1swXVxyXG4gICAgfSldKTtcclxuICAgIGNvbnRleHQuRE9NLmRvY2tDb21tYW5kLnNhdGVsbGl0ZSA9IHNhdGVsbGl0ZXNbMF07XHJcbiAgICBjb250ZXh0LkRPTS51bmRvY2tDb21tYW5kLnNhdGVsbGl0ZSA9IHNhdGVsbGl0ZXNbMF07XHJcblxyXG4gICAgY29uc29sZS5pbmZvKCdMb2FkaW5nIHNoaXAuLi4nKTtcclxuICAgIGxldCBzaGlwTWVzaCA9IHNjZW5lLmdldE1lc2hCeUlEKCdzaGlwJyk7XHJcbiAgICBsZXQgc2hpcCA9IG5ldyBTaGlwKHttZXNoOiBzaGlwTWVzaCwgdmVsb2NpdHk6IHt4OiAxLjAsIHk6IDB9LCBtYXNzOiAxMDB9KTtcclxuICAgIGNvbnRleHQuc2hpcCA9IHNoaXA7XHJcbiAgICB5aWVsZCBzaGlwLmluaXRpYWxpemVBc3luYygpO1xyXG5cclxuICAgIGNvbnNvbGUuaW5mbygnTG9hZGluZyBjYW1lcmEuLi4nKTtcclxuICAgIHNjZW5lLmNsZWFyQ29sb3IgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMCwgMCwgMCwgMC4wMDAwMDAwMDAwMDAwMDAxKTtcclxuICAgIGxldCBjYW1lcmEgPSBuZXcgQkFCWUxPTi5GcmVlQ2FtZXJhKFwiY2FtZXJhLXNoaXBcIiwgbmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAtMzApLCBzY2VuZSk7XHJcbiAgICBjb250ZXh0LkJBQllMT04uY2FtZXJhID0gY2FtZXJhO1xyXG4gICAgY2FtZXJhLmZvdiA9IDAuMztcclxuICAgIGNhbWVyYS5yb3RhdGlvbiA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICAvL2NhbWVyYS5hdHRhY2hDb250cm9sKGNhbnZhcywgZmFsc2UpO1xyXG5cclxuICAgIGNvbnNvbGUuaW5mbygnTG9hZGluZyBzdGFycy4uLicpO1xyXG4gICAgZm9yICh2YXIgcG9pbnRTaXplID0gMTsgcG9pbnRTaXplIDw9IDM7IHBvaW50U2l6ZSsrKSB7XHJcbiAgICAgICAgbGV0IHN0YXJzTWVzaDMgPSBuZXcgQkFCWUxPTi5NZXNoKGBzdGFycyR7cG9pbnRTaXplfWAsIHNjZW5lKTtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IDgwO1xyXG4gICAgICAgICAgICBjb25zdCBkZXB0aCA9IDEwMDtcclxuICAgICAgICAgICAgY29uc3QgbWluWiA9IC0xO1xyXG4gICAgICAgICAgICBsZXQgc3RhcnNNYXRlcmlhbCA9IG5ldyBCQUJZTE9OLlN0YW5kYXJkTWF0ZXJpYWwoYHN0YXJzTWF0ZXJpYWwke3BvaW50U2l6ZX1gLCBzY2VuZSk7XHJcbiAgICAgICAgICAgIHN0YXJzTWF0ZXJpYWwucG9pbnRzQ2xvdWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBzdGFyc01hdGVyaWFsLnBvaW50U2l6ZSA9IHBvaW50U2l6ZTtcclxuICAgICAgICAgICAgc3RhcnNNYXRlcmlhbC5lbWlzc2l2ZUNvbG9yID0gbmV3IEJBQllMT04uQ29sb3IzKDAuOCwgMC44LCAwLjgpO1xyXG4gICAgICAgICAgICBzdGFyc01lc2gzLm1hdGVyaWFsID0gc3RhcnNNYXRlcmlhbDtcclxuICAgICAgICAgICAgc3RhcnNNYXRlcmlhbC5iYWNrRmFjZUN1bGxpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGxldCB2ZXJ0aWNlcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDUwMDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNlcy5wdXNoKE1hdGgucmFuZG9tKCkgKiByYWRpdXMgLSByYWRpdXMgLyAyLCBNYXRoLnJhbmRvbSgpICogcmFkaXVzIC0gcmFkaXVzIC8gMiwgbWluWiArIE1hdGgucmFuZG9tKCkgKiBkZXB0aCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN0YXJzTWVzaDMuc2V0VmVydGljZXNEYXRhKEJBQllMT04uVmVydGV4QnVmZmVyLlBvc2l0aW9uS2luZCwgdmVydGljZXMsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmluZm8oJ1RoZSBsZXZlbCBpcyBpbml0aWFsaXplZC4nKTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnQoKSB7XHJcbiAgICBjb25zb2xlLmluZm8oJ0xhdW5jaGluZyBsZXZlbC4uLicpO1xyXG5cclxuICAgIGNvbnN0IGVhc2luZ0NvZWYgPSAwLjE7XHJcblxyXG4gICAgbGV0IGVuZ2luZSA9IGNvbnRleHQuQkFCWUxPTi5lbmdpbmU7XHJcbiAgICBsZXQgY2FudmFzID0gY29udGV4dC5ET00uY2FudmFzO1xyXG4gICAgbGV0IHNjZW5lID0gY29udGV4dC5CQUJZTE9OLnNjZW5lO1xyXG4gICAgbGV0IGNhbWVyYSA9IGNvbnRleHQuQkFCWUxPTi5jYW1lcmE7XHJcbiAgICBsZXQgc2hpcCA9IGNvbnRleHQuc2hpcDtcclxuICAgIGxldCBzaGlwTWVzaCA9IHNoaXAuQkFCWUxPTi5tZXNoO1xyXG5cclxuICAgIGNvbnNvbGUuaW5mbygnQ29tcGlsaW5nIGxldmVsIHNjcmlwdCcpO1xyXG4gICAgY29udGV4dC5zY3JpcHQuaW5pdGlhbGl6ZS5hcHBseShjb250ZXh0KTtcclxuXHJcbiAgICBlbmdpbmUucnVuUmVuZGVyTG9vcChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNhbWVyYS5wb3NpdGlvbi54ICs9IChzaGlwTWVzaC5wb3NpdGlvbi54IC0gY2FtZXJhLnBvc2l0aW9uLngpICogZWFzaW5nQ29lZjtcclxuICAgICAgICBjYW1lcmEucG9zaXRpb24ueSArPSAoc2hpcE1lc2gucG9zaXRpb24ueSAtIGNhbWVyYS5wb3NpdGlvbi55KSAqIGVhc2luZ0NvZWY7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHBsYW5ldCBvZiBjb250ZXh0LnBsYW5ldHMpIHBsYW5ldC51cGRhdGluZygpO1xyXG4gICAgICAgIGZvciAobGV0IHNhdGVsbGl0ZSBvZiBjb250ZXh0LnNhdGVsbGl0ZXMpIHNhdGVsbGl0ZS51cGRhdGluZygpO1xyXG4gICAgICAgIHNoaXAudXBkYXRpbmcoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcGxhbmV0IG9mIGNvbnRleHQucGxhbmV0cylwbGFuZXQudXBkYXRlKCk7XHJcbiAgICAgICAgZm9yIChsZXQgc2F0ZWxsaXRlIG9mIGNvbnRleHQuc2F0ZWxsaXRlcykgc2F0ZWxsaXRlLnVwZGF0ZSgpO1xyXG4gICAgICAgIHNoaXAudXBkYXRlKCk7XHJcbiAgICAgICAgaWYgKGNvbnRleHQudGFyZ2V0KWNvbnRleHQudGFyZ2V0LnVwZGF0ZSgpO1xyXG5cclxuXHJcbiAgICAgICAgZm9yIChsZXQgcGxhbmV0IG9mIGNvbnRleHQucGxhbmV0cykgcGxhbmV0LnVwZGF0ZWQoKTtcclxuICAgICAgICBmb3IgKGxldCBzYXRlbGxpdGUgb2YgY29udGV4dC5zYXRlbGxpdGVzKSBzYXRlbGxpdGUudXBkYXRlZCgpO1xyXG4gICAgICAgIHNoaXAudXBkYXRlZCgpO1xyXG5cclxuICAgICAgICBjb250ZXh0LnNjcmlwdC5zdGVwLmFwcGx5KGNvbnRleHQpO1xyXG4gICAgICAgIGlmIChjb250ZXh0LnNoaXAuY3Jhc2hpbmcgJiYgIWNvbnRleHQuc2hpcC5kZWFkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ0ludm9raW5nIHNjcmlwdC5jcmFzaCcpO1xyXG4gICAgICAgICAgICBjb250ZXh0LnNjcmlwdC5jcmFzaC5hcHBseShjb250ZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IHBsYW5ldCBvZiBjb250ZXh0LnBsYW5ldHMpcGxhbmV0LnJlbmRlcigpO1xyXG4gICAgICAgIGZvciAobGV0IHNhdGVsbGl0ZSBvZiBjb250ZXh0LnNhdGVsbGl0ZXMpIHNhdGVsbGl0ZS5yZW5kZXIoKTtcclxuICAgICAgICBzaGlwLnJlbmRlcigpO1xyXG4gICAgICAgIGlmIChjb250ZXh0LnRhcmdldCkgY29udGV4dC50YXJnZXQucmVuZGVyKCk7XHJcblxyXG4gICAgICAgIHNjZW5lLnJlbmRlcigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9zY2VuZS5kZWJ1Z0xheWVyLnNob3coKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IGVuZ2luZS5yZXNpemUoKSk7XHJcbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiBzaGlwLnN0YXJ0RW5naW5lKHt4OiBlLngsIHk6IGUueX0pKTtcclxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZSA9PiBzaGlwLnN0b3BFbmdpbmUoKSk7XHJcbiAgICBjb250ZXh0LkRPTS5kb2NrQ29tbWFuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNvbnRleHQuRE9NLmRvY2tDb21tYW5kLnNhdGVsbGl0ZS5yZXF1ZXN0RG9ja2luZygpKTtcclxuICAgIGNvbnRleHQuRE9NLnVuZG9ja0NvbW1hbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjb250ZXh0LkRPTS51bmRvY2tDb21tYW5kLnNhdGVsbGl0ZS51bmRvY2soKSk7XHJcblxyXG4gICAgY29uc29sZS5pbmZvKCdUaGUgbGV2ZWwgaXMgcmVhZHkuIFRoZSBsb29wIGhhcyBzdGFydGVkJyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEaXNwbGF5cyBhIG1lc3NhZ2UgdG8gdGhlIHNjcmVlblxyXG4gKiBAcGFyYW0gbWVzc2FnZVxyXG4gKi9cclxuZnVuY3Rpb24gc2F5KG1lc3NhZ2UpIHtcclxuICAgIGxldCBodG1sRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xJJyk7XHJcbiAgICBodG1sRWxlbWVudC5pbm5lclRleHQgPSBtZXNzYWdlO1xyXG4gICAgY29udGV4dC5ET00uY29uc29sZS5hcHBlbmRDaGlsZChodG1sRWxlbWVudCk7XHJcbiAgICBsZXQgZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb250ZXh0LkRPTS5jb25zb2xlLnJlbW92ZUNoaWxkKHRoaXMpO1xyXG4gICAgfS5iaW5kKGh0bWxFbGVtZW50KTtcclxuICAgIHNldFRpbWVvdXQoZGlzcG9zZSwgMjAwMDApO1xyXG59IiwiaW1wb3J0IGNvbnRleHQgZnJvbSAnY29udGV4dCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvdygpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgbGV0IG1lbnVIb3N0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcclxuXHJcbiAgICAgICAgdmFyIExldmVsTWVudUl0ZW0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICAgICAgICAgIHNlbGVjdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnByb3BzLmNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgY2xvc2UoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPGxpIG9uQ2xpY2s9e3RoaXMuc2VsZWN0fT57dGhpcy5wcm9wcy5uYW1lfTwvbGk+O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciBMZXZlbE1lbnUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNyZWF0ZUl0ZW0gPSBsZXZlbCA9PiA8TGV2ZWxNZW51SXRlbSBjb250ZXh0PXtsZXZlbH0gbmFtZT17bGV2ZWwubmFtZX0gLz47XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPHVsIGNsYXNzTmFtZT1cIm1pc3Npb25zXCI+e2NvbnRleHQubGV2ZWxzLm1hcChjcmVhdGVJdGVtKX08L3VsPjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBSZWFjdC5yZW5kZXIoPGRpdj48aDI+U2VsZWN0IGEgbWlzc2lvbjo8L2gyPjxMZXZlbE1lbnUvPjwvZGl2PiwgbWVudUhvc3QpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZSgpIHtcclxuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcclxuICAgIGxldCBtZW51Q29udGFpbmVyID0gbWVudS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndWwnKVswXTtcclxuICAgIG1lbnVDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn0iLCJpbXBvcnQge2N1cnJ5fSBmcm9tICdzeXN0ZW0nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwcGx5ID0gY3VycnkoYXBwbHlTdHJlbmd0aHMpO1xyXG5leHBvcnQgY29uc3QgZ3Jhdml0eSA9IGN1cnJ5KGNvbXB1dGVHcmF2aXR5U3Rlbmd0aCk7XHJcblxyXG4vKipcclxuICogQHR5cGVkZWYgT2JqZWN0IFBvc2l0aW9uMkRcclxuICogQHByb3BlcnR5IHg6TnVtYmVyXHJcbiAqIEBwcm9wZXJ0eSB5Ok51bWJlclxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiBPYmplY3QgU3RyZW5ndGhcclxuICogQHByb3BlcnR5IHg6TnVtYmVyXHJcbiAqIEBwcm9wZXJ0eSB5Ok51bWJlclxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiBPYmplY3QgVmVybGV0T2JqZWN0XHJcbiAqIEBwcm9wZXJ0eSB7UG9zaXRpb24yRH0gcG9zaXRpb25cclxuICogQHByb3BlcnR5IHt7cG9zaXRpb246IFBvc2l0aW9uMkR9fSBsYXN0XHJcbiAqIEBwcm9wZXJ0eSBtYXNzOiBOdW1iZXJcclxuICovXHJcblxyXG4vKipcclxuICogQXBwbGllcyB0aGUgc3BlY2lmaWVkIHN0cmVuZ3RocyB0byB0aGUgY3VycmVudCB2ZXJsZXQgb2JqZWN0XHJcbiAqIEBwYXJhbSB7QXJyYXk8U3RyZW5ndGg+fSBzdHJlbmd0aHNcclxuICogQHBhcmFtIHtudW1iZXJ9IHN0ZXBSYXRlXHJcbiAqIEB0aGlzIHtWZXJsZXRPYmplY3R9XHJcbiAqL1xyXG5mdW5jdGlvbiBhcHBseVN0cmVuZ3RocyhzdHJlbmd0aHMsIHN0ZXBSYXRlLyogPSBjb250ZXh0LnN0ZXBSYXRlKi8pIHtcclxuXHJcbiAgICBsZXQgdmVsb2NpdHkgPSB7XHJcbiAgICAgICAgeDogKHRoaXMucG9zaXRpb24ueCAtIHRoaXMubGFzdC5wb3NpdGlvbi54KSAvIHN0ZXBSYXRlLFxyXG4gICAgICAgIHk6ICh0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLmxhc3QucG9zaXRpb24ueSkgLyBzdGVwUmF0ZVxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgYWNjZWxlcmF0aW9uID0ge3g6IDAsIHk6IDB9O1xyXG5cclxuICAgIGZvciAodmFyIHN0cmVuZ3RoIG9mIHN0cmVuZ3Rocykge1xyXG4gICAgICAgIGFjY2VsZXJhdGlvbi54ICs9IHN0cmVuZ3RoLnggLyB0aGlzLm1hc3M7XHJcbiAgICAgICAgYWNjZWxlcmF0aW9uLnkgKz0gc3RyZW5ndGgueSAvIHRoaXMubWFzcztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbmV3VmVsb2NpdHkgPSB7XHJcbiAgICAgICAgeDogdmVsb2NpdHkueCArIGFjY2VsZXJhdGlvbi54KnN0ZXBSYXRlLFxyXG4gICAgICAgIHk6IHZlbG9jaXR5LnkgKyBhY2NlbGVyYXRpb24ueSpzdGVwUmF0ZVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnBvc2l0aW9uLnggKz0gbmV3VmVsb2NpdHkueCAqIHN0ZXBSYXRlO1xyXG4gICAgdGhpcy5wb3NpdGlvbi55ICs9IG5ld1ZlbG9jaXR5LnkgKiBzdGVwUmF0ZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbXB1dGVzIHRoZSBncmF2aXR5IHN0cmVuZ3RoIGZvciB0aGUgc3BlY2lmaWVkIHBsYW5ldFxyXG4gKiBAcGFyYW0ge1BsYW5ldH0gcGxhbmV0XHJcbiAqIEB0aGlzIHtWZXJsZXRPYmplY3R9XHJcbiAqIEByZXR1cm4ge1N0cmVuZ3RofVxyXG4gKi9cclxuZnVuY3Rpb24gY29tcHV0ZUdyYXZpdHlTdGVuZ3RoKHBsYW5ldCkge1xyXG4gICAgbGV0IHJlID0gcGxhbmV0LnJhZGl1cyAqIDE1O1xyXG5cclxuICAgIGxldCBkaXN0YW5jZSA9IEJBQllMT04uVmVjdG9yMi5EaXN0YW5jZSh0aGlzLnBvc2l0aW9uLCBwbGFuZXQucG9zaXRpb24pO1xyXG4gICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMih0aGlzLnBvc2l0aW9uLnggIC0gcGxhbmV0LnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSAtIHBsYW5ldC5wb3NpdGlvbi55KTtcclxuICAgIGxldCBncmF2aXR5U3RyZW5ndGhOb3JtYWwgPSBjb21wdXRlR3Jhdml0eVN0cmVuZ3RoVmFsdWUoZGlzdGFuY2UsIHJlKSAqIHRoaXMubWFzcztcclxuICAgIGxldCBzdHJlbmd0aCA9IHtcclxuICAgICAgICB4OiAtZ3Jhdml0eVN0cmVuZ3RoTm9ybWFsICogTWF0aC5zaW4oYW5nbGUpLFxyXG4gICAgICAgIHk6IC1ncmF2aXR5U3RyZW5ndGhOb3JtYWwgKiBNYXRoLmNvcyhhbmdsZSlcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHN0cmVuZ3RoO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb21wdXRlR3Jhdml0eVN0cmVuZ3RoVmFsdWUoZGlzdGFuY2UsIHJlKSB7XHJcbiAgICByZXR1cm4gcmUgLyAocmUgKyBkaXN0YW5jZSAqIGRpc3RhbmNlICogZGlzdGFuY2UgKiBkaXN0YW5jZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb21wdXRlcyB0aGUgb3JiaXRhbCB2ZWxvY2l0eSBmb3IgdGhlIHNwZWNpZmllZCBwbGFuZXRcclxuICogQHBhcmFtIHtQbGFuZXR9IHBsYW5ldFxyXG4gKiBAdGhpcyB7VmVybGV0T2JqZWN0fVxyXG4gKiBAcmV0dXJuIHtQb3NpdGlvbjJEfVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0T3JiaXRhbFZlbG9jaXR5KHBsYW5ldCkge1xyXG5cclxuICAgIGxldCBncmF2aXR5U3RyZW5ndGggPSBjb21wdXRlR3Jhdml0eVN0ZW5ndGguYXBwbHkodGhpcywgW3BsYW5ldF0pO1xyXG5cclxuXHJcbn0iLCJpbXBvcnQgY29udGV4dCBmcm9tICdjb250ZXh0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCYWJ5bG9uU2NlbmVBc3luYyhsZXZlbElkKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIEJBQllMT04uU2NlbmVMb2FkZXIuTG9hZChcclxuICAgICAgICAgICAgYGRhdGEvc2NlbmVzLyR7bGV2ZWxJZH0vYCxcclxuICAgICAgICAgICAgJ3NjZW5lLmJhYnlsb24nLFxyXG4gICAgICAgICAgICBjb250ZXh0LkJBQllMT04uZW5naW5lLFxyXG4gICAgICAgICAgICBmdW5jdGlvbihzY2VuZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoc2NlbmUpOyB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2JqZWN0TWV0YWRhdGEob2JqZWN0SWQpIHtcclxuICAgIHJldHVybiAkLmFqYXgoYGRhdGEvb2JqZWN0cy8ke29iamVjdElkfS9tZXRhZGF0YS5qc29uYCk7XHJcbn1cclxuXHJcbi8vZXhwb3J0IGZ1bmN0aW9uIGdldFBsYW5ldEF0bW9zcGhlcmUocGxhbmV0SWQpIHtcclxuLy8gICAgcmV0dXJuICQuYWpheChgZGF0YS9vYmplY3RzLyR7cGxhbmV0SWR9L2F0bW9zcGhlcmUucG5nYCk7XHJcbi8vfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjZW5lU2NyaXB0KGxldmVsSWQpIHtcclxuICAgIHJldHVybiAkLmFqYXgoYGRhdGEvc2NlbmVzLyR7bGV2ZWxJZH0vc2NlbmUuanNgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGV2ZWxzKCkge1xyXG4gICAgcmV0dXJuICQuYWpheCgnZGF0YS9sZXZlbHMuanNvbicsIHttZXRob2Q6ICdHRVQnfSk7XHJcbn0iLCIvKipcclxuICogQG1vZHVsZSBzeXN0ZW1cclxuICovXHJcblxyXG4vKipcclxuICogQGFsaWFzIG1vZHVsZTpzeXN0ZW0uc3Bhd25cclxuICogQHJldHVybiB7Kn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzcGF3bigpIHsgcmV0dXJuIFEuc3Bhd24uYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxyXG5cclxuLyoqXHJcbiAqIEBhbGlhcyBtb2R1bGU6c3lzdGVtLmFzeW5jXHJcbiAqIEByZXR1cm4ge2Z1bmN0aW9uKC4uLik6IFEuUHJvbWlzZTxUPn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhc3luYygpIHsgcmV0dXJuIFEuYXN5bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxyXG5cclxuLyoqXHJcbiAqIEFwcGxpZXMgY3VycnkgdHJhbnNmb3JtYXRpb24gdG8gdGhlIHNwZWNpZmllZCBmdW5jdGlvblxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBpbnZvY2F0aW9uIFRoZSBmdW5jdGlvbiBpbnZva2VcclxuICogQHJldHVybiB7RnVuY3Rpb259XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3VycnkoaW52b2NhdGlvbikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgYXJncyA9IGFyZ3VtZW50cztcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnZvY2F0aW9uLmFwcGx5KHRhcmdldCwgYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQge3NwYXduLCBhc3luY30gZnJvbSAnc3lzdGVtJztcclxuaW1wb3J0ICogYXMgZ2FtZSBmcm9tICcuL2FwcC9nYW1lJztcclxuaW1wb3J0ICogYXMgbWVudSBmcm9tICcuL2FwcC9tZW51LmpzeCc7XHJcblxyXG5zcGF3bihib290c3RyYXBBc3luYyk7XHJcblxyXG5jb25zdCBhdXRvU3RhcnQgPSB0cnVlOyAvLyBUT0RPOiBjb21waWxhdGlvbiB2YXJpYWJsZSBtZWNoYW5pc21cclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZnVuY3Rpb24qIGJvb3RzdHJhcEFzeW5jKCkge1xyXG4gICAgeWllbGQgZ2FtZS5pbml0aWFsaXplQXN5bmMoKTtcclxuICAgIGlmKGF1dG9TdGFydClcclxuICAgIHtcclxuICAgICAgICBtZW51LmNsb3NlKCk7XHJcbiAgICAgICAgeWllbGQgZ2FtZS5pbml0aWFsaXplTGV2ZWxBc3luYygnc2FuZGJveCcpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkTGV2ZWwgPSB5aWVsZCBtZW51LnNob3coKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZExldmVsKTtcclxuICAgICAgICB5aWVsZCBnYW1lLmluaXRpYWxpemVMZXZlbEFzeW5jKHNlbGVjdGVkTGV2ZWwuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdhbWUuc3RhcnQoKTtcclxufVxyXG5cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnJlcXVpcmUoXCJjb3JlLWpzL3NoaW1cIik7XG5cbnJlcXVpcmUoXCJyZWdlbmVyYXRvci9ydW50aW1lXCIpO1xuXG5pZiAoZ2xvYmFsLl9iYWJlbFBvbHlmaWxsKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIm9ubHkgb25lIGluc3RhbmNlIG9mIGJhYmVsL3BvbHlmaWxsIGlzIGFsbG93ZWRcIik7XG59XG5nbG9iYWwuX2JhYmVsUG9seWZpbGwgPSB0cnVlOyIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2ZcclxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcclxudmFyICQgPSByZXF1aXJlKCcuLyQnKTtcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcclxuICAgIHZhciBPICAgICAgPSAkLnRvT2JqZWN0KCR0aGlzKVxyXG4gICAgICAsIGxlbmd0aCA9ICQudG9MZW5ndGgoTy5sZW5ndGgpXHJcbiAgICAgICwgaW5kZXggID0gJC50b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxyXG4gICAgICAsIHZhbHVlO1xyXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xyXG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XHJcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XHJcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXg7XHJcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XHJcbiAgfTtcclxufTsiLCIvLyAwIC0+IEFycmF5I2ZvckVhY2hcclxuLy8gMSAtPiBBcnJheSNtYXBcclxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcclxuLy8gMyAtPiBBcnJheSNzb21lXHJcbi8vIDQgLT4gQXJyYXkjZXZlcnlcclxuLy8gNSAtPiBBcnJheSNmaW5kXHJcbi8vIDYgLT4gQXJyYXkjZmluZEluZGV4XHJcbnZhciAkICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgY3R4ID0gcmVxdWlyZSgnLi8kLmN0eCcpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRZUEUpe1xyXG4gIHZhciBJU19NQVAgICAgICAgID0gVFlQRSA9PSAxXHJcbiAgICAsIElTX0ZJTFRFUiAgICAgPSBUWVBFID09IDJcclxuICAgICwgSVNfU09NRSAgICAgICA9IFRZUEUgPT0gM1xyXG4gICAgLCBJU19FVkVSWSAgICAgID0gVFlQRSA9PSA0XHJcbiAgICAsIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDZcclxuICAgICwgTk9fSE9MRVMgICAgICA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYO1xyXG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCl7XHJcbiAgICB2YXIgTyAgICAgID0gT2JqZWN0KCQuYXNzZXJ0RGVmaW5lZCgkdGhpcykpXHJcbiAgICAgICwgc2VsZiAgID0gJC5FUzVPYmplY3QoTylcclxuICAgICAgLCBmICAgICAgPSBjdHgoY2FsbGJhY2tmbiwgdGhhdCwgMylcclxuICAgICAgLCBsZW5ndGggPSAkLnRvTGVuZ3RoKHNlbGYubGVuZ3RoKVxyXG4gICAgICAsIGluZGV4ICA9IDBcclxuICAgICAgLCByZXN1bHQgPSBJU19NQVAgPyBBcnJheShsZW5ndGgpIDogSVNfRklMVEVSID8gW10gOiB1bmRlZmluZWRcclxuICAgICAgLCB2YWwsIHJlcztcclxuICAgIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZil7XHJcbiAgICAgIHZhbCA9IHNlbGZbaW5kZXhdO1xyXG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xyXG4gICAgICBpZihUWVBFKXtcclxuICAgICAgICBpZihJU19NQVApcmVzdWx0W2luZGV4XSA9IHJlczsgICAgICAgICAgICAvLyBtYXBcclxuICAgICAgICBlbHNlIGlmKHJlcylzd2l0Y2goVFlQRSl7XHJcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgICAgICAgLy8gc29tZVxyXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgICAgICAgIC8vIGZpbmRcclxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgICAgICAgICAvLyBmaW5kSW5kZXhcclxuICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgICAgICAgICAvLyBmaWx0ZXJcclxuICAgICAgICB9IGVsc2UgaWYoSVNfRVZFUlkpcmV0dXJuIGZhbHNlOyAgICAgICAgICAvLyBldmVyeVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogcmVzdWx0O1xyXG4gIH07XHJcbn07IiwidmFyICQgPSByZXF1aXJlKCcuLyQnKTtcclxuZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbiwgbXNnMSwgbXNnMil7XHJcbiAgaWYoIWNvbmRpdGlvbil0aHJvdyBUeXBlRXJyb3IobXNnMiA/IG1zZzEgKyBtc2cyIDogbXNnMSk7XHJcbn1cclxuYXNzZXJ0LmRlZiA9ICQuYXNzZXJ0RGVmaW5lZDtcclxuYXNzZXJ0LmZuID0gZnVuY3Rpb24oaXQpe1xyXG4gIGlmKCEkLmlzRnVuY3Rpb24oaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XHJcbiAgcmV0dXJuIGl0O1xyXG59O1xyXG5hc3NlcnQub2JqID0gZnVuY3Rpb24oaXQpe1xyXG4gIGlmKCEkLmlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XHJcbiAgcmV0dXJuIGl0O1xyXG59O1xyXG5hc3NlcnQuaW5zdCA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSl7XHJcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSl0aHJvdyBUeXBlRXJyb3IobmFtZSArIFwiOiB1c2UgdGhlICduZXcnIG9wZXJhdG9yIVwiKTtcclxuICByZXR1cm4gaXQ7XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gYXNzZXJ0OyIsInZhciAkICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vJC5lbnVtLWtleXMnKTtcclxuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXtcclxuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4gIHZhciBUID0gT2JqZWN0KCQuYXNzZXJ0RGVmaW5lZCh0YXJnZXQpKVxyXG4gICAgLCBsID0gYXJndW1lbnRzLmxlbmd0aFxyXG4gICAgLCBpID0gMTtcclxuICB3aGlsZShsID4gaSl7XHJcbiAgICB2YXIgUyAgICAgID0gJC5FUzVPYmplY3QoYXJndW1lbnRzW2krK10pXHJcbiAgICAgICwga2V5cyAgID0gZW51bUtleXMoUylcclxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxyXG4gICAgICAsIGogICAgICA9IDBcclxuICAgICAgLCBrZXk7XHJcbiAgICB3aGlsZShsZW5ndGggPiBqKVRba2V5ID0ga2V5c1tqKytdXSA9IFNba2V5XTtcclxuICB9XHJcbiAgcmV0dXJuIFQ7XHJcbn07IiwidmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsIFRBRyAgICAgID0gcmVxdWlyZSgnLi8kLndrcycpKCd0b1N0cmluZ1RhZycpXHJcbiAgLCB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xyXG5mdW5jdGlvbiBjb2YoaXQpe1xyXG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XHJcbn1cclxuY29mLmNsYXNzb2YgPSBmdW5jdGlvbihpdCl7XHJcbiAgdmFyIE8sIFQ7XHJcbiAgcmV0dXJuIGl0ID09IHVuZGVmaW5lZCA/IGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6ICdOdWxsJ1xyXG4gICAgOiB0eXBlb2YgKFQgPSAoTyA9IE9iamVjdChpdCkpW1RBR10pID09ICdzdHJpbmcnID8gVCA6IGNvZihPKTtcclxufTtcclxuY29mLnNldCA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xyXG4gIGlmKGl0ICYmICEkLmhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkkLmhpZGUoaXQsIFRBRywgdGFnKTtcclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSBjb2Y7IiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgY3R4ICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcclxuICAsIHNhZmUgICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpLnNhZmVcclxuICAsIGFzc2VydCAgID0gcmVxdWlyZSgnLi8kLmFzc2VydCcpXHJcbiAgLCBmb3JPZiAgICA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKVxyXG4gICwgc3RlcCAgICAgPSByZXF1aXJlKCcuLyQuaXRlcicpLnN0ZXBcclxuICAsIGhhcyAgICAgID0gJC5oYXNcclxuICAsIHNldCAgICAgID0gJC5zZXRcclxuICAsIGlzT2JqZWN0ID0gJC5pc09iamVjdFxyXG4gICwgaGlkZSAgICAgPSAkLmhpZGVcclxuICAsIGlzRnJvemVuID0gT2JqZWN0LmlzRnJvemVuIHx8ICQuY29yZS5PYmplY3QuaXNGcm96ZW5cclxuICAsIElEICAgICAgID0gc2FmZSgnaWQnKVxyXG4gICwgTzEgICAgICAgPSBzYWZlKCdPMScpXHJcbiAgLCBMQVNUICAgICA9IHNhZmUoJ2xhc3QnKVxyXG4gICwgRklSU1QgICAgPSBzYWZlKCdmaXJzdCcpXHJcbiAgLCBJVEVSICAgICA9IHNhZmUoJ2l0ZXInKVxyXG4gICwgU0laRSAgICAgPSAkLkRFU0MgPyBzYWZlKCdzaXplJykgOiAnc2l6ZSdcclxuICAsIGlkICAgICAgID0gMDtcclxuXHJcbmZ1bmN0aW9uIGZhc3RLZXkoaXQsIGNyZWF0ZSl7XHJcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxyXG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XHJcbiAgLy8gY2FuJ3Qgc2V0IGlkIHRvIGZyb3plbiBvYmplY3RcclxuICBpZihpc0Zyb3plbihpdCkpcmV0dXJuICdGJztcclxuICBpZighaGFzKGl0LCBJRCkpe1xyXG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgaWRcclxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcclxuICAgIC8vIGFkZCBtaXNzaW5nIG9iamVjdCBpZFxyXG4gICAgaGlkZShpdCwgSUQsICsraWQpO1xyXG4gIC8vIHJldHVybiBvYmplY3QgaWQgd2l0aCBwcmVmaXhcclxuICB9IHJldHVybiAnTycgKyBpdFtJRF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEVudHJ5KHRoYXQsIGtleSl7XHJcbiAgLy8gZmFzdCBjYXNlXHJcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpLCBlbnRyeTtcclxuICBpZihpbmRleCAhPSAnRicpcmV0dXJuIHRoYXRbTzFdW2luZGV4XTtcclxuICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcclxuICBmb3IoZW50cnkgPSB0aGF0W0ZJUlNUXTsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XHJcbiAgICBpZihlbnRyeS5rID09IGtleSlyZXR1cm4gZW50cnk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24oTkFNRSwgSVNfTUFQLCBBRERFUil7XHJcbiAgICBmdW5jdGlvbiBDKCl7XHJcbiAgICAgIHZhciB0aGF0ICAgICA9IGFzc2VydC5pbnN0KHRoaXMsIEMsIE5BTUUpXHJcbiAgICAgICAgLCBpdGVyYWJsZSA9IGFyZ3VtZW50c1swXTtcclxuICAgICAgc2V0KHRoYXQsIE8xLCAkLmNyZWF0ZShudWxsKSk7XHJcbiAgICAgIHNldCh0aGF0LCBTSVpFLCAwKTtcclxuICAgICAgc2V0KHRoYXQsIExBU1QsIHVuZGVmaW5lZCk7XHJcbiAgICAgIHNldCh0aGF0LCBGSVJTVCwgdW5kZWZpbmVkKTtcclxuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcclxuICAgIH1cclxuICAgICQubWl4KEMucHJvdG90eXBlLCB7XHJcbiAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxyXG4gICAgICAvLyAyMy4yLjMuMiBTZXQucHJvdG90eXBlLmNsZWFyKClcclxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCl7XHJcbiAgICAgICAgZm9yKHZhciB0aGF0ID0gdGhpcywgZGF0YSA9IHRoYXRbTzFdLCBlbnRyeSA9IHRoYXRbRklSU1RdOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcclxuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xyXG4gICAgICAgICAgaWYoZW50cnkucCllbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoYXRbRklSU1RdID0gdGhhdFtMQVNUXSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGF0W1NJWkVdID0gMDtcclxuICAgICAgfSxcclxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxyXG4gICAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcclxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgICAgdmFyIHRoYXQgID0gdGhpc1xyXG4gICAgICAgICAgLCBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XHJcbiAgICAgICAgaWYoZW50cnkpe1xyXG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uXHJcbiAgICAgICAgICAgICwgcHJldiA9IGVudHJ5LnA7XHJcbiAgICAgICAgICBkZWxldGUgdGhhdFtPMV1bZW50cnkuaV07XHJcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcclxuICAgICAgICAgIGlmKHByZXYpcHJldi5uID0gbmV4dDtcclxuICAgICAgICAgIGlmKG5leHQpbmV4dC5wID0gcHJldjtcclxuICAgICAgICAgIGlmKHRoYXRbRklSU1RdID09IGVudHJ5KXRoYXRbRklSU1RdID0gbmV4dDtcclxuICAgICAgICAgIGlmKHRoYXRbTEFTVF0gPT0gZW50cnkpdGhhdFtMQVNUXSA9IHByZXY7XHJcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XHJcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcclxuICAgICAgfSxcclxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXHJcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxyXG4gICAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyosIHRoYXQgPSB1bmRlZmluZWQgKi8pe1xyXG4gICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50c1sxXSwgMylcclxuICAgICAgICAgICwgZW50cnk7XHJcbiAgICAgICAgd2hpbGUoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzW0ZJUlNUXSl7XHJcbiAgICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xyXG4gICAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XHJcbiAgICAgICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIDIzLjEuMy43IE1hcC5wcm90b3R5cGUuaGFzKGtleSlcclxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXHJcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSl7XHJcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodGhpcywga2V5KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZigkLkRFU0MpJC5zZXREZXNjKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBhc3NlcnQuZGVmKHRoaXNbU0laRV0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBDO1xyXG4gIH0sXHJcbiAgZGVmOiBmdW5jdGlvbih0aGF0LCBrZXksIHZhbHVlKXtcclxuICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSlcclxuICAgICAgLCBwcmV2LCBpbmRleDtcclxuICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxyXG4gICAgaWYoZW50cnkpe1xyXG4gICAgICBlbnRyeS52ID0gdmFsdWU7XHJcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGF0W0xBU1RdID0gZW50cnkgPSB7XHJcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XHJcbiAgICAgICAgazoga2V5LCAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGtleVxyXG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxyXG4gICAgICAgIHA6IHByZXYgPSB0aGF0W0xBU1RdLCAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxyXG4gICAgICAgIG46IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAvLyA8LSBuZXh0IGVudHJ5XHJcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcclxuICAgICAgfTtcclxuICAgICAgaWYoIXRoYXRbRklSU1RdKXRoYXRbRklSU1RdID0gZW50cnk7XHJcbiAgICAgIGlmKHByZXYpcHJldi5uID0gZW50cnk7XHJcbiAgICAgIHRoYXRbU0laRV0rKztcclxuICAgICAgLy8gYWRkIHRvIGluZGV4XHJcbiAgICAgIGlmKGluZGV4ICE9ICdGJyl0aGF0W08xXVtpbmRleF0gPSBlbnRyeTtcclxuICAgIH0gcmV0dXJuIHRoYXQ7XHJcbiAgfSxcclxuICBnZXRFbnRyeTogZ2V0RW50cnksXHJcbiAgLy8gYWRkIC5rZXlzLCAudmFsdWVzLCAuZW50cmllcywgW0BAaXRlcmF0b3JdXHJcbiAgLy8gMjMuMS4zLjQsIDIzLjEuMy44LCAyMy4xLjMuMTEsIDIzLjEuMy4xMiwgMjMuMi4zLjUsIDIzLjIuMy44LCAyMy4yLjMuMTAsIDIzLjIuMy4xMVxyXG4gIHNldEl0ZXI6IGZ1bmN0aW9uKEMsIE5BTUUsIElTX01BUCl7XHJcbiAgICByZXF1aXJlKCcuLyQuaXRlci1kZWZpbmUnKShDLCBOQU1FLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XHJcbiAgICAgIHNldCh0aGlzLCBJVEVSLCB7bzogaXRlcmF0ZWQsIGs6IGtpbmR9KTtcclxuICAgIH0sIGZ1bmN0aW9uKCl7XHJcbiAgICAgIHZhciBpdGVyICA9IHRoaXNbSVRFUl1cclxuICAgICAgICAsIGtpbmQgID0gaXRlci5rXHJcbiAgICAgICAgLCBlbnRyeSA9IGl0ZXIubDtcclxuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XHJcbiAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xyXG4gICAgICAvLyBnZXQgbmV4dCBlbnRyeVxyXG4gICAgICBpZighaXRlci5vIHx8ICEoaXRlci5sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiBpdGVyLm9bRklSU1RdKSl7XHJcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cclxuICAgICAgICBpdGVyLm8gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmV0dXJuIHN0ZXAoMSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gcmV0dXJuIHN0ZXAgYnkga2luZFxyXG4gICAgICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xyXG4gICAgICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIGVudHJ5LnYpO1xyXG4gICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xyXG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycgLCAhSVNfTUFQLCB0cnVlKTtcclxuICB9XHJcbn07IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxyXG52YXIgJGRlZiAgPSByZXF1aXJlKCcuLyQuZGVmJylcclxuICAsIGZvck9mID0gcmVxdWlyZSgnLi8kLmZvci1vZicpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUpe1xyXG4gICRkZWYoJGRlZi5QLCBOQU1FLCB7XHJcbiAgICB0b0pTT046IGZ1bmN0aW9uIHRvSlNPTigpe1xyXG4gICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgIGZvck9mKHRoaXMsIGZhbHNlLCBhcnIucHVzaCwgYXJyKTtcclxuICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuICB9KTtcclxufTsiLCIndXNlIHN0cmljdCc7XHJcbnZhciAkICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgc2FmZSAgICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpLnNhZmVcclxuICAsIGFzc2VydCAgICA9IHJlcXVpcmUoJy4vJC5hc3NlcnQnKVxyXG4gICwgZm9yT2YgICAgID0gcmVxdWlyZSgnLi8kLmZvci1vZicpXHJcbiAgLCBfaGFzICAgICAgPSAkLmhhc1xyXG4gICwgaXNPYmplY3QgID0gJC5pc09iamVjdFxyXG4gICwgaGlkZSAgICAgID0gJC5oaWRlXHJcbiAgLCBpc0Zyb3plbiAgPSBPYmplY3QuaXNGcm96ZW4gfHwgJC5jb3JlLk9iamVjdC5pc0Zyb3plblxyXG4gICwgaWQgICAgICAgID0gMFxyXG4gICwgSUQgICAgICAgID0gc2FmZSgnaWQnKVxyXG4gICwgV0VBSyAgICAgID0gc2FmZSgnd2VhaycpXHJcbiAgLCBMRUFLICAgICAgPSBzYWZlKCdsZWFrJylcclxuICAsIG1ldGhvZCAgICA9IHJlcXVpcmUoJy4vJC5hcnJheS1tZXRob2RzJylcclxuICAsIGZpbmQgICAgICA9IG1ldGhvZCg1KVxyXG4gICwgZmluZEluZGV4ID0gbWV0aG9kKDYpO1xyXG5mdW5jdGlvbiBmaW5kRnJvemVuKHN0b3JlLCBrZXkpe1xyXG4gIHJldHVybiBmaW5kKHN0b3JlLmFycmF5LCBmdW5jdGlvbihpdCl7XHJcbiAgICByZXR1cm4gaXRbMF0gPT09IGtleTtcclxuICB9KTtcclxufVxyXG4vLyBmYWxsYmFjayBmb3IgZnJvemVuIGtleXNcclxuZnVuY3Rpb24gbGVha1N0b3JlKHRoYXQpe1xyXG4gIHJldHVybiB0aGF0W0xFQUtdIHx8IGhpZGUodGhhdCwgTEVBSywge1xyXG4gICAgYXJyYXk6IFtdLFxyXG4gICAgZ2V0OiBmdW5jdGlvbihrZXkpe1xyXG4gICAgICB2YXIgZW50cnkgPSBmaW5kRnJvemVuKHRoaXMsIGtleSk7XHJcbiAgICAgIGlmKGVudHJ5KXJldHVybiBlbnRyeVsxXTtcclxuICAgIH0sXHJcbiAgICBoYXM6IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgIHJldHVybiAhIWZpbmRGcm96ZW4odGhpcywga2V5KTtcclxuICAgIH0sXHJcbiAgICBzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xyXG4gICAgICB2YXIgZW50cnkgPSBmaW5kRnJvemVuKHRoaXMsIGtleSk7XHJcbiAgICAgIGlmKGVudHJ5KWVudHJ5WzFdID0gdmFsdWU7XHJcbiAgICAgIGVsc2UgdGhpcy5hcnJheS5wdXNoKFtrZXksIHZhbHVlXSk7XHJcbiAgICB9LFxyXG4gICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgIHZhciBpbmRleCA9IGZpbmRJbmRleCh0aGlzLmFycmF5LCBmdW5jdGlvbihpdCl7XHJcbiAgICAgICAgcmV0dXJuIGl0WzBdID09PSBrZXk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZih+aW5kZXgpdGhpcy5hcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICByZXR1cm4gISF+aW5kZXg7XHJcbiAgICB9XHJcbiAgfSlbTEVBS107XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbihOQU1FLCBJU19NQVAsIEFEREVSKXtcclxuICAgIGZ1bmN0aW9uIEMoKXtcclxuICAgICAgJC5zZXQoYXNzZXJ0Lmluc3QodGhpcywgQywgTkFNRSksIElELCBpZCsrKTtcclxuICAgICAgdmFyIGl0ZXJhYmxlID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhpc1tBRERFUl0sIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgJC5taXgoQy5wcm90b3R5cGUsIHtcclxuICAgICAgLy8gMjMuMy4zLjIgV2Vha01hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcclxuICAgICAgLy8gMjMuNC4zLjMgV2Vha1NldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxyXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcclxuICAgICAgICBpZighaXNPYmplY3Qoa2V5KSlyZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYoaXNGcm96ZW4oa2V5KSlyZXR1cm4gbGVha1N0b3JlKHRoaXMpWydkZWxldGUnXShrZXkpO1xyXG4gICAgICAgIHJldHVybiBfaGFzKGtleSwgV0VBSykgJiYgX2hhcyhrZXlbV0VBS10sIHRoaXNbSURdKSAmJiBkZWxldGUga2V5W1dFQUtdW3RoaXNbSURdXTtcclxuICAgICAgfSxcclxuICAgICAgLy8gMjMuMy4zLjQgV2Vha01hcC5wcm90b3R5cGUuaGFzKGtleSlcclxuICAgICAgLy8gMjMuNC4zLjQgV2Vha1NldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxyXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpe1xyXG4gICAgICAgIGlmKCFpc09iamVjdChrZXkpKXJldHVybiBmYWxzZTtcclxuICAgICAgICBpZihpc0Zyb3plbihrZXkpKXJldHVybiBsZWFrU3RvcmUodGhpcykuaGFzKGtleSk7XHJcbiAgICAgICAgcmV0dXJuIF9oYXMoa2V5LCBXRUFLKSAmJiBfaGFzKGtleVtXRUFLXSwgdGhpc1tJRF0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBDO1xyXG4gIH0sXHJcbiAgZGVmOiBmdW5jdGlvbih0aGF0LCBrZXksIHZhbHVlKXtcclxuICAgIGlmKGlzRnJvemVuKGFzc2VydC5vYmooa2V5KSkpe1xyXG4gICAgICBsZWFrU3RvcmUodGhhdCkuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX2hhcyhrZXksIFdFQUspIHx8IGhpZGUoa2V5LCBXRUFLLCB7fSk7XHJcbiAgICAgIGtleVtXRUFLXVt0aGF0W0lEXV0gPSB2YWx1ZTtcclxuICAgIH0gcmV0dXJuIHRoYXQ7XHJcbiAgfSxcclxuICBsZWFrU3RvcmU6IGxlYWtTdG9yZSxcclxuICBXRUFLOiBXRUFLLFxyXG4gIElEOiBJRFxyXG59OyIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsICRkZWYgID0gcmVxdWlyZSgnLi8kLmRlZicpXHJcbiAgLCBCVUdHWSA9IHJlcXVpcmUoJy4vJC5pdGVyJykuQlVHR1lcclxuICAsIGZvck9mID0gcmVxdWlyZSgnLi8kLmZvci1vZicpXHJcbiAgLCBzcGVjaWVzID0gcmVxdWlyZSgnLi8kLnNwZWNpZXMnKVxyXG4gICwgYXNzZXJ0SW5zdGFuY2UgPSByZXF1aXJlKCcuLyQuYXNzZXJ0JykuaW5zdDtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSwgbWV0aG9kcywgY29tbW9uLCBJU19NQVAsIElTX1dFQUspe1xyXG4gIHZhciBCYXNlICA9ICQuZ1tOQU1FXVxyXG4gICAgLCBDICAgICA9IEJhc2VcclxuICAgICwgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnXHJcbiAgICAsIHByb3RvID0gQyAmJiBDLnByb3RvdHlwZVxyXG4gICAgLCBPICAgICA9IHt9O1xyXG4gIGZ1bmN0aW9uIGZpeE1ldGhvZChLRVksIENIQUlOKXtcclxuICAgIHZhciBtZXRob2QgPSBwcm90b1tLRVldO1xyXG4gICAgaWYoJC5GVylwcm90b1tLRVldID0gZnVuY3Rpb24oYSwgYil7XHJcbiAgICAgIHZhciByZXN1bHQgPSBtZXRob2QuY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEsIGIpO1xyXG4gICAgICByZXR1cm4gQ0hBSU4gPyB0aGlzIDogcmVzdWx0O1xyXG4gICAgfTtcclxuICB9XHJcbiAgaWYoISQuaXNGdW5jdGlvbihDKSB8fCAhKElTX1dFQUsgfHwgIUJVR0dZICYmIHByb3RvLmZvckVhY2ggJiYgcHJvdG8uZW50cmllcykpe1xyXG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcclxuICAgIEMgPSBjb21tb24uZ2V0Q29uc3RydWN0b3IoTkFNRSwgSVNfTUFQLCBBRERFUik7XHJcbiAgICAkLm1peChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHZhciBpbnN0ICA9IG5ldyBDXHJcbiAgICAgICwgY2hhaW4gPSBpbnN0W0FEREVSXShJU19XRUFLID8ge30gOiAtMCwgMSlcclxuICAgICAgLCBidWdneVplcm87XHJcbiAgICAvLyB3cmFwIGZvciBpbml0IGNvbGxlY3Rpb25zIGZyb20gaXRlcmFibGVcclxuICAgIGlmKCFyZXF1aXJlKCcuLyQuaXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXsgbmV3IEMoaXRlcik7IH0pKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcclxuICAgICAgQyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgYXNzZXJ0SW5zdGFuY2UodGhpcywgQywgTkFNRSk7XHJcbiAgICAgICAgdmFyIHRoYXQgICAgID0gbmV3IEJhc2VcclxuICAgICAgICAgICwgaXRlcmFibGUgPSBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcclxuICAgICAgICByZXR1cm4gdGhhdDtcclxuICAgICAgfTtcclxuICAgICAgQy5wcm90b3R5cGUgPSBwcm90bztcclxuICAgICAgaWYoJC5GVylwcm90by5jb25zdHJ1Y3RvciA9IEM7XHJcbiAgICB9XHJcbiAgICBJU19XRUFLIHx8IGluc3QuZm9yRWFjaChmdW5jdGlvbih2YWwsIGtleSl7XHJcbiAgICAgIGJ1Z2d5WmVybyA9IDEgLyBrZXkgPT09IC1JbmZpbml0eTtcclxuICAgIH0pO1xyXG4gICAgLy8gZml4IGNvbnZlcnRpbmcgLTAga2V5IHRvICswXHJcbiAgICBpZihidWdneVplcm8pe1xyXG4gICAgICBmaXhNZXRob2QoJ2RlbGV0ZScpO1xyXG4gICAgICBmaXhNZXRob2QoJ2hhcycpO1xyXG4gICAgICBJU19NQVAgJiYgZml4TWV0aG9kKCdnZXQnKTtcclxuICAgIH1cclxuICAgIC8vICsgZml4IC5hZGQgJiAuc2V0IGZvciBjaGFpbmluZ1xyXG4gICAgaWYoYnVnZ3laZXJvIHx8IGNoYWluICE9PSBpbnN0KWZpeE1ldGhvZChBRERFUiwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICByZXF1aXJlKCcuLyQuY29mJykuc2V0KEMsIE5BTUUpO1xyXG5cclxuICBPW05BTUVdID0gQztcclxuICAkZGVmKCRkZWYuRyArICRkZWYuVyArICRkZWYuRiAqIChDICE9IEJhc2UpLCBPKTtcclxuICBzcGVjaWVzKEMpO1xyXG4gIHNwZWNpZXMoJC5jb3JlW05BTUVdKTsgLy8gZm9yIHdyYXBwZXJcclxuXHJcbiAgaWYoIUlTX1dFQUspY29tbW9uLnNldEl0ZXIoQywgTkFNRSwgSVNfTUFQKTtcclxuXHJcbiAgcmV0dXJuIEM7XHJcbn07IiwiLy8gT3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXHJcbnZhciBhc3NlcnRGdW5jdGlvbiA9IHJlcXVpcmUoJy4vJC5hc3NlcnQnKS5mbjtcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcclxuICBhc3NlcnRGdW5jdGlvbihmbik7XHJcbiAgaWYofmxlbmd0aCAmJiB0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xyXG4gIHN3aXRjaChsZW5ndGgpe1xyXG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XHJcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xyXG4gICAgfTtcclxuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcclxuICAgIH07XHJcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcclxuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XHJcbiAgICB9O1xyXG4gIH0gcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xyXG4gICAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcclxuICAgIH07XHJcbn07IiwidmFyICQgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgZ2xvYmFsICAgICA9ICQuZ1xyXG4gICwgY29yZSAgICAgICA9ICQuY29yZVxyXG4gICwgaXNGdW5jdGlvbiA9ICQuaXNGdW5jdGlvbjtcclxuZnVuY3Rpb24gY3R4KGZuLCB0aGF0KXtcclxuICByZXR1cm4gZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xyXG4gIH07XHJcbn1cclxuZ2xvYmFsLmNvcmUgPSBjb3JlO1xyXG4vLyB0eXBlIGJpdG1hcFxyXG4kZGVmLkYgPSAxOyAgLy8gZm9yY2VkXHJcbiRkZWYuRyA9IDI7ICAvLyBnbG9iYWxcclxuJGRlZi5TID0gNDsgIC8vIHN0YXRpY1xyXG4kZGVmLlAgPSA4OyAgLy8gcHJvdG9cclxuJGRlZi5CID0gMTY7IC8vIGJpbmRcclxuJGRlZi5XID0gMzI7IC8vIHdyYXBcclxuZnVuY3Rpb24gJGRlZih0eXBlLCBuYW1lLCBzb3VyY2Upe1xyXG4gIHZhciBrZXksIG93biwgb3V0LCBleHBcclxuICAgICwgaXNHbG9iYWwgPSB0eXBlICYgJGRlZi5HXHJcbiAgICAsIHRhcmdldCAgID0gaXNHbG9iYWwgPyBnbG9iYWwgOiB0eXBlICYgJGRlZi5TXHJcbiAgICAgICAgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KS5wcm90b3R5cGVcclxuICAgICwgZXhwb3J0cyAgPSBpc0dsb2JhbCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xyXG4gIGlmKGlzR2xvYmFsKXNvdXJjZSA9IG5hbWU7XHJcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xyXG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXHJcbiAgICBvd24gPSAhKHR5cGUgJiAkZGVmLkYpICYmIHRhcmdldCAmJiBrZXkgaW4gdGFyZ2V0O1xyXG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcclxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XHJcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxyXG4gICAgaWYodHlwZSAmICRkZWYuQiAmJiBvd24pZXhwID0gY3R4KG91dCwgZ2xvYmFsKTtcclxuICAgIGVsc2UgZXhwID0gdHlwZSAmICRkZWYuUCAmJiBpc0Z1bmN0aW9uKG91dCkgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcclxuICAgIC8vIGV4dGVuZCBnbG9iYWxcclxuICAgIGlmKHRhcmdldCAmJiAhb3duKXtcclxuICAgICAgaWYoaXNHbG9iYWwpdGFyZ2V0W2tleV0gPSBvdXQ7XHJcbiAgICAgIGVsc2UgZGVsZXRlIHRhcmdldFtrZXldICYmICQuaGlkZSh0YXJnZXQsIGtleSwgb3V0KTtcclxuICAgIH1cclxuICAgIC8vIGV4cG9ydFxyXG4gICAgaWYoZXhwb3J0c1trZXldICE9IG91dCkkLmhpZGUoZXhwb3J0cywga2V5LCBleHApO1xyXG4gIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9ICRkZWY7IiwidmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsIGRvY3VtZW50ID0gJC5nLmRvY3VtZW50XHJcbiAgLCBpc09iamVjdCA9ICQuaXNPYmplY3RcclxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcclxuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcclxuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xyXG59OyIsInZhciAkID0gcmVxdWlyZSgnLi8kJyk7XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xyXG4gIHZhciBrZXlzICAgICAgID0gJC5nZXRLZXlzKGl0KVxyXG4gICAgLCBnZXREZXNjICAgID0gJC5nZXREZXNjXHJcbiAgICAsIGdldFN5bWJvbHMgPSAkLmdldFN5bWJvbHM7XHJcbiAgaWYoZ2V0U3ltYm9scykkLmVhY2guY2FsbChnZXRTeW1ib2xzKGl0KSwgZnVuY3Rpb24oa2V5KXtcclxuICAgIGlmKGdldERlc2MoaXQsIGtleSkuZW51bWVyYWJsZSlrZXlzLnB1c2goa2V5KTtcclxuICB9KTtcclxuICByZXR1cm4ga2V5cztcclxufTsiLCJ2YXIgY3R4ICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxyXG4gICwgZ2V0ICA9IHJlcXVpcmUoJy4vJC5pdGVyJykuZ2V0XHJcbiAgLCBjYWxsID0gcmVxdWlyZSgnLi8kLml0ZXItY2FsbCcpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCl7XHJcbiAgdmFyIGl0ZXJhdG9yID0gZ2V0KGl0ZXJhYmxlKVxyXG4gICAgLCBmICAgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxyXG4gICAgLCBzdGVwO1xyXG4gIHdoaWxlKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSl7XHJcbiAgICBpZihjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKSA9PT0gZmFsc2Upe1xyXG4gICAgICByZXR1cm4gY2FsbC5jbG9zZShpdGVyYXRvcik7XHJcbiAgICB9XHJcbiAgfVxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oJCl7XHJcbiAgJC5GVyAgID0gdHJ1ZTtcclxuICAkLnBhdGggPSAkLmc7XHJcbiAgcmV0dXJuICQ7XHJcbn07IiwiLy8gRmFzdCBhcHBseVxyXG4vLyBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XHJcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xyXG4gIHN3aXRjaChhcmdzLmxlbmd0aCl7XHJcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcclxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcclxuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcclxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcclxuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcclxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcclxuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcclxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcclxuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcclxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcclxuICAgIGNhc2UgNTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSwgYXJnc1s0XSlcclxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdLCBhcmdzWzRdKTtcclxuICB9IHJldHVybiAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XHJcbn07IiwidmFyIGFzc2VydE9iamVjdCA9IHJlcXVpcmUoJy4vJC5hc3NlcnQnKS5vYmo7XHJcbmZ1bmN0aW9uIGNsb3NlKGl0ZXJhdG9yKXtcclxuICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xyXG4gIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFzc2VydE9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xyXG59XHJcbmZ1bmN0aW9uIGNhbGwoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYXNzZXJ0T2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xyXG4gIH0gY2F0Y2goZSl7XHJcbiAgICBjbG9zZShpdGVyYXRvcik7XHJcbiAgICB0aHJvdyBlO1xyXG4gIH1cclxufVxyXG5jYWxsLmNsb3NlID0gY2xvc2U7XHJcbm1vZHVsZS5leHBvcnRzID0gY2FsbDsiLCJ2YXIgJGRlZiAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmRlZicpXHJcbiAgLCAkICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgY29mICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmNvZicpXHJcbiAgLCAkaXRlciAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaXRlcicpXHJcbiAgLCBTWU1CT0xfSVRFUkFUT1IgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcclxuICAsIEZGX0lURVJBVE9SICAgICA9ICdAQGl0ZXJhdG9yJ1xyXG4gICwgS0VZUyAgICAgICAgICAgID0gJ2tleXMnXHJcbiAgLCBWQUxVRVMgICAgICAgICAgPSAndmFsdWVzJ1xyXG4gICwgSXRlcmF0b3JzICAgICAgID0gJGl0ZXIuSXRlcmF0b3JzO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFKXtcclxuICAkaXRlci5jcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xyXG4gIGZ1bmN0aW9uIGNyZWF0ZU1ldGhvZChraW5kKXtcclxuICAgIGZ1bmN0aW9uICQkKHRoYXQpe1xyXG4gICAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoYXQsIGtpbmQpO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoKGtpbmQpe1xyXG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiAkJCh0aGlzKTsgfTtcclxuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICQkKHRoaXMpOyB9O1xyXG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gJCQodGhpcyk7IH07XHJcbiAgfVxyXG4gIHZhciBUQUcgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xyXG4gICAgLCBwcm90byAgICA9IEJhc2UucHJvdG90eXBlXHJcbiAgICAsIF9uYXRpdmUgID0gcHJvdG9bU1lNQk9MX0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxyXG4gICAgLCBfZGVmYXVsdCA9IF9uYXRpdmUgfHwgY3JlYXRlTWV0aG9kKERFRkFVTFQpXHJcbiAgICAsIG1ldGhvZHMsIGtleTtcclxuICAvLyBGaXggbmF0aXZlXHJcbiAgaWYoX25hdGl2ZSl7XHJcbiAgICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSAkLmdldFByb3RvKF9kZWZhdWx0LmNhbGwobmV3IEJhc2UpKTtcclxuICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcclxuICAgIGNvZi5zZXQoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XHJcbiAgICAvLyBGRiBmaXhcclxuICAgIGlmKCQuRlcgJiYgJC5oYXMocHJvdG8sIEZGX0lURVJBVE9SKSkkaXRlci5zZXQoSXRlcmF0b3JQcm90b3R5cGUsICQudGhhdCk7XHJcbiAgfVxyXG4gIC8vIERlZmluZSBpdGVyYXRvclxyXG4gIGlmKCQuRlcpJGl0ZXIuc2V0KHByb3RvLCBfZGVmYXVsdCk7XHJcbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxyXG4gIEl0ZXJhdG9yc1tOQU1FXSA9IF9kZWZhdWx0O1xyXG4gIEl0ZXJhdG9yc1tUQUddICA9ICQudGhhdDtcclxuICBpZihERUZBVUxUKXtcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgICAgICAgID8gX2RlZmF1bHQgOiBjcmVhdGVNZXRob2QoS0VZUyksXHJcbiAgICAgIHZhbHVlczogIERFRkFVTFQgPT0gVkFMVUVTID8gX2RlZmF1bHQgOiBjcmVhdGVNZXRob2QoVkFMVUVTKSxcclxuICAgICAgZW50cmllczogREVGQVVMVCAhPSBWQUxVRVMgPyBfZGVmYXVsdCA6IGNyZWF0ZU1ldGhvZCgnZW50cmllcycpXHJcbiAgICB9O1xyXG4gICAgaWYoRk9SQ0UpZm9yKGtleSBpbiBtZXRob2RzKXtcclxuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKSQuaGlkZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xyXG4gICAgfSBlbHNlICRkZWYoJGRlZi5QICsgJGRlZi5GICogJGl0ZXIuQlVHR1ksIE5BTUUsIG1ldGhvZHMpO1xyXG4gIH1cclxufTsiLCJ2YXIgU1lNQk9MX0lURVJBVE9SID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXHJcbiAgLCBTQUZFX0NMT1NJTkcgICAgPSBmYWxzZTtcclxudHJ5IHtcclxuICB2YXIgcml0ZXIgPSBbN11bU1lNQk9MX0lURVJBVE9SXSgpO1xyXG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XHJcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XHJcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcclxuICBpZighU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcclxuICB2YXIgc2FmZSA9IGZhbHNlO1xyXG4gIHRyeSB7XHJcbiAgICB2YXIgYXJyICA9IFs3XVxyXG4gICAgICAsIGl0ZXIgPSBhcnJbU1lNQk9MX0lURVJBVE9SXSgpO1xyXG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgc2FmZSA9IHRydWU7IH07XHJcbiAgICBhcnJbU1lNQk9MX0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xyXG4gICAgZXhlYyhhcnIpO1xyXG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cclxuICByZXR1cm4gc2FmZTtcclxufTsiLCIndXNlIHN0cmljdCc7XHJcbnZhciAkICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCBjb2YgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5jb2YnKVxyXG4gICwgYXNzZXJ0T2JqZWN0ICAgICAgPSByZXF1aXJlKCcuLyQuYXNzZXJ0Jykub2JqXHJcbiAgLCBTWU1CT0xfSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxyXG4gICwgRkZfSVRFUkFUT1IgICAgICAgPSAnQEBpdGVyYXRvcidcclxuICAsIEl0ZXJhdG9ycyAgICAgICAgID0ge31cclxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XHJcbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXHJcbnNldEl0ZXJhdG9yKEl0ZXJhdG9yUHJvdG90eXBlLCAkLnRoYXQpO1xyXG5mdW5jdGlvbiBzZXRJdGVyYXRvcihPLCB2YWx1ZSl7XHJcbiAgJC5oaWRlKE8sIFNZTUJPTF9JVEVSQVRPUiwgdmFsdWUpO1xyXG4gIC8vIEFkZCBpdGVyYXRvciBmb3IgRkYgaXRlcmF0b3IgcHJvdG9jb2xcclxuICBpZihGRl9JVEVSQVRPUiBpbiBbXSkkLmhpZGUoTywgRkZfSVRFUkFUT1IsIHZhbHVlKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxyXG4gIEJVR0dZOiAna2V5cycgaW4gW10gJiYgISgnbmV4dCcgaW4gW10ua2V5cygpKSxcclxuICBJdGVyYXRvcnM6IEl0ZXJhdG9ycyxcclxuICBzdGVwOiBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XHJcbiAgICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcclxuICB9LFxyXG4gIGlzOiBmdW5jdGlvbihpdCl7XHJcbiAgICB2YXIgTyAgICAgID0gT2JqZWN0KGl0KVxyXG4gICAgICAsIFN5bWJvbCA9ICQuZy5TeW1ib2xcclxuICAgICAgLCBTWU0gICAgPSBTeW1ib2wgJiYgU3ltYm9sLml0ZXJhdG9yIHx8IEZGX0lURVJBVE9SO1xyXG4gICAgcmV0dXJuIFNZTSBpbiBPIHx8IFNZTUJPTF9JVEVSQVRPUiBpbiBPIHx8ICQuaGFzKEl0ZXJhdG9ycywgY29mLmNsYXNzb2YoTykpO1xyXG4gIH0sXHJcbiAgZ2V0OiBmdW5jdGlvbihpdCl7XHJcbiAgICB2YXIgU3ltYm9sICA9ICQuZy5TeW1ib2xcclxuICAgICAgLCBleHQgICAgID0gaXRbU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvciB8fCBGRl9JVEVSQVRPUl1cclxuICAgICAgLCBnZXRJdGVyID0gZXh0IHx8IGl0W1NZTUJPTF9JVEVSQVRPUl0gfHwgSXRlcmF0b3JzW2NvZi5jbGFzc29mKGl0KV07XHJcbiAgICByZXR1cm4gYXNzZXJ0T2JqZWN0KGdldEl0ZXIuY2FsbChpdCkpO1xyXG4gIH0sXHJcbiAgc2V0OiBzZXRJdGVyYXRvcixcclxuICBjcmVhdGU6IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0LCBwcm90byl7XHJcbiAgICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSAkLmNyZWF0ZShwcm90byB8fCBJdGVyYXRvclByb3RvdHlwZSwge25leHQ6ICQuZGVzYygxLCBuZXh0KX0pO1xyXG4gICAgY29mLnNldChDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcclxuICB9XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgZ2xvYmFsID0gdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKVxyXG4gICwgY29yZSAgID0ge31cclxuICAsIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5XHJcbiAgLCBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5XHJcbiAgLCBjZWlsICA9IE1hdGguY2VpbFxyXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yXHJcbiAgLCBtYXggICA9IE1hdGgubWF4XHJcbiAgLCBtaW4gICA9IE1hdGgubWluO1xyXG4vLyBUaGUgZW5naW5lIHdvcmtzIGZpbmUgd2l0aCBkZXNjcmlwdG9ycz8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eS5cclxudmFyIERFU0MgPSAhIWZ1bmN0aW9uKCl7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gMjsgfX0pLmEgPT0gMjtcclxuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XHJcbn0oKTtcclxudmFyIGhpZGUgPSBjcmVhdGVEZWZpbmVyKDEpO1xyXG4vLyA3LjEuNCBUb0ludGVnZXJcclxuZnVuY3Rpb24gdG9JbnRlZ2VyKGl0KXtcclxuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcclxufVxyXG5mdW5jdGlvbiBkZXNjKGJpdG1hcCwgdmFsdWUpe1xyXG4gIHJldHVybiB7XHJcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXHJcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXHJcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXHJcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXHJcbiAgfTtcclxufVxyXG5mdW5jdGlvbiBzaW1wbGVTZXQob2JqZWN0LCBrZXksIHZhbHVlKXtcclxuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xyXG4gIHJldHVybiBvYmplY3Q7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlRGVmaW5lcihiaXRtYXApe1xyXG4gIHJldHVybiBERVNDID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcclxuICAgIHJldHVybiAkLnNldERlc2Mob2JqZWN0LCBrZXksIGRlc2MoYml0bWFwLCB2YWx1ZSkpO1xyXG4gIH0gOiBzaW1wbGVTZXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzT2JqZWN0KGl0KXtcclxuICByZXR1cm4gaXQgIT09IG51bGwgJiYgKHR5cGVvZiBpdCA9PSAnb2JqZWN0JyB8fCB0eXBlb2YgaXQgPT0gJ2Z1bmN0aW9uJyk7XHJcbn1cclxuZnVuY3Rpb24gaXNGdW5jdGlvbihpdCl7XHJcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnZnVuY3Rpb24nO1xyXG59XHJcbmZ1bmN0aW9uIGFzc2VydERlZmluZWQoaXQpe1xyXG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XHJcbiAgcmV0dXJuIGl0O1xyXG59XHJcblxyXG52YXIgJCA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmZ3Jykoe1xyXG4gIGc6IGdsb2JhbCxcclxuICBjb3JlOiBjb3JlLFxyXG4gIGh0bWw6IGdsb2JhbC5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXHJcbiAgLy8gaHR0cDovL2pzcGVyZi5jb20vY29yZS1qcy1pc29iamVjdFxyXG4gIGlzT2JqZWN0OiAgIGlzT2JqZWN0LFxyXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXHJcbiAgaXQ6IGZ1bmN0aW9uKGl0KXtcclxuICAgIHJldHVybiBpdDtcclxuICB9LFxyXG4gIHRoYXQ6IGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9LFxyXG4gIC8vIDcuMS40IFRvSW50ZWdlclxyXG4gIHRvSW50ZWdlcjogdG9JbnRlZ2VyLFxyXG4gIC8vIDcuMS4xNSBUb0xlbmd0aFxyXG4gIHRvTGVuZ3RoOiBmdW5jdGlvbihpdCl7XHJcbiAgICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxyXG4gIH0sXHJcbiAgdG9JbmRleDogZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XHJcbiAgICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XHJcbiAgICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcclxuICB9LFxyXG4gIGhhczogZnVuY3Rpb24oaXQsIGtleSl7XHJcbiAgICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcclxuICB9LFxyXG4gIGNyZWF0ZTogICAgIE9iamVjdC5jcmVhdGUsXHJcbiAgZ2V0UHJvdG86ICAgT2JqZWN0LmdldFByb3RvdHlwZU9mLFxyXG4gIERFU0M6ICAgICAgIERFU0MsXHJcbiAgZGVzYzogICAgICAgZGVzYyxcclxuICBnZXREZXNjOiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxyXG4gIHNldERlc2M6ICAgIGRlZmluZVByb3BlcnR5LFxyXG4gIHNldERlc2NzOiAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzLFxyXG4gIGdldEtleXM6ICAgIE9iamVjdC5rZXlzLFxyXG4gIGdldE5hbWVzOiAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLFxyXG4gIGdldFN5bWJvbHM6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXHJcbiAgYXNzZXJ0RGVmaW5lZDogYXNzZXJ0RGVmaW5lZCxcclxuICAvLyBEdW1teSwgZml4IGZvciBub3QgYXJyYXktbGlrZSBFUzMgc3RyaW5nIGluIGVzNSBtb2R1bGVcclxuICBFUzVPYmplY3Q6IE9iamVjdCxcclxuICB0b09iamVjdDogZnVuY3Rpb24oaXQpe1xyXG4gICAgcmV0dXJuICQuRVM1T2JqZWN0KGFzc2VydERlZmluZWQoaXQpKTtcclxuICB9LFxyXG4gIGhpZGU6IGhpZGUsXHJcbiAgZGVmOiBjcmVhdGVEZWZpbmVyKDApLFxyXG4gIHNldDogZ2xvYmFsLlN5bWJvbCA/IHNpbXBsZVNldCA6IGhpZGUsXHJcbiAgbWl4OiBmdW5jdGlvbih0YXJnZXQsIHNyYyl7XHJcbiAgICBmb3IodmFyIGtleSBpbiBzcmMpaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xyXG4gICAgcmV0dXJuIHRhcmdldDtcclxuICB9LFxyXG4gIGVhY2g6IFtdLmZvckVhY2hcclxufSk7XHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbmlmKHR5cGVvZiBfX2UgIT0gJ3VuZGVmaW5lZCcpX19lID0gY29yZTtcclxuaWYodHlwZW9mIF9fZyAhPSAndW5kZWZpbmVkJylfX2cgPSBnbG9iYWw7IiwidmFyICQgPSByZXF1aXJlKCcuLyQnKTtcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGVsKXtcclxuICB2YXIgTyAgICAgID0gJC50b09iamVjdChvYmplY3QpXHJcbiAgICAsIGtleXMgICA9ICQuZ2V0S2V5cyhPKVxyXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxyXG4gICAgLCBpbmRleCAgPSAwXHJcbiAgICAsIGtleTtcclxuICB3aGlsZShsZW5ndGggPiBpbmRleClpZihPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClyZXR1cm4ga2V5O1xyXG59OyIsInZhciAkICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgYXNzZXJ0T2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFzc2VydCcpLm9iajtcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBvd25LZXlzKGl0KXtcclxuICBhc3NlcnRPYmplY3QoaXQpO1xyXG4gIHZhciBrZXlzICAgICAgID0gJC5nZXROYW1lcyhpdClcclxuICAgICwgZ2V0U3ltYm9scyA9ICQuZ2V0U3ltYm9scztcclxuICByZXR1cm4gZ2V0U3ltYm9scyA/IGtleXMuY29uY2F0KGdldFN5bWJvbHMoaXQpKSA6IGtleXM7XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCAgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsIGludm9rZSA9IHJlcXVpcmUoJy4vJC5pbnZva2UnKVxyXG4gICwgYXNzZXJ0RnVuY3Rpb24gPSByZXF1aXJlKCcuLyQuYXNzZXJ0JykuZm47XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oLyogLi4ucGFyZ3MgKi8pe1xyXG4gIHZhciBmbiAgICAgPSBhc3NlcnRGdW5jdGlvbih0aGlzKVxyXG4gICAgLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgICAsIHBhcmdzICA9IEFycmF5KGxlbmd0aClcclxuICAgICwgaSAgICAgID0gMFxyXG4gICAgLCBfICAgICAgPSAkLnBhdGguX1xyXG4gICAgLCBob2xkZXIgPSBmYWxzZTtcclxuICB3aGlsZShsZW5ndGggPiBpKWlmKChwYXJnc1tpXSA9IGFyZ3VtZW50c1tpKytdKSA9PT0gXylob2xkZXIgPSB0cnVlO1xyXG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcclxuICAgIHZhciB0aGF0ICAgID0gdGhpc1xyXG4gICAgICAsIF9sZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgICAgICwgaiA9IDAsIGsgPSAwLCBhcmdzO1xyXG4gICAgaWYoIWhvbGRlciAmJiAhX2xlbmd0aClyZXR1cm4gaW52b2tlKGZuLCBwYXJncywgdGhhdCk7XHJcbiAgICBhcmdzID0gcGFyZ3Muc2xpY2UoKTtcclxuICAgIGlmKGhvbGRlcilmb3IoO2xlbmd0aCA+IGo7IGorKylpZihhcmdzW2pdID09PSBfKWFyZ3Nbal0gPSBhcmd1bWVudHNbaysrXTtcclxuICAgIHdoaWxlKF9sZW5ndGggPiBrKWFyZ3MucHVzaChhcmd1bWVudHNbaysrXSk7XHJcbiAgICByZXR1cm4gaW52b2tlKGZuLCBhcmdzLCB0aGF0KTtcclxuICB9O1xyXG59OyIsIid1c2Ugc3RyaWN0JztcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihyZWdFeHAsIHJlcGxhY2UsIGlzU3RhdGljKXtcclxuICB2YXIgcmVwbGFjZXIgPSByZXBsYWNlID09PSBPYmplY3QocmVwbGFjZSkgPyBmdW5jdGlvbihwYXJ0KXtcclxuICAgIHJldHVybiByZXBsYWNlW3BhcnRdO1xyXG4gIH0gOiByZXBsYWNlO1xyXG4gIHJldHVybiBmdW5jdGlvbihpdCl7XHJcbiAgICByZXR1cm4gU3RyaW5nKGlzU3RhdGljID8gaXQgOiB0aGlzKS5yZXBsYWNlKHJlZ0V4cCwgcmVwbGFjZXIpO1xyXG4gIH07XHJcbn07IiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXHJcbnZhciAkICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgYXNzZXJ0ID0gcmVxdWlyZSgnLi8kLmFzc2VydCcpO1xyXG5mdW5jdGlvbiBjaGVjayhPLCBwcm90byl7XHJcbiAgYXNzZXJ0Lm9iaihPKTtcclxuICBhc3NlcnQocHJvdG8gPT09IG51bGwgfHwgJC5pc09iamVjdChwcm90byksIHByb3RvLCBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcclxuICAgID8gZnVuY3Rpb24oYnVnZ3ksIHNldCl7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHNldCA9IHJlcXVpcmUoJy4vJC5jdHgnKShGdW5jdGlvbi5jYWxsLCAkLmdldERlc2MoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XHJcbiAgICAgICAgICBzZXQoe30sIFtdKTtcclxuICAgICAgICB9IGNhdGNoKGUpeyBidWdneSA9IHRydWU7IH1cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pe1xyXG4gICAgICAgICAgY2hlY2soTywgcHJvdG8pO1xyXG4gICAgICAgICAgaWYoYnVnZ3kpTy5fX3Byb3RvX18gPSBwcm90bztcclxuICAgICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcclxuICAgICAgICAgIHJldHVybiBPO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0oKVxyXG4gICAgOiB1bmRlZmluZWQpLFxyXG4gIGNoZWNrOiBjaGVja1xyXG59OyIsInZhciAkICAgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsIFNQRUNJRVMgPSByZXF1aXJlKCcuLyQud2tzJykoJ3NwZWNpZXMnKTtcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDKXtcclxuICBpZigkLkRFU0MgJiYgIShTUEVDSUVTIGluIEMpKSQuc2V0RGVzYyhDLCBTUEVDSUVTLCB7XHJcbiAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICBnZXQ6ICQudGhhdFxyXG4gIH0pO1xyXG59OyIsIi8vIHRydWUgIC0+IFN0cmluZyNhdFxyXG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcclxudmFyICQgPSByZXF1aXJlKCcuLyQnKTtcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xyXG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xyXG4gICAgdmFyIHMgPSBTdHJpbmcoJC5hc3NlcnREZWZpbmVkKHRoYXQpKVxyXG4gICAgICAsIGkgPSAkLnRvSW50ZWdlcihwb3MpXHJcbiAgICAgICwgbCA9IHMubGVuZ3RoXHJcbiAgICAgICwgYSwgYjtcclxuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XHJcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xyXG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbFxyXG4gICAgICB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcclxuICAgICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxyXG4gICAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xyXG4gIH07XHJcbn07IiwiLy8gaHR0cDovL3dpa2kuZWNtYXNjcmlwdC5vcmcvZG9rdS5waHA/aWQ9c3RyYXdtYW46c3RyaW5nX3BhZGRpbmdcclxudmFyICQgICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCByZXBlYXQgPSByZXF1aXJlKCcuLyQuc3RyaW5nLXJlcGVhdCcpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0aGF0LCBtaW5MZW5ndGgsIGZpbGxDaGFyLCBsZWZ0KXtcclxuICAvLyAxLiBMZXQgTyBiZSBDaGVja09iamVjdENvZXJjaWJsZSh0aGlzIHZhbHVlKS5cclxuICAvLyAyLiBMZXQgUyBiZSBUb1N0cmluZyhPKS5cclxuICB2YXIgUyA9IFN0cmluZygkLmFzc2VydERlZmluZWQodGhhdCkpO1xyXG4gIC8vIDQuIElmIGludE1pbkxlbmd0aCBpcyB1bmRlZmluZWQsIHJldHVybiBTLlxyXG4gIGlmKG1pbkxlbmd0aCA9PT0gdW5kZWZpbmVkKXJldHVybiBTO1xyXG4gIC8vIDQuIExldCBpbnRNaW5MZW5ndGggYmUgVG9JbnRlZ2VyKG1pbkxlbmd0aCkuXHJcbiAgdmFyIGludE1pbkxlbmd0aCA9ICQudG9JbnRlZ2VyKG1pbkxlbmd0aCk7XHJcbiAgLy8gNS4gTGV0IGZpbGxMZW4gYmUgdGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIGluIFMgbWludXMgaW50TWluTGVuZ3RoLlxyXG4gIHZhciBmaWxsTGVuID0gaW50TWluTGVuZ3RoIC0gUy5sZW5ndGg7XHJcbiAgLy8gNi4gSWYgZmlsbExlbiA8IDAsIHRoZW4gdGhyb3cgYSBSYW5nZUVycm9yIGV4Y2VwdGlvbi5cclxuICAvLyA3LiBJZiBmaWxsTGVuIGlzICviiJ4sIHRoZW4gdGhyb3cgYSBSYW5nZUVycm9yIGV4Y2VwdGlvbi5cclxuICBpZihmaWxsTGVuIDwgMCB8fCBmaWxsTGVuID09PSBJbmZpbml0eSl7XHJcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQ2Fubm90IHNhdGlzZnkgc3RyaW5nIGxlbmd0aCAnICsgbWluTGVuZ3RoICsgJyBmb3Igc3RyaW5nOiAnICsgUyk7XHJcbiAgfVxyXG4gIC8vIDguIExldCBzRmlsbFN0ciBiZSB0aGUgc3RyaW5nIHJlcHJlc2VudGVkIGJ5IGZpbGxTdHIuXHJcbiAgLy8gOS4gSWYgc0ZpbGxTdHIgaXMgdW5kZWZpbmVkLCBsZXQgc0ZpbGxTdHIgYmUgYSBzcGFjZSBjaGFyYWN0ZXIuXHJcbiAgdmFyIHNGaWxsU3RyID0gZmlsbENoYXIgPT09IHVuZGVmaW5lZCA/ICcgJyA6IFN0cmluZyhmaWxsQ2hhcik7XHJcbiAgLy8gMTAuIExldCBzRmlsbFZhbCBiZSBhIFN0cmluZyBtYWRlIG9mIHNGaWxsU3RyLCByZXBlYXRlZCB1bnRpbCBmaWxsTGVuIGlzIG1ldC5cclxuICB2YXIgc0ZpbGxWYWwgPSByZXBlYXQuY2FsbChzRmlsbFN0ciwgTWF0aC5jZWlsKGZpbGxMZW4gLyBzRmlsbFN0ci5sZW5ndGgpKTtcclxuICAvLyB0cnVuY2F0ZSBpZiB3ZSBvdmVyZmxvd2VkXHJcbiAgaWYoc0ZpbGxWYWwubGVuZ3RoID4gZmlsbExlbilzRmlsbFZhbCA9IGxlZnRcclxuICAgID8gc0ZpbGxWYWwuc2xpY2Uoc0ZpbGxWYWwubGVuZ3RoIC0gZmlsbExlbilcclxuICAgIDogc0ZpbGxWYWwuc2xpY2UoMCwgZmlsbExlbik7XHJcbiAgLy8gMTEuIFJldHVybiBhIHN0cmluZyBtYWRlIGZyb20gc0ZpbGxWYWwsIGZvbGxvd2VkIGJ5IFMuXHJcbiAgLy8gMTEuIFJldHVybiBhIFN0cmluZyBtYWRlIGZyb20gUywgZm9sbG93ZWQgYnkgc0ZpbGxWYWwuXHJcbiAgcmV0dXJuIGxlZnQgPyBzRmlsbFZhbC5jb25jYXQoUykgOiBTLmNvbmNhdChzRmlsbFZhbCk7XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCA9IHJlcXVpcmUoJy4vJCcpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZXBlYXQoY291bnQpe1xyXG4gIHZhciBzdHIgPSBTdHJpbmcoJC5hc3NlcnREZWZpbmVkKHRoaXMpKVxyXG4gICAgLCByZXMgPSAnJ1xyXG4gICAgLCBuICAgPSAkLnRvSW50ZWdlcihjb3VudCk7XHJcbiAgaWYobiA8IDAgfHwgbiA9PSBJbmZpbml0eSl0aHJvdyBSYW5nZUVycm9yKFwiQ291bnQgY2FuJ3QgYmUgbmVnYXRpdmVcIik7XHJcbiAgZm9yKDtuID4gMDsgKG4gPj4+PSAxKSAmJiAoc3RyICs9IHN0cikpaWYobiAmIDEpcmVzICs9IHN0cjtcclxuICByZXR1cm4gcmVzO1xyXG59OyIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCBjdHggICAgPSByZXF1aXJlKCcuLyQuY3R4JylcclxuICAsIGNvZiAgICA9IHJlcXVpcmUoJy4vJC5jb2YnKVxyXG4gICwgaW52b2tlID0gcmVxdWlyZSgnLi8kLmludm9rZScpXHJcbiAgLCBjZWwgICAgPSByZXF1aXJlKCcuLyQuZG9tLWNyZWF0ZScpXHJcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSAkLmdcclxuICAsIGlzRnVuY3Rpb24gICAgICAgICA9ICQuaXNGdW5jdGlvblxyXG4gICwgaHRtbCAgICAgICAgICAgICAgID0gJC5odG1sXHJcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xyXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxyXG4gICwgY2xlYXJUYXNrICAgICAgICAgID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlXHJcbiAgLCBwb3N0TWVzc2FnZSAgICAgICAgPSBnbG9iYWwucG9zdE1lc3NhZ2VcclxuICAsIGFkZEV2ZW50TGlzdGVuZXIgICA9IGdsb2JhbC5hZGRFdmVudExpc3RlbmVyXHJcbiAgLCBNZXNzYWdlQ2hhbm5lbCAgICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcclxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcclxuICAsIHF1ZXVlICAgICAgICAgICAgICA9IHt9XHJcbiAgLCBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xyXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XHJcbmZ1bmN0aW9uIHJ1bigpe1xyXG4gIHZhciBpZCA9ICt0aGlzO1xyXG4gIGlmKCQuaGFzKHF1ZXVlLCBpZCkpe1xyXG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xyXG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcclxuICAgIGZuKCk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGxpc3RuZXIoZXZlbnQpe1xyXG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xyXG59XHJcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcclxuaWYoIWlzRnVuY3Rpb24oc2V0VGFzaykgfHwgIWlzRnVuY3Rpb24oY2xlYXJUYXNrKSl7XHJcbiAgc2V0VGFzayA9IGZ1bmN0aW9uKGZuKXtcclxuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xyXG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcclxuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xyXG4gICAgICBpbnZva2UoaXNGdW5jdGlvbihmbikgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XHJcbiAgICB9O1xyXG4gICAgZGVmZXIoY291bnRlcik7XHJcbiAgICByZXR1cm4gY291bnRlcjtcclxuICB9O1xyXG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uKGlkKXtcclxuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XHJcbiAgfTtcclxuICAvLyBOb2RlLmpzIDAuOC1cclxuICBpZihjb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcclxuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xyXG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XHJcbiAgICB9O1xyXG4gIC8vIE1vZGVybiBicm93c2Vycywgc2tpcCBpbXBsZW1lbnRhdGlvbiBmb3IgV2ViV29ya2Vyc1xyXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzIG9iamVjdFxyXG4gIH0gZWxzZSBpZihhZGRFdmVudExpc3RlbmVyICYmIGlzRnVuY3Rpb24ocG9zdE1lc3NhZ2UpICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XHJcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcclxuICAgICAgcG9zdE1lc3NhZ2UoaWQsICcqJyk7XHJcbiAgICB9O1xyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RuZXIsIGZhbHNlKTtcclxuICAvLyBXZWJXb3JrZXJzXHJcbiAgfSBlbHNlIGlmKGlzRnVuY3Rpb24oTWVzc2FnZUNoYW5uZWwpKXtcclxuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWw7XHJcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcclxuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdG5lcjtcclxuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xyXG4gIC8vIElFOC1cclxuICB9IGVsc2UgaWYoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0Jykpe1xyXG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XHJcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcclxuICAgICAgICBydW4uY2FsbChpZCk7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXHJcbiAgfSBlbHNlIHtcclxuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xyXG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBzZXQ6ICAgc2V0VGFzayxcclxuICBjbGVhcjogY2xlYXJUYXNrXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcclxuICB0cnkge1xyXG4gICAgZXhlYygpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0gY2F0Y2goZSl7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn07IiwidmFyIHNpZCA9IDA7XHJcbmZ1bmN0aW9uIHVpZChrZXkpe1xyXG4gIHJldHVybiAnU3ltYm9sKCcgKyBrZXkgKyAnKV8nICsgKCsrc2lkICsgTWF0aC5yYW5kb20oKSkudG9TdHJpbmcoMzYpO1xyXG59XHJcbnVpZC5zYWZlID0gcmVxdWlyZSgnLi8kJykuZy5TeW1ib2wgfHwgdWlkO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHVpZDsiLCIvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXHJcbnZhciAkICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vJC53a3MnKSgndW5zY29wYWJsZXMnKTtcclxuaWYoJC5GVyAmJiAhKFVOU0NPUEFCTEVTIGluIFtdKSkkLmhpZGUoQXJyYXkucHJvdG90eXBlLCBVTlNDT1BBQkxFUywge30pO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XHJcbiAgaWYoJC5GVylbXVtVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XHJcbn07IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vJCcpLmdcclxuICAsIHN0b3JlICA9IHt9O1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xyXG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxyXG4gICAgZ2xvYmFsLlN5bWJvbCAmJiBnbG9iYWwuU3ltYm9sW25hbWVdIHx8IHJlcXVpcmUoJy4vJC51aWQnKS5zYWZlKCdTeW1ib2wuJyArIG5hbWUpKTtcclxufTsiLCJ2YXIgJCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCBjZWwgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmRvbS1jcmVhdGUnKVxyXG4gICwgY29mICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5jb2YnKVxyXG4gICwgJGRlZiAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwgaW52b2tlICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5pbnZva2UnKVxyXG4gICwgYXJyYXlNZXRob2QgICAgICA9IHJlcXVpcmUoJy4vJC5hcnJheS1tZXRob2RzJylcclxuICAsIElFX1BST1RPICAgICAgICAgPSByZXF1aXJlKCcuLyQudWlkJykuc2FmZSgnX19wcm90b19fJylcclxuICAsIGFzc2VydCAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuYXNzZXJ0JylcclxuICAsIGFzc2VydE9iamVjdCAgICAgPSBhc3NlcnQub2JqXHJcbiAgLCBPYmplY3RQcm90byAgICAgID0gT2JqZWN0LnByb3RvdHlwZVxyXG4gICwgaHRtbCAgICAgICAgICAgICA9ICQuaHRtbFxyXG4gICwgQSAgICAgICAgICAgICAgICA9IFtdXHJcbiAgLCBfc2xpY2UgICAgICAgICAgID0gQS5zbGljZVxyXG4gICwgX2pvaW4gICAgICAgICAgICA9IEEuam9pblxyXG4gICwgaW5kZXhPZiAgICAgICAgICA9IEEuaW5kZXhPZlxyXG4gICwgY2xhc3NvZiAgICAgICAgICA9IGNvZi5jbGFzc29mXHJcbiAgLCBoYXMgICAgICAgICAgICAgID0gJC5oYXNcclxuICAsIGRlZmluZVByb3BlcnR5ICAgPSAkLnNldERlc2NcclxuICAsIGdldE93bkRlc2NyaXB0b3IgPSAkLmdldERlc2NcclxuICAsIGRlZmluZVByb3BlcnRpZXMgPSAkLnNldERlc2NzXHJcbiAgLCBpc0Z1bmN0aW9uICAgICAgID0gJC5pc0Z1bmN0aW9uXHJcbiAgLCB0b09iamVjdCAgICAgICAgID0gJC50b09iamVjdFxyXG4gICwgdG9MZW5ndGggICAgICAgICA9ICQudG9MZW5ndGhcclxuICAsIHRvSW5kZXggICAgICAgICAgPSAkLnRvSW5kZXhcclxuICAsIElFOF9ET01fREVGSU5FICAgPSBmYWxzZVxyXG4gICwgJGluZGV4T2YgICAgICAgICA9IHJlcXVpcmUoJy4vJC5hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxyXG4gICwgJGZvckVhY2ggICAgICAgICA9IGFycmF5TWV0aG9kKDApXHJcbiAgLCAkbWFwICAgICAgICAgICAgID0gYXJyYXlNZXRob2QoMSlcclxuICAsICRmaWx0ZXIgICAgICAgICAgPSBhcnJheU1ldGhvZCgyKVxyXG4gICwgJHNvbWUgICAgICAgICAgICA9IGFycmF5TWV0aG9kKDMpXHJcbiAgLCAkZXZlcnkgICAgICAgICAgID0gYXJyYXlNZXRob2QoNCk7XHJcblxyXG5pZighJC5ERVNDKXtcclxuICB0cnkge1xyXG4gICAgSUU4X0RPTV9ERUZJTkUgPSBkZWZpbmVQcm9wZXJ0eShjZWwoJ2RpdicpLCAneCcsXHJcbiAgICAgIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA4OyB9fVxyXG4gICAgKS54ID09IDg7XHJcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxyXG4gICQuc2V0RGVzYyA9IGZ1bmN0aW9uKE8sIFAsIEF0dHJpYnV0ZXMpe1xyXG4gICAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcclxuICAgICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xyXG4gICAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxyXG4gICAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XHJcbiAgICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpYXNzZXJ0T2JqZWN0KE8pW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcclxuICAgIHJldHVybiBPO1xyXG4gIH07XHJcbiAgJC5nZXREZXNjID0gZnVuY3Rpb24oTywgUCl7XHJcbiAgICBpZihJRThfRE9NX0RFRklORSl0cnkge1xyXG4gICAgICByZXR1cm4gZ2V0T3duRGVzY3JpcHRvcihPLCBQKTtcclxuICAgIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cclxuICAgIGlmKGhhcyhPLCBQKSlyZXR1cm4gJC5kZXNjKCFPYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKE8sIFApLCBPW1BdKTtcclxuICB9O1xyXG4gICQuc2V0RGVzY3MgPSBkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24oTywgUHJvcGVydGllcyl7XHJcbiAgICBhc3NlcnRPYmplY3QoTyk7XHJcbiAgICB2YXIga2V5cyAgID0gJC5nZXRLZXlzKFByb3BlcnRpZXMpXHJcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcclxuICAgICAgLCBpID0gMFxyXG4gICAgICAsIFA7XHJcbiAgICB3aGlsZShsZW5ndGggPiBpKSQuc2V0RGVzYyhPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcclxuICAgIHJldHVybiBPO1xyXG4gIH07XHJcbn1cclxuJGRlZigkZGVmLlMgKyAkZGVmLkYgKiAhJC5ERVNDLCAnT2JqZWN0Jywge1xyXG4gIC8vIDE5LjEuMi42IC8gMTUuMi4zLjMgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxyXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJC5nZXREZXNjLFxyXG4gIC8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXHJcbiAgZGVmaW5lUHJvcGVydHk6ICQuc2V0RGVzYyxcclxuICAvLyAxOS4xLjIuMyAvIDE1LjIuMy43IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXHJcbiAgZGVmaW5lUHJvcGVydGllczogZGVmaW5lUHJvcGVydGllc1xyXG59KTtcclxuXHJcbiAgLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xyXG52YXIga2V5czEgPSAoJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsJyArXHJcbiAgICAgICAgICAgICd0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJykuc3BsaXQoJywnKVxyXG4gIC8vIEFkZGl0aW9uYWwga2V5cyBmb3IgZ2V0T3duUHJvcGVydHlOYW1lc1xyXG4gICwga2V5czIgPSBrZXlzMS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKVxyXG4gICwga2V5c0xlbjEgPSBrZXlzMS5sZW5ndGg7XHJcblxyXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxyXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XHJcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcclxuICB2YXIgaWZyYW1lID0gY2VsKCdpZnJhbWUnKVxyXG4gICAgLCBpICAgICAgPSBrZXlzTGVuMVxyXG4gICAgLCBndCAgICAgPSAnPidcclxuICAgICwgaWZyYW1lRG9jdW1lbnQ7XHJcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgaHRtbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xyXG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcclxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xyXG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcclxuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xyXG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcclxuICBpZnJhbWVEb2N1bWVudC53cml0ZSgnPHNjcmlwdD5kb2N1bWVudC5GPU9iamVjdDwvc2NyaXB0JyArIGd0KTtcclxuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xyXG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xyXG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdC5wcm90b3R5cGVba2V5czFbaV1dO1xyXG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XHJcbn07XHJcbmZ1bmN0aW9uIGNyZWF0ZUdldEtleXMobmFtZXMsIGxlbmd0aCl7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCl7XHJcbiAgICB2YXIgTyAgICAgID0gdG9PYmplY3Qob2JqZWN0KVxyXG4gICAgICAsIGkgICAgICA9IDBcclxuICAgICAgLCByZXN1bHQgPSBbXVxyXG4gICAgICAsIGtleTtcclxuICAgIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcclxuICAgIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcclxuICAgIHdoaWxlKGxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcclxuICAgICAgfmluZGV4T2YuY2FsbChyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxufVxyXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShpdCl7IHJldHVybiAhJC5pc09iamVjdChpdCk7IH1cclxuZnVuY3Rpb24gRW1wdHkoKXt9XHJcbiRkZWYoJGRlZi5TLCAnT2JqZWN0Jywge1xyXG4gIC8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXHJcbiAgZ2V0UHJvdG90eXBlT2Y6ICQuZ2V0UHJvdG8gPSAkLmdldFByb3RvIHx8IGZ1bmN0aW9uKE8pe1xyXG4gICAgTyA9IE9iamVjdChhc3NlcnQuZGVmKE8pKTtcclxuICAgIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xyXG4gICAgaWYoaXNGdW5jdGlvbihPLmNvbnN0cnVjdG9yKSAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XHJcbiAgICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcclxuICAgIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XHJcbiAgfSxcclxuICAvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXHJcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJC5nZXROYW1lcyA9ICQuZ2V0TmFtZXMgfHwgY3JlYXRlR2V0S2V5cyhrZXlzMiwga2V5czIubGVuZ3RoLCB0cnVlKSxcclxuICAvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcclxuICBjcmVhdGU6ICQuY3JlYXRlID0gJC5jcmVhdGUgfHwgZnVuY3Rpb24oTywgLyo/Ki9Qcm9wZXJ0aWVzKXtcclxuICAgIHZhciByZXN1bHQ7XHJcbiAgICBpZihPICE9PSBudWxsKXtcclxuICAgICAgRW1wdHkucHJvdG90eXBlID0gYXNzZXJ0T2JqZWN0KE8pO1xyXG4gICAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcclxuICAgICAgRW1wdHkucHJvdG90eXBlID0gbnVsbDtcclxuICAgICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBzaGltXHJcbiAgICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xyXG4gICAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcclxuICAgIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkZWZpbmVQcm9wZXJ0aWVzKHJlc3VsdCwgUHJvcGVydGllcyk7XHJcbiAgfSxcclxuICAvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcclxuICBrZXlzOiAkLmdldEtleXMgPSAkLmdldEtleXMgfHwgY3JlYXRlR2V0S2V5cyhrZXlzMSwga2V5c0xlbjEsIGZhbHNlKSxcclxuICAvLyAxOS4xLjIuMTcgLyAxNS4yLjMuOCBPYmplY3Quc2VhbChPKVxyXG4gIHNlYWw6ICQuaXQsIC8vIDwtIGNhcFxyXG4gIC8vIDE5LjEuMi41IC8gMTUuMi4zLjkgT2JqZWN0LmZyZWV6ZShPKVxyXG4gIGZyZWV6ZTogJC5pdCwgLy8gPC0gY2FwXHJcbiAgLy8gMTkuMS4yLjE1IC8gMTUuMi4zLjEwIE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyhPKVxyXG4gIHByZXZlbnRFeHRlbnNpb25zOiAkLml0LCAvLyA8LSBjYXBcclxuICAvLyAxOS4xLjIuMTMgLyAxNS4yLjMuMTEgT2JqZWN0LmlzU2VhbGVkKE8pXHJcbiAgaXNTZWFsZWQ6IGlzUHJpbWl0aXZlLCAvLyA8LSBjYXBcclxuICAvLyAxOS4xLjIuMTIgLyAxNS4yLjMuMTIgT2JqZWN0LmlzRnJvemVuKE8pXHJcbiAgaXNGcm96ZW46IGlzUHJpbWl0aXZlLCAvLyA8LSBjYXBcclxuICAvLyAxOS4xLjIuMTEgLyAxNS4yLjMuMTMgT2JqZWN0LmlzRXh0ZW5zaWJsZShPKVxyXG4gIGlzRXh0ZW5zaWJsZTogJC5pc09iamVjdCAvLyA8LSBjYXBcclxufSk7XHJcblxyXG4vLyAxOS4yLjMuMiAvIDE1LjMuNC41IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kKHRoaXNBcmcsIGFyZ3MuLi4pXHJcbiRkZWYoJGRlZi5QLCAnRnVuY3Rpb24nLCB7XHJcbiAgYmluZDogZnVuY3Rpb24odGhhdCAvKiwgYXJncy4uLiAqLyl7XHJcbiAgICB2YXIgZm4gICAgICAgPSBhc3NlcnQuZm4odGhpcylcclxuICAgICAgLCBwYXJ0QXJncyA9IF9zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XHJcbiAgICBmdW5jdGlvbiBib3VuZCgvKiBhcmdzLi4uICovKXtcclxuICAgICAgdmFyIGFyZ3MgPSBwYXJ0QXJncy5jb25jYXQoX3NsaWNlLmNhbGwoYXJndW1lbnRzKSk7XHJcbiAgICAgIHJldHVybiBpbnZva2UoZm4sIGFyZ3MsIHRoaXMgaW5zdGFuY2VvZiBib3VuZCA/ICQuY3JlYXRlKGZuLnByb3RvdHlwZSkgOiB0aGF0KTtcclxuICAgIH1cclxuICAgIGlmKGZuLnByb3RvdHlwZSlib3VuZC5wcm90b3R5cGUgPSBmbi5wcm90b3R5cGU7XHJcbiAgICByZXR1cm4gYm91bmQ7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIEZpeCBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZyBhbmQgRE9NIG9iamVjdHNcclxuaWYoISgwIGluIE9iamVjdCgneicpICYmICd6J1swXSA9PSAneicpKXtcclxuICAkLkVTNU9iamVjdCA9IGZ1bmN0aW9uKGl0KXtcclxuICAgIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcclxuICB9O1xyXG59XHJcblxyXG52YXIgYnVnZ3lTbGljZSA9IHRydWU7XHJcbnRyeSB7XHJcbiAgaWYoaHRtbClfc2xpY2UuY2FsbChodG1sKTtcclxuICBidWdneVNsaWNlID0gZmFsc2U7XHJcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cclxuXHJcbiRkZWYoJGRlZi5QICsgJGRlZi5GICogYnVnZ3lTbGljZSwgJ0FycmF5Jywge1xyXG4gIHNsaWNlOiBmdW5jdGlvbiBzbGljZShiZWdpbiwgZW5kKXtcclxuICAgIHZhciBsZW4gICA9IHRvTGVuZ3RoKHRoaXMubGVuZ3RoKVxyXG4gICAgICAsIGtsYXNzID0gY29mKHRoaXMpO1xyXG4gICAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiBlbmQ7XHJcbiAgICBpZihrbGFzcyA9PSAnQXJyYXknKXJldHVybiBfc2xpY2UuY2FsbCh0aGlzLCBiZWdpbiwgZW5kKTtcclxuICAgIHZhciBzdGFydCAgPSB0b0luZGV4KGJlZ2luLCBsZW4pXHJcbiAgICAgICwgdXBUbyAgID0gdG9JbmRleChlbmQsIGxlbilcclxuICAgICAgLCBzaXplICAgPSB0b0xlbmd0aCh1cFRvIC0gc3RhcnQpXHJcbiAgICAgICwgY2xvbmVkID0gQXJyYXkoc2l6ZSlcclxuICAgICAgLCBpICAgICAgPSAwO1xyXG4gICAgZm9yKDsgaSA8IHNpemU7IGkrKyljbG9uZWRbaV0gPSBrbGFzcyA9PSAnU3RyaW5nJ1xyXG4gICAgICA/IHRoaXMuY2hhckF0KHN0YXJ0ICsgaSlcclxuICAgICAgOiB0aGlzW3N0YXJ0ICsgaV07XHJcbiAgICByZXR1cm4gY2xvbmVkO1xyXG4gIH1cclxufSk7XHJcblxyXG4kZGVmKCRkZWYuUCArICRkZWYuRiAqICgkLkVTNU9iamVjdCAhPSBPYmplY3QpLCAnQXJyYXknLCB7XHJcbiAgam9pbjogZnVuY3Rpb24gam9pbigpe1xyXG4gICAgcmV0dXJuIF9qb2luLmFwcGx5KCQuRVM1T2JqZWN0KHRoaXMpLCBhcmd1bWVudHMpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyAyMi4xLjIuMiAvIDE1LjQuMy4yIEFycmF5LmlzQXJyYXkoYXJnKVxyXG4kZGVmKCRkZWYuUywgJ0FycmF5Jywge1xyXG4gIGlzQXJyYXk6IGZ1bmN0aW9uKGFyZyl7XHJcbiAgICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5JztcclxuICB9XHJcbn0pO1xyXG5mdW5jdGlvbiBjcmVhdGVBcnJheVJlZHVjZShpc1JpZ2h0KXtcclxuICByZXR1cm4gZnVuY3Rpb24oY2FsbGJhY2tmbiwgbWVtbyl7XHJcbiAgICBhc3NlcnQuZm4oY2FsbGJhY2tmbik7XHJcbiAgICB2YXIgTyAgICAgID0gdG9PYmplY3QodGhpcylcclxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcclxuICAgICAgLCBpbmRleCAgPSBpc1JpZ2h0ID8gbGVuZ3RoIC0gMSA6IDBcclxuICAgICAgLCBpICAgICAgPSBpc1JpZ2h0ID8gLTEgOiAxO1xyXG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCA8IDIpZm9yKDs7KXtcclxuICAgICAgaWYoaW5kZXggaW4gTyl7XHJcbiAgICAgICAgbWVtbyA9IE9baW5kZXhdO1xyXG4gICAgICAgIGluZGV4ICs9IGk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgaW5kZXggKz0gaTtcclxuICAgICAgYXNzZXJ0KGlzUmlnaHQgPyBpbmRleCA+PSAwIDogbGVuZ3RoID4gaW5kZXgsICdSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlJyk7XHJcbiAgICB9XHJcbiAgICBmb3IoO2lzUmlnaHQgPyBpbmRleCA+PSAwIDogbGVuZ3RoID4gaW5kZXg7IGluZGV4ICs9IGkpaWYoaW5kZXggaW4gTyl7XHJcbiAgICAgIG1lbW8gPSBjYWxsYmFja2ZuKG1lbW8sIE9baW5kZXhdLCBpbmRleCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWVtbztcclxuICB9O1xyXG59XHJcbiRkZWYoJGRlZi5QLCAnQXJyYXknLCB7XHJcbiAgLy8gMjIuMS4zLjEwIC8gMTUuNC40LjE4IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXHJcbiAgZm9yRWFjaDogJC5lYWNoID0gJC5lYWNoIHx8IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbi8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcclxuICAgIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0pO1xyXG4gIH0sXHJcbiAgLy8gMjIuMS4zLjE1IC8gMTUuNC40LjE5IEFycmF5LnByb3RvdHlwZS5tYXAoY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcclxuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuLyosIHRoYXQgPSB1bmRlZmluZWQgKi8pe1xyXG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcclxuICB9LFxyXG4gIC8vIDIyLjEuMy43IC8gMTUuNC40LjIwIEFycmF5LnByb3RvdHlwZS5maWx0ZXIoY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcclxuICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuLyosIHRoYXQgPSB1bmRlZmluZWQgKi8pe1xyXG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcclxuICB9LFxyXG4gIC8vIDIyLjEuMy4yMyAvIDE1LjQuNC4xNyBBcnJheS5wcm90b3R5cGUuc29tZShjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxyXG4gIHNvbWU6IGZ1bmN0aW9uIHNvbWUoY2FsbGJhY2tmbi8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcclxuICAgIHJldHVybiAkc29tZSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0pO1xyXG4gIH0sXHJcbiAgLy8gMjIuMS4zLjUgLyAxNS40LjQuMTYgQXJyYXkucHJvdG90eXBlLmV2ZXJ5KGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXHJcbiAgZXZlcnk6IGZ1bmN0aW9uIGV2ZXJ5KGNhbGxiYWNrZm4vKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XHJcbiAgICByZXR1cm4gJGV2ZXJ5KHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c1sxXSk7XHJcbiAgfSxcclxuICAvLyAyMi4xLjMuMTggLyAxNS40LjQuMjEgQXJyYXkucHJvdG90eXBlLnJlZHVjZShjYWxsYmFja2ZuIFssIGluaXRpYWxWYWx1ZV0pXHJcbiAgcmVkdWNlOiBjcmVhdGVBcnJheVJlZHVjZShmYWxzZSksXHJcbiAgLy8gMjIuMS4zLjE5IC8gMTUuNC40LjIyIEFycmF5LnByb3RvdHlwZS5yZWR1Y2VSaWdodChjYWxsYmFja2ZuIFssIGluaXRpYWxWYWx1ZV0pXHJcbiAgcmVkdWNlUmlnaHQ6IGNyZWF0ZUFycmF5UmVkdWNlKHRydWUpLFxyXG4gIC8vIDIyLjEuMy4xMSAvIDE1LjQuNC4xNCBBcnJheS5wcm90b3R5cGUuaW5kZXhPZihzZWFyY2hFbGVtZW50IFssIGZyb21JbmRleF0pXHJcbiAgaW5kZXhPZjogaW5kZXhPZiA9IGluZGV4T2YgfHwgZnVuY3Rpb24gaW5kZXhPZihlbCAvKiwgZnJvbUluZGV4ID0gMCAqLyl7XHJcbiAgICByZXR1cm4gJGluZGV4T2YodGhpcywgZWwsIGFyZ3VtZW50c1sxXSk7XHJcbiAgfSxcclxuICAvLyAyMi4xLjMuMTQgLyAxNS40LjQuMTUgQXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mKHNlYXJjaEVsZW1lbnQgWywgZnJvbUluZGV4XSlcclxuICBsYXN0SW5kZXhPZjogZnVuY3Rpb24oZWwsIGZyb21JbmRleCAvKiA9IEBbKi0xXSAqLyl7XHJcbiAgICB2YXIgTyAgICAgID0gdG9PYmplY3QodGhpcylcclxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcclxuICAgICAgLCBpbmRleCAgPSBsZW5ndGggLSAxO1xyXG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpaW5kZXggPSBNYXRoLm1pbihpbmRleCwgJC50b0ludGVnZXIoZnJvbUluZGV4KSk7XHJcbiAgICBpZihpbmRleCA8IDApaW5kZXggPSB0b0xlbmd0aChsZW5ndGggKyBpbmRleCk7XHJcbiAgICBmb3IoO2luZGV4ID49IDA7IGluZGV4LS0paWYoaW5kZXggaW4gTylpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIGluZGV4O1xyXG4gICAgcmV0dXJuIC0xO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyAyMS4xLjMuMjUgLyAxNS41LjQuMjAgU3RyaW5nLnByb3RvdHlwZS50cmltKClcclxuJGRlZigkZGVmLlAsICdTdHJpbmcnLCB7dHJpbTogcmVxdWlyZSgnLi8kLnJlcGxhY2VyJykoL15cXHMqKFtcXHNcXFNdKlxcUyk/XFxzKiQvLCAnJDEnKX0pO1xyXG5cclxuLy8gMjAuMy4zLjEgLyAxNS45LjQuNCBEYXRlLm5vdygpXHJcbiRkZWYoJGRlZi5TLCAnRGF0ZScsIHtub3c6IGZ1bmN0aW9uKCl7XHJcbiAgcmV0dXJuICtuZXcgRGF0ZTtcclxufX0pO1xyXG5cclxuZnVuY3Rpb24gbHoobnVtKXtcclxuICByZXR1cm4gbnVtID4gOSA/IG51bSA6ICcwJyArIG51bTtcclxufVxyXG5cclxuLy8gMjAuMy40LjM2IC8gMTUuOS41LjQzIERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nKClcclxuLy8gUGhhbnRvbUpTIGFuZCBvbGQgd2Via2l0IGhhZCBhIGJyb2tlbiBEYXRlIGltcGxlbWVudGF0aW9uLlxyXG52YXIgZGF0ZSAgICAgICA9IG5ldyBEYXRlKC01ZTEzIC0gMSlcclxuICAsIGJyb2tlbkRhdGUgPSAhKGRhdGUudG9JU09TdHJpbmcgJiYgZGF0ZS50b0lTT1N0cmluZygpID09ICcwMzg1LTA3LTI1VDA3OjA2OjM5Ljk5OVonXHJcbiAgICAgICYmIHJlcXVpcmUoJy4vJC50aHJvd3MnKShmdW5jdGlvbigpeyBuZXcgRGF0ZShOYU4pLnRvSVNPU3RyaW5nKCk7IH0pKTtcclxuJGRlZigkZGVmLlAgKyAkZGVmLkYgKiBicm9rZW5EYXRlLCAnRGF0ZScsIHt0b0lTT1N0cmluZzogZnVuY3Rpb24oKXtcclxuICBpZighaXNGaW5pdGUodGhpcykpdGhyb3cgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XHJcbiAgdmFyIGQgPSB0aGlzXHJcbiAgICAsIHkgPSBkLmdldFVUQ0Z1bGxZZWFyKClcclxuICAgICwgbSA9IGQuZ2V0VVRDTWlsbGlzZWNvbmRzKClcclxuICAgICwgcyA9IHkgPCAwID8gJy0nIDogeSA+IDk5OTkgPyAnKycgOiAnJztcclxuICByZXR1cm4gcyArICgnMDAwMDAnICsgTWF0aC5hYnMoeSkpLnNsaWNlKHMgPyAtNiA6IC00KSArXHJcbiAgICAnLScgKyBseihkLmdldFVUQ01vbnRoKCkgKyAxKSArICctJyArIGx6KGQuZ2V0VVRDRGF0ZSgpKSArXHJcbiAgICAnVCcgKyBseihkLmdldFVUQ0hvdXJzKCkpICsgJzonICsgbHooZC5nZXRVVENNaW51dGVzKCkpICtcclxuICAgICc6JyArIGx6KGQuZ2V0VVRDU2Vjb25kcygpKSArICcuJyArIChtID4gOTkgPyBtIDogJzAnICsgbHoobSkpICsgJ1onO1xyXG59fSk7XHJcblxyXG5pZihjbGFzc29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ09iamVjdCcpY29mLmNsYXNzb2YgPSBmdW5jdGlvbihpdCl7XHJcbiAgdmFyIHRhZyA9IGNsYXNzb2YoaXQpO1xyXG4gIHJldHVybiB0YWcgPT0gJ09iamVjdCcgJiYgaXNGdW5jdGlvbihpdC5jYWxsZWUpID8gJ0FyZ3VtZW50cycgOiB0YWc7XHJcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCAgICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCAkZGVmICAgID0gcmVxdWlyZSgnLi8kLmRlZicpXHJcbiAgLCB0b0luZGV4ID0gJC50b0luZGV4O1xyXG4kZGVmKCRkZWYuUCwgJ0FycmF5Jywge1xyXG4gIC8vIDIyLjEuMy4zIEFycmF5LnByb3RvdHlwZS5jb3B5V2l0aGluKHRhcmdldCwgc3RhcnQsIGVuZCA9IHRoaXMubGVuZ3RoKVxyXG4gIGNvcHlXaXRoaW46IGZ1bmN0aW9uIGNvcHlXaXRoaW4odGFyZ2V0LyogPSAwICovLCBzdGFydCAvKiA9IDAsIGVuZCA9IEBsZW5ndGggKi8pe1xyXG4gICAgdmFyIE8gICAgID0gT2JqZWN0KCQuYXNzZXJ0RGVmaW5lZCh0aGlzKSlcclxuICAgICAgLCBsZW4gICA9ICQudG9MZW5ndGgoTy5sZW5ndGgpXHJcbiAgICAgICwgdG8gICAgPSB0b0luZGV4KHRhcmdldCwgbGVuKVxyXG4gICAgICAsIGZyb20gID0gdG9JbmRleChzdGFydCwgbGVuKVxyXG4gICAgICAsIGVuZCAgID0gYXJndW1lbnRzWzJdXHJcbiAgICAgICwgZmluICAgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IHRvSW5kZXgoZW5kLCBsZW4pXHJcbiAgICAgICwgY291bnQgPSBNYXRoLm1pbihmaW4gLSBmcm9tLCBsZW4gLSB0bylcclxuICAgICAgLCBpbmMgICA9IDE7XHJcbiAgICBpZihmcm9tIDwgdG8gJiYgdG8gPCBmcm9tICsgY291bnQpe1xyXG4gICAgICBpbmMgID0gLTE7XHJcbiAgICAgIGZyb20gPSBmcm9tICsgY291bnQgLSAxO1xyXG4gICAgICB0byAgID0gdG8gICArIGNvdW50IC0gMTtcclxuICAgIH1cclxuICAgIHdoaWxlKGNvdW50LS0gPiAwKXtcclxuICAgICAgaWYoZnJvbSBpbiBPKU9bdG9dID0gT1tmcm9tXTtcclxuICAgICAgZWxzZSBkZWxldGUgT1t0b107XHJcbiAgICAgIHRvICAgKz0gaW5jO1xyXG4gICAgICBmcm9tICs9IGluYztcclxuICAgIH0gcmV0dXJuIE87XHJcbiAgfVxyXG59KTtcclxucmVxdWlyZSgnLi8kLnVuc2NvcGUnKSgnY29weVdpdGhpbicpOyIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgJGRlZiAgICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwgdG9JbmRleCA9ICQudG9JbmRleDtcclxuJGRlZigkZGVmLlAsICdBcnJheScsIHtcclxuICAvLyAyMi4xLjMuNiBBcnJheS5wcm90b3R5cGUuZmlsbCh2YWx1ZSwgc3RhcnQgPSAwLCBlbmQgPSB0aGlzLmxlbmd0aClcclxuICBmaWxsOiBmdW5jdGlvbiBmaWxsKHZhbHVlIC8qLCBzdGFydCA9IDAsIGVuZCA9IEBsZW5ndGggKi8pe1xyXG4gICAgdmFyIE8gICAgICA9IE9iamVjdCgkLmFzc2VydERlZmluZWQodGhpcykpXHJcbiAgICAgICwgbGVuZ3RoID0gJC50b0xlbmd0aChPLmxlbmd0aClcclxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGFyZ3VtZW50c1sxXSwgbGVuZ3RoKVxyXG4gICAgICAsIGVuZCAgICA9IGFyZ3VtZW50c1syXVxyXG4gICAgICAsIGVuZFBvcyA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogdG9JbmRleChlbmQsIGxlbmd0aCk7XHJcbiAgICB3aGlsZShlbmRQb3MgPiBpbmRleClPW2luZGV4KytdID0gdmFsdWU7XHJcbiAgICByZXR1cm4gTztcclxuICB9XHJcbn0pO1xyXG5yZXF1aXJlKCcuLyQudW5zY29wZScpKCdmaWxsJyk7IiwiJ3VzZSBzdHJpY3QnO1xyXG4vLyAyMi4xLjMuOSBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4KHByZWRpY2F0ZSwgdGhpc0FyZyA9IHVuZGVmaW5lZClcclxudmFyIEtFWSAgICA9ICdmaW5kSW5kZXgnXHJcbiAgLCAkZGVmICAgPSByZXF1aXJlKCcuLyQuZGVmJylcclxuICAsIGZvcmNlZCA9IHRydWVcclxuICAsICRmaW5kICA9IHJlcXVpcmUoJy4vJC5hcnJheS1tZXRob2RzJykoNik7XHJcbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXHJcbmlmKEtFWSBpbiBbXSlBcnJheSgxKVtLRVldKGZ1bmN0aW9uKCl7IGZvcmNlZCA9IGZhbHNlOyB9KTtcclxuJGRlZigkZGVmLlAgKyAkZGVmLkYgKiBmb3JjZWQsICdBcnJheScsIHtcclxuICBmaW5kSW5kZXg6IGZ1bmN0aW9uIGZpbmRJbmRleChjYWxsYmFja2ZuLyosIHRoYXQgPSB1bmRlZmluZWQgKi8pe1xyXG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c1sxXSk7XHJcbiAgfVxyXG59KTtcclxucmVxdWlyZSgnLi8kLnVuc2NvcGUnKShLRVkpOyIsIid1c2Ugc3RyaWN0JztcclxuLy8gMjIuMS4zLjggQXJyYXkucHJvdG90eXBlLmZpbmQocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxyXG52YXIgS0VZICAgID0gJ2ZpbmQnXHJcbiAgLCAkZGVmICAgPSByZXF1aXJlKCcuLyQuZGVmJylcclxuICAsIGZvcmNlZCA9IHRydWVcclxuICAsICRmaW5kICA9IHJlcXVpcmUoJy4vJC5hcnJheS1tZXRob2RzJykoNSk7XHJcbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXHJcbmlmKEtFWSBpbiBbXSlBcnJheSgxKVtLRVldKGZ1bmN0aW9uKCl7IGZvcmNlZCA9IGZhbHNlOyB9KTtcclxuJGRlZigkZGVmLlAgKyAkZGVmLkYgKiBmb3JjZWQsICdBcnJheScsIHtcclxuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4vKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XHJcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdKTtcclxuICB9XHJcbn0pO1xyXG5yZXF1aXJlKCcuLyQudW5zY29wZScpKEtFWSk7IiwidmFyICQgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsIGN0eCAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXHJcbiAgLCAkZGVmICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwgJGl0ZXIgPSByZXF1aXJlKCcuLyQuaXRlcicpXHJcbiAgLCBjYWxsICA9IHJlcXVpcmUoJy4vJC5pdGVyLWNhbGwnKTtcclxuJGRlZigkZGVmLlMgKyAkZGVmLkYgKiAhcmVxdWlyZSgnLi8kLml0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XHJcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxyXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlLyosIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKi8pe1xyXG4gICAgdmFyIE8gICAgICAgPSBPYmplY3QoJC5hc3NlcnREZWZpbmVkKGFycmF5TGlrZSkpXHJcbiAgICAgICwgbWFwZm4gICA9IGFyZ3VtZW50c1sxXVxyXG4gICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICwgZiAgICAgICA9IG1hcHBpbmcgPyBjdHgobWFwZm4sIGFyZ3VtZW50c1syXSwgMikgOiB1bmRlZmluZWRcclxuICAgICAgLCBpbmRleCAgID0gMFxyXG4gICAgICAsIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcclxuICAgIGlmKCRpdGVyLmlzKE8pKXtcclxuICAgICAgaXRlcmF0b3IgPSAkaXRlci5nZXQoTyk7XHJcbiAgICAgIC8vIHN0cmFuZ2UgSUUgcXVpcmtzIG1vZGUgYnVnIC0+IHVzZSB0eXBlb2YgaW5zdGVhZCBvZiBpc0Z1bmN0aW9uXHJcbiAgICAgIHJlc3VsdCAgID0gbmV3ICh0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5KTtcclxuICAgICAgZm9yKDsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKXtcclxuICAgICAgICByZXN1bHRbaW5kZXhdID0gbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIGYsIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gc3RyYW5nZSBJRSBxdWlya3MgbW9kZSBidWcgLT4gdXNlIHR5cGVvZiBpbnN0ZWFkIG9mIGlzRnVuY3Rpb25cclxuICAgICAgcmVzdWx0ID0gbmV3ICh0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5KShsZW5ndGggPSAkLnRvTGVuZ3RoKE8ubGVuZ3RoKSk7XHJcbiAgICAgIGZvcig7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcclxuICAgICAgICByZXN1bHRbaW5kZXhdID0gbWFwcGluZyA/IGYoT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufSk7IiwidmFyICQgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgc2V0VW5zY29wZSA9IHJlcXVpcmUoJy4vJC51bnNjb3BlJylcclxuICAsIElURVIgICAgICAgPSByZXF1aXJlKCcuLyQudWlkJykuc2FmZSgnaXRlcicpXHJcbiAgLCAkaXRlciAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXInKVxyXG4gICwgc3RlcCAgICAgICA9ICRpdGVyLnN0ZXBcclxuICAsIEl0ZXJhdG9ycyAgPSAkaXRlci5JdGVyYXRvcnM7XHJcblxyXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXHJcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXHJcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcclxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXHJcbnJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XHJcbiAgJC5zZXQodGhpcywgSVRFUiwge286ICQudG9PYmplY3QoaXRlcmF0ZWQpLCBpOiAwLCBrOiBraW5kfSk7XHJcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxyXG59LCBmdW5jdGlvbigpe1xyXG4gIHZhciBpdGVyICA9IHRoaXNbSVRFUl1cclxuICAgICwgTyAgICAgPSBpdGVyLm9cclxuICAgICwga2luZCAgPSBpdGVyLmtcclxuICAgICwgaW5kZXggPSBpdGVyLmkrKztcclxuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XHJcbiAgICBpdGVyLm8gPSB1bmRlZmluZWQ7XHJcbiAgICByZXR1cm4gc3RlcCgxKTtcclxuICB9XHJcbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XHJcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XHJcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xyXG59LCAndmFsdWVzJyk7XHJcblxyXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXHJcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XHJcblxyXG5zZXRVbnNjb3BlKCdrZXlzJyk7XHJcbnNldFVuc2NvcGUoJ3ZhbHVlcycpO1xyXG5zZXRVbnNjb3BlKCdlbnRyaWVzJyk7IiwidmFyICRkZWYgPSByZXF1aXJlKCcuLyQuZGVmJyk7XHJcbiRkZWYoJGRlZi5TLCAnQXJyYXknLCB7XHJcbiAgLy8gMjIuMS4yLjMgQXJyYXkub2YoIC4uLml0ZW1zKVxyXG4gIG9mOiBmdW5jdGlvbiBvZigvKiAuLi5hcmdzICovKXtcclxuICAgIHZhciBpbmRleCAgPSAwXHJcbiAgICAgICwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxyXG4gICAgICAvLyBzdHJhbmdlIElFIHF1aXJrcyBtb2RlIGJ1ZyAtPiB1c2UgdHlwZW9mIGluc3RlYWQgb2YgaXNGdW5jdGlvblxyXG4gICAgICAsIHJlc3VsdCA9IG5ldyAodHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheSkobGVuZ3RoKTtcclxuICAgIHdoaWxlKGxlbmd0aCA+IGluZGV4KXJlc3VsdFtpbmRleF0gPSBhcmd1bWVudHNbaW5kZXgrK107XHJcbiAgICByZXN1bHQubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn0pOyIsInJlcXVpcmUoJy4vJC5zcGVjaWVzJykoQXJyYXkpOyIsInZhciAkICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsIEhBU19JTlNUQU5DRSAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2hhc0luc3RhbmNlJylcclxuICAsIEZ1bmN0aW9uUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbi8vIDE5LjIuMy42IEZ1bmN0aW9uLnByb3RvdHlwZVtAQGhhc0luc3RhbmNlXShWKVxyXG5pZighKEhBU19JTlNUQU5DRSBpbiBGdW5jdGlvblByb3RvKSkkLnNldERlc2MoRnVuY3Rpb25Qcm90bywgSEFTX0lOU1RBTkNFLCB7dmFsdWU6IGZ1bmN0aW9uKE8pe1xyXG4gIGlmKCEkLmlzRnVuY3Rpb24odGhpcykgfHwgISQuaXNPYmplY3QoTykpcmV0dXJuIGZhbHNlO1xyXG4gIGlmKCEkLmlzT2JqZWN0KHRoaXMucHJvdG90eXBlKSlyZXR1cm4gTyBpbnN0YW5jZW9mIHRoaXM7XHJcbiAgLy8gZm9yIGVudmlyb25tZW50IHcvbyBuYXRpdmUgYEBAaGFzSW5zdGFuY2VgIGxvZ2ljIGVub3VnaCBgaW5zdGFuY2VvZmAsIGJ1dCBhZGQgdGhpczpcclxuICB3aGlsZShPID0gJC5nZXRQcm90byhPKSlpZih0aGlzLnByb3RvdHlwZSA9PT0gTylyZXR1cm4gdHJ1ZTtcclxuICByZXR1cm4gZmFsc2U7XHJcbn19KTsiLCIndXNlIHN0cmljdCc7XHJcbnZhciAkICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsIE5BTUUgPSAnbmFtZSdcclxuICAsIHNldERlc2MgPSAkLnNldERlc2NcclxuICAsIEZ1bmN0aW9uUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbi8vIDE5LjIuNC4yIG5hbWVcclxuTkFNRSBpbiBGdW5jdGlvblByb3RvIHx8ICQuRlcgJiYgJC5ERVNDICYmIHNldERlc2MoRnVuY3Rpb25Qcm90bywgTkFNRSwge1xyXG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICBnZXQ6IGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgbWF0Y2ggPSBTdHJpbmcodGhpcykubWF0Y2goL15cXHMqZnVuY3Rpb24gKFteIChdKikvKVxyXG4gICAgICAsIG5hbWUgID0gbWF0Y2ggPyBtYXRjaFsxXSA6ICcnO1xyXG4gICAgJC5oYXModGhpcywgTkFNRSkgfHwgc2V0RGVzYyh0aGlzLCBOQU1FLCAkLmRlc2MoNSwgbmFtZSkpO1xyXG4gICAgcmV0dXJuIG5hbWU7XHJcbiAgfSxcclxuICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKXtcclxuICAgICQuaGFzKHRoaXMsIE5BTUUpIHx8IHNldERlc2ModGhpcywgTkFNRSwgJC5kZXNjKDAsIHZhbHVlKSk7XHJcbiAgfVxyXG59KTsiLCIndXNlIHN0cmljdCc7XHJcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuLyQuY29sbGVjdGlvbi1zdHJvbmcnKTtcclxuXHJcbi8vIDIzLjEgTWFwIE9iamVjdHNcclxucmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24nKSgnTWFwJywge1xyXG4gIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcclxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpe1xyXG4gICAgdmFyIGVudHJ5ID0gc3Ryb25nLmdldEVudHJ5KHRoaXMsIGtleSk7XHJcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcclxuICB9LFxyXG4gIC8vIDIzLjEuMy45IE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXHJcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSl7XHJcbiAgICByZXR1cm4gc3Ryb25nLmRlZih0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XHJcbiAgfVxyXG59LCBzdHJvbmcsIHRydWUpOyIsInZhciBJbmZpbml0eSA9IDEgLyAwXHJcbiAgLCAkZGVmICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwgRSAgICAgPSBNYXRoLkVcclxuICAsIHBvdyAgID0gTWF0aC5wb3dcclxuICAsIGFicyAgID0gTWF0aC5hYnNcclxuICAsIGV4cCAgID0gTWF0aC5leHBcclxuICAsIGxvZyAgID0gTWF0aC5sb2dcclxuICAsIHNxcnQgID0gTWF0aC5zcXJ0XHJcbiAgLCBjZWlsICA9IE1hdGguY2VpbFxyXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yXHJcbiAgLCBFUFNJTE9OICAgPSBwb3coMiwgLTUyKVxyXG4gICwgRVBTSUxPTjMyID0gcG93KDIsIC0yMylcclxuICAsIE1BWDMyICAgICA9IHBvdygyLCAxMjcpICogKDIgLSBFUFNJTE9OMzIpXHJcbiAgLCBNSU4zMiAgICAgPSBwb3coMiwgLTEyNik7XHJcbmZ1bmN0aW9uIHJvdW5kVGllc1RvRXZlbihuKXtcclxuICByZXR1cm4gbiArIDEgLyBFUFNJTE9OIC0gMSAvIEVQU0lMT047XHJcbn1cclxuXHJcbi8vIDIwLjIuMi4yOCBNYXRoLnNpZ24oeClcclxuZnVuY3Rpb24gc2lnbih4KXtcclxuICByZXR1cm4gKHggPSAreCkgPT0gMCB8fCB4ICE9IHggPyB4IDogeCA8IDAgPyAtMSA6IDE7XHJcbn1cclxuLy8gMjAuMi4yLjUgTWF0aC5hc2luaCh4KVxyXG5mdW5jdGlvbiBhc2luaCh4KXtcclxuICByZXR1cm4gIWlzRmluaXRlKHggPSAreCkgfHwgeCA9PSAwID8geCA6IHggPCAwID8gLWFzaW5oKC14KSA6IGxvZyh4ICsgc3FydCh4ICogeCArIDEpKTtcclxufVxyXG4vLyAyMC4yLjIuMTQgTWF0aC5leHBtMSh4KVxyXG5mdW5jdGlvbiBleHBtMSh4KXtcclxuICByZXR1cm4gKHggPSAreCkgPT0gMCA/IHggOiB4ID4gLTFlLTYgJiYgeCA8IDFlLTYgPyB4ICsgeCAqIHggLyAyIDogZXhwKHgpIC0gMTtcclxufVxyXG5cclxuJGRlZigkZGVmLlMsICdNYXRoJywge1xyXG4gIC8vIDIwLjIuMi4zIE1hdGguYWNvc2goeClcclxuICBhY29zaDogZnVuY3Rpb24gYWNvc2goeCl7XHJcbiAgICByZXR1cm4gKHggPSAreCkgPCAxID8gTmFOIDogaXNGaW5pdGUoeCkgPyBsb2coeCAvIEUgKyBzcXJ0KHggKyAxKSAqIHNxcnQoeCAtIDEpIC8gRSkgKyAxIDogeDtcclxuICB9LFxyXG4gIC8vIDIwLjIuMi41IE1hdGguYXNpbmgoeClcclxuICBhc2luaDogYXNpbmgsXHJcbiAgLy8gMjAuMi4yLjcgTWF0aC5hdGFuaCh4KVxyXG4gIGF0YW5oOiBmdW5jdGlvbiBhdGFuaCh4KXtcclxuICAgIHJldHVybiAoeCA9ICt4KSA9PSAwID8geCA6IGxvZygoMSArIHgpIC8gKDEgLSB4KSkgLyAyO1xyXG4gIH0sXHJcbiAgLy8gMjAuMi4yLjkgTWF0aC5jYnJ0KHgpXHJcbiAgY2JydDogZnVuY3Rpb24gY2JydCh4KXtcclxuICAgIHJldHVybiBzaWduKHggPSAreCkgKiBwb3coYWJzKHgpLCAxIC8gMyk7XHJcbiAgfSxcclxuICAvLyAyMC4yLjIuMTEgTWF0aC5jbHozMih4KVxyXG4gIGNsejMyOiBmdW5jdGlvbiBjbHozMih4KXtcclxuICAgIHJldHVybiAoeCA+Pj49IDApID8gMzEgLSBmbG9vcihsb2coeCArIDAuNSkgKiBNYXRoLkxPRzJFKSA6IDMyO1xyXG4gIH0sXHJcbiAgLy8gMjAuMi4yLjEyIE1hdGguY29zaCh4KVxyXG4gIGNvc2g6IGZ1bmN0aW9uIGNvc2goeCl7XHJcbiAgICByZXR1cm4gKGV4cCh4ID0gK3gpICsgZXhwKC14KSkgLyAyO1xyXG4gIH0sXHJcbiAgLy8gMjAuMi4yLjE0IE1hdGguZXhwbTEoeClcclxuICBleHBtMTogZXhwbTEsXHJcbiAgLy8gMjAuMi4yLjE2IE1hdGguZnJvdW5kKHgpXHJcbiAgZnJvdW5kOiBmdW5jdGlvbiBmcm91bmQoeCl7XHJcbiAgICB2YXIgJGFicyAgPSBhYnMoeClcclxuICAgICAgLCAkc2lnbiA9IHNpZ24oeClcclxuICAgICAgLCBhLCByZXN1bHQ7XHJcbiAgICBpZigkYWJzIDwgTUlOMzIpcmV0dXJuICRzaWduICogcm91bmRUaWVzVG9FdmVuKCRhYnMgLyBNSU4zMiAvIEVQU0lMT04zMikgKiBNSU4zMiAqIEVQU0lMT04zMjtcclxuICAgIGEgPSAoMSArIEVQU0lMT04zMiAvIEVQU0lMT04pICogJGFicztcclxuICAgIHJlc3VsdCA9IGEgLSAoYSAtICRhYnMpO1xyXG4gICAgaWYocmVzdWx0ID4gTUFYMzIgfHwgcmVzdWx0ICE9IHJlc3VsdClyZXR1cm4gJHNpZ24gKiBJbmZpbml0eTtcclxuICAgIHJldHVybiAkc2lnbiAqIHJlc3VsdDtcclxuICB9LFxyXG4gIC8vIDIwLjIuMi4xNyBNYXRoLmh5cG90KFt2YWx1ZTFbLCB2YWx1ZTJbLCDigKYgXV1dKVxyXG4gIGh5cG90OiBmdW5jdGlvbiBoeXBvdCh2YWx1ZTEsIHZhbHVlMil7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuICAgIHZhciBzdW0gID0gMFxyXG4gICAgICAsIGxlbjEgPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgICAgICwgbGVuMiA9IGxlbjFcclxuICAgICAgLCBhcmdzID0gQXJyYXkobGVuMSlcclxuICAgICAgLCBsYXJnID0gLUluZmluaXR5XHJcbiAgICAgICwgYXJnO1xyXG4gICAgd2hpbGUobGVuMS0tKXtcclxuICAgICAgYXJnID0gYXJnc1tsZW4xXSA9ICthcmd1bWVudHNbbGVuMV07XHJcbiAgICAgIGlmKGFyZyA9PSBJbmZpbml0eSB8fCBhcmcgPT0gLUluZmluaXR5KXJldHVybiBJbmZpbml0eTtcclxuICAgICAgaWYoYXJnID4gbGFyZylsYXJnID0gYXJnO1xyXG4gICAgfVxyXG4gICAgbGFyZyA9IGFyZyB8fCAxO1xyXG4gICAgd2hpbGUobGVuMi0tKXN1bSArPSBwb3coYXJnc1tsZW4yXSAvIGxhcmcsIDIpO1xyXG4gICAgcmV0dXJuIGxhcmcgKiBzcXJ0KHN1bSk7XHJcbiAgfSxcclxuICAvLyAyMC4yLjIuMTggTWF0aC5pbXVsKHgsIHkpXHJcbiAgaW11bDogZnVuY3Rpb24gaW11bCh4LCB5KXtcclxuICAgIHZhciBVSW50MTYgPSAweGZmZmZcclxuICAgICAgLCB4biA9ICt4XHJcbiAgICAgICwgeW4gPSAreVxyXG4gICAgICAsIHhsID0gVUludDE2ICYgeG5cclxuICAgICAgLCB5bCA9IFVJbnQxNiAmIHluO1xyXG4gICAgcmV0dXJuIDAgfCB4bCAqIHlsICsgKChVSW50MTYgJiB4biA+Pj4gMTYpICogeWwgKyB4bCAqIChVSW50MTYgJiB5biA+Pj4gMTYpIDw8IDE2ID4+PiAwKTtcclxuICB9LFxyXG4gIC8vIDIwLjIuMi4yMCBNYXRoLmxvZzFwKHgpXHJcbiAgbG9nMXA6IGZ1bmN0aW9uIGxvZzFwKHgpe1xyXG4gICAgcmV0dXJuICh4ID0gK3gpID4gLTFlLTggJiYgeCA8IDFlLTggPyB4IC0geCAqIHggLyAyIDogbG9nKDEgKyB4KTtcclxuICB9LFxyXG4gIC8vIDIwLjIuMi4yMSBNYXRoLmxvZzEwKHgpXHJcbiAgbG9nMTA6IGZ1bmN0aW9uIGxvZzEwKHgpe1xyXG4gICAgcmV0dXJuIGxvZyh4KSAvIE1hdGguTE4xMDtcclxuICB9LFxyXG4gIC8vIDIwLjIuMi4yMiBNYXRoLmxvZzIoeClcclxuICBsb2cyOiBmdW5jdGlvbiBsb2cyKHgpe1xyXG4gICAgcmV0dXJuIGxvZyh4KSAvIE1hdGguTE4yO1xyXG4gIH0sXHJcbiAgLy8gMjAuMi4yLjI4IE1hdGguc2lnbih4KVxyXG4gIHNpZ246IHNpZ24sXHJcbiAgLy8gMjAuMi4yLjMwIE1hdGguc2luaCh4KVxyXG4gIHNpbmg6IGZ1bmN0aW9uIHNpbmgoeCl7XHJcbiAgICByZXR1cm4gYWJzKHggPSAreCkgPCAxID8gKGV4cG0xKHgpIC0gZXhwbTEoLXgpKSAvIDIgOiAoZXhwKHggLSAxKSAtIGV4cCgteCAtIDEpKSAqIChFIC8gMik7XHJcbiAgfSxcclxuICAvLyAyMC4yLjIuMzMgTWF0aC50YW5oKHgpXHJcbiAgdGFuaDogZnVuY3Rpb24gdGFuaCh4KXtcclxuICAgIHZhciBhID0gZXhwbTEoeCA9ICt4KVxyXG4gICAgICAsIGIgPSBleHBtMSgteCk7XHJcbiAgICByZXR1cm4gYSA9PSBJbmZpbml0eSA/IDEgOiBiID09IEluZmluaXR5ID8gLTEgOiAoYSAtIGIpIC8gKGV4cCh4KSArIGV4cCgteCkpO1xyXG4gIH0sXHJcbiAgLy8gMjAuMi4yLjM0IE1hdGgudHJ1bmMoeClcclxuICB0cnVuYzogZnVuY3Rpb24gdHJ1bmMoaXQpe1xyXG4gICAgcmV0dXJuIChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcclxuICB9XHJcbn0pOyIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgaXNPYmplY3QgICA9ICQuaXNPYmplY3RcclxuICAsIGlzRnVuY3Rpb24gPSAkLmlzRnVuY3Rpb25cclxuICAsIE5VTUJFUiAgICAgPSAnTnVtYmVyJ1xyXG4gICwgJE51bWJlciAgICA9ICQuZ1tOVU1CRVJdXHJcbiAgLCBCYXNlICAgICAgID0gJE51bWJlclxyXG4gICwgcHJvdG8gICAgICA9ICROdW1iZXIucHJvdG90eXBlO1xyXG5mdW5jdGlvbiB0b1ByaW1pdGl2ZShpdCl7XHJcbiAgdmFyIGZuLCB2YWw7XHJcbiAgaWYoaXNGdW5jdGlvbihmbiA9IGl0LnZhbHVlT2YpICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcclxuICBpZihpc0Z1bmN0aW9uKGZuID0gaXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcclxuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBudW1iZXJcIik7XHJcbn1cclxuZnVuY3Rpb24gdG9OdW1iZXIoaXQpe1xyXG4gIGlmKGlzT2JqZWN0KGl0KSlpdCA9IHRvUHJpbWl0aXZlKGl0KTtcclxuICBpZih0eXBlb2YgaXQgPT0gJ3N0cmluZycgJiYgaXQubGVuZ3RoID4gMiAmJiBpdC5jaGFyQ29kZUF0KDApID09IDQ4KXtcclxuICAgIHZhciBiaW5hcnkgPSBmYWxzZTtcclxuICAgIHN3aXRjaChpdC5jaGFyQ29kZUF0KDEpKXtcclxuICAgICAgY2FzZSA2NiA6IGNhc2UgOTggIDogYmluYXJ5ID0gdHJ1ZTtcclxuICAgICAgY2FzZSA3OSA6IGNhc2UgMTExIDogcmV0dXJuIHBhcnNlSW50KGl0LnNsaWNlKDIpLCBiaW5hcnkgPyAyIDogOCk7XHJcbiAgICB9XHJcbiAgfSByZXR1cm4gK2l0O1xyXG59XHJcbmlmKCQuRlcgJiYgISgkTnVtYmVyKCcwbzEnKSAmJiAkTnVtYmVyKCcwYjEnKSkpe1xyXG4gICROdW1iZXIgPSBmdW5jdGlvbiBOdW1iZXIoaXQpe1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiAkTnVtYmVyID8gbmV3IEJhc2UodG9OdW1iZXIoaXQpKSA6IHRvTnVtYmVyKGl0KTtcclxuICB9O1xyXG4gICQuZWFjaC5jYWxsKCQuREVTQyA/ICQuZ2V0TmFtZXMoQmFzZSkgOiAoXHJcbiAgICAgIC8vIEVTMzpcclxuICAgICAgJ01BWF9WQUxVRSxNSU5fVkFMVUUsTmFOLE5FR0FUSVZFX0lORklOSVRZLFBPU0lUSVZFX0lORklOSVRZLCcgK1xyXG4gICAgICAvLyBFUzYgKGluIGNhc2UsIGlmIG1vZHVsZXMgd2l0aCBFUzYgTnVtYmVyIHN0YXRpY3MgcmVxdWlyZWQgYmVmb3JlKTpcclxuICAgICAgJ0VQU0lMT04saXNGaW5pdGUsaXNJbnRlZ2VyLGlzTmFOLGlzU2FmZUludGVnZXIsTUFYX1NBRkVfSU5URUdFUiwnICtcclxuICAgICAgJ01JTl9TQUZFX0lOVEVHRVIscGFyc2VGbG9hdCxwYXJzZUludCxpc0ludGVnZXInXHJcbiAgICApLnNwbGl0KCcsJyksIGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgIGlmKCQuaGFzKEJhc2UsIGtleSkgJiYgISQuaGFzKCROdW1iZXIsIGtleSkpe1xyXG4gICAgICAgICQuc2V0RGVzYygkTnVtYmVyLCBrZXksICQuZ2V0RGVzYyhCYXNlLCBrZXkpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICk7XHJcbiAgJE51bWJlci5wcm90b3R5cGUgPSBwcm90bztcclxuICBwcm90by5jb25zdHJ1Y3RvciA9ICROdW1iZXI7XHJcbiAgJC5oaWRlKCQuZywgTlVNQkVSLCAkTnVtYmVyKTtcclxufSIsInZhciAkICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCAkZGVmICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwgYWJzICAgPSBNYXRoLmFic1xyXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yXHJcbiAgLCBfaXNGaW5pdGUgPSAkLmcuaXNGaW5pdGVcclxuICAsIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFmZmZmZmZmZmZmZmZmOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxO1xyXG5mdW5jdGlvbiBpc0ludGVnZXIoaXQpe1xyXG4gIHJldHVybiAhJC5pc09iamVjdChpdCkgJiYgX2lzRmluaXRlKGl0KSAmJiBmbG9vcihpdCkgPT09IGl0O1xyXG59XHJcbiRkZWYoJGRlZi5TLCAnTnVtYmVyJywge1xyXG4gIC8vIDIwLjEuMi4xIE51bWJlci5FUFNJTE9OXHJcbiAgRVBTSUxPTjogTWF0aC5wb3coMiwgLTUyKSxcclxuICAvLyAyMC4xLjIuMiBOdW1iZXIuaXNGaW5pdGUobnVtYmVyKVxyXG4gIGlzRmluaXRlOiBmdW5jdGlvbiBpc0Zpbml0ZShpdCl7XHJcbiAgICByZXR1cm4gdHlwZW9mIGl0ID09ICdudW1iZXInICYmIF9pc0Zpbml0ZShpdCk7XHJcbiAgfSxcclxuICAvLyAyMC4xLjIuMyBOdW1iZXIuaXNJbnRlZ2VyKG51bWJlcilcclxuICBpc0ludGVnZXI6IGlzSW50ZWdlcixcclxuICAvLyAyMC4xLjIuNCBOdW1iZXIuaXNOYU4obnVtYmVyKVxyXG4gIGlzTmFOOiBmdW5jdGlvbiBpc05hTihudW1iZXIpe1xyXG4gICAgcmV0dXJuIG51bWJlciAhPSBudW1iZXI7XHJcbiAgfSxcclxuICAvLyAyMC4xLjIuNSBOdW1iZXIuaXNTYWZlSW50ZWdlcihudW1iZXIpXHJcbiAgaXNTYWZlSW50ZWdlcjogZnVuY3Rpb24gaXNTYWZlSW50ZWdlcihudW1iZXIpe1xyXG4gICAgcmV0dXJuIGlzSW50ZWdlcihudW1iZXIpICYmIGFicyhudW1iZXIpIDw9IE1BWF9TQUZFX0lOVEVHRVI7XHJcbiAgfSxcclxuICAvLyAyMC4xLjIuNiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxyXG4gIE1BWF9TQUZFX0lOVEVHRVI6IE1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgLy8gMjAuMS4yLjEwIE51bWJlci5NSU5fU0FGRV9JTlRFR0VSXHJcbiAgTUlOX1NBRkVfSU5URUdFUjogLU1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgLy8gMjAuMS4yLjEyIE51bWJlci5wYXJzZUZsb2F0KHN0cmluZylcclxuICBwYXJzZUZsb2F0OiBwYXJzZUZsb2F0LFxyXG4gIC8vIDIwLjEuMi4xMyBOdW1iZXIucGFyc2VJbnQoc3RyaW5nLCByYWRpeClcclxuICBwYXJzZUludDogcGFyc2VJbnRcclxufSk7IiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcclxudmFyICRkZWYgPSByZXF1aXJlKCcuLyQuZGVmJyk7XHJcbiRkZWYoJGRlZi5TLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi8kLmFzc2lnbicpfSk7IiwiLy8gMTkuMS4zLjEwIE9iamVjdC5pcyh2YWx1ZTEsIHZhbHVlMilcclxudmFyICRkZWYgPSByZXF1aXJlKCcuLyQuZGVmJyk7XHJcbiRkZWYoJGRlZi5TLCAnT2JqZWN0Jywge1xyXG4gIGlzOiBmdW5jdGlvbiBpcyh4LCB5KXtcclxuICAgIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xyXG4gIH1cclxufSk7IiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcclxudmFyICRkZWYgPSByZXF1aXJlKCcuLyQuZGVmJyk7XHJcbiRkZWYoJGRlZi5TLCAnT2JqZWN0Jywge3NldFByb3RvdHlwZU9mOiByZXF1aXJlKCcuLyQuc2V0LXByb3RvJykuc2V0fSk7IiwidmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsICRkZWYgICAgID0gcmVxdWlyZSgnLi8kLmRlZicpXHJcbiAgLCBpc09iamVjdCA9ICQuaXNPYmplY3RcclxuICAsIHRvT2JqZWN0ID0gJC50b09iamVjdDtcclxuZnVuY3Rpb24gd3JhcE9iamVjdE1ldGhvZChNRVRIT0QsIE1PREUpe1xyXG4gIHZhciBmbiAgPSAoJC5jb3JlLk9iamVjdCB8fCB7fSlbTUVUSE9EXSB8fCBPYmplY3RbTUVUSE9EXVxyXG4gICAgLCBmICAgPSAwXHJcbiAgICAsIG8gICA9IHt9O1xyXG4gIG9bTUVUSE9EXSA9IE1PREUgPT0gMSA/IGZ1bmN0aW9uKGl0KXtcclxuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiBpdDtcclxuICB9IDogTU9ERSA9PSAyID8gZnVuY3Rpb24oaXQpe1xyXG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IHRydWU7XHJcbiAgfSA6IE1PREUgPT0gMyA/IGZ1bmN0aW9uKGl0KXtcclxuICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiBmYWxzZTtcclxuICB9IDogTU9ERSA9PSA0ID8gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xyXG4gICAgcmV0dXJuIGZuKHRvT2JqZWN0KGl0KSwga2V5KTtcclxuICB9IDogTU9ERSA9PSA1ID8gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpe1xyXG4gICAgcmV0dXJuIGZuKE9iamVjdCgkLmFzc2VydERlZmluZWQoaXQpKSk7XHJcbiAgfSA6IGZ1bmN0aW9uKGl0KXtcclxuICAgIHJldHVybiBmbih0b09iamVjdChpdCkpO1xyXG4gIH07XHJcbiAgdHJ5IHtcclxuICAgIGZuKCd6Jyk7XHJcbiAgfSBjYXRjaChlKXtcclxuICAgIGYgPSAxO1xyXG4gIH1cclxuICAkZGVmKCRkZWYuUyArICRkZWYuRiAqIGYsICdPYmplY3QnLCBvKTtcclxufVxyXG53cmFwT2JqZWN0TWV0aG9kKCdmcmVlemUnLCAxKTtcclxud3JhcE9iamVjdE1ldGhvZCgnc2VhbCcsIDEpO1xyXG53cmFwT2JqZWN0TWV0aG9kKCdwcmV2ZW50RXh0ZW5zaW9ucycsIDEpO1xyXG53cmFwT2JqZWN0TWV0aG9kKCdpc0Zyb3plbicsIDIpO1xyXG53cmFwT2JqZWN0TWV0aG9kKCdpc1NlYWxlZCcsIDIpO1xyXG53cmFwT2JqZWN0TWV0aG9kKCdpc0V4dGVuc2libGUnLCAzKTtcclxud3JhcE9iamVjdE1ldGhvZCgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywgNCk7XHJcbndyYXBPYmplY3RNZXRob2QoJ2dldFByb3RvdHlwZU9mJywgNSk7XHJcbndyYXBPYmplY3RNZXRob2QoJ2tleXMnKTtcclxud3JhcE9iamVjdE1ldGhvZCgnZ2V0T3duUHJvcGVydHlOYW1lcycpOyIsIid1c2Ugc3RyaWN0JztcclxuLy8gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXHJcbnZhciAkICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgY29mID0gcmVxdWlyZSgnLi8kLmNvZicpXHJcbiAgLCB0bXAgPSB7fTtcclxudG1wW3JlcXVpcmUoJy4vJC53a3MnKSgndG9TdHJpbmdUYWcnKV0gPSAneic7XHJcbmlmKCQuRlcgJiYgY29mKHRtcCkgIT0gJ3onKSQuaGlkZShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xyXG4gIHJldHVybiAnW29iamVjdCAnICsgY29mLmNsYXNzb2YodGhpcykgKyAnXSc7XHJcbn0pOyIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsIGN0eCAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXHJcbiAgLCBjb2YgICAgICA9IHJlcXVpcmUoJy4vJC5jb2YnKVxyXG4gICwgJGRlZiAgICAgPSByZXF1aXJlKCcuLyQuZGVmJylcclxuICAsIGFzc2VydCAgID0gcmVxdWlyZSgnLi8kLmFzc2VydCcpXHJcbiAgLCBmb3JPZiAgICA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKVxyXG4gICwgc2V0UHJvdG8gPSByZXF1aXJlKCcuLyQuc2V0LXByb3RvJykuc2V0XHJcbiAgLCBzcGVjaWVzICA9IHJlcXVpcmUoJy4vJC5zcGVjaWVzJylcclxuICAsIFNQRUNJRVMgID0gcmVxdWlyZSgnLi8kLndrcycpKCdzcGVjaWVzJylcclxuICAsIFJFQ09SRCAgID0gcmVxdWlyZSgnLi8kLnVpZCcpLnNhZmUoJ3JlY29yZCcpXHJcbiAgLCBQUk9NSVNFICA9ICdQcm9taXNlJ1xyXG4gICwgZ2xvYmFsICAgPSAkLmdcclxuICAsIHByb2Nlc3MgID0gZ2xvYmFsLnByb2Nlc3NcclxuICAsIGFzYXAgICAgID0gcHJvY2VzcyAmJiBwcm9jZXNzLm5leHRUaWNrIHx8IHJlcXVpcmUoJy4vJC50YXNrJykuc2V0XHJcbiAgLCBQICAgICAgICA9IGdsb2JhbFtQUk9NSVNFXVxyXG4gICwgaXNGdW5jdGlvbiAgICAgPSAkLmlzRnVuY3Rpb25cclxuICAsIGlzT2JqZWN0ICAgICAgID0gJC5pc09iamVjdFxyXG4gICwgYXNzZXJ0RnVuY3Rpb24gPSBhc3NlcnQuZm5cclxuICAsIGFzc2VydE9iamVjdCAgID0gYXNzZXJ0Lm9iajtcclxuXHJcbnZhciB1c2VOYXRpdmUgPSBmdW5jdGlvbigpe1xyXG4gIHZhciB0ZXN0LCB3b3JrcyA9IGZhbHNlO1xyXG4gIGZ1bmN0aW9uIFAyKHgpe1xyXG4gICAgdmFyIHNlbGYgPSBuZXcgUCh4KTtcclxuICAgIHNldFByb3RvKHNlbGYsIFAyLnByb3RvdHlwZSk7XHJcbiAgICByZXR1cm4gc2VsZjtcclxuICB9XHJcbiAgdHJ5IHtcclxuICAgIHdvcmtzID0gaXNGdW5jdGlvbihQKSAmJiBpc0Z1bmN0aW9uKFAucmVzb2x2ZSkgJiYgUC5yZXNvbHZlKHRlc3QgPSBuZXcgUChmdW5jdGlvbigpe30pKSA9PSB0ZXN0O1xyXG4gICAgc2V0UHJvdG8oUDIsIFApO1xyXG4gICAgUDIucHJvdG90eXBlID0gJC5jcmVhdGUoUC5wcm90b3R5cGUsIHtjb25zdHJ1Y3Rvcjoge3ZhbHVlOiBQMn19KTtcclxuICAgIC8vIGFjdHVhbCBGaXJlZm94IGhhcyBicm9rZW4gc3ViY2xhc3Mgc3VwcG9ydCwgdGVzdCB0aGF0XHJcbiAgICBpZighKFAyLnJlc29sdmUoNSkudGhlbihmdW5jdGlvbigpe30pIGluc3RhbmNlb2YgUDIpKXtcclxuICAgICAgd29ya3MgPSBmYWxzZTtcclxuICAgIH1cclxuICB9IGNhdGNoKGUpeyB3b3JrcyA9IGZhbHNlOyB9XHJcbiAgcmV0dXJuIHdvcmtzO1xyXG59KCk7XHJcblxyXG4vLyBoZWxwZXJzXHJcbmZ1bmN0aW9uIGdldENvbnN0cnVjdG9yKEMpe1xyXG4gIHZhciBTID0gYXNzZXJ0T2JqZWN0KEMpW1NQRUNJRVNdO1xyXG4gIHJldHVybiBTICE9IHVuZGVmaW5lZCA/IFMgOiBDO1xyXG59XHJcbmZ1bmN0aW9uIGlzVGhlbmFibGUoaXQpe1xyXG4gIHZhciB0aGVuO1xyXG4gIGlmKGlzT2JqZWN0KGl0KSl0aGVuID0gaXQudGhlbjtcclxuICByZXR1cm4gaXNGdW5jdGlvbih0aGVuKSA/IHRoZW4gOiBmYWxzZTtcclxufVxyXG5mdW5jdGlvbiBub3RpZnkocmVjb3JkKXtcclxuICB2YXIgY2hhaW4gPSByZWNvcmQuYztcclxuICBpZihjaGFpbi5sZW5ndGgpYXNhcChmdW5jdGlvbigpe1xyXG4gICAgdmFyIHZhbHVlID0gcmVjb3JkLnZcclxuICAgICAgLCBvayAgICA9IHJlY29yZC5zID09IDFcclxuICAgICAgLCBpICAgICA9IDA7XHJcbiAgICBmdW5jdGlvbiBydW4ocmVhY3Qpe1xyXG4gICAgICB2YXIgY2IgPSBvayA/IHJlYWN0Lm9rIDogcmVhY3QuZmFpbFxyXG4gICAgICAgICwgcmV0LCB0aGVuO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmKGNiKXtcclxuICAgICAgICAgIGlmKCFvaylyZWNvcmQuaCA9IHRydWU7XHJcbiAgICAgICAgICByZXQgPSBjYiA9PT0gdHJ1ZSA/IHZhbHVlIDogY2IodmFsdWUpO1xyXG4gICAgICAgICAgaWYocmV0ID09PSByZWFjdC5QKXtcclxuICAgICAgICAgICAgcmVhY3QucmVqKFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcclxuICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXQpKXtcclxuICAgICAgICAgICAgdGhlbi5jYWxsKHJldCwgcmVhY3QucmVzLCByZWFjdC5yZWopO1xyXG4gICAgICAgICAgfSBlbHNlIHJlYWN0LnJlcyhyZXQpO1xyXG4gICAgICAgIH0gZWxzZSByZWFjdC5yZWoodmFsdWUpO1xyXG4gICAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgcmVhY3QucmVqKGVycik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxyXG4gICAgY2hhaW4ubGVuZ3RoID0gMDtcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiBpc1VuaGFuZGxlZChwcm9taXNlKXtcclxuICB2YXIgcmVjb3JkID0gcHJvbWlzZVtSRUNPUkRdXHJcbiAgICAsIGNoYWluICA9IHJlY29yZC5hIHx8IHJlY29yZC5jXHJcbiAgICAsIGkgICAgICA9IDBcclxuICAgICwgcmVhY3Q7XHJcbiAgaWYocmVjb3JkLmgpcmV0dXJuIGZhbHNlO1xyXG4gIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xyXG4gICAgcmVhY3QgPSBjaGFpbltpKytdO1xyXG4gICAgaWYocmVhY3QuZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3QuUCkpcmV0dXJuIGZhbHNlO1xyXG4gIH0gcmV0dXJuIHRydWU7XHJcbn1cclxuZnVuY3Rpb24gJHJlamVjdCh2YWx1ZSl7XHJcbiAgdmFyIHJlY29yZCA9IHRoaXNcclxuICAgICwgcHJvbWlzZTtcclxuICBpZihyZWNvcmQuZClyZXR1cm47XHJcbiAgcmVjb3JkLmQgPSB0cnVlO1xyXG4gIHJlY29yZCA9IHJlY29yZC5yIHx8IHJlY29yZDsgLy8gdW53cmFwXHJcbiAgcmVjb3JkLnYgPSB2YWx1ZTtcclxuICByZWNvcmQucyA9IDI7XHJcbiAgcmVjb3JkLmEgPSByZWNvcmQuYy5zbGljZSgpO1xyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgIGFzYXAoZnVuY3Rpb24oKXtcclxuICAgICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSA9IHJlY29yZC5wKSl7XHJcbiAgICAgICAgaWYoY29mKHByb2Nlc3MpID09ICdwcm9jZXNzJyl7XHJcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcclxuICAgICAgICB9IGVsc2UgaWYoZ2xvYmFsLmNvbnNvbGUgJiYgaXNGdW5jdGlvbihjb25zb2xlLmVycm9yKSl7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJlY29yZC5hID0gdW5kZWZpbmVkO1xyXG4gICAgfSk7XHJcbiAgfSwgMSk7XHJcbiAgbm90aWZ5KHJlY29yZCk7XHJcbn1cclxuZnVuY3Rpb24gJHJlc29sdmUodmFsdWUpe1xyXG4gIHZhciByZWNvcmQgPSB0aGlzXHJcbiAgICAsIHRoZW4sIHdyYXBwZXI7XHJcbiAgaWYocmVjb3JkLmQpcmV0dXJuO1xyXG4gIHJlY29yZC5kID0gdHJ1ZTtcclxuICByZWNvcmQgPSByZWNvcmQuciB8fCByZWNvcmQ7IC8vIHVud3JhcFxyXG4gIHRyeSB7XHJcbiAgICBpZih0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpe1xyXG4gICAgICB3cmFwcGVyID0ge3I6IHJlY29yZCwgZDogZmFsc2V9OyAvLyB3cmFwXHJcbiAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlY29yZC52ID0gdmFsdWU7XHJcbiAgICAgIHJlY29yZC5zID0gMTtcclxuICAgICAgbm90aWZ5KHJlY29yZCk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaChlcnIpe1xyXG4gICAgJHJlamVjdC5jYWxsKHdyYXBwZXIgfHwge3I6IHJlY29yZCwgZDogZmFsc2V9LCBlcnIpOyAvLyB3cmFwXHJcbiAgfVxyXG59XHJcblxyXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxyXG5pZighdXNlTmF0aXZlKXtcclxuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxyXG4gIFAgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcclxuICAgIGFzc2VydEZ1bmN0aW9uKGV4ZWN1dG9yKTtcclxuICAgIHZhciByZWNvcmQgPSB7XHJcbiAgICAgIHA6IGFzc2VydC5pbnN0KHRoaXMsIFAsIFBST01JU0UpLCAgICAgICAvLyA8LSBwcm9taXNlXHJcbiAgICAgIGM6IFtdLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcclxuICAgICAgYTogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXHJcbiAgICAgIHM6IDAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxyXG4gICAgICBkOiBmYWxzZSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gZG9uZVxyXG4gICAgICB2OiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcclxuICAgICAgaDogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGhhbmRsZWQgcmVqZWN0aW9uXHJcbiAgICB9O1xyXG4gICAgJC5oaWRlKHRoaXMsIFJFQ09SRCwgcmVjb3JkKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgcmVjb3JkLCAxKSwgY3R4KCRyZWplY3QsIHJlY29yZCwgMSkpO1xyXG4gICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAkcmVqZWN0LmNhbGwocmVjb3JkLCBlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgJC5taXgoUC5wcm90b3R5cGUsIHtcclxuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXHJcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcclxuICAgICAgdmFyIFMgPSBhc3NlcnRPYmplY3QoYXNzZXJ0T2JqZWN0KHRoaXMpLmNvbnN0cnVjdG9yKVtTUEVDSUVTXTtcclxuICAgICAgdmFyIHJlYWN0ID0ge1xyXG4gICAgICAgIG9rOiAgIGlzRnVuY3Rpb24ob25GdWxmaWxsZWQpID8gb25GdWxmaWxsZWQgOiB0cnVlLFxyXG4gICAgICAgIGZhaWw6IGlzRnVuY3Rpb24ob25SZWplY3RlZCkgID8gb25SZWplY3RlZCAgOiBmYWxzZVxyXG4gICAgICB9O1xyXG4gICAgICB2YXIgcHJvbWlzZSA9IHJlYWN0LlAgPSBuZXcgKFMgIT0gdW5kZWZpbmVkID8gUyA6IFApKGZ1bmN0aW9uKHJlcywgcmVqKXtcclxuICAgICAgICByZWFjdC5yZXMgPSBhc3NlcnRGdW5jdGlvbihyZXMpO1xyXG4gICAgICAgIHJlYWN0LnJlaiA9IGFzc2VydEZ1bmN0aW9uKHJlaik7XHJcbiAgICAgIH0pO1xyXG4gICAgICB2YXIgcmVjb3JkID0gdGhpc1tSRUNPUkRdO1xyXG4gICAgICByZWNvcmQuYy5wdXNoKHJlYWN0KTtcclxuICAgICAgaWYocmVjb3JkLmEpcmVjb3JkLmEucHVzaChyZWFjdCk7XHJcbiAgICAgIHJlY29yZC5zICYmIG5vdGlmeShyZWNvcmQpO1xyXG4gICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH0sXHJcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxyXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XHJcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuLy8gZXhwb3J0XHJcbiRkZWYoJGRlZi5HICsgJGRlZi5XICsgJGRlZi5GICogIXVzZU5hdGl2ZSwge1Byb21pc2U6IFB9KTtcclxuY29mLnNldChQLCBQUk9NSVNFKTtcclxuc3BlY2llcyhQKTtcclxuc3BlY2llcygkLmNvcmVbUFJPTUlTRV0pOyAvLyBmb3Igd3JhcHBlclxyXG5cclxuLy8gc3RhdGljc1xyXG4kZGVmKCRkZWYuUyArICRkZWYuRiAqICF1c2VOYXRpdmUsIFBST01JU0UsIHtcclxuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxyXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xyXG4gICAgcmV0dXJuIG5ldyAoZ2V0Q29uc3RydWN0b3IodGhpcykpKGZ1bmN0aW9uKHJlcywgcmVqKXtcclxuICAgICAgcmVqKHIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcclxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpe1xyXG4gICAgcmV0dXJuIGlzT2JqZWN0KHgpICYmIFJFQ09SRCBpbiB4ICYmICQuZ2V0UHJvdG8oeCkgPT09IHRoaXMucHJvdG90eXBlXHJcbiAgICAgID8geCA6IG5ldyAoZ2V0Q29uc3RydWN0b3IodGhpcykpKGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgcmVzKHgpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4kZGVmKCRkZWYuUyArICRkZWYuRiAqICEodXNlTmF0aXZlICYmIHJlcXVpcmUoJy4vJC5pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpe1xyXG4gIFAuYWxsKGl0ZXIpWydjYXRjaCddKGZ1bmN0aW9uKCl7fSk7XHJcbn0pKSwgUFJPTUlTRSwge1xyXG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxyXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcclxuICAgIHZhciBDICAgICAgPSBnZXRDb25zdHJ1Y3Rvcih0aGlzKVxyXG4gICAgICAsIHZhbHVlcyA9IFtdO1xyXG4gICAgcmV0dXJuIG5ldyBDKGZ1bmN0aW9uKHJlcywgcmVqKXtcclxuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCB2YWx1ZXMucHVzaCwgdmFsdWVzKTtcclxuICAgICAgdmFyIHJlbWFpbmluZyA9IHZhbHVlcy5sZW5ndGhcclxuICAgICAgICAsIHJlc3VsdHMgICA9IEFycmF5KHJlbWFpbmluZyk7XHJcbiAgICAgIGlmKHJlbWFpbmluZykkLmVhY2guY2FsbCh2YWx1ZXMsIGZ1bmN0aW9uKHByb21pc2UsIGluZGV4KXtcclxuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XHJcbiAgICAgICAgICByZXN1bHRzW2luZGV4XSA9IHZhbHVlO1xyXG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzKHJlc3VsdHMpO1xyXG4gICAgICAgIH0sIHJlaik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBlbHNlIHJlcyhyZXN1bHRzKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxyXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xyXG4gICAgdmFyIEMgPSBnZXRDb25zdHJ1Y3Rvcih0aGlzKTtcclxuICAgIHJldHVybiBuZXcgQyhmdW5jdGlvbihyZXMsIHJlail7XHJcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XHJcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4ocmVzLCByZWopO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufSk7IiwidmFyICQgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCAkZGVmICAgICAgPSByZXF1aXJlKCcuLyQuZGVmJylcclxuICAsIHNldFByb3RvICA9IHJlcXVpcmUoJy4vJC5zZXQtcHJvdG8nKVxyXG4gICwgJGl0ZXIgICAgID0gcmVxdWlyZSgnLi8kLml0ZXInKVxyXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXHJcbiAgLCBJVEVSICAgICAgPSByZXF1aXJlKCcuLyQudWlkJykuc2FmZSgnaXRlcicpXHJcbiAgLCBzdGVwICAgICAgPSAkaXRlci5zdGVwXHJcbiAgLCBhc3NlcnQgICAgPSByZXF1aXJlKCcuLyQuYXNzZXJ0JylcclxuICAsIGlzT2JqZWN0ICA9ICQuaXNPYmplY3RcclxuICAsIGdldFByb3RvICA9ICQuZ2V0UHJvdG9cclxuICAsICRSZWZsZWN0ICA9ICQuZy5SZWZsZWN0XHJcbiAgLCBfYXBwbHkgICAgPSBGdW5jdGlvbi5hcHBseVxyXG4gICwgYXNzZXJ0T2JqZWN0ID0gYXNzZXJ0Lm9ialxyXG4gICwgX2lzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgJC5pc09iamVjdFxyXG4gICwgX3ByZXZlbnRFeHRlbnNpb25zID0gT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zIHx8ICQuaXRcclxuICAvLyBJRSBUUCBoYXMgYnJva2VuIFJlZmxlY3QuZW51bWVyYXRlXHJcbiAgLCBidWdneUVudW1lcmF0ZSA9ICEoJFJlZmxlY3QgJiYgJFJlZmxlY3QuZW51bWVyYXRlICYmIElURVJBVE9SIGluICRSZWZsZWN0LmVudW1lcmF0ZSh7fSkpO1xyXG5cclxuZnVuY3Rpb24gRW51bWVyYXRlKGl0ZXJhdGVkKXtcclxuICAkLnNldCh0aGlzLCBJVEVSLCB7bzogaXRlcmF0ZWQsIGs6IHVuZGVmaW5lZCwgaTogMH0pO1xyXG59XHJcbiRpdGVyLmNyZWF0ZShFbnVtZXJhdGUsICdPYmplY3QnLCBmdW5jdGlvbigpe1xyXG4gIHZhciBpdGVyID0gdGhpc1tJVEVSXVxyXG4gICAgLCBrZXlzID0gaXRlci5rXHJcbiAgICAsIGtleTtcclxuICBpZihrZXlzID09IHVuZGVmaW5lZCl7XHJcbiAgICBpdGVyLmsgPSBrZXlzID0gW107XHJcbiAgICBmb3Ioa2V5IGluIGl0ZXIubylrZXlzLnB1c2goa2V5KTtcclxuICB9XHJcbiAgZG8ge1xyXG4gICAgaWYoaXRlci5pID49IGtleXMubGVuZ3RoKXJldHVybiBzdGVwKDEpO1xyXG4gIH0gd2hpbGUoISgoa2V5ID0ga2V5c1tpdGVyLmkrK10pIGluIGl0ZXIubykpO1xyXG4gIHJldHVybiBzdGVwKDAsIGtleSk7XHJcbn0pO1xyXG5cclxudmFyIHJlZmxlY3QgPSB7XHJcbiAgLy8gMjYuMS4xIFJlZmxlY3QuYXBwbHkodGFyZ2V0LCB0aGlzQXJndW1lbnQsIGFyZ3VtZW50c0xpc3QpXHJcbiAgYXBwbHk6IGZ1bmN0aW9uIGFwcGx5KHRhcmdldCwgdGhpc0FyZ3VtZW50LCBhcmd1bWVudHNMaXN0KXtcclxuICAgIHJldHVybiBfYXBwbHkuY2FsbCh0YXJnZXQsIHRoaXNBcmd1bWVudCwgYXJndW1lbnRzTGlzdCk7XHJcbiAgfSxcclxuICAvLyAyNi4xLjIgUmVmbGVjdC5jb25zdHJ1Y3QodGFyZ2V0LCBhcmd1bWVudHNMaXN0IFssIG5ld1RhcmdldF0pXHJcbiAgY29uc3RydWN0OiBmdW5jdGlvbiBjb25zdHJ1Y3QodGFyZ2V0LCBhcmd1bWVudHNMaXN0IC8qLCBuZXdUYXJnZXQqLyl7XHJcbiAgICB2YXIgcHJvdG8gICAgPSBhc3NlcnQuZm4oYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiBhcmd1bWVudHNbMl0pLnByb3RvdHlwZVxyXG4gICAgICAsIGluc3RhbmNlID0gJC5jcmVhdGUoaXNPYmplY3QocHJvdG8pID8gcHJvdG8gOiBPYmplY3QucHJvdG90eXBlKVxyXG4gICAgICAsIHJlc3VsdCAgID0gX2FwcGx5LmNhbGwodGFyZ2V0LCBpbnN0YW5jZSwgYXJndW1lbnRzTGlzdCk7XHJcbiAgICByZXR1cm4gaXNPYmplY3QocmVzdWx0KSA/IHJlc3VsdCA6IGluc3RhbmNlO1xyXG4gIH0sXHJcbiAgLy8gMjYuMS4zIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcylcclxuICBkZWZpbmVQcm9wZXJ0eTogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcyl7XHJcbiAgICBhc3NlcnRPYmplY3QodGFyZ2V0KTtcclxuICAgIHRyeSB7XHJcbiAgICAgICQuc2V0RGVzYyh0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGNhdGNoKGUpe1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvLyAyNi4xLjQgUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5KVxyXG4gIGRlbGV0ZVByb3BlcnR5OiBmdW5jdGlvbiBkZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5KXtcclxuICAgIHZhciBkZXNjID0gJC5nZXREZXNjKGFzc2VydE9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSk7XHJcbiAgICByZXR1cm4gZGVzYyAmJiAhZGVzYy5jb25maWd1cmFibGUgPyBmYWxzZSA6IGRlbGV0ZSB0YXJnZXRbcHJvcGVydHlLZXldO1xyXG4gIH0sXHJcbiAgLy8gMjYuMS42IFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcGVydHlLZXkgWywgcmVjZWl2ZXJdKVxyXG4gIGdldDogZnVuY3Rpb24gZ2V0KHRhcmdldCwgcHJvcGVydHlLZXkvKiwgcmVjZWl2ZXIqLyl7XHJcbiAgICB2YXIgcmVjZWl2ZXIgPSBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IGFyZ3VtZW50c1syXVxyXG4gICAgICAsIGRlc2MgPSAkLmdldERlc2MoYXNzZXJ0T2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KSwgcHJvdG87XHJcbiAgICBpZihkZXNjKXJldHVybiAkLmhhcyhkZXNjLCAndmFsdWUnKVxyXG4gICAgICA/IGRlc2MudmFsdWVcclxuICAgICAgOiBkZXNjLmdldCA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgPyB1bmRlZmluZWRcclxuICAgICAgICA6IGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpO1xyXG4gICAgcmV0dXJuIGlzT2JqZWN0KHByb3RvID0gZ2V0UHJvdG8odGFyZ2V0KSlcclxuICAgICAgPyBnZXQocHJvdG8sIHByb3BlcnR5S2V5LCByZWNlaXZlcilcclxuICAgICAgOiB1bmRlZmluZWQ7XHJcbiAgfSxcclxuICAvLyAyNi4xLjcgUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSlcclxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5S2V5KXtcclxuICAgIHJldHVybiAkLmdldERlc2MoYXNzZXJ0T2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KTtcclxuICB9LFxyXG4gIC8vIDI2LjEuOCBSZWZsZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldClcclxuICBnZXRQcm90b3R5cGVPZjogZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YodGFyZ2V0KXtcclxuICAgIHJldHVybiBnZXRQcm90byhhc3NlcnRPYmplY3QodGFyZ2V0KSk7XHJcbiAgfSxcclxuICAvLyAyNi4xLjkgUmVmbGVjdC5oYXModGFyZ2V0LCBwcm9wZXJ0eUtleSlcclxuICBoYXM6IGZ1bmN0aW9uIGhhcyh0YXJnZXQsIHByb3BlcnR5S2V5KXtcclxuICAgIHJldHVybiBwcm9wZXJ0eUtleSBpbiB0YXJnZXQ7XHJcbiAgfSxcclxuICAvLyAyNi4xLjEwIFJlZmxlY3QuaXNFeHRlbnNpYmxlKHRhcmdldClcclxuICBpc0V4dGVuc2libGU6IGZ1bmN0aW9uIGlzRXh0ZW5zaWJsZSh0YXJnZXQpe1xyXG4gICAgcmV0dXJuIF9pc0V4dGVuc2libGUoYXNzZXJ0T2JqZWN0KHRhcmdldCkpO1xyXG4gIH0sXHJcbiAgLy8gMjYuMS4xMSBSZWZsZWN0Lm93bktleXModGFyZ2V0KVxyXG4gIG93bktleXM6IHJlcXVpcmUoJy4vJC5vd24ta2V5cycpLFxyXG4gIC8vIDI2LjEuMTIgUmVmbGVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpXHJcbiAgcHJldmVudEV4dGVuc2lvbnM6IGZ1bmN0aW9uIHByZXZlbnRFeHRlbnNpb25zKHRhcmdldCl7XHJcbiAgICBhc3NlcnRPYmplY3QodGFyZ2V0KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIF9wcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gY2F0Y2goZSl7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9LFxyXG4gIC8vIDI2LjEuMTMgUmVmbGVjdC5zZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSwgViBbLCByZWNlaXZlcl0pXHJcbiAgc2V0OiBmdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSwgVi8qLCByZWNlaXZlciovKXtcclxuICAgIHZhciByZWNlaXZlciA9IGFyZ3VtZW50cy5sZW5ndGggPCA0ID8gdGFyZ2V0IDogYXJndW1lbnRzWzNdXHJcbiAgICAgICwgb3duRGVzYyAgPSAkLmdldERlc2MoYXNzZXJ0T2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KVxyXG4gICAgICAsIGV4aXN0aW5nRGVzY3JpcHRvciwgcHJvdG87XHJcbiAgICBpZighb3duRGVzYyl7XHJcbiAgICAgIGlmKGlzT2JqZWN0KHByb3RvID0gZ2V0UHJvdG8odGFyZ2V0KSkpe1xyXG4gICAgICAgIHJldHVybiBzZXQocHJvdG8sIHByb3BlcnR5S2V5LCBWLCByZWNlaXZlcik7XHJcbiAgICAgIH1cclxuICAgICAgb3duRGVzYyA9ICQuZGVzYygwKTtcclxuICAgIH1cclxuICAgIGlmKCQuaGFzKG93bkRlc2MsICd2YWx1ZScpKXtcclxuICAgICAgaWYob3duRGVzYy53cml0YWJsZSA9PT0gZmFsc2UgfHwgIWlzT2JqZWN0KHJlY2VpdmVyKSlyZXR1cm4gZmFsc2U7XHJcbiAgICAgIGV4aXN0aW5nRGVzY3JpcHRvciA9ICQuZ2V0RGVzYyhyZWNlaXZlciwgcHJvcGVydHlLZXkpIHx8ICQuZGVzYygwKTtcclxuICAgICAgZXhpc3RpbmdEZXNjcmlwdG9yLnZhbHVlID0gVjtcclxuICAgICAgJC5zZXREZXNjKHJlY2VpdmVyLCBwcm9wZXJ0eUtleSwgZXhpc3RpbmdEZXNjcmlwdG9yKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3duRGVzYy5zZXQgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogKG93bkRlc2Muc2V0LmNhbGwocmVjZWl2ZXIsIFYpLCB0cnVlKTtcclxuICB9XHJcbn07XHJcbi8vIDI2LjEuMTQgUmVmbGVjdC5zZXRQcm90b3R5cGVPZih0YXJnZXQsIHByb3RvKVxyXG5pZihzZXRQcm90bylyZWZsZWN0LnNldFByb3RvdHlwZU9mID0gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YodGFyZ2V0LCBwcm90byl7XHJcbiAgc2V0UHJvdG8uY2hlY2sodGFyZ2V0LCBwcm90byk7XHJcbiAgdHJ5IHtcclxuICAgIHNldFByb3RvLnNldCh0YXJnZXQsIHByb3RvKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0gY2F0Y2goZSl7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxuJGRlZigkZGVmLkcsIHtSZWZsZWN0OiB7fX0pO1xyXG5cclxuJGRlZigkZGVmLlMgKyAkZGVmLkYgKiBidWdneUVudW1lcmF0ZSwgJ1JlZmxlY3QnLCB7XHJcbiAgLy8gMjYuMS41IFJlZmxlY3QuZW51bWVyYXRlKHRhcmdldClcclxuICBlbnVtZXJhdGU6IGZ1bmN0aW9uIGVudW1lcmF0ZSh0YXJnZXQpe1xyXG4gICAgcmV0dXJuIG5ldyBFbnVtZXJhdGUoYXNzZXJ0T2JqZWN0KHRhcmdldCkpO1xyXG4gIH1cclxufSk7XHJcblxyXG4kZGVmKCRkZWYuUywgJ1JlZmxlY3QnLCByZWZsZWN0KTsiLCJ2YXIgJCAgICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCBjb2YgICAgID0gcmVxdWlyZSgnLi8kLmNvZicpXHJcbiAgLCAkUmVnRXhwID0gJC5nLlJlZ0V4cFxyXG4gICwgQmFzZSAgICA9ICRSZWdFeHBcclxuICAsIHByb3RvICAgPSAkUmVnRXhwLnByb3RvdHlwZVxyXG4gICwgcmUgICAgICA9IC9hL2dcclxuICAvLyBcIm5ld1wiIGNyZWF0ZXMgYSBuZXcgb2JqZWN0XHJcbiAgLCBDT1JSRUNUX05FVyA9IG5ldyAkUmVnRXhwKHJlKSAhPT0gcmVcclxuICAvLyBSZWdFeHAgYWxsb3dzIGEgcmVnZXggd2l0aCBmbGFncyBhcyB0aGUgcGF0dGVyblxyXG4gICwgQUxMT1dTX1JFX1dJVEhfRkxBR1MgPSBmdW5jdGlvbigpe1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuICRSZWdFeHAocmUsICdpJykgPT0gJy9hL2knO1xyXG4gICAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxyXG4gIH0oKTtcclxuaWYoJC5GVyAmJiAkLkRFU0Mpe1xyXG4gIGlmKCFDT1JSRUNUX05FVyB8fCAhQUxMT1dTX1JFX1dJVEhfRkxBR1Mpe1xyXG4gICAgJFJlZ0V4cCA9IGZ1bmN0aW9uIFJlZ0V4cChwYXR0ZXJuLCBmbGFncyl7XHJcbiAgICAgIHZhciBwYXR0ZXJuSXNSZWdFeHAgID0gY29mKHBhdHRlcm4pID09ICdSZWdFeHAnXHJcbiAgICAgICAgLCBmbGFnc0lzVW5kZWZpbmVkID0gZmxhZ3MgPT09IHVuZGVmaW5lZDtcclxuICAgICAgaWYoISh0aGlzIGluc3RhbmNlb2YgJFJlZ0V4cCkgJiYgcGF0dGVybklzUmVnRXhwICYmIGZsYWdzSXNVbmRlZmluZWQpcmV0dXJuIHBhdHRlcm47XHJcbiAgICAgIHJldHVybiBDT1JSRUNUX05FV1xyXG4gICAgICAgID8gbmV3IEJhc2UocGF0dGVybklzUmVnRXhwICYmICFmbGFnc0lzVW5kZWZpbmVkID8gcGF0dGVybi5zb3VyY2UgOiBwYXR0ZXJuLCBmbGFncylcclxuICAgICAgICA6IG5ldyBCYXNlKHBhdHRlcm5Jc1JlZ0V4cCA/IHBhdHRlcm4uc291cmNlIDogcGF0dGVyblxyXG4gICAgICAgICAgLCBwYXR0ZXJuSXNSZWdFeHAgJiYgZmxhZ3NJc1VuZGVmaW5lZCA/IHBhdHRlcm4uZmxhZ3MgOiBmbGFncyk7XHJcbiAgICB9O1xyXG4gICAgJC5lYWNoLmNhbGwoJC5nZXROYW1lcyhCYXNlKSwgZnVuY3Rpb24oa2V5KXtcclxuICAgICAga2V5IGluICRSZWdFeHAgfHwgJC5zZXREZXNjKCRSZWdFeHAsIGtleSwge1xyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBCYXNlW2tleV07IH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbihpdCl7IEJhc2Vba2V5XSA9IGl0OyB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBwcm90by5jb25zdHJ1Y3RvciA9ICRSZWdFeHA7XHJcbiAgICAkUmVnRXhwLnByb3RvdHlwZSA9IHByb3RvO1xyXG4gICAgJC5oaWRlKCQuZywgJ1JlZ0V4cCcsICRSZWdFeHApO1xyXG4gIH1cclxuICAvLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFncygpXHJcbiAgaWYoLy4vZy5mbGFncyAhPSAnZycpJC5zZXREZXNjKHByb3RvLCAnZmxhZ3MnLCB7XHJcbiAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICBnZXQ6IHJlcXVpcmUoJy4vJC5yZXBsYWNlcicpKC9eLipcXC8oXFx3KikkLywgJyQxJylcclxuICB9KTtcclxufVxyXG5yZXF1aXJlKCcuLyQuc3BlY2llcycpKCRSZWdFeHApOyIsIid1c2Ugc3RyaWN0JztcclxudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uLXN0cm9uZycpO1xyXG5cclxuLy8gMjMuMiBTZXQgT2JqZWN0c1xyXG5yZXF1aXJlKCcuLyQuY29sbGVjdGlvbicpKCdTZXQnLCB7XHJcbiAgLy8gMjMuMi4zLjEgU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXHJcbiAgYWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpe1xyXG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodGhpcywgdmFsdWUgPSB2YWx1ZSA9PT0gMCA/IDAgOiB2YWx1ZSwgdmFsdWUpO1xyXG4gIH1cclxufSwgc3Ryb25nKTsiLCIndXNlIHN0cmljdCc7XHJcbnZhciAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpXHJcbiAgLCAkYXQgID0gcmVxdWlyZSgnLi8kLnN0cmluZy1hdCcpKGZhbHNlKTtcclxuJGRlZigkZGVmLlAsICdTdHJpbmcnLCB7XHJcbiAgLy8gMjEuMS4zLjMgU3RyaW5nLnByb3RvdHlwZS5jb2RlUG9pbnRBdChwb3MpXHJcbiAgY29kZVBvaW50QXQ6IGZ1bmN0aW9uIGNvZGVQb2ludEF0KHBvcyl7XHJcbiAgICByZXR1cm4gJGF0KHRoaXMsIHBvcyk7XHJcbiAgfVxyXG59KTsiLCIndXNlIHN0cmljdCc7XHJcbnZhciAkICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsIGNvZiAgPSByZXF1aXJlKCcuLyQuY29mJylcclxuICAsICRkZWYgPSByZXF1aXJlKCcuLyQuZGVmJylcclxuICAsIHRvTGVuZ3RoID0gJC50b0xlbmd0aDtcclxuXHJcbi8vIHNob3VsZCB0aHJvdyBlcnJvciBvbiByZWdleFxyXG4kZGVmKCRkZWYuUCArICRkZWYuRiAqICFyZXF1aXJlKCcuLyQudGhyb3dzJykoZnVuY3Rpb24oKXsgJ3EnLmVuZHNXaXRoKC8uLyk7IH0pLCAnU3RyaW5nJywge1xyXG4gIC8vIDIxLjEuMy42IFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGgoc2VhcmNoU3RyaW5nIFssIGVuZFBvc2l0aW9uXSlcclxuICBlbmRzV2l0aDogZnVuY3Rpb24gZW5kc1dpdGgoc2VhcmNoU3RyaW5nIC8qLCBlbmRQb3NpdGlvbiA9IEBsZW5ndGggKi8pe1xyXG4gICAgaWYoY29mKHNlYXJjaFN0cmluZykgPT0gJ1JlZ0V4cCcpdGhyb3cgVHlwZUVycm9yKCk7XHJcbiAgICB2YXIgdGhhdCA9IFN0cmluZygkLmFzc2VydERlZmluZWQodGhpcykpXHJcbiAgICAgICwgZW5kUG9zaXRpb24gPSBhcmd1bWVudHNbMV1cclxuICAgICAgLCBsZW4gPSB0b0xlbmd0aCh0aGF0Lmxlbmd0aClcclxuICAgICAgLCBlbmQgPSBlbmRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkID8gbGVuIDogTWF0aC5taW4odG9MZW5ndGgoZW5kUG9zaXRpb24pLCBsZW4pO1xyXG4gICAgc2VhcmNoU3RyaW5nICs9ICcnO1xyXG4gICAgcmV0dXJuIHRoYXQuc2xpY2UoZW5kIC0gc2VhcmNoU3RyaW5nLmxlbmd0aCwgZW5kKSA9PT0gc2VhcmNoU3RyaW5nO1xyXG4gIH1cclxufSk7IiwidmFyICRkZWYgICAgPSByZXF1aXJlKCcuLyQuZGVmJylcclxuICAsIHRvSW5kZXggPSByZXF1aXJlKCcuLyQnKS50b0luZGV4XHJcbiAgLCBmcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlXHJcbiAgLCAkZnJvbUNvZGVQb2ludCA9IFN0cmluZy5mcm9tQ29kZVBvaW50O1xyXG5cclxuLy8gbGVuZ3RoIHNob3VsZCBiZSAxLCBvbGQgRkYgcHJvYmxlbVxyXG4kZGVmKCRkZWYuUyArICRkZWYuRiAqICghISRmcm9tQ29kZVBvaW50ICYmICRmcm9tQ29kZVBvaW50Lmxlbmd0aCAhPSAxKSwgJ1N0cmluZycsIHtcclxuICAvLyAyMS4xLjIuMiBTdHJpbmcuZnJvbUNvZGVQb2ludCguLi5jb2RlUG9pbnRzKVxyXG4gIGZyb21Db2RlUG9pbnQ6IGZ1bmN0aW9uIGZyb21Db2RlUG9pbnQoeCl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuICAgIHZhciByZXMgPSBbXVxyXG4gICAgICAsIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGhcclxuICAgICAgLCBpICAgPSAwXHJcbiAgICAgICwgY29kZTtcclxuICAgIHdoaWxlKGxlbiA+IGkpe1xyXG4gICAgICBjb2RlID0gK2FyZ3VtZW50c1tpKytdO1xyXG4gICAgICBpZih0b0luZGV4KGNvZGUsIDB4MTBmZmZmKSAhPT0gY29kZSl0aHJvdyBSYW5nZUVycm9yKGNvZGUgKyAnIGlzIG5vdCBhIHZhbGlkIGNvZGUgcG9pbnQnKTtcclxuICAgICAgcmVzLnB1c2goY29kZSA8IDB4MTAwMDBcclxuICAgICAgICA/IGZyb21DaGFyQ29kZShjb2RlKVxyXG4gICAgICAgIDogZnJvbUNoYXJDb2RlKCgoY29kZSAtPSAweDEwMDAwKSA+PiAxMCkgKyAweGQ4MDAsIGNvZGUgJSAweDQwMCArIDB4ZGMwMClcclxuICAgICAgKTtcclxuICAgIH0gcmV0dXJuIHJlcy5qb2luKCcnKTtcclxuICB9XHJcbn0pOyIsIid1c2Ugc3RyaWN0JztcclxudmFyICQgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgY29mICA9IHJlcXVpcmUoJy4vJC5jb2YnKVxyXG4gICwgJGRlZiA9IHJlcXVpcmUoJy4vJC5kZWYnKTtcclxuXHJcbiRkZWYoJGRlZi5QLCAnU3RyaW5nJywge1xyXG4gIC8vIDIxLjEuMy43IFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMoc2VhcmNoU3RyaW5nLCBwb3NpdGlvbiA9IDApXHJcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKHNlYXJjaFN0cmluZyAvKiwgcG9zaXRpb24gPSAwICovKXtcclxuICAgIGlmKGNvZihzZWFyY2hTdHJpbmcpID09ICdSZWdFeHAnKXRocm93IFR5cGVFcnJvcigpO1xyXG4gICAgcmV0dXJuICEhflN0cmluZygkLmFzc2VydERlZmluZWQodGhpcykpLmluZGV4T2Yoc2VhcmNoU3RyaW5nLCBhcmd1bWVudHNbMV0pO1xyXG4gIH1cclxufSk7IiwidmFyIHNldCAgID0gcmVxdWlyZSgnLi8kJykuc2V0XHJcbiAgLCAkYXQgICA9IHJlcXVpcmUoJy4vJC5zdHJpbmctYXQnKSh0cnVlKVxyXG4gICwgSVRFUiAgPSByZXF1aXJlKCcuLyQudWlkJykuc2FmZSgnaXRlcicpXHJcbiAgLCAkaXRlciA9IHJlcXVpcmUoJy4vJC5pdGVyJylcclxuICAsIHN0ZXAgID0gJGl0ZXIuc3RlcDtcclxuXHJcbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcclxucmVxdWlyZSgnLi8kLml0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xyXG4gIHNldCh0aGlzLCBJVEVSLCB7bzogU3RyaW5nKGl0ZXJhdGVkKSwgaTogMH0pO1xyXG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXHJcbn0sIGZ1bmN0aW9uKCl7XHJcbiAgdmFyIGl0ZXIgID0gdGhpc1tJVEVSXVxyXG4gICAgLCBPICAgICA9IGl0ZXIub1xyXG4gICAgLCBpbmRleCA9IGl0ZXIuaVxyXG4gICAgLCBwb2ludDtcclxuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4gc3RlcCgxKTtcclxuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XHJcbiAgaXRlci5pICs9IHBvaW50Lmxlbmd0aDtcclxuICByZXR1cm4gc3RlcCgwLCBwb2ludCk7XHJcbn0pOyIsInZhciAkICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsICRkZWYgPSByZXF1aXJlKCcuLyQuZGVmJyk7XHJcblxyXG4kZGVmKCRkZWYuUywgJ1N0cmluZycsIHtcclxuICAvLyAyMS4xLjIuNCBTdHJpbmcucmF3KGNhbGxTaXRlLCAuLi5zdWJzdGl0dXRpb25zKVxyXG4gIHJhdzogZnVuY3Rpb24gcmF3KGNhbGxTaXRlKXtcclxuICAgIHZhciB0cGwgPSAkLnRvT2JqZWN0KGNhbGxTaXRlLnJhdylcclxuICAgICAgLCBsZW4gPSAkLnRvTGVuZ3RoKHRwbC5sZW5ndGgpXHJcbiAgICAgICwgc2xuID0gYXJndW1lbnRzLmxlbmd0aFxyXG4gICAgICAsIHJlcyA9IFtdXHJcbiAgICAgICwgaSAgID0gMDtcclxuICAgIHdoaWxlKGxlbiA+IGkpe1xyXG4gICAgICByZXMucHVzaChTdHJpbmcodHBsW2krK10pKTtcclxuICAgICAgaWYoaSA8IHNsbilyZXMucHVzaChTdHJpbmcoYXJndW1lbnRzW2ldKSk7XHJcbiAgICB9IHJldHVybiByZXMuam9pbignJyk7XHJcbiAgfVxyXG59KTsiLCJ2YXIgJGRlZiA9IHJlcXVpcmUoJy4vJC5kZWYnKTtcclxuXHJcbiRkZWYoJGRlZi5QLCAnU3RyaW5nJywge1xyXG4gIC8vIDIxLjEuMy4xMyBTdHJpbmcucHJvdG90eXBlLnJlcGVhdChjb3VudClcclxuICByZXBlYXQ6IHJlcXVpcmUoJy4vJC5zdHJpbmctcmVwZWF0JylcclxufSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG52YXIgJCAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCBjb2YgID0gcmVxdWlyZSgnLi8kLmNvZicpXHJcbiAgLCAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpO1xyXG5cclxuLy8gc2hvdWxkIHRocm93IGVycm9yIG9uIHJlZ2V4XHJcbiRkZWYoJGRlZi5QICsgJGRlZi5GICogIXJlcXVpcmUoJy4vJC50aHJvd3MnKShmdW5jdGlvbigpeyAncScuc3RhcnRzV2l0aCgvLi8pOyB9KSwgJ1N0cmluZycsIHtcclxuICAvLyAyMS4xLjMuMTggU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoKHNlYXJjaFN0cmluZyBbLCBwb3NpdGlvbiBdKVxyXG4gIHN0YXJ0c1dpdGg6IGZ1bmN0aW9uIHN0YXJ0c1dpdGgoc2VhcmNoU3RyaW5nIC8qLCBwb3NpdGlvbiA9IDAgKi8pe1xyXG4gICAgaWYoY29mKHNlYXJjaFN0cmluZykgPT0gJ1JlZ0V4cCcpdGhyb3cgVHlwZUVycm9yKCk7XHJcbiAgICB2YXIgdGhhdCAgPSBTdHJpbmcoJC5hc3NlcnREZWZpbmVkKHRoaXMpKVxyXG4gICAgICAsIGluZGV4ID0gJC50b0xlbmd0aChNYXRoLm1pbihhcmd1bWVudHNbMV0sIHRoYXQubGVuZ3RoKSk7XHJcbiAgICBzZWFyY2hTdHJpbmcgKz0gJyc7XHJcbiAgICByZXR1cm4gdGhhdC5zbGljZShpbmRleCwgaW5kZXggKyBzZWFyY2hTdHJpbmcubGVuZ3RoKSA9PT0gc2VhcmNoU3RyaW5nO1xyXG4gIH1cclxufSk7IiwiJ3VzZSBzdHJpY3QnO1xyXG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXHJcbnZhciAkICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCBzZXRUYWcgICA9IHJlcXVpcmUoJy4vJC5jb2YnKS5zZXRcclxuICAsIHVpZCAgICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpXHJcbiAgLCAkZGVmICAgICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwga2V5T2YgICAgPSByZXF1aXJlKCcuLyQua2V5b2YnKVxyXG4gICwgZW51bUtleXMgPSByZXF1aXJlKCcuLyQuZW51bS1rZXlzJylcclxuICAsIGFzc2VydE9iamVjdCA9IHJlcXVpcmUoJy4vJC5hc3NlcnQnKS5vYmpcclxuICAsIGhhcyAgICAgID0gJC5oYXNcclxuICAsICRjcmVhdGUgID0gJC5jcmVhdGVcclxuICAsIGdldERlc2MgID0gJC5nZXREZXNjXHJcbiAgLCBzZXREZXNjICA9ICQuc2V0RGVzY1xyXG4gICwgZGVzYyAgICAgPSAkLmRlc2NcclxuICAsIGdldE5hbWVzID0gJC5nZXROYW1lc1xyXG4gICwgdG9PYmplY3QgPSAkLnRvT2JqZWN0XHJcbiAgLCAkU3ltYm9sICA9ICQuZy5TeW1ib2xcclxuICAsIHNldHRlciAgID0gZmFsc2VcclxuICAsIFRBRyAgICAgID0gdWlkKCd0YWcnKVxyXG4gICwgSElEREVOICAgPSB1aWQoJ2hpZGRlbicpXHJcbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHt9XHJcbiAgLCBBbGxTeW1ib2xzID0ge31cclxuICAsIHVzZU5hdGl2ZSA9ICQuaXNGdW5jdGlvbigkU3ltYm9sKTtcclxuXHJcbmZ1bmN0aW9uIHdyYXAodGFnKXtcclxuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gJC5zZXQoJGNyZWF0ZSgkU3ltYm9sLnByb3RvdHlwZSksIFRBRywgdGFnKTtcclxuICAkLkRFU0MgJiYgc2V0dGVyICYmIHNldERlc2MoT2JqZWN0LnByb3RvdHlwZSwgdGFnLCB7XHJcbiAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKXtcclxuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xyXG4gICAgICBzZXREZXNjKHRoaXMsIHRhZywgZGVzYygxLCB2YWx1ZSkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBzeW07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xyXG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xyXG4gICAgaWYoIUQuZW51bWVyYWJsZSl7XHJcbiAgICAgIGlmKCFoYXMoaXQsIEhJRERFTikpc2V0RGVzYyhpdCwgSElEREVOLCBkZXNjKDEsIHt9KSk7XHJcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xyXG4gICAgICBELmVudW1lcmFibGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9IHJldHVybiBzZXREZXNjKGl0LCBrZXksIEQpO1xyXG59XHJcbmZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApe1xyXG4gIGFzc2VydE9iamVjdChpdCk7XHJcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9PYmplY3QoUCkpXHJcbiAgICAsIGkgICAgPSAwXHJcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxyXG4gICAgLCBrZXk7XHJcbiAgd2hpbGUobCA+IGkpZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcclxuICByZXR1cm4gaXQ7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcclxuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gJGNyZWF0ZShpdCkgOiBkZWZpbmVQcm9wZXJ0aWVzKCRjcmVhdGUoaXQpLCBQKTtcclxufVxyXG5mdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XHJcbiAgdmFyIEQgPSBnZXREZXNjKGl0ID0gdG9PYmplY3QoaXQpLCBrZXkpO1xyXG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xyXG4gIHJldHVybiBEO1xyXG59XHJcbmZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xyXG4gIHZhciBuYW1lcyAgPSBnZXROYW1lcyh0b09iamVjdChpdCkpXHJcbiAgICAsIHJlc3VsdCA9IFtdXHJcbiAgICAsIGkgICAgICA9IDBcclxuICAgICwga2V5O1xyXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOKXJlc3VsdC5wdXNoKGtleSk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpe1xyXG4gIHZhciBuYW1lcyAgPSBnZXROYW1lcyh0b09iamVjdChpdCkpXHJcbiAgICAsIHJlc3VsdCA9IFtdXHJcbiAgICAsIGkgICAgICA9IDBcclxuICAgICwga2V5O1xyXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pKXJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXHJcbmlmKCF1c2VOYXRpdmUpe1xyXG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woZGVzY3JpcHRpb24pe1xyXG4gICAgaWYodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3InKTtcclxuICAgIHJldHVybiB3cmFwKHVpZChkZXNjcmlwdGlvbikpO1xyXG4gIH07XHJcbiAgJC5oaWRlKCRTeW1ib2wucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIHRoaXNbVEFHXTtcclxuICB9KTtcclxuXHJcbiAgJC5jcmVhdGUgICAgID0gY3JlYXRlO1xyXG4gICQuc2V0RGVzYyAgICA9IGRlZmluZVByb3BlcnR5O1xyXG4gICQuZ2V0RGVzYyAgICA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcclxuICAkLnNldERlc2NzICAgPSBkZWZpbmVQcm9wZXJ0aWVzO1xyXG4gICQuZ2V0TmFtZXMgICA9IGdldE93blByb3BlcnR5TmFtZXM7XHJcbiAgJC5nZXRTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xyXG59XHJcblxyXG52YXIgc3ltYm9sU3RhdGljcyA9IHtcclxuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcclxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcclxuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcclxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXHJcbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcclxuICB9LFxyXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxyXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XHJcbiAgICByZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XHJcbiAgfSxcclxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXHJcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSBmYWxzZTsgfVxyXG59O1xyXG4vLyAxOS40LjIuMiBTeW1ib2wuaGFzSW5zdGFuY2VcclxuLy8gMTkuNC4yLjMgU3ltYm9sLmlzQ29uY2F0U3ByZWFkYWJsZVxyXG4vLyAxOS40LjIuNCBTeW1ib2wuaXRlcmF0b3JcclxuLy8gMTkuNC4yLjYgU3ltYm9sLm1hdGNoXHJcbi8vIDE5LjQuMi44IFN5bWJvbC5yZXBsYWNlXHJcbi8vIDE5LjQuMi45IFN5bWJvbC5zZWFyY2hcclxuLy8gMTkuNC4yLjEwIFN5bWJvbC5zcGVjaWVzXHJcbi8vIDE5LjQuMi4xMSBTeW1ib2wuc3BsaXRcclxuLy8gMTkuNC4yLjEyIFN5bWJvbC50b1ByaW1pdGl2ZVxyXG4vLyAxOS40LjIuMTMgU3ltYm9sLnRvU3RyaW5nVGFnXHJcbi8vIDE5LjQuMi4xNCBTeW1ib2wudW5zY29wYWJsZXNcclxuJC5lYWNoLmNhbGwoKFxyXG4gICAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCwnICtcclxuICAgICdzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xyXG4gICkuc3BsaXQoJywnKSwgZnVuY3Rpb24oaXQpe1xyXG4gICAgdmFyIHN5bSA9IHJlcXVpcmUoJy4vJC53a3MnKShpdCk7XHJcbiAgICBzeW1ib2xTdGF0aWNzW2l0XSA9IHVzZU5hdGl2ZSA/IHN5bSA6IHdyYXAoc3ltKTtcclxuICB9XHJcbik7XHJcblxyXG5zZXR0ZXIgPSB0cnVlO1xyXG5cclxuJGRlZigkZGVmLkcgKyAkZGVmLlcsIHtTeW1ib2w6ICRTeW1ib2x9KTtcclxuXHJcbiRkZWYoJGRlZi5TLCAnU3ltYm9sJywgc3ltYm9sU3RhdGljcyk7XHJcblxyXG4kZGVmKCRkZWYuUyArICRkZWYuRiAqICF1c2VOYXRpdmUsICdPYmplY3QnLCB7XHJcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxyXG4gIGNyZWF0ZTogY3JlYXRlLFxyXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxyXG4gIGRlZmluZVByb3BlcnR5OiBkZWZpbmVQcm9wZXJ0eSxcclxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxyXG4gIGRlZmluZVByb3BlcnRpZXM6IGRlZmluZVByb3BlcnRpZXMsXHJcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxyXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxyXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXHJcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogZ2V0T3duUHJvcGVydHlOYW1lcyxcclxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXHJcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcclxufSk7XHJcblxyXG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXHJcbnNldFRhZygkU3ltYm9sLCAnU3ltYm9sJyk7XHJcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cclxuc2V0VGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XHJcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXHJcbnNldFRhZygkLmcuSlNPTiwgJ0pTT04nLCB0cnVlKTsiLCIndXNlIHN0cmljdCc7XHJcbnZhciAkICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgd2VhayAgICAgID0gcmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24td2VhaycpXHJcbiAgLCBsZWFrU3RvcmUgPSB3ZWFrLmxlYWtTdG9yZVxyXG4gICwgSUQgICAgICAgID0gd2Vhay5JRFxyXG4gICwgV0VBSyAgICAgID0gd2Vhay5XRUFLXHJcbiAgLCBoYXMgICAgICAgPSAkLmhhc1xyXG4gICwgaXNPYmplY3QgID0gJC5pc09iamVjdFxyXG4gICwgaXNGcm96ZW4gID0gT2JqZWN0LmlzRnJvemVuIHx8ICQuY29yZS5PYmplY3QuaXNGcm96ZW5cclxuICAsIHRtcCAgICAgICA9IHt9O1xyXG5cclxuLy8gMjMuMyBXZWFrTWFwIE9iamVjdHNcclxudmFyIFdlYWtNYXAgPSByZXF1aXJlKCcuLyQuY29sbGVjdGlvbicpKCdXZWFrTWFwJywge1xyXG4gIC8vIDIzLjMuMy4zIFdlYWtNYXAucHJvdG90eXBlLmdldChrZXkpXHJcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KXtcclxuICAgIGlmKGlzT2JqZWN0KGtleSkpe1xyXG4gICAgICBpZihpc0Zyb3plbihrZXkpKXJldHVybiBsZWFrU3RvcmUodGhpcykuZ2V0KGtleSk7XHJcbiAgICAgIGlmKGhhcyhrZXksIFdFQUspKXJldHVybiBrZXlbV0VBS11bdGhpc1tJRF1dO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLy8gMjMuMy4zLjUgV2Vha01hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXHJcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSl7XHJcbiAgICByZXR1cm4gd2Vhay5kZWYodGhpcywga2V5LCB2YWx1ZSk7XHJcbiAgfVxyXG59LCB3ZWFrLCB0cnVlLCB0cnVlKTtcclxuXHJcbi8vIElFMTEgV2Vha01hcCBmcm96ZW4ga2V5cyBmaXhcclxuaWYoJC5GVyAmJiBuZXcgV2Vha01hcCgpLnNldCgoT2JqZWN0LmZyZWV6ZSB8fCBPYmplY3QpKHRtcCksIDcpLmdldCh0bXApICE9IDcpe1xyXG4gICQuZWFjaC5jYWxsKFsnZGVsZXRlJywgJ2hhcycsICdnZXQnLCAnc2V0J10sIGZ1bmN0aW9uKGtleSl7XHJcbiAgICB2YXIgbWV0aG9kID0gV2Vha01hcC5wcm90b3R5cGVba2V5XTtcclxuICAgIFdlYWtNYXAucHJvdG90eXBlW2tleV0gPSBmdW5jdGlvbihhLCBiKXtcclxuICAgICAgLy8gc3RvcmUgZnJvemVuIG9iamVjdHMgb24gbGVha3kgbWFwXHJcbiAgICAgIGlmKGlzT2JqZWN0KGEpICYmIGlzRnJvemVuKGEpKXtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gbGVha1N0b3JlKHRoaXMpW2tleV0oYSwgYik7XHJcbiAgICAgICAgcmV0dXJuIGtleSA9PSAnc2V0JyA/IHRoaXMgOiByZXN1bHQ7XHJcbiAgICAgIC8vIHN0b3JlIGFsbCB0aGUgcmVzdCBvbiBuYXRpdmUgd2Vha21hcFxyXG4gICAgICB9IHJldHVybiBtZXRob2QuY2FsbCh0aGlzLCBhLCBiKTtcclxuICAgIH07XHJcbiAgfSk7XHJcbn0iLCIndXNlIHN0cmljdCc7XHJcbnZhciB3ZWFrID0gcmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24td2VhaycpO1xyXG5cclxuLy8gMjMuNCBXZWFrU2V0IE9iamVjdHNcclxucmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24nKSgnV2Vha1NldCcsIHtcclxuICAvLyAyMy40LjMuMSBXZWFrU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXHJcbiAgYWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpe1xyXG4gICAgcmV0dXJuIHdlYWsuZGVmKHRoaXMsIHZhbHVlLCB0cnVlKTtcclxuICB9XHJcbn0sIHdlYWssIGZhbHNlLCB0cnVlKTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vZG9tZW5pYy9BcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcclxudmFyICRkZWYgICAgICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwgJGluY2x1ZGVzID0gcmVxdWlyZSgnLi8kLmFycmF5LWluY2x1ZGVzJykodHJ1ZSk7XHJcbiRkZWYoJGRlZi5QLCAnQXJyYXknLCB7XHJcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKGVsIC8qLCBmcm9tSW5kZXggPSAwICovKXtcclxuICAgIHJldHVybiAkaW5jbHVkZXModGhpcywgZWwsIGFyZ3VtZW50c1sxXSk7XHJcbiAgfVxyXG59KTtcclxucmVxdWlyZSgnLi8kLnVuc2NvcGUnKSgnaW5jbHVkZXMnKTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXHJcbnJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uLXRvLWpzb24nKSgnTWFwJyk7IiwiLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vV2ViUmVmbGVjdGlvbi85MzUzNzgxXHJcbnZhciAkICAgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsICRkZWYgICAgPSByZXF1aXJlKCcuLyQuZGVmJylcclxuICAsIG93bktleXMgPSByZXF1aXJlKCcuLyQub3duLWtleXMnKTtcclxuXHJcbiRkZWYoJGRlZi5TLCAnT2JqZWN0Jywge1xyXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnM6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqZWN0KXtcclxuICAgIHZhciBPICAgICAgPSAkLnRvT2JqZWN0KG9iamVjdClcclxuICAgICAgLCByZXN1bHQgPSB7fTtcclxuICAgICQuZWFjaC5jYWxsKG93bktleXMoTyksIGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgICQuc2V0RGVzYyhyZXN1bHQsIGtleSwgJC5kZXNjKDAsICQuZ2V0RGVzYyhPLCBrZXkpKSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59KTsiLCIvLyBodHRwOi8vZ29vLmdsL1hrQnJqRFxyXG52YXIgJCAgICA9IHJlcXVpcmUoJy4vJCcpXHJcbiAgLCAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpO1xyXG5mdW5jdGlvbiBjcmVhdGVPYmplY3RUb0FycmF5KGlzRW50cmllcyl7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCl7XHJcbiAgICB2YXIgTyAgICAgID0gJC50b09iamVjdChvYmplY3QpXHJcbiAgICAgICwga2V5cyAgID0gJC5nZXRLZXlzKE8pXHJcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcclxuICAgICAgLCBpICAgICAgPSAwXHJcbiAgICAgICwgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKVxyXG4gICAgICAsIGtleTtcclxuICAgIGlmKGlzRW50cmllcyl3aGlsZShsZW5ndGggPiBpKXJlc3VsdFtpXSA9IFtrZXkgPSBrZXlzW2krK10sIE9ba2V5XV07XHJcbiAgICBlbHNlIHdoaWxlKGxlbmd0aCA+IGkpcmVzdWx0W2ldID0gT1trZXlzW2krK11dO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9O1xyXG59XHJcbiRkZWYoJGRlZi5TLCAnT2JqZWN0Jywge1xyXG4gIHZhbHVlczogIGNyZWF0ZU9iamVjdFRvQXJyYXkoZmFsc2UpLFxyXG4gIGVudHJpZXM6IGNyZWF0ZU9iamVjdFRvQXJyYXkodHJ1ZSlcclxufSk7IiwiLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20va2FuZ2F4Lzk2OTgxMDBcclxudmFyICRkZWYgPSByZXF1aXJlKCcuLyQuZGVmJyk7XHJcbiRkZWYoJGRlZi5TLCAnUmVnRXhwJywge1xyXG4gIGVzY2FwZTogcmVxdWlyZSgnLi8kLnJlcGxhY2VyJykoLyhbXFxcXFxcLVtcXF17fSgpKis/LixeJHxdKS9nLCAnXFxcXCQxJywgdHJ1ZSlcclxufSk7IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxyXG5yZXF1aXJlKCcuLyQuY29sbGVjdGlvbi10by1qc29uJykoJ1NldCcpOyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL1N0cmluZy5wcm90b3R5cGUuYXRcclxuJ3VzZSBzdHJpY3QnO1xyXG52YXIgJGRlZiA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwgJGF0ICA9IHJlcXVpcmUoJy4vJC5zdHJpbmctYXQnKSh0cnVlKTtcclxuJGRlZigkZGVmLlAsICdTdHJpbmcnLCB7XHJcbiAgYXQ6IGZ1bmN0aW9uIGF0KHBvcyl7XHJcbiAgICByZXR1cm4gJGF0KHRoaXMsIHBvcyk7XHJcbiAgfVxyXG59KTsiLCIndXNlIHN0cmljdCc7XHJcbnZhciAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpXHJcbiAgLCAkcGFkID0gcmVxdWlyZSgnLi8kLnN0cmluZy1wYWQnKTtcclxuJGRlZigkZGVmLlAsICdTdHJpbmcnLCB7XHJcbiAgbHBhZDogZnVuY3Rpb24gbHBhZChuKXtcclxuICAgIHJldHVybiAkcGFkKHRoaXMsIG4sIGFyZ3VtZW50c1sxXSwgdHJ1ZSk7XHJcbiAgfVxyXG59KTsiLCIndXNlIHN0cmljdCc7XHJcbnZhciAkZGVmID0gcmVxdWlyZSgnLi8kLmRlZicpXHJcbiAgLCAkcGFkID0gcmVxdWlyZSgnLi8kLnN0cmluZy1wYWQnKTtcclxuJGRlZigkZGVmLlAsICdTdHJpbmcnLCB7XHJcbiAgcnBhZDogZnVuY3Rpb24gcnBhZChuKXtcclxuICAgIHJldHVybiAkcGFkKHRoaXMsIG4sIGFyZ3VtZW50c1sxXSwgZmFsc2UpO1xyXG4gIH1cclxufSk7IiwiLy8gSmF2YVNjcmlwdCAxLjYgLyBTdHJhd21hbiBhcnJheSBzdGF0aWNzIHNoaW1cclxudmFyICQgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgJGRlZiAgICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwgJEFycmF5ICA9ICQuY29yZS5BcnJheSB8fCBBcnJheVxyXG4gICwgc3RhdGljcyA9IHt9O1xyXG5mdW5jdGlvbiBzZXRTdGF0aWNzKGtleXMsIGxlbmd0aCl7XHJcbiAgJC5lYWNoLmNhbGwoa2V5cy5zcGxpdCgnLCcpLCBmdW5jdGlvbihrZXkpe1xyXG4gICAgaWYobGVuZ3RoID09IHVuZGVmaW5lZCAmJiBrZXkgaW4gJEFycmF5KXN0YXRpY3Nba2V5XSA9ICRBcnJheVtrZXldO1xyXG4gICAgZWxzZSBpZihrZXkgaW4gW10pc3RhdGljc1trZXldID0gcmVxdWlyZSgnLi8kLmN0eCcpKEZ1bmN0aW9uLmNhbGwsIFtdW2tleV0sIGxlbmd0aCk7XHJcbiAgfSk7XHJcbn1cclxuc2V0U3RhdGljcygncG9wLHJldmVyc2Usc2hpZnQsa2V5cyx2YWx1ZXMsZW50cmllcycsIDEpO1xyXG5zZXRTdGF0aWNzKCdpbmRleE9mLGV2ZXJ5LHNvbWUsZm9yRWFjaCxtYXAsZmlsdGVyLGZpbmQsZmluZEluZGV4LGluY2x1ZGVzJywgMyk7XHJcbnNldFN0YXRpY3MoJ2pvaW4sc2xpY2UsY29uY2F0LHB1c2gsc3BsaWNlLHVuc2hpZnQsc29ydCxsYXN0SW5kZXhPZiwnICtcclxuICAgICAgICAgICAncmVkdWNlLHJlZHVjZVJpZ2h0LGNvcHlXaXRoaW4sZmlsbCx0dXJuJyk7XHJcbiRkZWYoJGRlZi5TLCAnQXJyYXknLCBzdGF0aWNzKTsiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xyXG52YXIgJCAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxyXG4gICwgSXRlcmF0b3JzICAgPSByZXF1aXJlKCcuLyQuaXRlcicpLkl0ZXJhdG9yc1xyXG4gICwgSVRFUkFUT1IgICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcclxuICAsIEFycmF5VmFsdWVzID0gSXRlcmF0b3JzLkFycmF5XHJcbiAgLCBOb2RlTGlzdCAgICA9ICQuZy5Ob2RlTGlzdDtcclxuaWYoJC5GVyAmJiBOb2RlTGlzdCAmJiAhKElURVJBVE9SIGluIE5vZGVMaXN0LnByb3RvdHlwZSkpe1xyXG4gICQuaGlkZShOb2RlTGlzdC5wcm90b3R5cGUsIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XHJcbn1cclxuSXRlcmF0b3JzLk5vZGVMaXN0ID0gQXJyYXlWYWx1ZXM7IiwidmFyICRkZWYgID0gcmVxdWlyZSgnLi8kLmRlZicpXHJcbiAgLCAkdGFzayA9IHJlcXVpcmUoJy4vJC50YXNrJyk7XHJcbiRkZWYoJGRlZi5HICsgJGRlZi5CLCB7XHJcbiAgc2V0SW1tZWRpYXRlOiAgICR0YXNrLnNldCxcclxuICBjbGVhckltbWVkaWF0ZTogJHRhc2suY2xlYXJcclxufSk7IiwiLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxyXG52YXIgJCAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcclxuICAsICRkZWYgICAgICA9IHJlcXVpcmUoJy4vJC5kZWYnKVxyXG4gICwgaW52b2tlICAgID0gcmVxdWlyZSgnLi8kLmludm9rZScpXHJcbiAgLCBwYXJ0aWFsICAgPSByZXF1aXJlKCcuLyQucGFydGlhbCcpXHJcbiAgLCBuYXZpZ2F0b3IgPSAkLmcubmF2aWdhdG9yXHJcbiAgLCBNU0lFICAgICAgPSAhIW5hdmlnYXRvciAmJiAvTVNJRSAuXFwuLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXHJcbmZ1bmN0aW9uIHdyYXAoc2V0KXtcclxuICByZXR1cm4gTVNJRSA/IGZ1bmN0aW9uKGZuLCB0aW1lIC8qLCAuLi5hcmdzICovKXtcclxuICAgIHJldHVybiBzZXQoaW52b2tlKFxyXG4gICAgICBwYXJ0aWFsLFxyXG4gICAgICBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMiksXHJcbiAgICAgICQuaXNGdW5jdGlvbihmbikgPyBmbiA6IEZ1bmN0aW9uKGZuKVxyXG4gICAgKSwgdGltZSk7XHJcbiAgfSA6IHNldDtcclxufVxyXG4kZGVmKCRkZWYuRyArICRkZWYuQiArICRkZWYuRiAqIE1TSUUsIHtcclxuICBzZXRUaW1lb3V0OiAgd3JhcCgkLmcuc2V0VGltZW91dCksXHJcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoJC5nLnNldEludGVydmFsKVxyXG59KTsiLCJyZXF1aXJlKCcuL21vZHVsZXMvZXM1Jyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5pcycpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5zdGF0aWNzLWFjY2VwdC1wcmltaXRpdmVzJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZScpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmZ1bmN0aW9uLmhhcy1pbnN0YW5jZScpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5jb25zdHJ1Y3RvcicpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5zdGF0aWNzJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aCcpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5mcm9tLWNvZGUtcG9pbnQnKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcucmF3Jyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLmNvZGUtcG9pbnQtYXQnKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuZW5kcy13aXRoJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLmluY2x1ZGVzJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLnJlcGVhdCcpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5zdGFydHMtd2l0aCcpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmZyb20nKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5vZicpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuc3BlY2llcycpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmNvcHktd2l0aGluJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuZmlsbCcpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmZpbmQnKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5maW5kLWluZGV4Jyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVnZXhwJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hcCcpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnNldCcpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LndlYWstbWFwJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYud2Vhay1zZXQnKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0Jyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuYXJyYXkuaW5jbHVkZXMnKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zdHJpbmcuYXQnKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zdHJpbmcubHBhZCcpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnN0cmluZy5ycGFkJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcucmVnZXhwLmVzY2FwZScpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzJyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcub2JqZWN0LnRvLWFycmF5Jyk7XHJcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcubWFwLnRvLWpzb24nKTtcclxucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zZXQudG8tanNvbicpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvanMuYXJyYXkuc3RhdGljcycpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvd2ViLnRpbWVycycpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvd2ViLmltbWVkaWF0ZScpO1xyXG5yZXF1aXJlKCcuL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbW9kdWxlcy8kJykuY29yZTtcclxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9tYXN0ZXIvTElDRU5TRSBmaWxlLiBBblxuICogYWRkaXRpb25hbCBncmFudCBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluXG4gKiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgaXRlcmF0b3JTeW1ib2wgPVxuICAgIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZSgob3V0ZXJGbiB8fCBHZW5lcmF0b3IpLnByb3RvdHlwZSk7XG5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoXG4gICAgICBpbm5lckZuLCBzZWxmIHx8IG51bGwsXG4gICAgICBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSlcbiAgICApO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPSBHZW5lcmF0b3IucHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbmVyYXRvciA9IHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpO1xuICAgICAgdmFyIGNhbGxOZXh0ID0gc3RlcC5iaW5kKGdlbmVyYXRvciwgXCJuZXh0XCIpO1xuICAgICAgdmFyIGNhbGxUaHJvdyA9IHN0ZXAuYmluZChnZW5lcmF0b3IsIFwidGhyb3dcIik7XG5cbiAgICAgIGZ1bmN0aW9uIHN0ZXAobWV0aG9kLCBhcmcpIHtcbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcbiAgICAgICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICAgIHJlc29sdmUoaW5mby52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGluZm8udmFsdWUpLnRoZW4oY2FsbE5leHQsIGNhbGxUaHJvdyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2FsbE5leHQoKTtcbiAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIiB8fFxuICAgICAgICAgICAgICAobWV0aG9kID09PSBcInRocm93XCIgJiYgZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kXSA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgLy8gQSByZXR1cm4gb3IgdGhyb3cgKHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyB0aHJvd1xuICAgICAgICAgICAgLy8gbWV0aG9kKSBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgICAgdmFyIHJldHVybk1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdO1xuICAgICAgICAgICAgaWYgKHJldHVybk1ldGhvZCkge1xuICAgICAgICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gocmV0dXJuTWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgYXJnKTtcbiAgICAgICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcmV0dXJuIG1ldGhvZCB0aHJldyBhbiBleGNlcHRpb24sIGxldCB0aGF0XG4gICAgICAgICAgICAgICAgLy8gZXhjZXB0aW9uIHByZXZhaWwgb3ZlciB0aGUgb3JpZ2luYWwgcmV0dXJuIG9yIHRocm93LlxuICAgICAgICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICAgICAgLy8gQ29udGludWUgd2l0aCB0aGUgb3V0ZXIgcmV0dXJuLCBub3cgdGhhdCB0aGUgZGVsZWdhdGVcbiAgICAgICAgICAgICAgLy8gaXRlcmF0b3IgaGFzIGJlZW4gdGVybWluYXRlZC5cbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKFxuICAgICAgICAgICAgZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kXSxcbiAgICAgICAgICAgIGRlbGVnYXRlLml0ZXJhdG9yLFxuICAgICAgICAgICAgYXJnXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gTGlrZSByZXR1cm5pbmcgZ2VuZXJhdG9yLnRocm93KHVuY2F1Z2h0KSwgYnV0IHdpdGhvdXQgdGhlXG4gICAgICAgICAgICAvLyBvdmVyaGVhZCBvZiBhbiBleHRyYSBmdW5jdGlvbiBjYWxsLlxuICAgICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIERlbGVnYXRlIGdlbmVyYXRvciByYW4gYW5kIGhhbmRsZWQgaXRzIG93biBleGNlcHRpb25zIHNvXG4gICAgICAgICAgLy8gcmVnYXJkbGVzcyBvZiB3aGF0IHRoZSBtZXRob2Qgd2FzLCB3ZSBjb250aW51ZSBhcyBpZiBpdCBpc1xuICAgICAgICAgIC8vIFwibmV4dFwiIHdpdGggYW4gdW5kZWZpbmVkIGFyZy5cbiAgICAgICAgICBtZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG4gICAgICAgICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG4gICAgICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkKSB7XG4gICAgICAgICAgICBjb250ZXh0LnNlbnQgPSBhcmc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBjb250ZXh0LnNlbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oYXJnKSkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgICBtZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBhcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIHZhciBpbmZvID0ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGlmIChjb250ZXh0LmRlbGVnYXRlICYmIG1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBkZWZpbmVHZW5lcmF0b3JNZXRob2QobWV0aG9kKSB7XG4gICAgR3BbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgfTtcbiAgfVxuICBkZWZpbmVHZW5lcmF0b3JNZXRob2QoXCJuZXh0XCIpO1xuICBkZWZpbmVHZW5lcmF0b3JNZXRob2QoXCJ0aHJvd1wiKTtcbiAgZGVmaW5lR2VuZXJhdG9yTWV0aG9kKFwicmV0dXJuXCIpO1xuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICB0aGlzLnNlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgLy8gUHJlLWluaXRpYWxpemUgYXQgbGVhc3QgMjAgdGVtcG9yYXJ5IHZhcmlhYmxlcyB0byBlbmFibGUgaGlkZGVuXG4gICAgICAvLyBjbGFzcyBvcHRpbWl6YXRpb25zIGZvciBzaW1wbGUgZ2VuZXJhdG9ycy5cbiAgICAgIGZvciAodmFyIHRlbXBJbmRleCA9IDAsIHRlbXBOYW1lO1xuICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCB0ZW1wTmFtZSA9IFwidFwiICsgdGVtcEluZGV4KSB8fCB0ZW1wSW5kZXggPCAyMDtcbiAgICAgICAgICAgKyt0ZW1wSW5kZXgpIHtcbiAgICAgICAgdGhpc1t0ZW1wTmFtZV0gPSBudWxsO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG4gICAgICAgIHJldHVybiAhIWNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBBbW9uZyB0aGUgdmFyaW91cyB0cmlja3MgZm9yIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsXG4gIC8vIG9iamVjdCwgdGhpcyBzZWVtcyB0byBiZSB0aGUgbW9zdCByZWxpYWJsZSB0ZWNobmlxdWUgdGhhdCBkb2VzIG5vdFxuICAvLyB1c2UgaW5kaXJlY3QgZXZhbCAod2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kpLlxuICB0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDpcbiAgdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiA/IHdpbmRvdyA6XG4gIHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHRoaXNcbik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2xpYi9iYWJlbC9wb2x5ZmlsbFwiKTtcbiJdfQ==
