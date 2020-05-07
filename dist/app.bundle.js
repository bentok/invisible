/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/const/galaxy.const.ts":
/*!***********************************!*\
  !*** ./src/const/galaxy.const.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GALAXY = {
    width: 1800,
    height: 1200,
    sectorSize: 16,
    planetSources: ['Earth', 'Jupiter', 'Mars', 'Moon'],
    starColors: [0xffffff, 0xfcba03, 0x35fc03, 0x05f2ee, 0x9d02eb, 0xed0767],
};


/***/ }),

/***/ "./src/interfaces/interfaces.ts":
/*!**************************************!*\
  !*** ./src/interfaces/interfaces.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var VelocityDirection;
(function (VelocityDirection) {
    VelocityDirection[VelocityDirection["NOT_SET"] = 0] = "NOT_SET";
    VelocityDirection[VelocityDirection["X"] = 1] = "X";
    VelocityDirection[VelocityDirection["Y"] = 2] = "Y";
})(VelocityDirection = exports.VelocityDirection || (exports.VelocityDirection = {}));
var PlayerAction;
(function (PlayerAction) {
    PlayerAction["FIRE_LASER"] = "FIRE_LASER";
})(PlayerAction = exports.PlayerAction || (exports.PlayerAction = {}));


/***/ }),

/***/ "./src/lib/Math.ts":
/*!*************************!*\
  !*** ./src/lib/Math.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function between(min, max) {
    return Phaser.Math.Between(min, max);
}
exports.between = between;


/***/ }),

/***/ "./src/lib/game-objects.class.ts":
/*!***************************************!*\
  !*** ./src/lib/game-objects.class.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Text extends Phaser.GameObjects.Text {
}
exports.Text = Text;
class Graphics extends Phaser.GameObjects.Graphics {
}
exports.Graphics = Graphics;


/***/ }),

/***/ "./src/lib/index.ts":
/*!**************************!*\
  !*** ./src/lib/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./scene.class */ "./src/lib/scene.class.ts"));
__export(__webpack_require__(/*! ./game-objects.class */ "./src/lib/game-objects.class.ts"));


/***/ }),

/***/ "./src/lib/scene.class.ts":
/*!********************************!*\
  !*** ./src/lib/scene.class.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Scene extends Phaser.Scene {
}
exports.Scene = Scene;


/***/ }),

/***/ "./src/lib/sprite.class.ts":
/*!*********************************!*\
  !*** ./src/lib/sprite.class.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Sprite extends Phaser.Physics.Matter.Sprite {
}
exports.Sprite = Sprite;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Phaser = __importStar(__webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js"));
const scenes_1 = __webpack_require__(/*! ./scenes */ "./src/scenes/index.ts");
const gameConfig = {
    title: 'Invisible (Working Title)',
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'matter',
        matter: {
            gravity: {
                x: 0,
                y: 0,
            },
        },
    },
    scene: [scenes_1.BootScene, scenes_1.MainMenuScene, scenes_1.GameScene],
    parent: 'content',
    backgroundColor: '#000000',
    render: { pixelArt: true, antialias: true },
};
exports.game = new Phaser.Game(gameConfig);


/***/ }),

/***/ "./src/menu-button.text.ts":
/*!*********************************!*\
  !*** ./src/menu-button.text.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = __webpack_require__(/*! ./lib */ "./src/lib/index.ts");
const buttonRestStyle = {
    fill: '#FFFFFF',
};
const buttonHoverStyle = {
    fill: '#7CFC00',
};
const buttonActiveStyle = {
    fill: '#000000',
};
class MenuButton extends lib_1.Text {
    constructor(scene, x, y, text, onClick) {
        super(scene, x, y, text, buttonRestStyle);
        scene.add.existing(this);
        this.setInteractive({ useHandCursor: true })
            .on('pointerover', this.enterMenuButtonHoverState)
            .on('pointerout', this.enterMenuButtonRestState)
            .on('pointerdown', this.enterMenuButtonActiveState)
            .on('pointerup', this.enterMenuButtonHoverState);
        if (onClick) {
            this.on('pointerup', onClick);
        }
    }
    enterMenuButtonHoverState() {
        this.setStyle(buttonHoverStyle);
    }
    enterMenuButtonRestState() {
        this.setStyle(buttonRestStyle);
    }
    enterMenuButtonActiveState() {
        this.setStyle(buttonActiveStyle);
    }
}
exports.MenuButton = MenuButton;


/***/ }),

/***/ "./src/objects/controls/player-controller.ts":
/*!***************************************************!*\
  !*** ./src/objects/controls/player-controller.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const player_state_service_1 = __webpack_require__(/*! ./../../services/player-state.service */ "./src/services/player-state.service.ts");
const interfaces_1 = __webpack_require__(/*! ../../interfaces/interfaces */ "./src/interfaces/interfaces.ts");
class PlayerController {
    constructor() {
        this.gameKey = 'Game';
        this.keyEvents = [];
        this._playerState = new player_state_service_1.PlayerState();
    }
    init() {
        this.keyEvents = this.createKeyMappings();
    }
    handleKeyPress(key) {
        var _a;
        const keyFound = this.keyEvents.find(keyEvent => keyEvent.key === key);
        return (_a = keyFound === null || keyFound === void 0 ? void 0 : keyFound.action) !== null && _a !== void 0 ? _a : null;
    }
    createKeyMappings() {
        const KEY_MAPPINGS = [
            {
                key: Phaser.Input.Keyboard.KeyCodes.SPACE,
                action: interfaces_1.PlayerAction.FIRE_LASER
            }
        ];
        return KEY_MAPPINGS;
    }
}
exports.PlayerController = PlayerController;


/***/ }),

/***/ "./src/scenes/boot.scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/boot.scene.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = __webpack_require__(/*! ../lib */ "./src/lib/index.ts");
const sceneConfig = {
    active: false,
    visible: false,
    key: 'Boot',
};
class BootScene extends lib_1.Scene {
    constructor() {
        super(sceneConfig);
        this.getGameWidth = () => {
            return this.game.scale.width;
        };
        this.getGameHeight = () => {
            return this.game.scale.height;
        };
    }
    preload() {
        const halfWidth = this.getGameWidth() * 0.5;
        const halfHeight = this.getGameHeight() * 0.5;
        const progressBarHeight = 100;
        const progressBarWidth = 400;
        const progressBarContainer = this.add.rectangle(halfWidth, halfHeight, progressBarWidth, progressBarHeight, 0x000000);
        const progressBar = this.add.rectangle(halfWidth + 20 - progressBarContainer.width * 0.5, halfHeight, 10, progressBarHeight - 20, 0x888888);
        const loadingText = this.add.text(halfWidth - 75, halfHeight - 100, 'Loading...')
            .setFontSize(24);
        const percentText = this.add.text(halfWidth - 25, halfHeight, '0%').setFontSize(24);
        const assetText = this.add.text(halfWidth - 25, halfHeight + 100, '').setFontSize(24);
        this.load.on('progress', (value) => {
            progressBar.width = (progressBarWidth - 30) * value;
            const percent = value * 100;
            percentText.setText(`${percent}%`);
        });
        this.load.on('fileprogress', (file) => {
            assetText.setText(file.key);
        });
        this.load.on('complete', () => {
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
            progressBar.destroy();
            progressBarContainer.destroy();
            this.scene.start('MainMenu');
        });
        this.loadAssets();
    }
    loadAssets() {
        this.load.image('IdleFrog', 'src/assets/Ninja Frog/Idle (32x32).png');
        this.load.image('GalaxyBackground', './src/assets/space/backgrounds/color-stars-bg.png');
        this.load.image('Earth', './src/assets/space/planets/Earth.png');
        this.load.image('Jupiter', './src/assets/space/planets/Jupiter.png');
        this.load.image('Mars', './src/assets/space/planets/Mars.png');
        this.load.image('Moon', './src/assets/space/planets/Moon.png');
        this.load.image('GreenShip', './src/assets/itchio_space_pixels/pixel_ship.png');
        this.load.image('RedShip', './src/assets/itchio_space_pixels/pixel_ship_red.png');
        this.load.image('SpaceStation', './src/assets/itchio_space_pixels/pixel_station_blue.png');
        this.load.image('Laser', './src/assets/itchio_space_pixels/laser.png');
        this.load.audio('music', ['./src/assets/sound/Space Riddle.mp3']);
    }
}
exports.BootScene = BootScene;


/***/ }),

/***/ "./src/scenes/game.scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/game.scene.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = __webpack_require__(/*! ../lib */ "./src/lib/index.ts");
const galaxy_const_1 = __webpack_require__(/*! ../const/galaxy.const */ "./src/const/galaxy.const.ts");
const player_sprite_1 = __webpack_require__(/*! ../sprites/player.sprite */ "./src/sprites/player.sprite.ts");
const planet_sprite_1 = __webpack_require__(/*! ../sprites/planet.sprite */ "./src/sprites/planet.sprite.ts");
const stars_service_1 = __webpack_require__(/*! ../services/stars.service */ "./src/services/stars.service.ts");
const space_station_sprite_1 = __webpack_require__(/*! ../sprites/space-station.sprite */ "./src/sprites/space-station.sprite.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
const enemy_sprite_1 = __webpack_require__(/*! ../sprites/enemy.sprite */ "./src/sprites/enemy.sprite.ts");
const asteroid_sprite_1 = __webpack_require__(/*! ../sprites/asteroid.sprite */ "./src/sprites/asteroid.sprite.ts");
const Math_1 = __webpack_require__(/*! ../lib/Math */ "./src/lib/Math.ts");
const sceneConfig = {
    active: false,
    visible: false,
    key: 'Game',
};
class GameScene extends lib_1.Scene {
    constructor() {
        super(sceneConfig);
    }
    create() {
        this.sound.add('music').play();
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.cameras.main.setBounds(0, 0, galaxy_const_1.GALAXY.width, galaxy_const_1.GALAXY.height);
        this.cameras.main.setZoom(2);
        this.matter.enableAttractorPlugin();
        this.asteroids = [];
        this.numAsteroids = 10;
        const earth = new planet_sprite_1.Planet(this.matter.world, { x: galaxy_const_1.GALAXY.width - 500, y: 200, name: 'Earth' }, { scale: 3 });
        this.add.existing(earth);
        const mars = new planet_sprite_1.Planet(this.matter.world, { x: 300, y: 600, name: 'Mars' }, { scale: 3 });
        this.add.existing(mars);
        const jupiter = new planet_sprite_1.Planet(this.matter.world, { x: galaxy_const_1.GALAXY.width / 2, y: galaxy_const_1.GALAXY.height / 2, name: 'Jupiter' }, { isAttractor: true, scale: 5, mass: 5 });
        this.add.existing(jupiter);
        const spaceStation = new space_station_sprite_1.SpaceStation(this.matter.world, { x: galaxy_const_1.GALAXY.width - 200, y: galaxy_const_1.GALAXY.height - 300, name: 'SpaceStation' }, {});
        this.add.existing(spaceStation);
        this.player = new player_sprite_1.Player(this.matter.world, { x: 20, y: 300, name: 'GreenShip' });
        this.add.existing(this.player);
        rxjs_1.fromEvent(document, 'keydown').subscribe((keyPressed) => {
            this.player.handleAction(keyPressed.keyCode);
        });
        this.enemy = new enemy_sprite_1.Enemy(this.matter.world, { x: 600, y: 600, name: 'RedShip' });
        this.add.existing(this.enemy);
        for (let i = 0; i < this.numAsteroids; i++) {
            let asteroidX = Math_1.between(0, galaxy_const_1.GALAXY.width);
            let asteroidY = Math_1.between(0, galaxy_const_1.GALAXY.height);
            let asteroid = new asteroid_sprite_1.Asteroid(this.matter.world, { x: asteroidX, y: asteroidY, name: 'fake' });
            this.add.existing(asteroid);
            this.asteroids.push(asteroid);
        }
        stars_service_1.generateStars(this, galaxy_const_1.GALAXY.width, galaxy_const_1.GALAXY.height, 800);
    }
    update() {
        this.player.manageControls(this.cursorKeys);
        this.cameras.main.centerOn(this.player.x, this.player.y);
        this.enemy.update(this.player);
        for (let i = 0; i < this.numAsteroids; i++) {
            this.asteroids[i].update();
        }
    }
}
exports.GameScene = GameScene;


/***/ }),

/***/ "./src/scenes/index.ts":
/*!*****************************!*\
  !*** ./src/scenes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var main_menu_scene_1 = __webpack_require__(/*! ./main-menu.scene */ "./src/scenes/main-menu.scene.ts");
exports.MainMenuScene = main_menu_scene_1.MainMenuScene;
var boot_scene_1 = __webpack_require__(/*! ./boot.scene */ "./src/scenes/boot.scene.ts");
exports.BootScene = boot_scene_1.BootScene;
var game_scene_1 = __webpack_require__(/*! ./game.scene */ "./src/scenes/game.scene.ts");
exports.GameScene = game_scene_1.GameScene;


/***/ }),

/***/ "./src/scenes/main-menu.scene.ts":
/*!***************************************!*\
  !*** ./src/scenes/main-menu.scene.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = __webpack_require__(/*! ../lib */ "./src/lib/index.ts");
const menu_button_text_1 = __webpack_require__(/*! ../menu-button.text */ "./src/menu-button.text.ts");
const sceneConfig = {
    active: false,
    visible: false,
    key: 'MainMenu',
};
class MainMenuScene extends lib_1.Scene {
    constructor() {
        super(sceneConfig);
    }
    create() {
        this.add.text(100, 50, 'Invisible (Working Title)', { fill: '#FFFFFF' }).setFontSize(24);
        new menu_button_text_1.MenuButton(this, 100, 150, 'Start Game', () => {
            this.scene.start('Game');
        });
    }
}
exports.MainMenuScene = MainMenuScene;


/***/ }),

/***/ "./src/services/player-state.service.ts":
/*!**********************************************!*\
  !*** ./src/services/player-state.service.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = __webpack_require__(/*! ./../interfaces/interfaces */ "./src/interfaces/interfaces.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
class PlayerState {
    constructor() {
        this._velocity$ = new rxjs_1.BehaviorSubject({ velocity: 0, direction: interfaces_1.VelocityDirection.NOT_SET });
        this._activeLasers$ = new rxjs_1.BehaviorSubject([]);
    }
    getCurrentVelocity() {
        return this._velocity$.getValue();
    }
    updateVelocity(updatedVelocity) {
        this._velocity$.next(updatedVelocity);
    }
    getAllActiveLasers() {
        return this._activeLasers$.getValue();
    }
    addActiveLaser(x, y) {
        const newLaser = {
            name: Math.random().toString(),
            x,
            y
        };
        this._activeLasers$.next([...this.getAllActiveLasers(), newLaser]);
    }
    removeLaser(name) {
        let allLasers = this._activeLasers$.getValue();
        this._activeLasers$.next(allLasers.filter(laser => laser.name !== name));
    }
}
exports.PlayerState = PlayerState;


/***/ }),

/***/ "./src/services/stars.service.ts":
/*!***************************************!*\
  !*** ./src/services/stars.service.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const galaxy_const_1 = __webpack_require__(/*! ../const/galaxy.const */ "./src/const/galaxy.const.ts");
function generateStars(scene, width, height, amount) {
    const graphics = scene.add.graphics();
    graphics.fillStyle(0xffffff, 1);
    const mapStar = () => ({
        x: Math.random() * galaxy_const_1.GALAXY.width,
        y: Math.random() * galaxy_const_1.GALAXY.height,
        a: Math.random() * Math.PI,
    });
    const fill = (star) => graphics.fillCircle(star.x, star.y, star.a);
    const iterable = new Array(amount).fill(null);
    iterable.map(mapStar).forEach(fill);
}
exports.generateStars = generateStars;


/***/ }),

/***/ "./src/sprites/asteroid.sprite.ts":
/*!****************************************!*\
  !*** ./src/sprites/asteroid.sprite.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const sprite_class_1 = __webpack_require__(/*! ../lib/sprite.class */ "./src/lib/sprite.class.ts");
const Math_1 = __webpack_require__(/*! ../lib/Math */ "./src/lib/Math.ts");
const asteroidConfig = {
    rotationSpeed: .05,
    scale: .5,
    frictionAir: 0.05,
    mass: 30,
    depth: 1000,
};
class Asteroid extends sprite_class_1.Sprite {
    constructor(world, spriteConfig, { rotationSpeed, scale, frictionAir, mass, depth, } = asteroidConfig) {
        super(world, spriteConfig.x, spriteConfig.y, spriteConfig.name);
        this.isDestroyed = false;
        this.isOffScreen = false;
        this.setScale(scale, scale);
        this.setFrictionAir(frictionAir);
        this.setAngle(Math_1.between(0, 360));
        this.setMass(mass);
        this.depth = depth;
        this.rotationSpeed = rotationSpeed;
        this.velocityX = Math_1.between(-5, 5);
        this.velocityY = Math_1.between(-5, 5);
        this.dustEmitter = this.scene.add.particles('fake');
        this.setVelocity(this.velocityX, this.velocityY);
        this.setOnCollide(() => {
            let explosion = this.scene.add.particles('fake').createEmitter({
                x: this.x,
                y: this.y,
                speed: { min: -800, max: 800 },
                angle: { min: 0, max: 360 },
                scale: { start: this.scale, end: 0 },
                blendMode: 'SCREEN',
                gravityY: this.y,
                active: true,
                lifespan: 100
            });
            explosion.explode(20, this.x, this.y);
            this.isDestroyed = true;
            this.destroy(true);
        });
    }
    update() {
        if (!this.isDestroyed) {
            this.applyForces();
            this.applyParticles();
        }
    }
    applyForces() {
        this.setVelocity(this.velocityX, this.velocityY);
        this.rotation += this.rotationSpeed;
    }
    applyParticles() {
        this.dustEmitter.createEmitter({
            lifespan: 100,
            speedX: { min: 200, max: 400 },
            active: true,
            scale: { start: this.scale, end: 0, ease: 'Power3' },
            blendMode: 'ADD'
        }).emitParticle(5, this.x, this.y);
    }
}
exports.Asteroid = Asteroid;


/***/ }),

/***/ "./src/sprites/enemy.sprite.ts":
/*!*************************************!*\
  !*** ./src/sprites/enemy.sprite.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const sprite_class_1 = __webpack_require__(/*! ../lib/sprite.class */ "./src/lib/sprite.class.ts");
const enemyConfig = {
    rotationDegree: 5,
    thrustSpeed: 0.009,
    angle: 90,
    scale: 0.15,
    frictionAir: 0.05,
    mass: 30,
    depth: 1000,
};
const degreeToRadian = d => d * Math.PI / 180;
class Enemy extends sprite_class_1.Sprite {
    constructor(world, spriteConfig, { rotationDegree, thrustSpeed, angle, scale, frictionAir, mass, depth, } = enemyConfig) {
        super(world, spriteConfig.x, spriteConfig.y, spriteConfig.name);
        this.isDestroyed = false;
        this.setScale(scale, scale);
        this.setAngle(angle);
        this.setFrictionAir(frictionAir);
        this.setMass(mass);
        this.depth = depth;
        this.rotationRadian = degreeToRadian(rotationDegree);
        this.thrustSpeed = thrustSpeed;
        this.setOnCollide(() => {
            this.isDestroyed = true;
            this.destroy(true);
        });
    }
    update(player) {
        if (!this.isDestroyed) {
            const getAngle = (cx, cy, ex, ey) => {
                const dy = ey - cy;
                const dx = ex - cx;
                return Math.atan2(dx, dy) * 180 / Math.PI;
            };
            function angle360(cx, cy, ex, ey) {
                let theta = getAngle(cx, cy, ex, ey);
                if (theta < 0)
                    theta = 360 + theta;
                return theta;
            }
            const rad = angle360(this.x, this.y, player === null || player === void 0 ? void 0 : player.x, player.y);
            this.thrustLeft(this.thrustSpeed);
            if (rad != this.rotationRadian) {
                this.angle = -Math.abs((rad + 180) % 360);
            }
        }
    }
}
exports.Enemy = Enemy;


/***/ }),

/***/ "./src/sprites/planet.sprite.ts":
/*!**************************************!*\
  !*** ./src/sprites/planet.sprite.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const sprite_class_1 = __webpack_require__(/*! ../lib/sprite.class */ "./src/lib/sprite.class.ts");
const planetAttractor = (bodyA, bodyB) => {
    const xDiff = bodyA.position.x - bodyB.position.x;
    const yDiff = bodyA.position.y - bodyB.position.y;
    if ((xDiff > 300 || xDiff < -300) || (yDiff > 300 || yDiff < -300)) {
        return null;
    }
    return {
        x: (bodyA.position.x - bodyB.position.x) * 0.00002,
        y: (bodyA.position.y - bodyB.position.y) * 0.00002,
    };
};
class Planet extends sprite_class_1.Sprite {
    constructor(world, spriteConfig, { isAttractor = false, mass = 2, isStatic = true, scale = 1, }) {
        const options = {
            mass,
            isStatic,
        };
        if (isAttractor) {
            options.plugin = {
                attractors: [
                    planetAttractor,
                ]
            };
        }
        super(world, spriteConfig.x, spriteConfig.y, spriteConfig.name, undefined, options);
        this.setScale(scale, scale);
    }
}
exports.Planet = Planet;


/***/ }),

/***/ "./src/sprites/player.sprite.ts":
/*!**************************************!*\
  !*** ./src/sprites/player.sprite.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const sprite_class_1 = __webpack_require__(/*! ../lib/sprite.class */ "./src/lib/sprite.class.ts");
const interfaces_1 = __webpack_require__(/*! ../interfaces/interfaces */ "./src/interfaces/interfaces.ts");
const player_controller_1 = __webpack_require__(/*! ../objects/controls/player-controller */ "./src/objects/controls/player-controller.ts");
const playerConfig = {
    rotationDegree: 10,
    thrustSpeed: 0.01,
    angle: 90,
    scale: 0.15,
    frictionAir: 0.05,
    mass: 30,
    depth: 1000,
};
const degreeToRadian = (d) => d * Math.PI / 180;
class Player extends sprite_class_1.Sprite {
    constructor(world, spriteConfig, { rotationDegree, thrustSpeed, angle, scale, frictionAir, mass, depth, } = playerConfig) {
        super(world, spriteConfig.x, spriteConfig.y, spriteConfig.name);
        this.controller = new player_controller_1.PlayerController();
        this.setScale(scale, scale);
        this.setAngle(angle);
        this.setFrictionAir(frictionAir);
        this.setMass(mass);
        this.depth = depth;
        this.rotationRadian = degreeToRadian(rotationDegree);
        this.thrustSpeed = thrustSpeed;
        this.setOnCollide(() => {
            this.visible = false;
            this.disableInteractive();
        });
        this.controller.init();
    }
    manageControls({ up, right, left }) {
        if (up === null || up === void 0 ? void 0 : up.isDown) {
            this.thrustLeft(this.thrustSpeed);
        }
        if (right === null || right === void 0 ? void 0 : right.isDown) {
            this.setRotation(this.rotation += this.rotationRadian);
        }
        else if (left === null || left === void 0 ? void 0 : left.isDown) {
            this.setRotation(this.rotation -= this.rotationRadian);
        }
    }
    handleAction(keyPressed) {
        const actionToTake = this.controller.keyEvents.find(key => key.key === keyPressed);
        switch (actionToTake === null || actionToTake === void 0 ? void 0 : actionToTake.action) {
            case interfaces_1.PlayerAction.FIRE_LASER:
                const laser = this.scene.matter.add.sprite(this.x, this.y, 'Laser');
                laser.setVelocity(10, this.rotation);
                break;
            default:
                break;
        }
    }
}
exports.Player = Player;


/***/ }),

/***/ "./src/sprites/space-station.sprite.ts":
/*!*********************************************!*\
  !*** ./src/sprites/space-station.sprite.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const sprite_class_1 = __webpack_require__(/*! ../lib/sprite.class */ "./src/lib/sprite.class.ts");
class SpaceStation extends sprite_class_1.Sprite {
    constructor(world, spriteConfig, { depth = 1000, scale = 0.5, }) {
        super(world, spriteConfig.x, spriteConfig.y, spriteConfig.name, undefined, { isStatic: true });
        this.setScale(scale, scale);
        this.depth = depth;
    }
}
exports.SpaceStation = SpaceStation;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0L2dhbGF4eS5jb25zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJmYWNlcy9pbnRlcmZhY2VzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvTWF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2dhbWUtb2JqZWN0cy5jbGFzcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvc2NlbmUuY2xhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zcHJpdGUuY2xhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUtYnV0dG9uLnRleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvY29udHJvbHMvcGxheWVyLWNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9ib290LnNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvZ2FtZS5zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1tZW51LnNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9wbGF5ZXItc3RhdGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc3RhcnMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9hc3Rlcm9pZC5zcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvZW5lbXkuc3ByaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL3BsYW5ldC5zcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvcGxheWVyLnNwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMv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LyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlxuZXhwb3J0IGNvbnN0IEdBTEFYWSA9IHtcbiAgICB3aWR0aDogMTgwMCxcbiAgICBoZWlnaHQ6IDEyMDAsXG4gICAgc2VjdG9yU2l6ZTogMTYsXG4gICAgLy8gU291cmNlcyBsb2FkZWQgaW4gYm9vdFxuICAgIHBsYW5ldFNvdXJjZXM6IFsnRWFydGgnLCAnSnVwaXRlcicsICdNYXJzJywgJ01vb24nXSxcbiAgICBzdGFyQ29sb3JzOiBbMHhmZmZmZmYsIDB4ZmNiYTAzLCAweDM1ZmMwMywgMHgwNWYyZWUsIDB4OWQwMmViLCAweGVkMDc2N10sXG59O1xuIiwiZXhwb3J0IGludGVyZmFjZSBJR2FsYXh5U3lzdGVtQ29uc3RydWN0b3Ige1xuICAgIHNjZW5lOiBQaGFzZXIuU2NlbmU7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJR2FsYXh5UmVzb3VyY2VDb25zdHJ1Y3RvciB7XG4gICAgc2NlbmU6IFBoYXNlci5TY2VuZTtcbiAgICBwb3NpdGlvbjogUGhhc2VyLk1hdGguVmVjdG9yMjtcbiAgICBybmQ6IFBoYXNlci5NYXRoLlJhbmRvbURhdGFHZW5lcmF0b3I7XG59XG5cbmV4cG9ydCBlbnVtIFZlbG9jaXR5RGlyZWN0aW9uIHtcbiAgICBOT1RfU0VULFxuICAgIFgsXG4gICAgWVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZlbG9jaXR5IHtcbiAgICB2ZWxvY2l0eTogbnVtYmVyO1xuICAgIGRpcmVjdGlvbjogVmVsb2NpdHlEaXJlY3Rpb247XG59XG5cbmV4cG9ydCBlbnVtIFBsYXllckFjdGlvbiB7XG4gICAgRklSRV9MQVNFUiA9ICdGSVJFX0xBU0VSJ1xufVxuXG4vLyBHZW5lcmljIGtleSBpbnRlcmZhY2VzXG5leHBvcnQgaW50ZXJmYWNlIElLZXlFdmVudHMge1xuICAgIGtleTogbnVtYmVyO1xuICAgIGFjdGlvbjogUGxheWVyQWN0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDb250cm9sRXZlbnRIYW5kbGVyIHtcbiAgICBnYW1lS2V5OiBzdHJpbmc7XG4gICAga2V5RXZlbnRzOiBJS2V5RXZlbnRzW107XG5cbiAgICBpbml0KCk6IHZvaWQ7XG4gICAgaGFuZGxlS2V5UHJlc3Moa2V5OiBudW1iZXIpOiBQbGF5ZXJBY3Rpb24gfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTcHJpdGVDb25maWcge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJldHdlZW4gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xuICByZXR1cm4gUGhhc2VyLk1hdGguQmV0d2VlbihtaW4sIG1heClcbn0iLCJleHBvcnQgY2xhc3MgVGV4dCBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0IHt9XG5leHBvcnQgY2xhc3MgR3JhcGhpY3MgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuR3JhcGhpY3Mge31cbiIsImV4cG9ydCAqIGZyb20gJy4vaW5wdXQuaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc2NlbmVzLmludGVyZmFjZSc7XG5leHBvcnQgKiBmcm9tICcuL2dhbWUtb2JqZWN0cy5pbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9waHlzaWNzLmludGVmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc2NlbmUuY2xhc3MnO1xuZXhwb3J0ICogZnJvbSAnLi9nYW1lLW9iamVjdHMuY2xhc3MnO1xuIiwiZXhwb3J0IGNsYXNzIFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHt9XG4iLCJleHBvcnQgY2xhc3MgU3ByaXRlIGV4dGVuZHMgUGhhc2VyLlBoeXNpY3MuTWF0dGVyLlNwcml0ZSB7fSIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xuaW1wb3J0IHsgQm9vdFNjZW5lLCBHYW1lU2NlbmUsIE1haW5NZW51U2NlbmUgfSBmcm9tICcuL3NjZW5lcyc7XG5cbmNvbnN0IGdhbWVDb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XG4gIHRpdGxlOiAnSW52aXNpYmxlIChXb3JraW5nIFRpdGxlKScsXG5cbiAgdHlwZTogUGhhc2VyLkFVVE8sXG5cbiAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcblxuICBwaHlzaWNzOiB7XG4gICAgZGVmYXVsdDogJ21hdHRlcicsXG4gICAgbWF0dGVyOiB7XG4gICAgICBncmF2aXR5OiB7IFxuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgfSxcbiAgICAgIC8vIFwicGx1Z2lucy5hdHRyYWN0b3JzXCI6IHRydWUsXG4gICAgICAvLyBkZWJ1ZzogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICBzY2VuZTogW0Jvb3RTY2VuZSwgTWFpbk1lbnVTY2VuZSwgR2FtZVNjZW5lXSxcblxuICBwYXJlbnQ6ICdjb250ZW50JyxcbiAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMCcsXG4gIHJlbmRlcjogeyBwaXhlbEFydDogdHJ1ZSwgYW50aWFsaWFzOiB0cnVlIH0sXG59O1xuXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKTtcbiIsImltcG9ydCB7IElUZXh0U3R5bGUsIFNjZW5lLCBUZXh0IH0gZnJvbSAnLi9saWInO1xuXG5jb25zdCBidXR0b25SZXN0U3R5bGUgPSB7XG4gICAgZmlsbDogJyNGRkZGRkYnLFxufTtcblxuY29uc3QgYnV0dG9uSG92ZXJTdHlsZSA9IHtcbiAgICBmaWxsOiAnIzdDRkMwMCcsXG59O1xuXG5jb25zdCBidXR0b25BY3RpdmVTdHlsZSA9IHtcbiAgICBmaWxsOiAnIzAwMDAwMCcsXG59O1xuXG5leHBvcnQgY2xhc3MgTWVudUJ1dHRvbiBleHRlbmRzIFRleHQge1xuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBTY2VuZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHRleHQ6IHN0cmluZywgb25DbGljaz86ICgpID0+IHZvaWQpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUsIHgsIHksIHRleHQsIGJ1dHRvblJlc3RTdHlsZSBhcyBJVGV4dFN0eWxlKTtcbiAgICAgICAgc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc2V0SW50ZXJhY3RpdmUoeyB1c2VIYW5kQ3Vyc29yOiB0cnVlIH0pXG4gICAgICAgICAgICAub24oJ3BvaW50ZXJvdmVyJywgdGhpcy5lbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKVxuICAgICAgICAgICAgLm9uKCdwb2ludGVyb3V0JywgdGhpcy5lbnRlck1lbnVCdXR0b25SZXN0U3RhdGUpXG4gICAgICAgICAgICAub24oJ3BvaW50ZXJkb3duJywgdGhpcy5lbnRlck1lbnVCdXR0b25BY3RpdmVTdGF0ZSlcbiAgICAgICAgICAgIC5vbigncG9pbnRlcnVwJywgdGhpcy5lbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKTtcblxuICAgICAgICBpZiAob25DbGljaykge1xuICAgICAgICAgICAgdGhpcy5vbigncG9pbnRlcnVwJywgb25DbGljayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGVudGVyTWVudUJ1dHRvbkhvdmVyU3RhdGUoKSB7XG4gICAgICAgIHRoaXMuc2V0U3R5bGUoYnV0dG9uSG92ZXJTdHlsZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlbnRlck1lbnVCdXR0b25SZXN0U3RhdGUoKSB7XG4gICAgICAgIHRoaXMuc2V0U3R5bGUoYnV0dG9uUmVzdFN0eWxlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVudGVyTWVudUJ1dHRvbkFjdGl2ZVN0YXRlKCkge1xuICAgICAgICB0aGlzLnNldFN0eWxlKGJ1dHRvbkFjdGl2ZVN0eWxlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBQbGF5ZXJTdGF0ZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvcGxheWVyLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSUNvbnRyb2xFdmVudEhhbmRsZXIsIElLZXlFdmVudHMsIFZlbG9jaXR5RGlyZWN0aW9uLCBQbGF5ZXJBY3Rpb24gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9pbnRlcmZhY2VzXCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXJDb250cm9sbGVyIGltcGxlbWVudHMgSUNvbnRyb2xFdmVudEhhbmRsZXIge1xuXG4gICAgZ2FtZUtleTogc3RyaW5nID0gJ0dhbWUnO1xuICAgIGtleUV2ZW50czogSUtleUV2ZW50c1tdID0gW107XG5cbiAgICBwcml2YXRlIF9wbGF5ZXJTdGF0ZSA9IG5ldyBQbGF5ZXJTdGF0ZSgpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgIH1cblxuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMua2V5RXZlbnRzID0gdGhpcy5jcmVhdGVLZXlNYXBwaW5ncygpO1xuXG4gICAgfVxuXG4gICAgaGFuZGxlS2V5UHJlc3Moa2V5OiBudW1iZXIpOiBQbGF5ZXJBY3Rpb24gfCBudWxsIHtcbiAgICAgICAgY29uc3Qga2V5Rm91bmQgPSB0aGlzLmtleUV2ZW50cy5maW5kKGtleUV2ZW50ID0+IGtleUV2ZW50LmtleSA9PT0ga2V5KTtcbiAgICAgICAgcmV0dXJuIGtleUZvdW5kPy5hY3Rpb24gPz8gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUtleU1hcHBpbmdzKCk6IElLZXlFdmVudHNbXSB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBLRVlfTUFQUElOR1M6IElLZXlFdmVudHNbXSA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TUEFDRSxcbiAgICAgICAgICAgICAgICBhY3Rpb246IFBsYXllckFjdGlvbi5GSVJFX0xBU0VSXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgICAgcmV0dXJuIEtFWV9NQVBQSU5HUztcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBJU2V0dGluZ3NDb25maWcsIFNjZW5lIH0gZnJvbSAnLi4vbGliJztcblxuY29uc3Qgc2NlbmVDb25maWc6IElTZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogJ0Jvb3QnLFxufTtcblxuLyoqXG4gKiBUaGUgaW5pdGlhbCBzY2VuZSB0aGF0IGxvYWRzIGFsbCBuZWNlc3NhcnkgYXNzZXRzIHRvIHRoZSBnYW1lIGFuZCBkaXNwbGF5cyBhIGxvYWRpbmcgYmFyLlxuICovXG5leHBvcnQgY2xhc3MgQm9vdFNjZW5lIGV4dGVuZHMgU2NlbmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIGdldEdhbWVXaWR0aCA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5nYW1lLnNjYWxlLndpZHRoO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRHYW1lSGVpZ2h0ID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmdhbWUuc2NhbGUuaGVpZ2h0O1xuICB9XG5cbiAgcHJlbG9hZCgpIHtcbiAgICBjb25zdCBoYWxmV2lkdGggPSB0aGlzLmdldEdhbWVXaWR0aCgpICogMC41O1xuICAgIGNvbnN0IGhhbGZIZWlnaHQgPSB0aGlzLmdldEdhbWVIZWlnaHQoKSAqIDAuNTtcblxuICAgIGNvbnN0IHByb2dyZXNzQmFySGVpZ2h0ID0gMTAwO1xuICAgIGNvbnN0IHByb2dyZXNzQmFyV2lkdGggPSA0MDA7XG5cbiAgICBjb25zdCBwcm9ncmVzc0JhckNvbnRhaW5lciA9IHRoaXMuYWRkLnJlY3RhbmdsZShcbiAgICAgIGhhbGZXaWR0aCxcbiAgICAgIGhhbGZIZWlnaHQsXG4gICAgICBwcm9ncmVzc0JhcldpZHRoLFxuICAgICAgcHJvZ3Jlc3NCYXJIZWlnaHQsXG4gICAgICAweDAwMDAwMCxcbiAgICApO1xuICAgIGNvbnN0IHByb2dyZXNzQmFyID0gdGhpcy5hZGQucmVjdGFuZ2xlKFxuICAgICAgaGFsZldpZHRoICsgMjAgLSBwcm9ncmVzc0JhckNvbnRhaW5lci53aWR0aCAqIDAuNSxcbiAgICAgIGhhbGZIZWlnaHQsXG4gICAgICAxMCxcbiAgICAgIHByb2dyZXNzQmFySGVpZ2h0IC0gMjAsIDB4ODg4ODg4LFxuICAgICk7XG5cbiAgICBjb25zdCBsb2FkaW5nVGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gNzUsIGhhbGZIZWlnaHQgLSAxMDAsICdMb2FkaW5nLi4uJylcbiAgICAgIC5zZXRGb250U2l6ZSgyNCk7XG4gICAgY29uc3QgcGVyY2VudFRleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDI1LCBoYWxmSGVpZ2h0LCAnMCUnKS5zZXRGb250U2l6ZSgyNCk7XG4gICAgY29uc3QgYXNzZXRUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSAyNSwgaGFsZkhlaWdodCArIDEwMCwgJycpLnNldEZvbnRTaXplKDI0KTtcblxuICAgIHRoaXMubG9hZC5vbigncHJvZ3Jlc3MnLCAodmFsdWU6IGFueSkgPT4ge1xuICAgICAgcHJvZ3Jlc3NCYXIud2lkdGggPSAocHJvZ3Jlc3NCYXJXaWR0aCAtIDMwKSAqIHZhbHVlO1xuXG4gICAgICBjb25zdCBwZXJjZW50ID0gdmFsdWUgKiAxMDA7XG4gICAgICBwZXJjZW50VGV4dC5zZXRUZXh0KGAke3BlcmNlbnR9JWApO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sb2FkLm9uKCdmaWxlcHJvZ3Jlc3MnLCAoZmlsZTogYW55KSA9PiB7XG4gICAgICBhc3NldFRleHQuc2V0VGV4dChmaWxlLmtleSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxvYWQub24oJ2NvbXBsZXRlJywgKCkgPT4ge1xuICAgICAgbG9hZGluZ1RleHQuZGVzdHJveSgpO1xuICAgICAgcGVyY2VudFRleHQuZGVzdHJveSgpO1xuICAgICAgYXNzZXRUZXh0LmRlc3Ryb3koKTtcbiAgICAgIHByb2dyZXNzQmFyLmRlc3Ryb3koKTtcbiAgICAgIHByb2dyZXNzQmFyQ29udGFpbmVyLmRlc3Ryb3koKTtcblxuICAgICAgdGhpcy5zY2VuZS5zdGFydCgnTWFpbk1lbnUnKTtcbiAgICB9KTtcblxuICAgIHRoaXMubG9hZEFzc2V0cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbCBhc3NldHMgdGhhdCBuZWVkIHRvIGJlIGxvYWRlZCBieSB0aGUgZ2FtZSAoc3ByaXRlcywgaW1hZ2VzLCBhbmltYXRpb25zLCB0aWxlcywgbXVzaWMsIGV0YylcbiAgICogc2hvdWxkIGJlIGFkZGVkIHRvIHRoaXMgbWV0aG9kLiBPbmNlIGxvYWRlZCBpbiwgdGhlIGxvYWRlciB3aWxsIGtlZXAgdHJhY2sgb2YgdGhlbSwgaW5kZXBlZGVudFxuICAgKiBvZiB3aGljaCBzY2VuZSBpcyBjdXJyZW50bHkgYWN0aXZlLCBzbyB0aGV5IGNhbiBiZSBhY2Nlc3NlZCBhbnl3aGVyZS5cbiAgICovXG4gIHByaXZhdGUgbG9hZEFzc2V0cygpIHtcbiAgICAvLyBMb2FkIHNhbXBsZSBhc3NldHNcbiAgICAvLyBSZXBsYWNlIHdpdGggcmVhbCBhc3NldHNcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ0lkbGVGcm9nJywgJ3NyYy9hc3NldHMvTmluamEgRnJvZy9JZGxlICgzMngzMikucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdHYWxheHlCYWNrZ3JvdW5kJywgJy4vc3JjL2Fzc2V0cy9zcGFjZS9iYWNrZ3JvdW5kcy9jb2xvci1zdGFycy1iZy5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ0VhcnRoJywgJy4vc3JjL2Fzc2V0cy9zcGFjZS9wbGFuZXRzL0VhcnRoLnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnSnVwaXRlcicsICcuL3NyYy9hc3NldHMvc3BhY2UvcGxhbmV0cy9KdXBpdGVyLnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnTWFycycsICcuL3NyYy9hc3NldHMvc3BhY2UvcGxhbmV0cy9NYXJzLnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnTW9vbicsICcuL3NyYy9hc3NldHMvc3BhY2UvcGxhbmV0cy9Nb29uLnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnR3JlZW5TaGlwJywgJy4vc3JjL2Fzc2V0cy9pdGNoaW9fc3BhY2VfcGl4ZWxzL3BpeGVsX3NoaXAucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdSZWRTaGlwJywgJy4vc3JjL2Fzc2V0cy9pdGNoaW9fc3BhY2VfcGl4ZWxzL3BpeGVsX3NoaXBfcmVkLnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnU3BhY2VTdGF0aW9uJywgJy4vc3JjL2Fzc2V0cy9pdGNoaW9fc3BhY2VfcGl4ZWxzL3BpeGVsX3N0YXRpb25fYmx1ZS5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ0xhc2VyJywgJy4vc3JjL2Fzc2V0cy9pdGNoaW9fc3BhY2VfcGl4ZWxzL2xhc2VyLnBuZycpO1xuXG4gICAgdGhpcy5sb2FkLmF1ZGlvKCdtdXNpYycsIFsnLi9zcmMvYXNzZXRzL3NvdW5kL1NwYWNlIFJpZGRsZS5tcDMnXSk7XG4gIH1cbn1cbiIsIlxuaW1wb3J0IHtcbiAgSVNldHRpbmdzQ29uZmlnLFxuICBTY2VuZSxcbn0gZnJvbSAnLi4vbGliJztcbmltcG9ydCB7IEdBTEFYWSB9IGZyb20gXCIuLi9jb25zdC9nYWxheHkuY29uc3RcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi9zcHJpdGVzL3BsYXllci5zcHJpdGVcIjtcbmltcG9ydCB7IFBsYW5ldCB9IGZyb20gXCIuLi9zcHJpdGVzL3BsYW5ldC5zcHJpdGVcIjtcbmltcG9ydCB7IGdlbmVyYXRlU3RhcnMgfSBmcm9tIFwiLi4vc2VydmljZXMvc3RhcnMuc2VydmljZVwiO1xuaW1wb3J0IHtTcGFjZVN0YXRpb259IGZyb20gXCIuLi9zcHJpdGVzL3NwYWNlLXN0YXRpb24uc3ByaXRlXCI7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFZlbG9jaXR5RGlyZWN0aW9uIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnRlcmZhY2VzJztcbmltcG9ydCB7RW5lbXl9IGZyb20gXCIuLi9zcHJpdGVzL2VuZW15LnNwcml0ZVwiO1xuaW1wb3J0IHtBc3Rlcm9pZH0gZnJvbSBcIi4uL3Nwcml0ZXMvYXN0ZXJvaWQuc3ByaXRlXCI7XG5pbXBvcnQgeyBiZXR3ZWVuIH0gZnJvbSAnLi4vbGliL01hdGgnO1xuXG5jb25zdCBzY2VuZUNvbmZpZzogSVNldHRpbmdzQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiAnR2FtZScsXG59O1xuXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgU2NlbmUge1xuICBwcml2YXRlIGN1cnNvcktleXM6IFBoYXNlci5UeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzO1xuICBwcml2YXRlIHBsYXllcjogUGxheWVyO1xuICBwcml2YXRlIGVuZW15OiBFbmVteTtcbiAgcHJpdmF0ZSBhc3Rlcm9pZHM6IEFzdGVyb2lkW107XG4gIHByaXZhdGUgbnVtQXN0ZXJvaWRzOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuXG4gICAgdGhpcy5zb3VuZC5hZGQoJ211c2ljJykucGxheSgpO1xuICAgIFxuICAgIHRoaXMuY3Vyc29yS2V5cyA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xuICAgIFxuICAgIHRoaXMuY2FtZXJhcy5tYWluLnNldEJvdW5kcygwLCAwLCBHQUxBWFkud2lkdGgsIEdBTEFYWS5oZWlnaHQpO1xuICAgIC8vIHRoaXMuY2FtZXJhcy5tYWluLnNldFpvb20oMyk7XG4gICAgdGhpcy5jYW1lcmFzLm1haW4uc2V0Wm9vbSgyKTtcbiAgICBcbiAgICBcbiAgICB0aGlzLm1hdHRlci5lbmFibGVBdHRyYWN0b3JQbHVnaW4oKTtcblxuICAgIHRoaXMuYXN0ZXJvaWRzID0gW107XG4gICAgdGhpcy5udW1Bc3Rlcm9pZHMgPSAxMDtcbiAgICBcbiAgICBjb25zdCBlYXJ0aCA9IG5ldyBQbGFuZXQodGhpcy5tYXR0ZXIud29ybGQsIHsgeDogR0FMQVhZLndpZHRoIC0gNTAwLCB5OiAyMDAsIG5hbWU6ICdFYXJ0aCcgfSwgeyBzY2FsZTogMyB9KTtcbiAgICB0aGlzLmFkZC5leGlzdGluZyhlYXJ0aCk7XG5cbiAgICBjb25zdCBtYXJzID0gbmV3IFBsYW5ldCh0aGlzLm1hdHRlci53b3JsZCwgeyB4OiAzMDAsIHk6IDYwMCwgbmFtZTogJ01hcnMnIH0sIHsgc2NhbGU6IDN9KTtcbiAgICB0aGlzLmFkZC5leGlzdGluZyhtYXJzKTtcblxuICAgIGNvbnN0IGp1cGl0ZXIgPSBuZXcgUGxhbmV0KHRoaXMubWF0dGVyLndvcmxkLCB7IHg6IEdBTEFYWS53aWR0aCAvIDIsIHk6IEdBTEFYWS5oZWlnaHQgLyAyLCBuYW1lOiAnSnVwaXRlcicgfSwgeyBpc0F0dHJhY3RvcjogdHJ1ZSwgc2NhbGU6IDUsIG1hc3M6IDUgfSk7XG4gICAgdGhpcy5hZGQuZXhpc3RpbmcoanVwaXRlcik7XG4gICAgXG4gICAgY29uc3Qgc3BhY2VTdGF0aW9uID0gbmV3IFNwYWNlU3RhdGlvbih0aGlzLm1hdHRlci53b3JsZCwgeyB4OiBHQUxBWFkud2lkdGggLSAyMDAsIHk6IEdBTEFYWS5oZWlnaHQgLSAzMDAsIG5hbWU6ICdTcGFjZVN0YXRpb24nIH0sIHt9KTtcbiAgICB0aGlzLmFkZC5leGlzdGluZyhzcGFjZVN0YXRpb24pO1xuICAgIFxuICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLm1hdHRlci53b3JsZCwgeyB4OiAyMCwgeTogMzAwLCBuYW1lOiAnR3JlZW5TaGlwJyB9KTtcbiAgICB0aGlzLmFkZC5leGlzdGluZyh0aGlzLnBsYXllcik7XG5cbiAgICBmcm9tRXZlbnQoZG9jdW1lbnQsICdrZXlkb3duJykuc3Vic2NyaWJlKChrZXlQcmVzc2VkOiBhbnkpID0+IHtcbiAgICAgIHRoaXMucGxheWVyLmhhbmRsZUFjdGlvbihrZXlQcmVzc2VkLmtleUNvZGUpO1xuICAgIH0pO1xuICAgIFxuICAgIHRoaXMuZW5lbXkgPSBuZXcgRW5lbXkodGhpcy5tYXR0ZXIud29ybGQsIHsgeDogNjAwLCB5OiA2MDAsIG5hbWU6ICdSZWRTaGlwJyB9KTtcbiAgICB0aGlzLmFkZC5leGlzdGluZyh0aGlzLmVuZW15KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1Bc3Rlcm9pZHM7IGkrKykge1xuICAgICAgbGV0IGFzdGVyb2lkWCA9IGJldHdlZW4oMCwgR0FMQVhZLndpZHRoKTtcbiAgICAgIGxldCBhc3Rlcm9pZFkgPSBiZXR3ZWVuKDAsIEdBTEFYWS5oZWlnaHQpO1xuICAgICAgbGV0IGFzdGVyb2lkID0gbmV3IEFzdGVyb2lkKHRoaXMubWF0dGVyLndvcmxkLCB7IHg6IGFzdGVyb2lkWCwgeTogYXN0ZXJvaWRZLCBuYW1lOiAnZmFrZScgfSk7XG4gICAgICB0aGlzLmFkZC5leGlzdGluZyhhc3Rlcm9pZCk7XG4gICAgICB0aGlzLmFzdGVyb2lkcy5wdXNoKGFzdGVyb2lkKTtcbiAgICB9XG5cbiAgICAvLyBmcm9tRXZlbnQoZG9jdW1lbnQsICdrZXlkb3duJykucGlwZShcbiAgICAvLyAgIG1hcCgoa2V5OiBhbnkpID0+IHRoaXMucGxheWVyLmNvbnRyb2xsZXIuaGFuZGxlS2V5UHJlc3Moa2V5LmtleUNvZGUpKVxuICAgIC8vICkuc3Vic2NyaWJlKG5ld1Bvc2l0aW9uID0+IHtcbiAgICAvLyAgIGlmIChuZXdQb3NpdGlvbj8uZGlyZWN0aW9uID09PSBWZWxvY2l0eURpcmVjdGlvbi5YKSB7XG4gICAgLy8gICAgICAgdGhpcy5wbGF5ZXIuc2V0VmVsb2NpdHlYKG5ld1Bvc2l0aW9uLnZlbG9jaXR5KTtcbiAgICAvLyAgIH0gZWxzZSBpZiAobmV3UG9zaXRpb24/LmRpcmVjdGlvbiA9PT0gVmVsb2NpdHlEaXJlY3Rpb24uWSl7XG4gICAgLy8gICAgICAgdGhpcy5wbGF5ZXIuc2V0VmVsb2NpdHlZKG5ld1Bvc2l0aW9uLnZlbG9jaXR5KTtcbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcbiAgICBcbiAgICBnZW5lcmF0ZVN0YXJzKHRoaXMsIEdBTEFYWS53aWR0aCwgR0FMQVhZLmhlaWdodCwgODAwKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnBsYXllci5tYW5hZ2VDb250cm9scyh0aGlzLmN1cnNvcktleXMpO1xuICAgIHRoaXMuY2FtZXJhcy5tYWluLmNlbnRlck9uKHRoaXMucGxheWVyLngsIHRoaXMucGxheWVyLnkpO1xuICAgIHRoaXMuZW5lbXkudXBkYXRlKHRoaXMucGxheWVyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtQXN0ZXJvaWRzOyBpKyspIHtcbiAgICAgIHRoaXMuYXN0ZXJvaWRzW2ldLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IHsgTWFpbk1lbnVTY2VuZSB9IGZyb20gJy4vbWFpbi1tZW51LnNjZW5lJztcbmV4cG9ydCB7IEJvb3RTY2VuZSB9IGZyb20gJy4vYm9vdC5zY2VuZSc7XG5leHBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tICcuL2dhbWUuc2NlbmUnO1xuLy8gZXhwb3J0IHsgR2FsYXh5U2NlbmUgfSBmcm9tICcuL2dhbGF4eS5zY2VuZSc7XG4iLCJpbXBvcnQgeyBJU2V0dGluZ3NDb25maWcsIFNjZW5lIH0gZnJvbSAnLi4vbGliJztcbmltcG9ydCB7IE1lbnVCdXR0b24gfSBmcm9tICcuLi9tZW51LWJ1dHRvbi50ZXh0JztcblxuY29uc3Qgc2NlbmVDb25maWc6IElTZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogJ01haW5NZW51Jyxcbn07XG5cbi8qKlxuICogVGhlIGluaXRpYWwgc2NlbmUgdGhhdCBzdGFydHMsIHNob3dzIHRoZSBzcGxhc2ggc2NyZWVucywgYW5kIGxvYWRzIHRoZSBuZWNlc3NhcnkgYXNzZXRzLlxuICovXG5leHBvcnQgY2xhc3MgTWFpbk1lbnVTY2VuZSBleHRlbmRzIFNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuYWRkLnRleHQoMTAwLCA1MCwgJ0ludmlzaWJsZSAoV29ya2luZyBUaXRsZSknLCB7IGZpbGw6ICcjRkZGRkZGJyB9KS5zZXRGb250U2l6ZSgyNCk7XG4gICAgbmV3IE1lbnVCdXR0b24odGhpcywgMTAwLCAxNTAsICdTdGFydCBHYW1lJywgKCkgPT4ge1xuICAgICAgdGhpcy5zY2VuZS5zdGFydCgnR2FtZScpO1xuICAgIH0pO1xuICAgIC8vIG5ldyBNZW51QnV0dG9uKHRoaXMsIDEwMCwgMjUwLCBgUGF1bCdzIEF3ZXNvbWUgTmluamEgR2FtZWAsICgpID0+IHtcbiAgICAvLyAgIHRoaXMuc2NlbmUuc3RhcnQoJ1BhdWxOaW5qYScpO1xuICAgIC8vIH0pO1xuICAgIC8vIG5ldyBNZW51QnV0dG9uKHRoaXMsIDEwMCwgMzUwLCAnR2VuZXJhdGUgR2FsYXh5JywgKCkgPT4ge1xuICAgIC8vICAgdGhpcy5zY2VuZS5zdGFydCgnR2FsYXh5Jyk7XG4gICAgLy8gfSk7XG4gICAgLy8gRXhhbXBsZSBvZiBhIHNlY29uZCBzdGFydCBzY3JlZW4gb3B0aW9uXG4gICAgLy8gbmV3IE1lbnVCdXR0b24odGhpcywgMTAwLCAyMDAsICdPcHRpb25zJywgKCkgPT4ge1xuICAgIC8vICAgdGhpcy5zY2VuZS5zdGFydCgnT3B0aW9ucycpO1xuICAgIC8vIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBWZWxvY2l0eURpcmVjdGlvbiwgVmVsb2NpdHksIElTcHJpdGVDb25maWcgfSBmcm9tICcuLy4uL2ludGVyZmFjZXMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIE9iamVjdFVuc3Vic2NyaWJlZEVycm9yIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgY2xhc3MgUGxheWVyU3RhdGUge1xuICAgIFxuICAgIHZlbG9jaXR5JDogT2JzZXJ2YWJsZTxWZWxvY2l0eT47XG4gICAgcHJpdmF0ZSBfdmVsb2NpdHkkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxWZWxvY2l0eT4oeyB2ZWxvY2l0eTogMCwgZGlyZWN0aW9uOiBWZWxvY2l0eURpcmVjdGlvbi5OT1RfU0VUIH0pO1xuICAgIHByaXZhdGUgX2FjdGl2ZUxhc2VycyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PElTcHJpdGVDb25maWdbXT4oW10pO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIFxuICAgICB9XG5cbiAgICBnZXRDdXJyZW50VmVsb2NpdHkoKTogVmVsb2NpdHkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmVsb2NpdHkkLmdldFZhbHVlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVmVsb2NpdHkodXBkYXRlZFZlbG9jaXR5OiBWZWxvY2l0eSk6IHZvaWQge1xuICAgICAgICB0aGlzLl92ZWxvY2l0eSQubmV4dCh1cGRhdGVkVmVsb2NpdHkpO1xuICAgIH1cblxuICAgIGdldEFsbEFjdGl2ZUxhc2VycygpOiBJU3ByaXRlQ29uZmlnW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlTGFzZXJzJC5nZXRWYWx1ZSgpO1xuICAgIH1cblxuICAgIGFkZEFjdGl2ZUxhc2VyKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBuZXdMYXNlcjogSVNwcml0ZUNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hbWU6IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2FjdGl2ZUxhc2VycyQubmV4dChbLi4udGhpcy5nZXRBbGxBY3RpdmVMYXNlcnMoKSwgbmV3TGFzZXJdKTtcbiAgICB9XG5cbiAgICByZW1vdmVMYXNlcihuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgbGV0IGFsbExhc2VycyA9IHRoaXMuX2FjdGl2ZUxhc2VycyQuZ2V0VmFsdWUoKTtcbiAgICAgICAgdGhpcy5fYWN0aXZlTGFzZXJzJC5uZXh0KGFsbExhc2Vycy5maWx0ZXIobGFzZXIgPT4gbGFzZXIubmFtZSAhPT0gbmFtZSkpO1xuICAgIH1cblxuXG59IiwiaW1wb3J0IHtHQUxBWFl9IGZyb20gXCIuLi9jb25zdC9nYWxheHkuY29uc3RcIjtcblxuaW50ZXJmYWNlIElTdGFyIHtcbiAgeDogbnVtYmVyLFxuICB5OiBudW1iZXIsXG4gIGE6IG51bWJlcixcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlU3RhcnMgKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBhbW91bnQ6IG51bWJlcikge1xuICBjb25zdCBncmFwaGljcyA9IHNjZW5lLmFkZC5ncmFwaGljcygpO1xuICBncmFwaGljcy5maWxsU3R5bGUoMHhmZmZmZmYsIDEpO1xuICBcbiAgY29uc3QgbWFwU3RhciA9ICgpID0+ICh7XG4gICAgeDogTWF0aC5yYW5kb20oKSAqIEdBTEFYWS53aWR0aCxcbiAgICB5OiBNYXRoLnJhbmRvbSgpICogR0FMQVhZLmhlaWdodCxcbiAgICBhOiBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSxcbiAgfSk7XG4gIGNvbnN0IGZpbGwgPSAoc3RhcjogSVN0YXIpID0+IGdyYXBoaWNzLmZpbGxDaXJjbGUoc3Rhci54LCBzdGFyLnksIHN0YXIuYSk7XG4gIFxuICBjb25zdCBpdGVyYWJsZSA9IG5ldyBBcnJheShhbW91bnQpLmZpbGwobnVsbCk7XG4gIGl0ZXJhYmxlLm1hcChtYXBTdGFyKS5mb3JFYWNoKGZpbGwpO1xufSIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4uL2xpYi9zcHJpdGUuY2xhc3MnO1xuaW1wb3J0IHsgSVNwcml0ZUNvbmZpZyB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBiZXR3ZWVuIH0gZnJvbSAnLi4vbGliL01hdGgnO1xuaW1wb3J0IHsgUmFjZU9wZXJhdG9yIH0gZnJvbSAncnhqcy9pbnRlcm5hbC9vYnNlcnZhYmxlL3JhY2UnO1xuaW1wb3J0IHsgbWF4IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5jb25zdCBhc3Rlcm9pZENvbmZpZyA9IHtcbiAgcm90YXRpb25TcGVlZDogLjA1LFxuICAvLyBzY2FsZTogMC4xNSxcbiAgc2NhbGU6IC41LFxuICBmcmljdGlvbkFpcjogMC4wNSxcbiAgbWFzczogMzAsXG4gIGRlcHRoOiAxMDAwLFxufTtcblxuZXhwb3J0IGNsYXNzIEFzdGVyb2lkIGV4dGVuZHMgU3ByaXRlIHtcbiAgcHJpdmF0ZSB2ZWxvY2l0eVg6IG51bWJlcjtcbiAgcHJpdmF0ZSB2ZWxvY2l0eVk6IG51bWJlcjtcbiAgcHJpdmF0ZSByb3RhdGlvblNwZWVkOiBudW1iZXI7XG4gIHByaXZhdGUgZHVzdEVtaXR0ZXI6IGFueTtcbiAgcHJpdmF0ZSBpc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICBwcml2YXRlIGlzT2ZmU2NyZWVuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3Iod29ybGQ6IFBoYXNlci5QaHlzaWNzLk1hdHRlci5Xb3JsZCwgc3ByaXRlQ29uZmlnOiBJU3ByaXRlQ29uZmlnLCB7XG4gICAgcm90YXRpb25TcGVlZCxcbiAgICBzY2FsZSxcbiAgICBmcmljdGlvbkFpcixcbiAgICBtYXNzLFxuICAgIGRlcHRoLFxuICB9ID0gYXN0ZXJvaWRDb25maWcpIHtcbiAgICBzdXBlcih3b3JsZCwgc3ByaXRlQ29uZmlnLngsIHNwcml0ZUNvbmZpZy55LCBzcHJpdGVDb25maWcubmFtZSk7XG4gICAgdGhpcy5zZXRTY2FsZShzY2FsZSwgc2NhbGUpO1xuICAgIHRoaXMuc2V0RnJpY3Rpb25BaXIoZnJpY3Rpb25BaXIpO1xuICAgIHRoaXMuc2V0QW5nbGUoYmV0d2VlbigwLCAzNjApKTtcbiAgICB0aGlzLnNldE1hc3MobWFzcyk7XG4gICAgdGhpcy5kZXB0aCA9IGRlcHRoO1xuICAgIHRoaXMucm90YXRpb25TcGVlZCA9IHJvdGF0aW9uU3BlZWQ7XG4gICAgdGhpcy52ZWxvY2l0eVggPSBiZXR3ZWVuKC01LCA1KTtcbiAgICB0aGlzLnZlbG9jaXR5WSA9IGJldHdlZW4oLTUsIDUpO1xuICAgIHRoaXMuZHVzdEVtaXR0ZXIgPSB0aGlzLnNjZW5lLmFkZC5wYXJ0aWNsZXMoJ2Zha2UnKTtcblxuICAgIHRoaXMuc2V0VmVsb2NpdHkodGhpcy52ZWxvY2l0eVgsIHRoaXMudmVsb2NpdHlZKTtcblxuICAgIHRoaXMuc2V0T25Db2xsaWRlKCgpID0+IHtcbiAgICAgIGxldCBleHBsb3Npb24gPSB0aGlzLnNjZW5lLmFkZC5wYXJ0aWNsZXMoJ2Zha2UnKS5jcmVhdGVFbWl0dGVyKHtcbiAgICAgICAgeDogdGhpcy54LFxuICAgICAgICB5OiB0aGlzLnksXG4gICAgICAgIHNwZWVkOiB7IG1pbjogLTgwMCwgbWF4OiA4MDAgfSxcbiAgICAgICAgYW5nbGU6IHsgbWluOiAwLCBtYXg6IDM2MCB9LFxuICAgICAgICBzY2FsZTogeyBzdGFydDogdGhpcy5zY2FsZSwgZW5kOiAwIH0sXG4gICAgICAgIGJsZW5kTW9kZTogJ1NDUkVFTicsXG4gICAgICAgIGdyYXZpdHlZOiB0aGlzLnksXG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgbGlmZXNwYW46IDEwMFxuICAgICAgfSk7XG4gICAgICBleHBsb3Npb24uZXhwbG9kZSgyMCwgdGhpcy54LCB0aGlzLnkpO1xuICAgICAgdGhpcy5pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICB0aGlzLmRlc3Ryb3kodHJ1ZSk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgaWYgKCF0aGlzLmlzRGVzdHJveWVkKSB7XG4gICAgICB0aGlzLmFwcGx5Rm9yY2VzKCk7XG4gICAgICB0aGlzLmFwcGx5UGFydGljbGVzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhcHBseUZvcmNlcygpIHtcbiAgICB0aGlzLnNldFZlbG9jaXR5KHRoaXMudmVsb2NpdHlYLCB0aGlzLnZlbG9jaXR5WSk7XG4gICAgdGhpcy5yb3RhdGlvbiArPSB0aGlzLnJvdGF0aW9uU3BlZWQ7XG4gIH1cblxuICBwcml2YXRlIGFwcGx5UGFydGljbGVzKCkge1xuICAgIC8vIHRoaXMuZHVzdEVtaXR0ZXIuY3JlYXRlRW1pdHRlcih7XG4gICAgLy8gICB4OiB0aGlzLngsXG4gICAgLy8gICB5OiB0aGlzLnksXG4gICAgLy8gICAvLyBmcmFtZTogJ3llbGxvdycsXG4gICAgLy8gICByYWRpYWw6IGZhbHNlLFxuICAgIC8vICAgc3BlZWQ6IHsgbWluOiAtODAwLCBtYXg6IDgwMCB9LFxuICAgIC8vICAgYW5nbGU6IHsgbWluOiAwLCBtYXg6IDM2MCB9LFxuICAgIC8vICAgc2NhbGU6IHsgc3RhcnQ6IHRoaXMuc2NhbGUsIGVuZDogMCB9LFxuICAgIC8vICAgYmxlbmRNb2RlOiAnU0NSRUVOJyxcbiAgICAvLyAgIGdyYXZpdHlZOiAtdGhpcy55LFxuICAgIC8vICAgcXVhbnRpdHk6IDQsXG4gICAgLy8gICBhY3RpdmU6IHRydWUsXG4gICAgLy8gICBsaWZlc3BhbjogMTBcbiAgICAvLyB9KTtcbiAgICAvLyB0aGlzLmR1c3RFbWl0dGVyO1xuXG4gICAgdGhpcy5kdXN0RW1pdHRlci5jcmVhdGVFbWl0dGVyKHtcbiAgICAgIC8vIGZyYW1lOiAneWVsbG93JyxcbiAgICAgIC8vIHJhZGlhbDogZmFsc2UsXG4gICAgICBsaWZlc3BhbjogMTAwLFxuICAgICAgc3BlZWRYOiB7IG1pbjogMjAwLCBtYXg6IDQwMCB9LFxuICAgICAgLy8gcXVhbnRpdHk6IDIsXG4gICAgICAvLyBncmF2aXR5WTogLXRoaXMueSxcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgIHNjYWxlOiB7IHN0YXJ0OiB0aGlzLnNjYWxlLCBlbmQ6IDAsIGVhc2U6ICdQb3dlcjMnIH0sXG4gICAgICBibGVuZE1vZGU6ICdBREQnXG4gICAgfSkuZW1pdFBhcnRpY2xlKDUsIHRoaXMueCwgdGhpcy55KTtcbiAgfVxufSIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4uL2xpYi9zcHJpdGUuY2xhc3MnO1xuaW1wb3J0IHsgSVNwcml0ZUNvbmZpZyB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW50ZXJmYWNlcyc7XG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4vcGxheWVyLnNwcml0ZVwiO1xuXG5jb25zdCBlbmVteUNvbmZpZyA9IHtcbiAgcm90YXRpb25EZWdyZWU6IDUsXG4gIHRocnVzdFNwZWVkOiAwLjAwOSxcbiAgYW5nbGU6IDkwLFxuICBzY2FsZTogMC4xNSxcbiAgZnJpY3Rpb25BaXI6IDAuMDUsXG4gIG1hc3M6IDMwLFxuICBkZXB0aDogMTAwMCxcbn07XG5cbmNvbnN0IGRlZ3JlZVRvUmFkaWFuID0gZCA9PiBkICogTWF0aC5QSSAvIDE4MDtcblxuZXhwb3J0IGNsYXNzIEVuZW15IGV4dGVuZHMgU3ByaXRlIHtcbiAgcm90YXRpb25SYWRpYW46IG51bWJlcjtcbiAgdGhydXN0U3BlZWQ6IG51bWJlcjtcbiAgaXNEZXN0cm95ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih3b3JsZDogUGhhc2VyLlBoeXNpY3MuTWF0dGVyLldvcmxkLCBzcHJpdGVDb25maWc6IElTcHJpdGVDb25maWcsIHtcbiAgICByb3RhdGlvbkRlZ3JlZSxcbiAgICB0aHJ1c3RTcGVlZCxcbiAgICBhbmdsZSxcbiAgICBzY2FsZSxcbiAgICBmcmljdGlvbkFpcixcbiAgICBtYXNzLFxuICAgIGRlcHRoLFxuICB9ID0gZW5lbXlDb25maWcpIHtcbiAgICBzdXBlcih3b3JsZCwgc3ByaXRlQ29uZmlnLngsIHNwcml0ZUNvbmZpZy55LCBzcHJpdGVDb25maWcubmFtZSk7XG4gICAgdGhpcy5zZXRTY2FsZShzY2FsZSwgc2NhbGUpO1xuICAgIHRoaXMuc2V0QW5nbGUoYW5nbGUpO1xuICAgIHRoaXMuc2V0RnJpY3Rpb25BaXIoZnJpY3Rpb25BaXIpO1xuICAgIHRoaXMuc2V0TWFzcyhtYXNzKTtcbiAgICB0aGlzLmRlcHRoID0gZGVwdGg7XG5cbiAgICB0aGlzLnJvdGF0aW9uUmFkaWFuID0gZGVncmVlVG9SYWRpYW4ocm90YXRpb25EZWdyZWUpO1xuICAgIHRoaXMudGhydXN0U3BlZWQgPSB0aHJ1c3RTcGVlZDtcblxuICAgIHRoaXMuc2V0T25Db2xsaWRlKCgpID0+IHtcbiAgICAgIHRoaXMuaXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5kZXN0cm95KHRydWUpO1xuICAgIH0pO1xuXG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKHBsYXllcjogUGxheWVyKSB7XG4gICAgaWYgKCF0aGlzLmlzRGVzdHJveWVkKSB7XG4gICAgICBjb25zdCBnZXRBbmdsZSA9IChjeCwgY3ksIGV4LCBleSkgPT4ge1xuICAgICAgICBjb25zdCBkeSA9IGV5IC0gY3k7XG4gICAgICAgIGNvbnN0IGR4ID0gZXggLSBjeDtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIoZHgsIGR5KSAqIDE4MCAvIE1hdGguUEk7XG4gICAgICB9O1xuICAgICAgZnVuY3Rpb24gYW5nbGUzNjAoY3gsIGN5LCBleCwgZXkpIHtcbiAgICAgICAgbGV0IHRoZXRhID0gZ2V0QW5nbGUoY3gsIGN5LCBleCwgZXkpO1xuICAgICAgICBpZiAodGhldGEgPCAwKSB0aGV0YSA9IDM2MCArIHRoZXRhO1xuICAgICAgICByZXR1cm4gdGhldGE7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGNvbnN0IHJhZCA9IGFuZ2xlMzYwKHRoaXMueCwgdGhpcy55LCBwbGF5ZXI/LngsIHBsYXllci55KTtcbiAgICAgIFxuICAgICAgdGhpcy50aHJ1c3RMZWZ0KHRoaXMudGhydXN0U3BlZWQpO1xuICAgICAgXG4gICAgICBpZiAocmFkICE9IHRoaXMucm90YXRpb25SYWRpYW4pIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IC1NYXRoLmFicygocmFkICsgMTgwKSAlIDM2MCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxufSIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4uL2xpYi9zcHJpdGUuY2xhc3MnO1xuaW1wb3J0IHsgSVNwcml0ZUNvbmZpZyB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW50ZXJmYWNlcyc7XG5cbmludGVyZmFjZSBJUGxhbmV0Q29uZmlnIHtcbiAgaXNBdHRyYWN0b3I/OiBib29sZWFuO1xuICBtYXNzPzogbnVtYmVyO1xuICBpc1N0YXRpYz86IGJvb2xlYW47XG4gIHNjYWxlPzogbnVtYmVyO1xufVxuXG5jb25zdCBwbGFuZXRBdHRyYWN0b3IgPSAoYm9keUE6IGFueSwgYm9keUI6IGFueSkgPT4ge1xuICBjb25zdCB4RGlmZiA9IGJvZHlBLnBvc2l0aW9uLnggLSBib2R5Qi5wb3NpdGlvbi54O1xuICBjb25zdCB5RGlmZiA9IGJvZHlBLnBvc2l0aW9uLnkgLSBib2R5Qi5wb3NpdGlvbi55O1xuICBpZiAoKHhEaWZmID4gMzAwIHx8IHhEaWZmIDwgLTMwMCkgfHwgKHlEaWZmID4gMzAwIHx8IHlEaWZmIDwgLTMwMCkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4ge1xuICAgIHg6IChib2R5QS5wb3NpdGlvbi54IC0gYm9keUIucG9zaXRpb24ueCkgKiAwLjAwMDAyLFxuICAgIHk6IChib2R5QS5wb3NpdGlvbi55IC0gYm9keUIucG9zaXRpb24ueSkgKiAwLjAwMDAyLFxuICB9XG59O1xuXG5leHBvcnQgY2xhc3MgUGxhbmV0IGV4dGVuZHMgU3ByaXRlIHtcbiAgY29uc3RydWN0b3Iod29ybGQ6IFBoYXNlci5QaHlzaWNzLk1hdHRlci5Xb3JsZCwgc3ByaXRlQ29uZmlnOiBJU3ByaXRlQ29uZmlnLCB7XG4gICAgaXNBdHRyYWN0b3IgPSBmYWxzZSxcbiAgICBtYXNzID0gMixcbiAgICBpc1N0YXRpYyA9IHRydWUsXG4gICAgc2NhbGUgPSAxLFxuICB9OiBJUGxhbmV0Q29uZmlnKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIG1hc3MsXG4gICAgICBpc1N0YXRpYyxcbiAgICB9O1xuICAgIGlmIChpc0F0dHJhY3Rvcikge1xuICAgICAgKDxhbnk+b3B0aW9ucykucGx1Z2luID0ge1xuICAgICAgICBhdHRyYWN0b3JzOiBbXG4gICAgICAgICAgcGxhbmV0QXR0cmFjdG9yLFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICAgIHN1cGVyKHdvcmxkLCBzcHJpdGVDb25maWcueCwgc3ByaXRlQ29uZmlnLnksIHNwcml0ZUNvbmZpZy5uYW1lLCB1bmRlZmluZWQsIG9wdGlvbnMpO1xuICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUsIHNjYWxlKTtcbiAgfVxufSIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4uL2xpYi9zcHJpdGUuY2xhc3MnO1xuaW1wb3J0IHsgSVNwcml0ZUNvbmZpZywgUGxheWVyQWN0aW9uIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IFBsYXllckNvbnRyb2xsZXIgfSBmcm9tICcuLi9vYmplY3RzL2NvbnRyb2xzL3BsYXllci1jb250cm9sbGVyJztcblxuY29uc3QgcGxheWVyQ29uZmlnID0ge1xuICByb3RhdGlvbkRlZ3JlZTogMTAsXG4gIHRocnVzdFNwZWVkOiAwLjAxLFxuICBhbmdsZTogOTAsXG4gIHNjYWxlOiAwLjE1LFxuICBmcmljdGlvbkFpcjogMC4wNSxcbiAgbWFzczogMzAsXG4gIGRlcHRoOiAxMDAwLFxufTtcblxuY29uc3QgZGVncmVlVG9SYWRpYW4gPSAoZDogbnVtYmVyKSA9PiBkICogTWF0aC5QSSAvIDE4MDtcblxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIFNwcml0ZSB7XG4gIHJvdGF0aW9uUmFkaWFuOiBudW1iZXI7XG4gIHRocnVzdFNwZWVkOiBudW1iZXI7XG4gIGNvbnRyb2xsZXIgPSBuZXcgUGxheWVyQ29udHJvbGxlcigpO1xuICBcbiAgY29uc3RydWN0b3Iod29ybGQ6IFBoYXNlci5QaHlzaWNzLk1hdHRlci5Xb3JsZCwgc3ByaXRlQ29uZmlnOiBJU3ByaXRlQ29uZmlnLCB7XG4gICAgcm90YXRpb25EZWdyZWUsXG4gICAgdGhydXN0U3BlZWQsXG4gICAgYW5nbGUsXG4gICAgc2NhbGUsXG4gICAgZnJpY3Rpb25BaXIsXG4gICAgbWFzcyxcbiAgICBkZXB0aCxcbiAgfSA9IHBsYXllckNvbmZpZykge1xuICAgIHN1cGVyKHdvcmxkLCBzcHJpdGVDb25maWcueCwgc3ByaXRlQ29uZmlnLnksIHNwcml0ZUNvbmZpZy5uYW1lKTtcbiAgICB0aGlzLnNldFNjYWxlKHNjYWxlLCBzY2FsZSk7XG4gICAgdGhpcy5zZXRBbmdsZShhbmdsZSk7XG4gICAgdGhpcy5zZXRGcmljdGlvbkFpcihmcmljdGlvbkFpcik7XG4gICAgdGhpcy5zZXRNYXNzKG1hc3MpO1xuICAgIHRoaXMuZGVwdGggPSBkZXB0aDtcbiAgICBcbiAgICB0aGlzLnJvdGF0aW9uUmFkaWFuID0gZGVncmVlVG9SYWRpYW4ocm90YXRpb25EZWdyZWUpO1xuICAgIHRoaXMudGhydXN0U3BlZWQgPSB0aHJ1c3RTcGVlZDtcbiAgICBcbiAgICB0aGlzLnNldE9uQ29sbGlkZSgoKSA9PiB7XG4gICAgICAvLyBtYWtlIGV4cGxvc2lvbiBhbmltYXRpb24sIGFuZCByZXN0YXJ0IHNjZW5lXG4gICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGlzYWJsZUludGVyYWN0aXZlKCk7XG4gICAgfSk7XG4gICAgXG4gICAgdGhpcy5jb250cm9sbGVyLmluaXQoKTtcbiAgfVxuICBcbiAgcHVibGljIG1hbmFnZUNvbnRyb2xzKHsgdXAsIHJpZ2h0LCBsZWZ0IH06IFBoYXNlci5UeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzKSB7XG4gICAgaWYgKHVwPy5pc0Rvd24pIHtcbiAgICAgIHRoaXMudGhydXN0TGVmdCh0aGlzLnRocnVzdFNwZWVkKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKHJpZ2h0Py5pc0Rvd24pIHtcbiAgICAgIHRoaXMuc2V0Um90YXRpb24odGhpcy5yb3RhdGlvbiArPSB0aGlzLnJvdGF0aW9uUmFkaWFuKTtcbiAgICB9IGVsc2UgaWYgKGxlZnQ/LmlzRG93bikge1xuICAgICAgdGhpcy5zZXRSb3RhdGlvbih0aGlzLnJvdGF0aW9uIC09IHRoaXMucm90YXRpb25SYWRpYW4pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVBY3Rpb24oa2V5UHJlc3NlZDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgYWN0aW9uVG9UYWtlID0gdGhpcy5jb250cm9sbGVyLmtleUV2ZW50cy5maW5kKGtleSA9PiBrZXkua2V5ID09PSBrZXlQcmVzc2VkKTtcbiAgICBzd2l0Y2ggKGFjdGlvblRvVGFrZT8uYWN0aW9uKSB7XG4gICAgICBjYXNlIFBsYXllckFjdGlvbi5GSVJFX0xBU0VSOlxuICAgICAgICBjb25zdCBsYXNlciA9IHRoaXMuc2NlbmUubWF0dGVyLmFkZC5zcHJpdGUodGhpcy54LCB0aGlzLnksICdMYXNlcicpO1xuICAgICAgICBsYXNlci5zZXRWZWxvY2l0eSgxMCwgdGhpcy5yb3RhdGlvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDogXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBcbn0iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuLi9saWIvc3ByaXRlLmNsYXNzJztcbmltcG9ydCB7IElTcHJpdGVDb25maWcgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2ludGVyZmFjZXMnO1xuXG5pbnRlcmZhY2UgSUNvbmZpZyB7XG4gIGRlcHRoPzogbnVtYmVyLFxuICBzY2FsZT86IG51bWJlcixcbn1cblxuZXhwb3J0IGNsYXNzIFNwYWNlU3RhdGlvbiBleHRlbmRzIFNwcml0ZSB7XG4gIGNvbnN0cnVjdG9yKHdvcmxkOiBQaGFzZXIuUGh5c2ljcy5NYXR0ZXIuV29ybGQsIHNwcml0ZUNvbmZpZzogSVNwcml0ZUNvbmZpZywge1xuICAgIGRlcHRoID0gMTAwMCxcbiAgICBzY2FsZSA9IDAuNSxcbiAgfTogSUNvbmZpZykge1xuICAgIHN1cGVyKHdvcmxkLCBzcHJpdGVDb25maWcueCwgc3ByaXRlQ29uZmlnLnksIHNwcml0ZUNvbmZpZy5uYW1lLCB1bmRlZmluZWQsIHsgaXNTdGF0aWM6IHRydWUgfSk7XG4gICAgdGhpcy5zZXRTY2FsZShzY2FsZSwgc2NhbGUpO1xuICAgIHRoaXMuZGVwdGggPSBkZXB0aDtcbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==