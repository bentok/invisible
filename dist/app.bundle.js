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

/***/ "./src/const/asteroid.const.ts":
/*!*************************************!*\
  !*** ./src/const/asteroid.const.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ASTEROID = {
    OFFSET: 5,
    LARGE: {
        IMGSRC: 'LargeAsteroid',
        CONFIG: {
            mass: 30,
            scale: .5,
            frictionAir: .05,
            rotationSpeed: .05,
            depth: 1000,
            maxVelocity: 2,
            minVelocity: -2
        }
    },
    MEDIUM: {
        IMGSRC: 'MediumAsteroid',
        CONFIG: {
            mass: 30,
            scale: .5,
            frictionAir: .05,
            rotationSpeed: .05,
            depth: 1000,
            maxVelocity: 3,
            minVelocity: -3
        }
    },
    SMALL: {
        IMGSRC: 'SmallAsteroid',
        CONFIG: {
            mass: 30,
            scale: .5,
            frictionAir: .05,
            rotationSpeed: .05,
            depth: 1000,
            maxVelocity: 4,
            minVelocity: -4
        }
    }
};


/***/ }),

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
    scene: [scenes_1.BootScene, scenes_1.MainMenuScene, scenes_1.GameScene, scenes_1.MissionCompleteScene],
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
    fill: '#00ffff',
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
        this.load.image('SmallAsteroid', './src/assets/itchio_space_pixels/asteroid_tiny.png');
        this.load.image('MediumAsteroid', './src/assets/itchio_space_pixels/pixel_asteroid.png');
        this.load.image('LargeAsteroid', './src/assets/itchio_space_pixels/asteroid_grey.png');
        this.load.image('GreenShip', './src/assets/itchio_space_pixels/pixel_ship.png');
        this.load.image('RedShip', './src/assets/itchio_space_pixels/pixel_ship_red.png');
        this.load.image('SpaceStation', './src/assets/itchio_space_pixels/pixel_station_blue.png');
        this.load.image('Laser', './src/assets/itchio_space_pixels/laser.png');
        this.load.audio('music', ['./src/assets/sound/Space Riddle.mp3']);
        this.load.audio('player_laser', ['./src/assets/sound/player_laser.wav']);
        this.load.audio('player_rockets', ['./src/assets/sound/player_rockets.wav']);
        this.load.audio('explosion', ['./src/assets/sound/explosion.wav']);
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
const asteroid_service_1 = __webpack_require__(/*! ../services/asteroid.service */ "./src/services/asteroid.service.ts");
const sceneConfig = {
    active: false,
    visible: false,
    key: 'Game',
};
class GameScene extends lib_1.Scene {
    constructor() {
        super(sceneConfig);
        this.faded = false;
    }
    create() {
        this.faded = false;
        this.sound.add('music').play();
        this.sound.add('player_laser');
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.cameras.main.setBounds(0, 0, galaxy_const_1.GALAXY.width, galaxy_const_1.GALAXY.height);
        this.cameras.main.setZoom(2);
        this.matter.enableAttractorPlugin();
        const earth = new planet_sprite_1.Planet(this.matter.world, { x: galaxy_const_1.GALAXY.width - 500, y: 200, name: 'Earth' }, { scale: 3 });
        this.add.existing(earth);
        const mars = new planet_sprite_1.Planet(this.matter.world, { x: 300, y: 600, name: 'Mars' }, { scale: 3 });
        this.add.existing(mars);
        const jupiter = new planet_sprite_1.Planet(this.matter.world, { x: galaxy_const_1.GALAXY.width / 2, y: galaxy_const_1.GALAXY.height / 2, name: 'Jupiter' }, { isAttractor: true, scale: 5, mass: 5 });
        this.add.existing(jupiter);
        this.spaceStation = new space_station_sprite_1.SpaceStation(this.matter.world, { x: galaxy_const_1.GALAXY.width - 200, y: galaxy_const_1.GALAXY.height - 300, name: 'SpaceStation' }, {});
        this.add.existing(this.spaceStation);
        const playerSounds = {
            laser: () => this.sound.play('player_laser'),
            rockets: () => this.sound.play('player_rockets')
        };
        this.player = new player_sprite_1.Player(this.matter.world, { x: 20, y: 300, name: 'GreenShip' }, playerSounds);
        this.add.existing(this.player);
        rxjs_1.fromEvent(document, 'keydown').subscribe((keyPressed) => {
            this.player.handleAction(keyPressed.keyCode);
        });
        this.enemy = new enemy_sprite_1.Enemy(this.matter.world, { x: 400, y: 400, name: 'RedShip' });
        this.add.existing(this.enemy);
        let maxAsteroids = 10;
        const asteroidSounds = { explosion: () => this.sound.play('explosion') };
        this.asteroidService = new asteroid_service_1.AsteroidService(this.matter.world, maxAsteroids, asteroidSounds);
        stars_service_1.generateStars(this, galaxy_const_1.GALAXY.width, galaxy_const_1.GALAXY.height, 800);
    }
    update() {
        this.player.manageControls(this.cursorKeys);
        this.cameras.main.centerOn(this.player.x, this.player.y);
        this.enemy.update(this.player);
        this.asteroidService.update();
        if (this.spaceStation.win) {
            this.scene.start('MissionComplete');
        }
        if (this.player.destroyed && !this.faded) {
            this.faded = true;
            this.cameras.main.fadeOut(1000);
            this.cameras.main.once('camerafadeoutcomplete', () => {
                this.scene.restart();
            });
        }
        if (this.enemy.isDestroyed) {
            this.spaceStation.visible = true;
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
var mission_complete_scene_1 = __webpack_require__(/*! ./mission-complete.scene */ "./src/scenes/mission-complete.scene.ts");
exports.MissionCompleteScene = mission_complete_scene_1.MissionCompleteScene;


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
        this.add.text(100, 50, 'Space Jammin\'', { fill: '#FFFFFF' }).setFontSize(24);
        new menu_button_text_1.MenuButton(this, 100, 100, 'Start Game', () => {
            this.scene.start('Game');
        });
        this.add.text(100, 200, 'The galaxy is facing an existential threat of proportions that cause\n' +
            'concern. You have data that can assist in eliminating the threat, but it is\n' +
            'too risky to send it over galactic telecom gamma waves, for fear of\n' +
            'it being intercepted and causing the existential threat to grow in its\n' +
            'level of concerningness.\n' +
            '\n' +
            'You must personally deliver the data to \'the star base. You are almost\n' +
            'there but a bounty hunter is on your tail, and the space station has\n' +
            'turned on cloaking to conceal its location until you have eliminate the \n' +
            'bounty hunter. But your weapon systems are down. \n' +
            '\n' +
            'Your mission: Find a way to destroy the bounty hunter and find the base.', { fill: '#FFFFFF' }).setFontSize(16);
    }
}
exports.MainMenuScene = MainMenuScene;


/***/ }),

/***/ "./src/scenes/mission-complete.scene.ts":
/*!**********************************************!*\
  !*** ./src/scenes/mission-complete.scene.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = __webpack_require__(/*! ../lib */ "./src/lib/index.ts");
const sceneConfig = {
    active: false,
    visible: false,
    key: 'MissionComplete',
};
class MissionCompleteScene extends lib_1.Scene {
    constructor() {
        super(sceneConfig);
    }
    create() {
        this.add.text(100, 50, 'Mission Complete', { fill: '#FFFFFF' }).setFontSize(24);
        this.add.text(100, 100, 'The galaxy was facing an existential threat of proportions that caused\n' +
            'concern. You had data that could assist in eliminating the threat, but it was\n' +
            'too risky to send it over galactic telecom gamma waves, for fear of\n' +
            'it being intercepted and causing the existential threat to grow in its\n' +
            'level of concerningness.\n' +
            '\n' +
            'You personally delivered the data to \'the star base. You were almost\n' +
            'there but a bounty hunter was on your tail, and the space station had\n' +
            'turned on cloaking to conceal its location until you eliminated the \n' +
            'bounty hunter. But your weapon systems were down. And you got creative by\n' +
            'making crazy maneuvers and making the bounty hunter crash\n' +
            '\n' +
            'Smooth moves!', { fill: '#FFFFFF' }).setFontSize(16);
    }
}
exports.MissionCompleteScene = MissionCompleteScene;


/***/ }),

/***/ "./src/services/asteroid.service.ts":
/*!******************************************!*\
  !*** ./src/services/asteroid.service.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const galaxy_const_1 = __webpack_require__(/*! ../const/galaxy.const */ "./src/const/galaxy.const.ts");
const asteroid_const_1 = __webpack_require__(/*! ../const/asteroid.const */ "./src/const/asteroid.const.ts");
const asteroid_sprite_1 = __webpack_require__(/*! ../sprites/asteroid.sprite */ "./src/sprites/asteroid.sprite.ts");
const Math_1 = __webpack_require__(/*! ../lib/Math */ "./src/lib/Math.ts");
class AsteroidService {
    constructor(world, maxAsteroids, soundEffects) {
        this.world = world;
        this.maxAsteroids = maxAsteroids;
        this.asteroids = [];
        this.soundEffects = soundEffects;
        this.spawnAsteroids(this.maxAsteroids);
    }
    ;
    update() {
        this.asteroids = this.asteroids.filter(this.checkAsteroid);
        this.numAsteroids = this.asteroids.length;
        this.asteroids.forEach(asteroid => asteroid.update());
        let desroyedAsteroids = this.maxAsteroids - this.numAsteroids;
        if (desroyedAsteroids > 0) {
            this.spawnAsteroids(desroyedAsteroids);
        }
        return this.asteroids;
    }
    spawnAsteroids(numAsteroids) {
        for (let i = 0; i < numAsteroids; i++) {
            let asteroidX = galaxy_const_1.GALAXY.width - (asteroid_const_1.ASTEROID.OFFSET * 2);
            let asteroidY = galaxy_const_1.GALAXY.height - (asteroid_const_1.ASTEROID.OFFSET * 2);
            if (Math_1.between(0, 2) == 1) {
                asteroidX = Math_1.between(0, 2) == 1 ? Math_1.between(0, galaxy_const_1.GALAXY.width / 2) : Math_1.between(galaxy_const_1.GALAXY.width / 2, galaxy_const_1.GALAXY.width);
                asteroidY = Math_1.between(0, 2) == 1 ? asteroidY : galaxy_const_1.GALAXY.height + (asteroid_const_1.ASTEROID.OFFSET * 2);
            }
            else {
                asteroidY = Math_1.between(0, 2) == 1 ? Math_1.between(0, galaxy_const_1.GALAXY.height / 2) : Math_1.between(galaxy_const_1.GALAXY.height / 2, galaxy_const_1.GALAXY.height);
                asteroidX = Math_1.between(0, 2) == 1 ? asteroidX : galaxy_const_1.GALAXY.width + (asteroid_const_1.ASTEROID.OFFSET * 2);
            }
            let imgSrc = asteroid_const_1.ASTEROID.MEDIUM.IMGSRC;
            let asteroidConfig = asteroid_const_1.ASTEROID.MEDIUM.CONFIG;
            switch (Math_1.between(0, 3)) {
                case 3: {
                    imgSrc = asteroid_const_1.ASTEROID.LARGE.IMGSRC;
                    asteroidConfig = asteroid_const_1.ASTEROID.LARGE.CONFIG;
                    break;
                }
                case 2: {
                    imgSrc = asteroid_const_1.ASTEROID.MEDIUM.IMGSRC;
                    asteroidConfig = asteroid_const_1.ASTEROID.MEDIUM.CONFIG;
                    break;
                }
                case 1: {
                    imgSrc = asteroid_const_1.ASTEROID.SMALL.IMGSRC;
                    asteroidConfig = asteroid_const_1.ASTEROID.SMALL.CONFIG;
                    break;
                }
            }
            let asteroid = new asteroid_sprite_1.Asteroid(this.world, { x: asteroidX, y: asteroidY, name: imgSrc }, this.soundEffects, asteroidConfig);
            this.world.scene.add.existing(asteroid);
            this.asteroids.push(asteroid);
        }
        this.numAsteroids = this.asteroids.length;
    }
    checkAsteroid(asteroid) {
        return !asteroid.isDestroyed && !asteroid.isOffScreen;
    }
}
exports.AsteroidService = AsteroidService;


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
const galaxy_const_1 = __webpack_require__(/*! ../const/galaxy.const */ "./src/const/galaxy.const.ts");
const asteroid_const_1 = __webpack_require__(/*! ../const/asteroid.const */ "./src/const/asteroid.const.ts");
;
class Asteroid extends sprite_class_1.Sprite {
    constructor(world, spriteConfig, soundEffects, asteroidConfig) {
        super(world, spriteConfig.x, spriteConfig.y, spriteConfig.name);
        this.isDestroyed = false;
        this.isOffScreen = false;
        this.setScale(asteroidConfig.scale, asteroidConfig.scale);
        this.setFrictionAir(asteroidConfig.frictionAir);
        this.setAngle(Math_1.between(0, 360));
        this.setMass(asteroidConfig.mass);
        this.depth = asteroidConfig.depth;
        this.rotationSpeed = asteroidConfig.rotationSpeed;
        this.velocityX = Math_1.between(asteroidConfig.minVelocity, asteroidConfig.maxVelocity);
        this.velocityY = Math_1.between(asteroidConfig.minVelocity, asteroidConfig.maxVelocity);
        if (this.velocityX == 0) {
            this.velocityX = 2;
        }
        if (this.velocityY == 0) {
            this.velocityX = -2;
        }
        this.soundEffects = soundEffects;
        this.setVelocity(this.velocityX, this.velocityY);
        this.setOnCollide(() => {
            var _a;
            let explosion = (_a = this.scene) === null || _a === void 0 ? void 0 : _a.add.particles('fake').createEmitter({
                x: this.x,
                y: this.y,
                speed: { min: -300, max: 300 },
                angle: { min: 0, max: 360 },
                scale: { start: this.scale, end: 0 },
                blendMode: 'SCREEN',
                gravityY: -this.y,
                active: true,
                lifespan: 250
            });
            explosion === null || explosion === void 0 ? void 0 : explosion.explode(15, this.x, this.y);
            this.isDestroyed = true;
            this.destroy(true);
        });
    }
    update() {
        this.checkIfOffScreen();
        if (!this.isDestroyed && !this.isOffScreen) {
            this.applyForces();
        }
        else {
            this.destroy(true);
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
    checkIfOffScreen() {
        if (this.x > galaxy_const_1.GALAXY.width + (asteroid_const_1.ASTEROID.OFFSET * 3)) {
            this.isOffScreen = true;
        }
        else if (this.x < -(asteroid_const_1.ASTEROID.OFFSET * 3)) {
            this.isOffScreen = true;
        }
        if (this.y > galaxy_const_1.GALAXY.height + (asteroid_const_1.ASTEROID.OFFSET * 3)) {
            this.isOffScreen = true;
        }
        else if (this.y < -(asteroid_const_1.ASTEROID.OFFSET * 3)) {
            this.isOffScreen = true;
        }
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
    thrustSpeed: 0.01,
    angle: 90,
    scale: 0.25,
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
            var _a;
            let explosion = (_a = this.scene) === null || _a === void 0 ? void 0 : _a.add.particles('fake').createEmitter({
                x: this.x,
                y: this.y,
                speed: { min: -300, max: 300 },
                angle: { min: 0, max: 360 },
                scale: { start: this.scale, end: 0 },
                blendMode: 'SCREEN',
                gravityY: -this.y,
                active: true,
                lifespan: 250
            });
            explosion === null || explosion === void 0 ? void 0 : explosion.explode(15, this.x, this.y);
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
        x: (bodyA.position.x - bodyB.position.x) * 0.000025,
        y: (bodyA.position.y - bodyB.position.y) * 0.000025,
    };
};
class Planet extends sprite_class_1.Sprite {
    constructor(world, spriteConfig, { isAttractor = false, mass = 2, isStatic = true, scale = 1, depth = 1000, }) {
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
        this.depth = depth;
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
const player_controller_1 = __webpack_require__(/*! ../objects/controls/player-controller */ "./src/objects/controls/player-controller.ts");
const playerConfig = {
    rotationDegree: 10,
    thrustSpeed: 0.01,
    angle: 90,
    scale: 0.25,
    frictionAir: 0.05,
    mass: 30,
    depth: 1000,
};
const degreeToRadian = (d) => d * Math.PI / 180;
class Player extends sprite_class_1.Sprite {
    constructor(world, spriteConfig, soundEffects, { rotationDegree, thrustSpeed, angle, scale, frictionAir, mass, depth, } = playerConfig) {
        super(world, spriteConfig.x, spriteConfig.y, spriteConfig.name);
        this.controller = new player_controller_1.PlayerController();
        this.setScale(scale, scale);
        this.setAngle(angle);
        this.setFrictionAir(frictionAir);
        this.setMass(mass);
        this.depth = depth;
        this.body.name = 'Player';
        this.rotationRadian = degreeToRadian(rotationDegree);
        this.thrustSpeed = thrustSpeed;
        this.soundEffects = soundEffects;
        this.setOnCollide(() => {
            var _a;
            let explosion = (_a = this.scene) === null || _a === void 0 ? void 0 : _a.add.particles('fake').createEmitter({
                x: this.x,
                y: this.y,
                speed: { min: -300, max: 300 },
                angle: { min: 0, max: 360 },
                scale: { start: this.scale, end: 0 },
                blendMode: 'SCREEN',
                gravityY: -this.y,
                active: true,
                lifespan: 250,
            });
            explosion === null || explosion === void 0 ? void 0 : explosion.explode(15, this.x, this.y);
            this.visible = false;
            this.disableInteractive();
            this.destroyed = true;
        });
        this.controller.init();
    }
    manageControls({ up, right, left }) {
        if (up === null || up === void 0 ? void 0 : up.isDown) {
            this.thrustLeft(this.thrustSpeed);
        }
        if (up && Phaser.Input.Keyboard.JustDown(up)) {
            this.soundEffects.rockets();
        }
        if (right === null || right === void 0 ? void 0 : right.isDown) {
            this.setRotation(this.rotation += this.rotationRadian);
        }
        else if (left === null || left === void 0 ? void 0 : left.isDown) {
            this.setRotation(this.rotation -= this.rotationRadian);
        }
    }
    handleAction(keyPressed) {
    }
    determineLaserVelocity() {
        let x = 10;
        let y = Math.abs(this.rotation);
        if (this.rotation > 3 && this.rotation <= 5) {
            x = -10;
        }
        console.log(`X: ${x}, Y: ${y}, ROTATION: ${this.rotation}, ANGLE: ${this.angle}`);
        return { x, y };
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
        this.visible = false;
        this.win = false;
        this.setOnCollide((c) => {
            if (this.visible && c.bodyB.name === 'Player') {
                this.win = true;
            }
        });
    }
}
exports.SpaceStation = SpaceStation;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0L2FzdGVyb2lkLmNvbnN0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdC9nYWxheHkuY29uc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVyZmFjZXMvaW50ZXJmYWNlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL01hdGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9nYW1lLW9iamVjdHMuY2xhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3NjZW5lLmNsYXNzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvc3ByaXRlLmNsYXNzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9tZW51LWJ1dHRvbi50ZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL2NvbnRyb2xzL3BsYXllci1jb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYm9vdC5zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2dhbWUuc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tbWVudS5zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21pc3Npb24tY29tcGxldGUuc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2FzdGVyb2lkLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3BsYXllci1zdGF0ZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9zdGFycy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL2FzdGVyb2lkLnNwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9lbmVteS5zcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvcGxhbmV0LnNwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9wbGF5ZXIuc3ByaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL3NwYWNlLXN0YXRpb24uc3ByaXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBC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QUFDLENBQUMsRUFBRSxZQUFZLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQy9GLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBRWpCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUM3QyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQzthQUNqQjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUVGO0FBbkJELG9DQW1CQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJcbmV4cG9ydCBjb25zdCBBU1RFUk9JRCA9IHtcbiAgICBPRkZTRVQ6IDUsXG4gICAgTEFSR0U6IHtcbiAgICAgICAgSU1HU1JDOiAnTGFyZ2VBc3Rlcm9pZCcsXG4gICAgICAgIENPTkZJRzoge1xuICAgICAgICAgICAgbWFzczogMzAsXG4gICAgICAgICAgICBzY2FsZTogLjUsXG4gICAgICAgICAgICBmcmljdGlvbkFpcjogLjA1LFxuICAgICAgICAgICAgcm90YXRpb25TcGVlZDogLjA1LFxuICAgICAgICAgICAgZGVwdGg6IDEwMDAsXG4gICAgICAgICAgICBtYXhWZWxvY2l0eTogMixcbiAgICAgICAgICAgIG1pblZlbG9jaXR5OiAtMlxuICAgICAgICB9XG4gICAgfSxcbiAgICBNRURJVU06IHtcbiAgICAgICAgSU1HU1JDOiAnTWVkaXVtQXN0ZXJvaWQnLFxuICAgICAgICBDT05GSUc6IHtcbiAgICAgICAgICAgIG1hc3M6IDMwLFxuICAgICAgICAgICAgc2NhbGU6IC41LFxuICAgICAgICAgICAgZnJpY3Rpb25BaXI6IC4wNSxcbiAgICAgICAgICAgIHJvdGF0aW9uU3BlZWQ6IC4wNSxcbiAgICAgICAgICAgIGRlcHRoOiAxMDAwLFxuICAgICAgICAgICAgbWF4VmVsb2NpdHk6IDMsXG4gICAgICAgICAgICBtaW5WZWxvY2l0eTogLTNcbiAgICAgICAgfVxuICAgIH0sXG4gICAgU01BTEw6IHtcbiAgICAgICAgSU1HU1JDOiAnU21hbGxBc3Rlcm9pZCcsXG4gICAgICAgIENPTkZJRzoge1xuICAgICAgICAgICAgbWFzczogMzAsXG4gICAgICAgICAgICBzY2FsZTogLjUsXG4gICAgICAgICAgICBmcmljdGlvbkFpcjogLjA1LFxuICAgICAgICAgICAgcm90YXRpb25TcGVlZDogLjA1LFxuICAgICAgICAgICAgZGVwdGg6IDEwMDAsXG4gICAgICAgICAgICBtYXhWZWxvY2l0eTogNCxcbiAgICAgICAgICAgIG1pblZlbG9jaXR5OiAtNFxuICAgICAgICB9XG4gICAgfVxufTtcbiIsIlxuZXhwb3J0IGNvbnN0IEdBTEFYWSA9IHtcbiAgICB3aWR0aDogMTgwMCxcbiAgICBoZWlnaHQ6IDEyMDAsXG4gICAgc2VjdG9yU2l6ZTogMTYsXG4gICAgLy8gU291cmNlcyBsb2FkZWQgaW4gYm9vdFxuICAgIHBsYW5ldFNvdXJjZXM6IFsnRWFydGgnLCAnSnVwaXRlcicsICdNYXJzJywgJ01vb24nXSxcbiAgICBzdGFyQ29sb3JzOiBbMHhmZmZmZmYsIDB4ZmNiYTAzLCAweDM1ZmMwMywgMHgwNWYyZWUsIDB4OWQwMmViLCAweGVkMDc2N10sXG59O1xuIiwiZXhwb3J0IGludGVyZmFjZSBJR2FsYXh5U3lzdGVtQ29uc3RydWN0b3Ige1xuICAgIHNjZW5lOiBQaGFzZXIuU2NlbmU7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJR2FsYXh5UmVzb3VyY2VDb25zdHJ1Y3RvciB7XG4gICAgc2NlbmU6IFBoYXNlci5TY2VuZTtcbiAgICBwb3NpdGlvbjogUGhhc2VyLk1hdGguVmVjdG9yMjtcbiAgICBybmQ6IFBoYXNlci5NYXRoLlJhbmRvbURhdGFHZW5lcmF0b3I7XG59XG5cbmV4cG9ydCBlbnVtIFZlbG9jaXR5RGlyZWN0aW9uIHtcbiAgICBOT1RfU0VULFxuICAgIFgsXG4gICAgWVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZlbG9jaXR5IHtcbiAgICB2ZWxvY2l0eTogbnVtYmVyO1xuICAgIGRpcmVjdGlvbjogVmVsb2NpdHlEaXJlY3Rpb247XG59XG5cbmV4cG9ydCBlbnVtIFBsYXllckFjdGlvbiB7XG4gICAgRklSRV9MQVNFUiA9ICdGSVJFX0xBU0VSJ1xufVxuXG4vLyBHZW5lcmljIGtleSBpbnRlcmZhY2VzXG5leHBvcnQgaW50ZXJmYWNlIElLZXlFdmVudHMge1xuICAgIGtleTogbnVtYmVyO1xuICAgIGFjdGlvbjogUGxheWVyQWN0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDb250cm9sRXZlbnRIYW5kbGVyIHtcbiAgICBnYW1lS2V5OiBzdHJpbmc7XG4gICAga2V5RXZlbnRzOiBJS2V5RXZlbnRzW107XG5cbiAgICBpbml0KCk6IHZvaWQ7XG4gICAgaGFuZGxlS2V5UHJlc3Moa2V5OiBudW1iZXIpOiBQbGF5ZXJBY3Rpb24gfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTcHJpdGVDb25maWcge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJldHdlZW4gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xuICByZXR1cm4gUGhhc2VyLk1hdGguQmV0d2VlbihtaW4sIG1heClcbn0iLCJleHBvcnQgY2xhc3MgVGV4dCBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0IHt9XG5leHBvcnQgY2xhc3MgR3JhcGhpY3MgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuR3JhcGhpY3Mge31cbiIsImV4cG9ydCAqIGZyb20gJy4vaW5wdXQuaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc2NlbmVzLmludGVyZmFjZSc7XG5leHBvcnQgKiBmcm9tICcuL2dhbWUtb2JqZWN0cy5pbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9waHlzaWNzLmludGVmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc2NlbmUuY2xhc3MnO1xuZXhwb3J0ICogZnJvbSAnLi9nYW1lLW9iamVjdHMuY2xhc3MnO1xuIiwiZXhwb3J0IGNsYXNzIFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHt9XG4iLCJleHBvcnQgY2xhc3MgU3ByaXRlIGV4dGVuZHMgUGhhc2VyLlBoeXNpY3MuTWF0dGVyLlNwcml0ZSB7fSIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xuaW1wb3J0IHtCb290U2NlbmUsIEdhbWVTY2VuZSwgTWFpbk1lbnVTY2VuZSwgTWlzc2lvbkNvbXBsZXRlU2NlbmV9IGZyb20gJy4vc2NlbmVzJztcblxuY29uc3QgZ2FtZUNvbmZpZzogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcbiAgdGl0bGU6ICdJbnZpc2libGUgKFdvcmtpbmcgVGl0bGUpJyxcblxuICB0eXBlOiBQaGFzZXIuQVVUTyxcblxuICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuXG4gIHBoeXNpY3M6IHtcbiAgICBkZWZhdWx0OiAnbWF0dGVyJyxcbiAgICBtYXR0ZXI6IHtcbiAgICAgIGdyYXZpdHk6IHsgXG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICB9LFxuICAgICAgLy8gXCJwbHVnaW5zLmF0dHJhY3RvcnNcIjogdHJ1ZSxcbiAgICAgIC8vIGRlYnVnOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIHNjZW5lOiBbQm9vdFNjZW5lLCBNYWluTWVudVNjZW5lLCBHYW1lU2NlbmUsIE1pc3Npb25Db21wbGV0ZVNjZW5lXSxcblxuICBwYXJlbnQ6ICdjb250ZW50JyxcbiAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMCcsXG4gIHJlbmRlcjogeyBwaXhlbEFydDogdHJ1ZSwgYW50aWFsaWFzOiB0cnVlIH0sXG59O1xuXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKTtcbiIsImltcG9ydCB7IElUZXh0U3R5bGUsIFNjZW5lLCBUZXh0IH0gZnJvbSAnLi9saWInO1xuXG5jb25zdCBidXR0b25SZXN0U3R5bGUgPSB7XG4gICAgZmlsbDogJyMwMGZmZmYnLFxufTtcblxuY29uc3QgYnV0dG9uSG92ZXJTdHlsZSA9IHtcbiAgICBmaWxsOiAnIzdDRkMwMCcsXG59O1xuXG5jb25zdCBidXR0b25BY3RpdmVTdHlsZSA9IHtcbiAgICBmaWxsOiAnIzAwMDAwMCcsXG59O1xuXG5leHBvcnQgY2xhc3MgTWVudUJ1dHRvbiBleHRlbmRzIFRleHQge1xuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBTY2VuZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHRleHQ6IHN0cmluZywgb25DbGljaz86ICgpID0+IHZvaWQpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUsIHgsIHksIHRleHQsIGJ1dHRvblJlc3RTdHlsZSBhcyBJVGV4dFN0eWxlKTtcbiAgICAgICAgc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc2V0SW50ZXJhY3RpdmUoeyB1c2VIYW5kQ3Vyc29yOiB0cnVlIH0pXG4gICAgICAgICAgICAub24oJ3BvaW50ZXJvdmVyJywgdGhpcy5lbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKVxuICAgICAgICAgICAgLm9uKCdwb2ludGVyb3V0JywgdGhpcy5lbnRlck1lbnVCdXR0b25SZXN0U3RhdGUpXG4gICAgICAgICAgICAub24oJ3BvaW50ZXJkb3duJywgdGhpcy5lbnRlck1lbnVCdXR0b25BY3RpdmVTdGF0ZSlcbiAgICAgICAgICAgIC5vbigncG9pbnRlcnVwJywgdGhpcy5lbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKTtcblxuICAgICAgICBpZiAob25DbGljaykge1xuICAgICAgICAgICAgdGhpcy5vbigncG9pbnRlcnVwJywgb25DbGljayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGVudGVyTWVudUJ1dHRvbkhvdmVyU3RhdGUoKSB7XG4gICAgICAgIHRoaXMuc2V0U3R5bGUoYnV0dG9uSG92ZXJTdHlsZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlbnRlck1lbnVCdXR0b25SZXN0U3RhdGUoKSB7XG4gICAgICAgIHRoaXMuc2V0U3R5bGUoYnV0dG9uUmVzdFN0eWxlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVudGVyTWVudUJ1dHRvbkFjdGl2ZVN0YXRlKCkge1xuICAgICAgICB0aGlzLnNldFN0eWxlKGJ1dHRvbkFjdGl2ZVN0eWxlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBQbGF5ZXJTdGF0ZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvcGxheWVyLXN0YXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSUNvbnRyb2xFdmVudEhhbmRsZXIsIElLZXlFdmVudHMsIFZlbG9jaXR5RGlyZWN0aW9uLCBQbGF5ZXJBY3Rpb24gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9pbnRlcmZhY2VzXCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXJDb250cm9sbGVyIGltcGxlbWVudHMgSUNvbnRyb2xFdmVudEhhbmRsZXIge1xuXG4gICAgZ2FtZUtleTogc3RyaW5nID0gJ0dhbWUnO1xuICAgIGtleUV2ZW50czogSUtleUV2ZW50c1tdID0gW107XG5cbiAgICBwcml2YXRlIF9wbGF5ZXJTdGF0ZSA9IG5ldyBQbGF5ZXJTdGF0ZSgpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgIH1cblxuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMua2V5RXZlbnRzID0gdGhpcy5jcmVhdGVLZXlNYXBwaW5ncygpO1xuXG4gICAgfVxuXG4gICAgaGFuZGxlS2V5UHJlc3Moa2V5OiBudW1iZXIpOiBQbGF5ZXJBY3Rpb24gfCBudWxsIHtcbiAgICAgICAgY29uc3Qga2V5Rm91bmQgPSB0aGlzLmtleUV2ZW50cy5maW5kKGtleUV2ZW50ID0+IGtleUV2ZW50LmtleSA9PT0ga2V5KTtcbiAgICAgICAgcmV0dXJuIGtleUZvdW5kPy5hY3Rpb24gPz8gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUtleU1hcHBpbmdzKCk6IElLZXlFdmVudHNbXSB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBLRVlfTUFQUElOR1M6IElLZXlFdmVudHNbXSA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5TUEFDRSxcbiAgICAgICAgICAgICAgICBhY3Rpb246IFBsYXllckFjdGlvbi5GSVJFX0xBU0VSXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgICAgcmV0dXJuIEtFWV9NQVBQSU5HUztcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBJU2V0dGluZ3NDb25maWcsIFNjZW5lIH0gZnJvbSAnLi4vbGliJztcblxuY29uc3Qgc2NlbmVDb25maWc6IElTZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogJ0Jvb3QnLFxufTtcblxuLyoqXG4gKiBUaGUgaW5pdGlhbCBzY2VuZSB0aGF0IGxvYWRzIGFsbCBuZWNlc3NhcnkgYXNzZXRzIHRvIHRoZSBnYW1lIGFuZCBkaXNwbGF5cyBhIGxvYWRpbmcgYmFyLlxuICovXG5leHBvcnQgY2xhc3MgQm9vdFNjZW5lIGV4dGVuZHMgU2NlbmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIGdldEdhbWVXaWR0aCA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5nYW1lLnNjYWxlLndpZHRoO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRHYW1lSGVpZ2h0ID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmdhbWUuc2NhbGUuaGVpZ2h0O1xuICB9XG5cbiAgcHJlbG9hZCgpIHtcbiAgICBjb25zdCBoYWxmV2lkdGggPSB0aGlzLmdldEdhbWVXaWR0aCgpICogMC41O1xuICAgIGNvbnN0IGhhbGZIZWlnaHQgPSB0aGlzLmdldEdhbWVIZWlnaHQoKSAqIDAuNTtcblxuICAgIGNvbnN0IHByb2dyZXNzQmFySGVpZ2h0ID0gMTAwO1xuICAgIGNvbnN0IHByb2dyZXNzQmFyV2lkdGggPSA0MDA7XG5cbiAgICBjb25zdCBwcm9ncmVzc0JhckNvbnRhaW5lciA9IHRoaXMuYWRkLnJlY3RhbmdsZShcbiAgICAgIGhhbGZXaWR0aCxcbiAgICAgIGhhbGZIZWlnaHQsXG4gICAgICBwcm9ncmVzc0JhcldpZHRoLFxuICAgICAgcHJvZ3Jlc3NCYXJIZWlnaHQsXG4gICAgICAweDAwMDAwMCxcbiAgICApO1xuICAgIGNvbnN0IHByb2dyZXNzQmFyID0gdGhpcy5hZGQucmVjdGFuZ2xlKFxuICAgICAgaGFsZldpZHRoICsgMjAgLSBwcm9ncmVzc0JhckNvbnRhaW5lci53aWR0aCAqIDAuNSxcbiAgICAgIGhhbGZIZWlnaHQsXG4gICAgICAxMCxcbiAgICAgIHByb2dyZXNzQmFySGVpZ2h0IC0gMjAsIDB4ODg4ODg4LFxuICAgICk7XG5cbiAgICBjb25zdCBsb2FkaW5nVGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gNzUsIGhhbGZIZWlnaHQgLSAxMDAsICdMb2FkaW5nLi4uJylcbiAgICAgIC5zZXRGb250U2l6ZSgyNCk7XG4gICAgY29uc3QgcGVyY2VudFRleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDI1LCBoYWxmSGVpZ2h0LCAnMCUnKS5zZXRGb250U2l6ZSgyNCk7XG4gICAgY29uc3QgYXNzZXRUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSAyNSwgaGFsZkhlaWdodCArIDEwMCwgJycpLnNldEZvbnRTaXplKDI0KTtcblxuICAgIHRoaXMubG9hZC5vbigncHJvZ3Jlc3MnLCAodmFsdWU6IGFueSkgPT4ge1xuICAgICAgcHJvZ3Jlc3NCYXIud2lkdGggPSAocHJvZ3Jlc3NCYXJXaWR0aCAtIDMwKSAqIHZhbHVlO1xuXG4gICAgICBjb25zdCBwZXJjZW50ID0gdmFsdWUgKiAxMDA7XG4gICAgICBwZXJjZW50VGV4dC5zZXRUZXh0KGAke3BlcmNlbnR9JWApO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sb2FkLm9uKCdmaWxlcHJvZ3Jlc3MnLCAoZmlsZTogYW55KSA9PiB7XG4gICAgICBhc3NldFRleHQuc2V0VGV4dChmaWxlLmtleSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxvYWQub24oJ2NvbXBsZXRlJywgKCkgPT4ge1xuICAgICAgbG9hZGluZ1RleHQuZGVzdHJveSgpO1xuICAgICAgcGVyY2VudFRleHQuZGVzdHJveSgpO1xuICAgICAgYXNzZXRUZXh0LmRlc3Ryb3koKTtcbiAgICAgIHByb2dyZXNzQmFyLmRlc3Ryb3koKTtcbiAgICAgIHByb2dyZXNzQmFyQ29udGFpbmVyLmRlc3Ryb3koKTtcblxuICAgICAgdGhpcy5zY2VuZS5zdGFydCgnTWFpbk1lbnUnKTtcbiAgICB9KTtcblxuICAgIHRoaXMubG9hZEFzc2V0cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbCBhc3NldHMgdGhhdCBuZWVkIHRvIGJlIGxvYWRlZCBieSB0aGUgZ2FtZSAoc3ByaXRlcywgaW1hZ2VzLCBhbmltYXRpb25zLCB0aWxlcywgbXVzaWMsIGV0YylcbiAgICogc2hvdWxkIGJlIGFkZGVkIHRvIHRoaXMgbWV0aG9kLiBPbmNlIGxvYWRlZCBpbiwgdGhlIGxvYWRlciB3aWxsIGtlZXAgdHJhY2sgb2YgdGhlbSwgaW5kZXBlZGVudFxuICAgKiBvZiB3aGljaCBzY2VuZSBpcyBjdXJyZW50bHkgYWN0aXZlLCBzbyB0aGV5IGNhbiBiZSBhY2Nlc3NlZCBhbnl3aGVyZS5cbiAgICovXG4gIHByaXZhdGUgbG9hZEFzc2V0cygpIHtcbiAgICAvLyBMb2FkIHNhbXBsZSBhc3NldHNcbiAgICAvLyBSZXBsYWNlIHdpdGggcmVhbCBhc3NldHNcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ0lkbGVGcm9nJywgJ3NyYy9hc3NldHMvTmluamEgRnJvZy9JZGxlICgzMngzMikucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdHYWxheHlCYWNrZ3JvdW5kJywgJy4vc3JjL2Fzc2V0cy9zcGFjZS9iYWNrZ3JvdW5kcy9jb2xvci1zdGFycy1iZy5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ0VhcnRoJywgJy4vc3JjL2Fzc2V0cy9zcGFjZS9wbGFuZXRzL0VhcnRoLnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnSnVwaXRlcicsICcuL3NyYy9hc3NldHMvc3BhY2UvcGxhbmV0cy9KdXBpdGVyLnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnTWFycycsICcuL3NyYy9hc3NldHMvc3BhY2UvcGxhbmV0cy9NYXJzLnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnTW9vbicsICcuL3NyYy9hc3NldHMvc3BhY2UvcGxhbmV0cy9Nb29uLnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnU21hbGxBc3Rlcm9pZCcsICcuL3NyYy9hc3NldHMvaXRjaGlvX3NwYWNlX3BpeGVscy9hc3Rlcm9pZF90aW55LnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnTWVkaXVtQXN0ZXJvaWQnLCAnLi9zcmMvYXNzZXRzL2l0Y2hpb19zcGFjZV9waXhlbHMvcGl4ZWxfYXN0ZXJvaWQucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdMYXJnZUFzdGVyb2lkJywgJy4vc3JjL2Fzc2V0cy9pdGNoaW9fc3BhY2VfcGl4ZWxzL2FzdGVyb2lkX2dyZXkucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdHcmVlblNoaXAnLCAnLi9zcmMvYXNzZXRzL2l0Y2hpb19zcGFjZV9waXhlbHMvcGl4ZWxfc2hpcC5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ1JlZFNoaXAnLCAnLi9zcmMvYXNzZXRzL2l0Y2hpb19zcGFjZV9waXhlbHMvcGl4ZWxfc2hpcF9yZWQucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdTcGFjZVN0YXRpb24nLCAnLi9zcmMvYXNzZXRzL2l0Y2hpb19zcGFjZV9waXhlbHMvcGl4ZWxfc3RhdGlvbl9ibHVlLnBuZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnTGFzZXInLCAnLi9zcmMvYXNzZXRzL2l0Y2hpb19zcGFjZV9waXhlbHMvbGFzZXIucG5nJyk7XG5cbiAgICB0aGlzLmxvYWQuYXVkaW8oJ211c2ljJywgWycuL3NyYy9hc3NldHMvc291bmQvU3BhY2UgUmlkZGxlLm1wMyddKTtcbiAgICB0aGlzLmxvYWQuYXVkaW8oJ3BsYXllcl9sYXNlcicsIFsnLi9zcmMvYXNzZXRzL3NvdW5kL3BsYXllcl9sYXNlci53YXYnXSk7XG4gICAgdGhpcy5sb2FkLmF1ZGlvKCdwbGF5ZXJfcm9ja2V0cycsIFsnLi9zcmMvYXNzZXRzL3NvdW5kL3BsYXllcl9yb2NrZXRzLndhdiddKTtcbiAgICB0aGlzLmxvYWQuYXVkaW8oJ2V4cGxvc2lvbicsIFsnLi9zcmMvYXNzZXRzL3NvdW5kL2V4cGxvc2lvbi53YXYnXSk7XG4gIH1cbn1cbiIsIlxuaW1wb3J0IHtcbiAgSVNldHRpbmdzQ29uZmlnLFxuICBTY2VuZSxcbn0gZnJvbSAnLi4vbGliJztcbmltcG9ydCB7IEdBTEFYWSB9IGZyb20gXCIuLi9jb25zdC9nYWxheHkuY29uc3RcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi9zcHJpdGVzL3BsYXllci5zcHJpdGVcIjtcbmltcG9ydCB7IFBsYW5ldCB9IGZyb20gXCIuLi9zcHJpdGVzL3BsYW5ldC5zcHJpdGVcIjtcbmltcG9ydCB7IGdlbmVyYXRlU3RhcnMgfSBmcm9tIFwiLi4vc2VydmljZXMvc3RhcnMuc2VydmljZVwiO1xuaW1wb3J0IHtTcGFjZVN0YXRpb259IGZyb20gXCIuLi9zcHJpdGVzL3NwYWNlLXN0YXRpb24uc3ByaXRlXCI7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFZlbG9jaXR5RGlyZWN0aW9uIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnRlcmZhY2VzJztcbmltcG9ydCB7RW5lbXl9IGZyb20gXCIuLi9zcHJpdGVzL2VuZW15LnNwcml0ZVwiO1xuaW1wb3J0IHsgQXN0ZXJvaWRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FzdGVyb2lkLnNlcnZpY2VcIjtcbmltcG9ydCB7IGJldHdlZW4gfSBmcm9tICcuLi9saWIvTWF0aCc7XG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBJU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6ICdHYW1lJyxcbn07XG5cbmV4cG9ydCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBTY2VuZSB7XG4gIHByaXZhdGUgY3Vyc29yS2V5czogUGhhc2VyLlR5cGVzLklucHV0LktleWJvYXJkLkN1cnNvcktleXM7XG4gIHByaXZhdGUgcGxheWVyOiBQbGF5ZXI7XG4gIHByaXZhdGUgZW5lbXk6IEVuZW15O1xuICBwcml2YXRlIGFzdGVyb2lkU2VydmljZTogQXN0ZXJvaWRTZXJ2aWNlO1xuICBwcml2YXRlIGZhZGVkID0gZmFsc2U7XG4gIHByaXZhdGUgc3BhY2VTdGF0aW9uOiBTcGFjZVN0YXRpb247XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuZmFkZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNvdW5kLmFkZCgnbXVzaWMnKS5wbGF5KCk7XG4gICAgdGhpcy5zb3VuZC5hZGQoJ3BsYXllcl9sYXNlcicpO1xuICAgIFxuICAgIHRoaXMuY3Vyc29yS2V5cyA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xuICAgIFxuICAgIHRoaXMuY2FtZXJhcy5tYWluLnNldEJvdW5kcygwLCAwLCBHQUxBWFkud2lkdGgsIEdBTEFYWS5oZWlnaHQpO1xuICAgIHRoaXMuY2FtZXJhcy5tYWluLnNldFpvb20oMik7XG4gICAgXG4gICAgXG4gICAgdGhpcy5tYXR0ZXIuZW5hYmxlQXR0cmFjdG9yUGx1Z2luKCk7XG4gICAgXG4gICAgY29uc3QgZWFydGggPSBuZXcgUGxhbmV0KHRoaXMubWF0dGVyLndvcmxkLCB7IHg6IEdBTEFYWS53aWR0aCAtIDUwMCwgeTogMjAwLCBuYW1lOiAnRWFydGgnIH0sIHsgc2NhbGU6IDMgfSk7XG4gICAgdGhpcy5hZGQuZXhpc3RpbmcoZWFydGgpO1xuXG4gICAgY29uc3QgbWFycyA9IG5ldyBQbGFuZXQodGhpcy5tYXR0ZXIud29ybGQsIHsgeDogMzAwLCB5OiA2MDAsIG5hbWU6ICdNYXJzJyB9LCB7IHNjYWxlOiAzfSk7XG4gICAgdGhpcy5hZGQuZXhpc3RpbmcobWFycyk7XG5cbiAgICBjb25zdCBqdXBpdGVyID0gbmV3IFBsYW5ldCh0aGlzLm1hdHRlci53b3JsZCwgeyB4OiBHQUxBWFkud2lkdGggLyAyLCB5OiBHQUxBWFkuaGVpZ2h0IC8gMiwgbmFtZTogJ0p1cGl0ZXInIH0sIHsgaXNBdHRyYWN0b3I6IHRydWUsIHNjYWxlOiA1LCBtYXNzOiA1IH0pO1xuICAgIHRoaXMuYWRkLmV4aXN0aW5nKGp1cGl0ZXIpO1xuICAgIFxuICAgIHRoaXMuc3BhY2VTdGF0aW9uID0gbmV3IFNwYWNlU3RhdGlvbih0aGlzLm1hdHRlci53b3JsZCwgeyB4OiBHQUxBWFkud2lkdGggLSAyMDAsIHk6IEdBTEFYWS5oZWlnaHQgLSAzMDAsIG5hbWU6ICdTcGFjZVN0YXRpb24nIH0sIHt9KTtcbiAgICB0aGlzLmFkZC5leGlzdGluZyh0aGlzLnNwYWNlU3RhdGlvbik7XG5cbiAgICBjb25zdCBwbGF5ZXJTb3VuZHMgPSB7XG4gICAgICBsYXNlcjogKCkgPT4gdGhpcy5zb3VuZC5wbGF5KCdwbGF5ZXJfbGFzZXInKSxcbiAgICAgIHJvY2tldHM6ICgpID0+IHRoaXMuc291bmQucGxheSgncGxheWVyX3JvY2tldHMnKVxuICAgIH07XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMubWF0dGVyLndvcmxkLCB7IHg6IDIwLCB5OiAzMDAsIG5hbWU6ICdHcmVlblNoaXAnIH0sIHBsYXllclNvdW5kcyk7XG4gICAgdGhpcy5hZGQuZXhpc3RpbmcodGhpcy5wbGF5ZXIpO1xuXG4gICAgZnJvbUV2ZW50KGRvY3VtZW50LCAna2V5ZG93bicpLnN1YnNjcmliZSgoa2V5UHJlc3NlZDogYW55KSA9PiB7XG4gICAgICB0aGlzLnBsYXllci5oYW5kbGVBY3Rpb24oa2V5UHJlc3NlZC5rZXlDb2RlKTtcbiAgICB9KTtcbiAgICBcbiAgICB0aGlzLmVuZW15ID0gbmV3IEVuZW15KHRoaXMubWF0dGVyLndvcmxkLCB7IHg6IDQwMCwgeTogNDAwLCBuYW1lOiAnUmVkU2hpcCcgfSk7XG4gICAgdGhpcy5hZGQuZXhpc3RpbmcodGhpcy5lbmVteSk7XG5cbiAgICAvLyBUT0RPOiBXQVJOSU5HISEhIEFkZGluZyBtb3JlIGFzdGVyb2lkcyBjYXVzZXMgZ2FtZSB0byBjcmFzaCBjYXVzZSBpcyB3aXRoaW4gJ3NldE9uQ29sbGlkZScgcGFydGljbGUgY3JlYXRpb25cbiAgICAvLyBQb3NzaWJsZSBmaXg6IEVuc3VyZSBjb3JyZWN0IGRpcmVjdGlvbmFsIHZlbG9jaXR5IGlzIGFwcGxpZWQgd2hlbiBpbml0aWFsaXppbmcgYXN0ZXJvaWQgLSBzZWVtcyBjYXVzZSBpcyBhIHBlcmZvcm1hbmNlIGlzc3VlP1xuICAgIGxldCBtYXhBc3Rlcm9pZHMgPSAxMDtcbiAgICBjb25zdCBhc3Rlcm9pZFNvdW5kcyA9IHsgZXhwbG9zaW9uOiAoKSA9PiB0aGlzLnNvdW5kLnBsYXkoJ2V4cGxvc2lvbicpIH07XG4gICAgdGhpcy5hc3Rlcm9pZFNlcnZpY2UgPSBuZXcgQXN0ZXJvaWRTZXJ2aWNlKHRoaXMubWF0dGVyLndvcmxkLCBtYXhBc3Rlcm9pZHMsIGFzdGVyb2lkU291bmRzKTtcblxuICAgIC8vIGZyb21FdmVudChkb2N1bWVudCwgJ2tleWRvd24nKS5waXBlKFxuICAgIC8vICAgbWFwKChrZXk6IGFueSkgPT4gdGhpcy5wbGF5ZXIuY29udHJvbGxlci5oYW5kbGVLZXlQcmVzcyhrZXkua2V5Q29kZSkpXG4gICAgLy8gKS5zdWJzY3JpYmUobmV3UG9zaXRpb24gPT4ge1xuICAgIC8vICAgaWYgKG5ld1Bvc2l0aW9uPy5kaXJlY3Rpb24gPT09IFZlbG9jaXR5RGlyZWN0aW9uLlgpIHtcbiAgICAvLyAgICAgICB0aGlzLnBsYXllci5zZXRWZWxvY2l0eVgobmV3UG9zaXRpb24udmVsb2NpdHkpO1xuICAgIC8vICAgfSBlbHNlIGlmIChuZXdQb3NpdGlvbj8uZGlyZWN0aW9uID09PSBWZWxvY2l0eURpcmVjdGlvbi5ZKXtcbiAgICAvLyAgICAgICB0aGlzLnBsYXllci5zZXRWZWxvY2l0eVkobmV3UG9zaXRpb24udmVsb2NpdHkpO1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuICAgIFxuICAgIGdlbmVyYXRlU3RhcnModGhpcywgR0FMQVhZLndpZHRoLCBHQUxBWFkuaGVpZ2h0LCA4MDApO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMucGxheWVyLm1hbmFnZUNvbnRyb2xzKHRoaXMuY3Vyc29yS2V5cyk7XG4gICAgdGhpcy5jYW1lcmFzLm1haW4uY2VudGVyT24odGhpcy5wbGF5ZXIueCwgdGhpcy5wbGF5ZXIueSk7XG4gICAgdGhpcy5lbmVteS51cGRhdGUodGhpcy5wbGF5ZXIpO1xuICAgIHRoaXMuYXN0ZXJvaWRTZXJ2aWNlLnVwZGF0ZSgpO1xuXG4gICAgaWYgKHRoaXMuc3BhY2VTdGF0aW9uLndpbikge1xuICAgICAgdGhpcy5zY2VuZS5zdGFydCgnTWlzc2lvbkNvbXBsZXRlJylcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMucGxheWVyLmRlc3Ryb3llZCAmJiAhdGhpcy5mYWRlZCkge1xuICAgICAgdGhpcy5mYWRlZCA9IHRydWU7XG4gICAgICB0aGlzLmNhbWVyYXMubWFpbi5mYWRlT3V0KDEwMDApO1xuICAgICAgdGhpcy5jYW1lcmFzLm1haW4ub25jZSgnY2FtZXJhZmFkZW91dGNvbXBsZXRlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnNjZW5lLnJlc3RhcnQoKTtcbiAgICAgIH0pXG4gICAgICBcbiAgICB9XG4gICAgXG4gICAgaWYgKHRoaXMuZW5lbXkuaXNEZXN0cm95ZWQpIHtcbiAgICAgIHRoaXMuc3BhY2VTdGF0aW9uLnZpc2libGUgPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IHsgTWFpbk1lbnVTY2VuZSB9IGZyb20gJy4vbWFpbi1tZW51LnNjZW5lJztcbmV4cG9ydCB7IEJvb3RTY2VuZSB9IGZyb20gJy4vYm9vdC5zY2VuZSc7XG5leHBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tICcuL2dhbWUuc2NlbmUnO1xuZXhwb3J0IHsgTWlzc2lvbkNvbXBsZXRlU2NlbmUgfSBmcm9tICcuL21pc3Npb24tY29tcGxldGUuc2NlbmUnO1xuLy8gZXhwb3J0IHsgR2FsYXh5U2NlbmUgfSBmcm9tICcuL2dhbGF4eS5zY2VuZSc7XG4iLCJpbXBvcnQgeyBJU2V0dGluZ3NDb25maWcsIFNjZW5lIH0gZnJvbSAnLi4vbGliJztcbmltcG9ydCB7IE1lbnVCdXR0b24gfSBmcm9tICcuLi9tZW51LWJ1dHRvbi50ZXh0JztcblxuY29uc3Qgc2NlbmVDb25maWc6IElTZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogJ01haW5NZW51Jyxcbn07XG5cbi8qKlxuICogVGhlIGluaXRpYWwgc2NlbmUgdGhhdCBzdGFydHMsIHNob3dzIHRoZSBzcGxhc2ggc2NyZWVucywgYW5kIGxvYWRzIHRoZSBuZWNlc3NhcnkgYXNzZXRzLlxuICovXG5leHBvcnQgY2xhc3MgTWFpbk1lbnVTY2VuZSBleHRlbmRzIFNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuYWRkLnRleHQoMTAwLCA1MCwgJ1NwYWNlIEphbW1pblxcJycsIHsgZmlsbDogJyNGRkZGRkYnIH0pLnNldEZvbnRTaXplKDI0KTtcbiAgICBuZXcgTWVudUJ1dHRvbih0aGlzLCAxMDAsIDEwMCwgJ1N0YXJ0IEdhbWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdHYW1lJyk7XG4gICAgfSk7XG4gICAgXG4gICAgdGhpcy5hZGQudGV4dCgxMDAsIDIwMCwgJ1RoZSBnYWxheHkgaXMgZmFjaW5nIGFuIGV4aXN0ZW50aWFsIHRocmVhdCBvZiBwcm9wb3J0aW9ucyB0aGF0IGNhdXNlXFxuJyArXG4gICAgICAnY29uY2Vybi4gWW91IGhhdmUgZGF0YSB0aGF0IGNhbiBhc3Npc3QgaW4gZWxpbWluYXRpbmcgdGhlIHRocmVhdCwgYnV0IGl0IGlzXFxuJyArXG4gICAgICAndG9vIHJpc2t5IHRvIHNlbmQgaXQgb3ZlciBnYWxhY3RpYyB0ZWxlY29tIGdhbW1hIHdhdmVzLCBmb3IgZmVhciBvZlxcbicgK1xuICAgICAgJ2l0IGJlaW5nIGludGVyY2VwdGVkIGFuZCBjYXVzaW5nIHRoZSBleGlzdGVudGlhbCB0aHJlYXQgdG8gZ3JvdyBpbiBpdHNcXG4nICtcbiAgICAgICdsZXZlbCBvZiBjb25jZXJuaW5nbmVzcy5cXG4nICtcbiAgICAgICdcXG4nICtcbiAgICAgICdZb3UgbXVzdCBwZXJzb25hbGx5IGRlbGl2ZXIgdGhlIGRhdGEgdG8gXFwndGhlIHN0YXIgYmFzZS4gWW91IGFyZSBhbG1vc3RcXG4nICtcbiAgICAgICd0aGVyZSBidXQgYSBib3VudHkgaHVudGVyIGlzIG9uIHlvdXIgdGFpbCwgYW5kIHRoZSBzcGFjZSBzdGF0aW9uIGhhc1xcbicgK1xuICAgICAgJ3R1cm5lZCBvbiBjbG9ha2luZyB0byBjb25jZWFsIGl0cyBsb2NhdGlvbiB1bnRpbCB5b3UgaGF2ZSBlbGltaW5hdGUgdGhlIFxcbicgK1xuICAgICAgJ2JvdW50eSBodW50ZXIuIEJ1dCB5b3VyIHdlYXBvbiBzeXN0ZW1zIGFyZSBkb3duLiBcXG4nICtcbiAgICAgICdcXG4nICtcbiAgICAgICdZb3VyIG1pc3Npb246IEZpbmQgYSB3YXkgdG8gZGVzdHJveSB0aGUgYm91bnR5IGh1bnRlciBhbmQgZmluZCB0aGUgYmFzZS4nLCB7IGZpbGw6ICcjRkZGRkZGJyB9KS5zZXRGb250U2l6ZSgxNilcbiAgICAvLyBuZXcgTWVudUJ1dHRvbih0aGlzLCAxMDAsIDI1MCwgYFBhdWwncyBBd2Vzb21lIE5pbmphIEdhbWVgLCAoKSA9PiB7XG4gICAgLy8gICB0aGlzLnNjZW5lLnN0YXJ0KCdQYXVsTmluamEnKTtcbiAgICAvLyB9KTtcbiAgICAvLyBuZXcgTWVudUJ1dHRvbih0aGlzLCAxMDAsIDM1MCwgJ0dlbmVyYXRlIEdhbGF4eScsICgpID0+IHtcbiAgICAvLyAgIHRoaXMuc2NlbmUuc3RhcnQoJ0dhbGF4eScpO1xuICAgIC8vIH0pO1xuICAgIC8vIEV4YW1wbGUgb2YgYSBzZWNvbmQgc3RhcnQgc2NyZWVuIG9wdGlvblxuICAgIC8vIG5ldyBNZW51QnV0dG9uKHRoaXMsIDEwMCwgMjAwLCAnT3B0aW9ucycsICgpID0+IHtcbiAgICAvLyAgIHRoaXMuc2NlbmUuc3RhcnQoJ09wdGlvbnMnKTtcbiAgICAvLyB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSVNldHRpbmdzQ29uZmlnLCBTY2VuZSB9IGZyb20gJy4uL2xpYic7XG5pbXBvcnQgeyBNZW51QnV0dG9uIH0gZnJvbSAnLi4vbWVudS1idXR0b24udGV4dCc7XG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBJU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6ICdNaXNzaW9uQ29tcGxldGUnLFxufTtcblxuLyoqXG4gKiBUaGUgaW5pdGlhbCBzY2VuZSB0aGF0IHN0YXJ0cywgc2hvd3MgdGhlIHNwbGFzaCBzY3JlZW5zLCBhbmQgbG9hZHMgdGhlIG5lY2Vzc2FyeSBhc3NldHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBNaXNzaW9uQ29tcGxldGVTY2VuZSBleHRlbmRzIFNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuYWRkLnRleHQoMTAwLCA1MCwgJ01pc3Npb24gQ29tcGxldGUnLCB7IGZpbGw6ICcjRkZGRkZGJyB9KS5zZXRGb250U2l6ZSgyNCk7XG5cbiAgICB0aGlzLmFkZC50ZXh0KDEwMCwgMTAwLCAnVGhlIGdhbGF4eSB3YXMgZmFjaW5nIGFuIGV4aXN0ZW50aWFsIHRocmVhdCBvZiBwcm9wb3J0aW9ucyB0aGF0IGNhdXNlZFxcbicgK1xuICAgICAgJ2NvbmNlcm4uIFlvdSBoYWQgZGF0YSB0aGF0IGNvdWxkIGFzc2lzdCBpbiBlbGltaW5hdGluZyB0aGUgdGhyZWF0LCBidXQgaXQgd2FzXFxuJyArXG4gICAgICAndG9vIHJpc2t5IHRvIHNlbmQgaXQgb3ZlciBnYWxhY3RpYyB0ZWxlY29tIGdhbW1hIHdhdmVzLCBmb3IgZmVhciBvZlxcbicgK1xuICAgICAgJ2l0IGJlaW5nIGludGVyY2VwdGVkIGFuZCBjYXVzaW5nIHRoZSBleGlzdGVudGlhbCB0aHJlYXQgdG8gZ3JvdyBpbiBpdHNcXG4nICtcbiAgICAgICdsZXZlbCBvZiBjb25jZXJuaW5nbmVzcy5cXG4nICtcbiAgICAgICdcXG4nICtcbiAgICAgICdZb3UgcGVyc29uYWxseSBkZWxpdmVyZWQgdGhlIGRhdGEgdG8gXFwndGhlIHN0YXIgYmFzZS4gWW91IHdlcmUgYWxtb3N0XFxuJyArXG4gICAgICAndGhlcmUgYnV0IGEgYm91bnR5IGh1bnRlciB3YXMgb24geW91ciB0YWlsLCBhbmQgdGhlIHNwYWNlIHN0YXRpb24gaGFkXFxuJyArXG4gICAgICAndHVybmVkIG9uIGNsb2FraW5nIHRvIGNvbmNlYWwgaXRzIGxvY2F0aW9uIHVudGlsIHlvdSBlbGltaW5hdGVkIHRoZSBcXG4nICtcbiAgICAgICdib3VudHkgaHVudGVyLiBCdXQgeW91ciB3ZWFwb24gc3lzdGVtcyB3ZXJlIGRvd24uIEFuZCB5b3UgZ290IGNyZWF0aXZlIGJ5XFxuJyArXG4gICAgICAnbWFraW5nIGNyYXp5IG1hbmV1dmVycyBhbmQgbWFraW5nIHRoZSBib3VudHkgaHVudGVyIGNyYXNoXFxuJyArXG4gICAgICAnXFxuJyArXG4gICAgICAnU21vb3RoIG1vdmVzIScsIHsgZmlsbDogJyNGRkZGRkYnIH0pLnNldEZvbnRTaXplKDE2KVxuICB9XG59XG4iLCJpbXBvcnQgeyBHQUxBWFkgfSBmcm9tIFwiLi4vY29uc3QvZ2FsYXh5LmNvbnN0XCI7XG5pbXBvcnQgeyBBU1RFUk9JRCB9IGZyb20gXCIuLi9jb25zdC9hc3Rlcm9pZC5jb25zdFwiO1xuaW1wb3J0IHsgQXN0ZXJvaWQgfSBmcm9tIFwiLi4vc3ByaXRlcy9hc3Rlcm9pZC5zcHJpdGVcIjtcbmltcG9ydCB7IGJldHdlZW4gfSBmcm9tICcuLi9saWIvTWF0aCc7XG5cbmV4cG9ydCBjbGFzcyBBc3Rlcm9pZFNlcnZpY2Uge1xuICAgIHByaXZhdGUgd29ybGQ6IFBoYXNlci5QaHlzaWNzLk1hdHRlci5Xb3JsZDtcbiAgICBwcml2YXRlIG1heEFzdGVyb2lkczogbnVtYmVyO1xuICAgIHByaXZhdGUgbnVtQXN0ZXJvaWRzOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBhc3Rlcm9pZHM6IEFzdGVyb2lkW107XG4gICAgcHJpdmF0ZSBzb3VuZEVmZmVjdHM6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHdvcmxkOiBQaGFzZXIuUGh5c2ljcy5NYXR0ZXIuV29ybGQsIG1heEFzdGVyb2lkczogbnVtYmVyLCBzb3VuZEVmZmVjdHMpIHtcbiAgICAgICAgdGhpcy53b3JsZCA9IHdvcmxkO1xuICAgICAgICB0aGlzLm1heEFzdGVyb2lkcyA9IG1heEFzdGVyb2lkcztcbiAgICAgICAgdGhpcy5hc3Rlcm9pZHMgPSBbXTtcbiAgICAgICAgdGhpcy5zb3VuZEVmZmVjdHMgPSBzb3VuZEVmZmVjdHM7XG5cbiAgICAgICAgdGhpcy5zcGF3bkFzdGVyb2lkcyh0aGlzLm1heEFzdGVyb2lkcyk7XG4gICAgfTtcblxuICAgIHB1YmxpYyB1cGRhdGUoKSB7XG4gICAgICAgIC8vIFJlbW92ZSBkZXN0cm95ZWQgLyBvZmZzY3JlZW4gYXN0ZXJvaWRzXG4gICAgICAgIHRoaXMuYXN0ZXJvaWRzID0gdGhpcy5hc3Rlcm9pZHMuZmlsdGVyKHRoaXMuY2hlY2tBc3Rlcm9pZCk7IFxuICAgICAgICB0aGlzLm51bUFzdGVyb2lkcyA9IHRoaXMuYXN0ZXJvaWRzLmxlbmd0aDtcblxuICAgICAgICAvLyBVcGRhdGUgYXN0ZXJvaWRzXG4gICAgICAgIHRoaXMuYXN0ZXJvaWRzLmZvckVhY2goYXN0ZXJvaWQgPT4gYXN0ZXJvaWQudXBkYXRlKCkpO1xuXG4gICAgICAgIC8vIEFkZCBhc3Rlcm9pZHNcbiAgICAgICAgbGV0IGRlc3JveWVkQXN0ZXJvaWRzID0gdGhpcy5tYXhBc3Rlcm9pZHMgLSB0aGlzLm51bUFzdGVyb2lkcztcbiAgICAgICAgaWYgKGRlc3JveWVkQXN0ZXJvaWRzID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zcGF3bkFzdGVyb2lkcyhkZXNyb3llZEFzdGVyb2lkcyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmFzdGVyb2lkc1xuICAgIH1cblxuICAgIHByaXZhdGUgc3Bhd25Bc3Rlcm9pZHMobnVtQXN0ZXJvaWRzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQXN0ZXJvaWRzOyBpKyspIHtcbiAgICAgICAgICAgIC8vIFJhbmRvbSBzcGF3biBzaG91bGQgb3JpZ2luYXRlIGZyb20gb3V0c2lkZSB0aGUgbWFwXG4gICAgICAgICAgICBsZXQgYXN0ZXJvaWRYID0gR0FMQVhZLndpZHRoIC0gKEFTVEVST0lELk9GRlNFVCAqIDIpO1xuICAgICAgICAgICAgbGV0IGFzdGVyb2lkWSA9IEdBTEFYWS5oZWlnaHQgLSAoQVNURVJPSUQuT0ZGU0VUICogMik7XG4gICAgICAgICAgICBpZiAoYmV0d2VlbigwLCAyKSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgYXN0ZXJvaWRYID0gYmV0d2VlbigwLCAyKSA9PSAxID8gYmV0d2VlbigwLCBHQUxBWFkud2lkdGggLyAyKSA6ICBiZXR3ZWVuKEdBTEFYWS53aWR0aCAvIDIsIEdBTEFYWS53aWR0aCk7XG4gICAgICAgICAgICAgICAgYXN0ZXJvaWRZID0gYmV0d2VlbigwLCAyKSA9PSAxID8gYXN0ZXJvaWRZIDogR0FMQVhZLmhlaWdodCArIChBU1RFUk9JRC5PRkZTRVQgKiAyKTsgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFzdGVyb2lkWSA9IGJldHdlZW4oMCwgMikgPT0gMSA/IGJldHdlZW4oMCwgR0FMQVhZLmhlaWdodCAvIDIpIDogIGJldHdlZW4oR0FMQVhZLmhlaWdodCAvIDIsIEdBTEFYWS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIGFzdGVyb2lkWCA9IGJldHdlZW4oMCwgMikgPT0gMSA/IGFzdGVyb2lkWCA6IEdBTEFYWS53aWR0aCArIChBU1RFUk9JRC5PRkZTRVQgKiAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJhbmRvbWx5IHBpY2sgZnJvbSBhc3Rlcm9pZCB0eXBlc1xuICAgICAgICAgICAgbGV0IGltZ1NyYyA9IEFTVEVST0lELk1FRElVTS5JTUdTUkM7XG4gICAgICAgICAgICBsZXQgYXN0ZXJvaWRDb25maWcgPSBBU1RFUk9JRC5NRURJVU0uQ09ORklHO1xuICAgICAgICAgICAgc3dpdGNoKGJldHdlZW4oMCwgMykpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDM6IHtcbiAgICAgICAgICAgICAgICAgICAgaW1nU3JjID0gQVNURVJPSUQuTEFSR0UuSU1HU1JDO1xuICAgICAgICAgICAgICAgICAgICBhc3Rlcm9pZENvbmZpZyA9IEFTVEVST0lELkxBUkdFLkNPTkZJRztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICBjYXNlIDI6IHtcbiAgICAgICAgICAgICAgICAgICAgaW1nU3JjID0gQVNURVJPSUQuTUVESVVNLklNR1NSQztcbiAgICAgICAgICAgICAgICAgICAgYXN0ZXJvaWRDb25maWcgPSBBU1RFUk9JRC5NRURJVU0uQ09ORklHO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjYXNlIDE6IHtcbiAgICAgICAgICAgICAgICAgICAgaW1nU3JjID0gQVNURVJPSUQuU01BTEwuSU1HU1JDO1xuICAgICAgICAgICAgICAgICAgICBhc3Rlcm9pZENvbmZpZyA9IEFTVEVST0lELlNNQUxMLkNPTkZJRztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGFzdGVyb2lkID0gbmV3IEFzdGVyb2lkKHRoaXMud29ybGQsIHsgeDogYXN0ZXJvaWRYLCB5OiBhc3Rlcm9pZFksIG5hbWU6IGltZ1NyYyB9LCB0aGlzLnNvdW5kRWZmZWN0cywgYXN0ZXJvaWRDb25maWcpO1xuICAgICAgICAgICAgdGhpcy53b3JsZC5zY2VuZS5hZGQuZXhpc3RpbmcoYXN0ZXJvaWQpO1xuICAgICAgICAgICAgdGhpcy5hc3Rlcm9pZHMucHVzaChhc3Rlcm9pZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5udW1Bc3Rlcm9pZHMgPSB0aGlzLmFzdGVyb2lkcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja0FzdGVyb2lkKGFzdGVyb2lkOiBBc3Rlcm9pZCkge1xuICAgICAgICByZXR1cm4gIWFzdGVyb2lkLmlzRGVzdHJveWVkICYmICFhc3Rlcm9pZC5pc09mZlNjcmVlbjtcbiAgICAgIH1cbn0iLCJpbXBvcnQgeyBWZWxvY2l0eURpcmVjdGlvbiwgVmVsb2NpdHksIElTcHJpdGVDb25maWcgfSBmcm9tICcuLy4uL2ludGVyZmFjZXMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIE9iamVjdFVuc3Vic2NyaWJlZEVycm9yIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgY2xhc3MgUGxheWVyU3RhdGUge1xuICAgIFxuICAgIHZlbG9jaXR5JDogT2JzZXJ2YWJsZTxWZWxvY2l0eT47XG4gICAgcHJpdmF0ZSBfdmVsb2NpdHkkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxWZWxvY2l0eT4oeyB2ZWxvY2l0eTogMCwgZGlyZWN0aW9uOiBWZWxvY2l0eURpcmVjdGlvbi5OT1RfU0VUIH0pO1xuICAgIHByaXZhdGUgX2FjdGl2ZUxhc2VycyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PElTcHJpdGVDb25maWdbXT4oW10pO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIFxuICAgICB9XG5cbiAgICBnZXRDdXJyZW50VmVsb2NpdHkoKTogVmVsb2NpdHkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmVsb2NpdHkkLmdldFZhbHVlKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVmVsb2NpdHkodXBkYXRlZFZlbG9jaXR5OiBWZWxvY2l0eSk6IHZvaWQge1xuICAgICAgICB0aGlzLl92ZWxvY2l0eSQubmV4dCh1cGRhdGVkVmVsb2NpdHkpO1xuICAgIH1cblxuICAgIGdldEFsbEFjdGl2ZUxhc2VycygpOiBJU3ByaXRlQ29uZmlnW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlTGFzZXJzJC5nZXRWYWx1ZSgpO1xuICAgIH1cblxuICAgIGFkZEFjdGl2ZUxhc2VyKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBuZXdMYXNlcjogSVNwcml0ZUNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hbWU6IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2FjdGl2ZUxhc2VycyQubmV4dChbLi4udGhpcy5nZXRBbGxBY3RpdmVMYXNlcnMoKSwgbmV3TGFzZXJdKTtcbiAgICB9XG5cbiAgICByZW1vdmVMYXNlcihuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgbGV0IGFsbExhc2VycyA9IHRoaXMuX2FjdGl2ZUxhc2VycyQuZ2V0VmFsdWUoKTtcbiAgICAgICAgdGhpcy5fYWN0aXZlTGFzZXJzJC5uZXh0KGFsbExhc2Vycy5maWx0ZXIobGFzZXIgPT4gbGFzZXIubmFtZSAhPT0gbmFtZSkpO1xuICAgIH1cblxuXG59XG4iLCJpbXBvcnQge0dBTEFYWX0gZnJvbSBcIi4uL2NvbnN0L2dhbGF4eS5jb25zdFwiO1xuXG5pbnRlcmZhY2UgSVN0YXIge1xuICB4OiBudW1iZXIsXG4gIHk6IG51bWJlcixcbiAgYTogbnVtYmVyLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVTdGFycyAoc2NlbmU6IFBoYXNlci5TY2VuZSwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGFtb3VudDogbnVtYmVyKSB7XG4gIGNvbnN0IGdyYXBoaWNzID0gc2NlbmUuYWRkLmdyYXBoaWNzKCk7XG4gIGdyYXBoaWNzLmZpbGxTdHlsZSgweGZmZmZmZiwgMSk7XG4gIFxuICBjb25zdCBtYXBTdGFyID0gKCkgPT4gKHtcbiAgICB4OiBNYXRoLnJhbmRvbSgpICogR0FMQVhZLndpZHRoLFxuICAgIHk6IE1hdGgucmFuZG9tKCkgKiBHQUxBWFkuaGVpZ2h0LFxuICAgIGE6IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJLFxuICB9KTtcbiAgY29uc3QgZmlsbCA9IChzdGFyOiBJU3RhcikgPT4gZ3JhcGhpY3MuZmlsbENpcmNsZShzdGFyLngsIHN0YXIueSwgc3Rhci5hKTtcbiAgXG4gIGNvbnN0IGl0ZXJhYmxlID0gbmV3IEFycmF5KGFtb3VudCkuZmlsbChudWxsKTtcbiAgaXRlcmFibGUubWFwKG1hcFN0YXIpLmZvckVhY2goZmlsbCk7XG59IiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi4vbGliL3Nwcml0ZS5jbGFzcyc7XG5pbXBvcnQgeyBJU3ByaXRlQ29uZmlnIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IGJldHdlZW4gfSBmcm9tICcuLi9saWIvTWF0aCc7XG5pbXBvcnQgeyBHQUxBWFkgfSBmcm9tICcuLi9jb25zdC9nYWxheHkuY29uc3QnO1xuaW1wb3J0IHsgQVNURVJPSUQgfSBmcm9tICcuLi9jb25zdC9hc3Rlcm9pZC5jb25zdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU291bmRFZmZlY3RzIHtcbiAgZXhwbG9zaW9uOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgSUFzdGVyb2lkQ29uZmlnIHtcbiAgbWFzczogbnVtYmVyLFxuICBzY2FsZTogbnVtYmVyLFxuICBmcmljdGlvbkFpcjogbnVtYmVyLFxuICByb3RhdGlvblNwZWVkOiBudW1iZXIsXG4gIGRlcHRoOiBudW1iZXIsXG4gIG1heFZlbG9jaXR5OiBudW1iZXIsXG4gIG1pblZlbG9jaXR5OiBudW1iZXJcbn07XG5cbmV4cG9ydCBjbGFzcyBBc3Rlcm9pZCBleHRlbmRzIFNwcml0ZSB7XG4gIHByaXZhdGUgdmVsb2NpdHlYOiBudW1iZXI7XG4gIHByaXZhdGUgdmVsb2NpdHlZOiBudW1iZXI7XG4gIHByaXZhdGUgcm90YXRpb25TcGVlZDogbnVtYmVyO1xuICBwcml2YXRlIGR1c3RFbWl0dGVyOiBhbnk7XG4gIHB1YmxpYyBpc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICBwdWJsaWMgaXNPZmZTY3JlZW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBzb3VuZEVmZmVjdHM6IFNvdW5kRWZmZWN0cztcblxuICBjb25zdHJ1Y3Rvcih3b3JsZDogUGhhc2VyLlBoeXNpY3MuTWF0dGVyLldvcmxkLCBzcHJpdGVDb25maWc6IElTcHJpdGVDb25maWcsIHNvdW5kRWZmZWN0czogU291bmRFZmZlY3RzLCBhc3Rlcm9pZENvbmZpZzogSUFzdGVyb2lkQ29uZmlnKSB7XG4gICAgc3VwZXIod29ybGQsIHNwcml0ZUNvbmZpZy54LCBzcHJpdGVDb25maWcueSwgc3ByaXRlQ29uZmlnLm5hbWUpO1xuICAgIHRoaXMuc2V0U2NhbGUoYXN0ZXJvaWRDb25maWcuc2NhbGUsIGFzdGVyb2lkQ29uZmlnLnNjYWxlKTtcbiAgICB0aGlzLnNldEZyaWN0aW9uQWlyKGFzdGVyb2lkQ29uZmlnLmZyaWN0aW9uQWlyKTtcbiAgICB0aGlzLnNldEFuZ2xlKGJldHdlZW4oMCwgMzYwKSk7XG4gICAgdGhpcy5zZXRNYXNzKGFzdGVyb2lkQ29uZmlnLm1hc3MpO1xuICAgIHRoaXMuZGVwdGggPSBhc3Rlcm9pZENvbmZpZy5kZXB0aDtcbiAgICB0aGlzLnJvdGF0aW9uU3BlZWQgPSBhc3Rlcm9pZENvbmZpZy5yb3RhdGlvblNwZWVkO1xuICAgIHRoaXMudmVsb2NpdHlYID0gYmV0d2Vlbihhc3Rlcm9pZENvbmZpZy5taW5WZWxvY2l0eSwgYXN0ZXJvaWRDb25maWcubWF4VmVsb2NpdHkpO1xuICAgIHRoaXMudmVsb2NpdHlZID0gYmV0d2Vlbihhc3Rlcm9pZENvbmZpZy5taW5WZWxvY2l0eSwgYXN0ZXJvaWRDb25maWcubWF4VmVsb2NpdHkpO1xuICAgIGlmICh0aGlzLnZlbG9jaXR5WCA9PSAwKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5WCA9IDI7XG4gICAgfVxuICAgIGlmICh0aGlzLnZlbG9jaXR5WSA9PSAwKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5WCA9IC0yO1xuICAgIH1cbiAgICAvLyB0aGlzLmR1c3RFbWl0dGVyID0gdGhpcy5zY2VuZS5hZGQucGFydGljbGVzKCdmYWtlJyk7XG4gICAgdGhpcy5zb3VuZEVmZmVjdHMgPSBzb3VuZEVmZmVjdHM7XG5cbiAgICB0aGlzLnNldFZlbG9jaXR5KHRoaXMudmVsb2NpdHlYLCB0aGlzLnZlbG9jaXR5WSk7XG5cbiAgICB0aGlzLnNldE9uQ29sbGlkZSgoKSA9PiB7XG4gICAgICBsZXQgZXhwbG9zaW9uID0gdGhpcy5zY2VuZT8uYWRkLnBhcnRpY2xlcygnZmFrZScpLmNyZWF0ZUVtaXR0ZXIoe1xuICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgIHk6IHRoaXMueSxcbiAgICAgICAgc3BlZWQ6IHttaW46IC0zMDAsIG1heDogMzAwfSxcbiAgICAgICAgYW5nbGU6IHttaW46IDAsIG1heDogMzYwfSxcbiAgICAgICAgc2NhbGU6IHtzdGFydDogdGhpcy5zY2FsZSwgZW5kOiAwfSxcbiAgICAgICAgYmxlbmRNb2RlOiAnU0NSRUVOJyxcbiAgICAgICAgZ3Jhdml0eVk6IC10aGlzLnksXG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgbGlmZXNwYW46IDI1MFxuICAgICAgfSk7XG4gICAgICBleHBsb3Npb24/LmV4cGxvZGUoMTUsIHRoaXMueCwgdGhpcy55KTtcbiAgICAgIHRoaXMuaXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5kZXN0cm95KHRydWUpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuY2hlY2tJZk9mZlNjcmVlbigpO1xuICAgIGlmICghdGhpcy5pc0Rlc3Ryb3llZCAmJiAhdGhpcy5pc09mZlNjcmVlbikge1xuICAgICAgdGhpcy5hcHBseUZvcmNlcygpO1xuICAgICAgLy8gdGhpcy5hcHBseVBhcnRpY2xlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlc3Ryb3kodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhcHBseUZvcmNlcygpIHtcbiAgICB0aGlzLnNldFZlbG9jaXR5KHRoaXMudmVsb2NpdHlYLCB0aGlzLnZlbG9jaXR5WSk7XG4gICAgdGhpcy5yb3RhdGlvbiArPSB0aGlzLnJvdGF0aW9uU3BlZWQ7XG4gIH1cblxuICBwcml2YXRlIGFwcGx5UGFydGljbGVzKCkge1xuICAgIC8vIFRPRE86IFNob3VsZCBlbWl0IGZyb20gdGhlIG9wcG9zaXRlIGRpcmVjdGlvbiBvZiBhbmd1bGFyIHZlbG9jaXR5XG4gICAgdGhpcy5kdXN0RW1pdHRlci5jcmVhdGVFbWl0dGVyKHtcbiAgICAgIC8vIHJhZGlhbDogZmFsc2UsXG4gICAgICBsaWZlc3BhbjogMTAwLFxuICAgICAgc3BlZWRYOiB7bWluOiAyMDAsIG1heDogNDAwfSxcbiAgICAgIC8vIHF1YW50aXR5OiAyLFxuICAgICAgLy8gZ3Jhdml0eVk6IC10aGlzLnksXG4gICAgICBhY3RpdmU6IHRydWUsXG4gICAgICBzY2FsZToge3N0YXJ0OiB0aGlzLnNjYWxlLCBlbmQ6IDAsIGVhc2U6ICdQb3dlcjMnfSxcbiAgICAgIGJsZW5kTW9kZTogJ0FERCdcbiAgICB9KS5lbWl0UGFydGljbGUoNSwgdGhpcy54LCB0aGlzLnkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0lmT2ZmU2NyZWVuKCkge1xuICAgIC8vIGhvcml6b250YWwgY2hlY2tcbiAgICBpZiAodGhpcy54ID4gR0FMQVhZLndpZHRoICsgKEFTVEVST0lELk9GRlNFVCAqIDMpKSB7XG4gICAgICB0aGlzLmlzT2ZmU2NyZWVuID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMueCA8IC0oQVNURVJPSUQuT0ZGU0VUICogMykpIHtcbiAgICAgIHRoaXMuaXNPZmZTY3JlZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIHZlcnRpY2FsIGNoZWNrXG4gICAgaWYgKHRoaXMueSA+IEdBTEFYWS5oZWlnaHQgKyAoQVNURVJPSUQuT0ZGU0VUICogMykpIHtcbiAgICAgIHRoaXMuaXNPZmZTY3JlZW4gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy55IDwgLShBU1RFUk9JRC5PRkZTRVQgKiAzKSkge1xuICAgICAgdGhpcy5pc09mZlNjcmVlbiA9IHRydWU7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuLi9saWIvc3ByaXRlLmNsYXNzJztcbmltcG9ydCB7IElTcHJpdGVDb25maWcgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuL3BsYXllci5zcHJpdGVcIjtcblxuY29uc3QgZW5lbXlDb25maWcgPSB7XG4gIHJvdGF0aW9uRGVncmVlOiA1LFxuICB0aHJ1c3RTcGVlZDogMC4wMSxcbiAgYW5nbGU6IDkwLFxuICBzY2FsZTogMC4yNSxcbiAgZnJpY3Rpb25BaXI6IDAuMDUsXG4gIG1hc3M6IDMwLFxuICBkZXB0aDogMTAwMCxcbn07XG5cbmNvbnN0IGRlZ3JlZVRvUmFkaWFuID0gZCA9PiBkICogTWF0aC5QSSAvIDE4MDtcblxuZXhwb3J0IGNsYXNzIEVuZW15IGV4dGVuZHMgU3ByaXRlIHtcbiAgcm90YXRpb25SYWRpYW46IG51bWJlcjtcbiAgdGhydXN0U3BlZWQ6IG51bWJlcjtcbiAgaXNEZXN0cm95ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih3b3JsZDogUGhhc2VyLlBoeXNpY3MuTWF0dGVyLldvcmxkLCBzcHJpdGVDb25maWc6IElTcHJpdGVDb25maWcsIHtcbiAgICByb3RhdGlvbkRlZ3JlZSxcbiAgICB0aHJ1c3RTcGVlZCxcbiAgICBhbmdsZSxcbiAgICBzY2FsZSxcbiAgICBmcmljdGlvbkFpcixcbiAgICBtYXNzLFxuICAgIGRlcHRoLFxuICB9ID0gZW5lbXlDb25maWcpIHtcbiAgICBzdXBlcih3b3JsZCwgc3ByaXRlQ29uZmlnLngsIHNwcml0ZUNvbmZpZy55LCBzcHJpdGVDb25maWcubmFtZSk7XG4gICAgdGhpcy5zZXRTY2FsZShzY2FsZSwgc2NhbGUpO1xuICAgIHRoaXMuc2V0QW5nbGUoYW5nbGUpO1xuICAgIHRoaXMuc2V0RnJpY3Rpb25BaXIoZnJpY3Rpb25BaXIpO1xuICAgIHRoaXMuc2V0TWFzcyhtYXNzKTtcbiAgICB0aGlzLmRlcHRoID0gZGVwdGg7XG5cbiAgICB0aGlzLnJvdGF0aW9uUmFkaWFuID0gZGVncmVlVG9SYWRpYW4ocm90YXRpb25EZWdyZWUpO1xuICAgIHRoaXMudGhydXN0U3BlZWQgPSB0aHJ1c3RTcGVlZDtcblxuICAgIHRoaXMuc2V0T25Db2xsaWRlKCgpID0+IHtcbiAgICAgIGxldCBleHBsb3Npb24gPSB0aGlzLnNjZW5lPy5hZGQucGFydGljbGVzKCdmYWtlJykuY3JlYXRlRW1pdHRlcih7XG4gICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgeTogdGhpcy55LFxuICAgICAgICBzcGVlZDoge21pbjogLTMwMCwgbWF4OiAzMDB9LFxuICAgICAgICBhbmdsZToge21pbjogMCwgbWF4OiAzNjB9LFxuICAgICAgICBzY2FsZToge3N0YXJ0OiB0aGlzLnNjYWxlLCBlbmQ6IDB9LFxuICAgICAgICBibGVuZE1vZGU6ICdTQ1JFRU4nLFxuICAgICAgICBncmF2aXR5WTogLXRoaXMueSxcbiAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICBsaWZlc3BhbjogMjUwXG4gICAgICB9KTtcbiAgICAgIGV4cGxvc2lvbj8uZXhwbG9kZSgxNSwgdGhpcy54LCB0aGlzLnkpO1xuICAgICAgdGhpcy5pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICB0aGlzLmRlc3Ryb3kodHJ1ZSk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUocGxheWVyOiBQbGF5ZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNEZXN0cm95ZWQpIHtcbiAgICAgIGNvbnN0IGdldEFuZ2xlID0gKGN4LCBjeSwgZXgsIGV5KSA9PiB7XG4gICAgICAgIGNvbnN0IGR5ID0gZXkgLSBjeTtcbiAgICAgICAgY29uc3QgZHggPSBleCAtIGN4O1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMihkeCwgZHkpICogMTgwIC8gTWF0aC5QSTtcbiAgICAgIH07XG4gICAgICBmdW5jdGlvbiBhbmdsZTM2MChjeCwgY3ksIGV4LCBleSkge1xuICAgICAgICBsZXQgdGhldGEgPSBnZXRBbmdsZShjeCwgY3ksIGV4LCBleSk7XG4gICAgICAgIGlmICh0aGV0YSA8IDApIHRoZXRhID0gMzYwICsgdGhldGE7XG4gICAgICAgIHJldHVybiB0aGV0YTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29uc3QgcmFkID0gYW5nbGUzNjAodGhpcy54LCB0aGlzLnksIHBsYXllcj8ueCwgcGxheWVyLnkpO1xuICAgICAgXG4gICAgICB0aGlzLnRocnVzdExlZnQodGhpcy50aHJ1c3RTcGVlZCk7XG4gICAgICBcbiAgICAgIGlmIChyYWQgIT0gdGhpcy5yb3RhdGlvblJhZGlhbikge1xuICAgICAgICB0aGlzLmFuZ2xlID0gLU1hdGguYWJzKChyYWQgKyAxODApICUgMzYwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG59IiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi4vbGliL3Nwcml0ZS5jbGFzcyc7XG5pbXBvcnQgeyBJU3ByaXRlQ29uZmlnIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnRlcmZhY2VzJztcblxuaW50ZXJmYWNlIElQbGFuZXRDb25maWcge1xuICBpc0F0dHJhY3Rvcj86IGJvb2xlYW47XG4gIG1hc3M/OiBudW1iZXI7XG4gIGlzU3RhdGljPzogYm9vbGVhbjtcbiAgc2NhbGU/OiBudW1iZXI7XG4gIGRlcHRoPzogbnVtYmVyO1xufVxuXG5jb25zdCBwbGFuZXRBdHRyYWN0b3IgPSAoYm9keUE6IGFueSwgYm9keUI6IGFueSkgPT4ge1xuICBjb25zdCB4RGlmZiA9IGJvZHlBLnBvc2l0aW9uLnggLSBib2R5Qi5wb3NpdGlvbi54O1xuICBjb25zdCB5RGlmZiA9IGJvZHlBLnBvc2l0aW9uLnkgLSBib2R5Qi5wb3NpdGlvbi55O1xuICBpZiAoKHhEaWZmID4gMzAwIHx8IHhEaWZmIDwgLTMwMCkgfHwgKHlEaWZmID4gMzAwIHx8IHlEaWZmIDwgLTMwMCkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4ge1xuICAgIHg6IChib2R5QS5wb3NpdGlvbi54IC0gYm9keUIucG9zaXRpb24ueCkgKiAwLjAwMDAyNSxcbiAgICB5OiAoYm9keUEucG9zaXRpb24ueSAtIGJvZHlCLnBvc2l0aW9uLnkpICogMC4wMDAwMjUsXG4gIH1cbn07XG5cbmV4cG9ydCBjbGFzcyBQbGFuZXQgZXh0ZW5kcyBTcHJpdGUge1xuICBjb25zdHJ1Y3Rvcih3b3JsZDogUGhhc2VyLlBoeXNpY3MuTWF0dGVyLldvcmxkLCBzcHJpdGVDb25maWc6IElTcHJpdGVDb25maWcsIHtcbiAgICBpc0F0dHJhY3RvciA9IGZhbHNlLFxuICAgIG1hc3MgPSAyLFxuICAgIGlzU3RhdGljID0gdHJ1ZSxcbiAgICBzY2FsZSA9IDEsXG4gICAgZGVwdGggPSAxMDAwLFxuICB9OiBJUGxhbmV0Q29uZmlnKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIG1hc3MsXG4gICAgICBpc1N0YXRpYyxcbiAgICB9O1xuICAgIGlmIChpc0F0dHJhY3Rvcikge1xuICAgICAgKDxhbnk+b3B0aW9ucykucGx1Z2luID0ge1xuICAgICAgICBhdHRyYWN0b3JzOiBbXG4gICAgICAgICAgcGxhbmV0QXR0cmFjdG9yLFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICAgIHN1cGVyKHdvcmxkLCBzcHJpdGVDb25maWcueCwgc3ByaXRlQ29uZmlnLnksIHNwcml0ZUNvbmZpZy5uYW1lLCB1bmRlZmluZWQsIG9wdGlvbnMpO1xuICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUsIHNjYWxlKTtcblxuICAgIHRoaXMuZGVwdGggPSBkZXB0aDtcbiAgfVxufSIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4uL2xpYi9zcHJpdGUuY2xhc3MnO1xuaW1wb3J0IHsgSVNwcml0ZUNvbmZpZywgUGxheWVyQWN0aW9uIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IFBsYXllckNvbnRyb2xsZXIgfSBmcm9tICcuLi9vYmplY3RzL2NvbnRyb2xzL3BsYXllci1jb250cm9sbGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBTb3VuZEVmZmVjdHMge1xuICBsYXNlcjogKCkgPT4gdm9pZDtcbiAgcm9ja2V0czogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgcGxheWVyQ29uZmlnID0ge1xuICByb3RhdGlvbkRlZ3JlZTogMTAsXG4gIHRocnVzdFNwZWVkOiAwLjAxLFxuICBhbmdsZTogOTAsXG4gIHNjYWxlOiAwLjI1LFxuICBmcmljdGlvbkFpcjogMC4wNSxcbiAgbWFzczogMzAsXG4gIGRlcHRoOiAxMDAwLFxufTtcblxuY29uc3QgZGVncmVlVG9SYWRpYW4gPSAoZDogbnVtYmVyKSA9PiBkICogTWF0aC5QSSAvIDE4MDtcblxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIFNwcml0ZSB7XG4gIHJvdGF0aW9uUmFkaWFuOiBudW1iZXI7XG4gIHRocnVzdFNwZWVkOiBudW1iZXI7XG4gIGNvbnRyb2xsZXIgPSBuZXcgUGxheWVyQ29udHJvbGxlcigpO1xuICBzb3VuZEVmZmVjdHM6IFNvdW5kRWZmZWN0cztcbiAgZGVzdHJveWVkOiBib29sZWFuO1xuICBcbiAgY29uc3RydWN0b3IoXG4gICAgd29ybGQ6IFBoYXNlci5QaHlzaWNzLk1hdHRlci5Xb3JsZCxcbiAgICBzcHJpdGVDb25maWc6IElTcHJpdGVDb25maWcsXG4gICAgc291bmRFZmZlY3RzOiBTb3VuZEVmZmVjdHMsXG4gICAgeyByb3RhdGlvbkRlZ3JlZSxcbiAgICAgIHRocnVzdFNwZWVkLFxuICAgICAgYW5nbGUsXG4gICAgICBzY2FsZSxcbiAgICAgIGZyaWN0aW9uQWlyLFxuICAgICAgbWFzcyxcbiAgICAgIGRlcHRoLFxuICAgIH0gPSBwbGF5ZXJDb25maWdcbiAgKSB7XG4gICAgc3VwZXIod29ybGQsIHNwcml0ZUNvbmZpZy54LCBzcHJpdGVDb25maWcueSwgc3ByaXRlQ29uZmlnLm5hbWUpO1xuICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUsIHNjYWxlKTtcbiAgICB0aGlzLnNldEFuZ2xlKGFuZ2xlKTtcbiAgICB0aGlzLnNldEZyaWN0aW9uQWlyKGZyaWN0aW9uQWlyKTtcbiAgICB0aGlzLnNldE1hc3MobWFzcyk7XG4gICAgdGhpcy5kZXB0aCA9IGRlcHRoO1xuICAgICg8YW55PnRoaXMuYm9keSkubmFtZSA9ICdQbGF5ZXInO1xuICAgIFxuICAgIHRoaXMucm90YXRpb25SYWRpYW4gPSBkZWdyZWVUb1JhZGlhbihyb3RhdGlvbkRlZ3JlZSk7XG4gICAgdGhpcy50aHJ1c3RTcGVlZCA9IHRocnVzdFNwZWVkO1xuXG4gICAgdGhpcy5zb3VuZEVmZmVjdHMgPSBzb3VuZEVmZmVjdHM7XG4gICAgXG4gICAgdGhpcy5zZXRPbkNvbGxpZGUoKCkgPT4ge1xuICAgICAgbGV0IGV4cGxvc2lvbiA9IHRoaXMuc2NlbmU/LmFkZC5wYXJ0aWNsZXMoJ2Zha2UnKS5jcmVhdGVFbWl0dGVyKHtcbiAgICAgICAgeDogdGhpcy54LFxuICAgICAgICB5OiB0aGlzLnksXG4gICAgICAgIHNwZWVkOiB7bWluOiAtMzAwLCBtYXg6IDMwMH0sXG4gICAgICAgIGFuZ2xlOiB7bWluOiAwLCBtYXg6IDM2MH0sXG4gICAgICAgIHNjYWxlOiB7c3RhcnQ6IHRoaXMuc2NhbGUsIGVuZDogMH0sXG4gICAgICAgIGJsZW5kTW9kZTogJ1NDUkVFTicsXG4gICAgICAgIGdyYXZpdHlZOiAtdGhpcy55LFxuICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIGxpZmVzcGFuOiAyNTAsXG4gICAgICB9KTtcbiAgICAgIGV4cGxvc2lvbj8uZXhwbG9kZSgxNSwgdGhpcy54LCB0aGlzLnkpO1xuICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICB0aGlzLmRpc2FibGVJbnRlcmFjdGl2ZSgpO1xuICAgICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb250cm9sbGVyLmluaXQoKTtcbiAgfVxuICBcbiAgcHVibGljIG1hbmFnZUNvbnRyb2xzKHsgdXAsIHJpZ2h0LCBsZWZ0IH06IFBoYXNlci5UeXBlcy5JbnB1dC5LZXlib2FyZC5DdXJzb3JLZXlzKSB7XG4gICAgaWYgKHVwPy5pc0Rvd24pIHtcbiAgICAgIHRoaXMudGhydXN0TGVmdCh0aGlzLnRocnVzdFNwZWVkKTtcbiAgICB9XG4gICAgaWYgKHVwICYmIFBoYXNlci5JbnB1dC5LZXlib2FyZC5KdXN0RG93bih1cCkpIHtcbiAgICAgIHRoaXMuc291bmRFZmZlY3RzLnJvY2tldHMoKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKHJpZ2h0Py5pc0Rvd24pIHtcbiAgICAgIHRoaXMuc2V0Um90YXRpb24odGhpcy5yb3RhdGlvbiArPSB0aGlzLnJvdGF0aW9uUmFkaWFuKTtcbiAgICB9IGVsc2UgaWYgKGxlZnQ/LmlzRG93bikge1xuICAgICAgdGhpcy5zZXRSb3RhdGlvbih0aGlzLnJvdGF0aW9uIC09IHRoaXMucm90YXRpb25SYWRpYW4pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVBY3Rpb24oa2V5UHJlc3NlZDogbnVtYmVyKTogdm9pZCB7XG4gICAgLy8gY29uc3QgYWN0aW9uVG9UYWtlID0gdGhpcy5jb250cm9sbGVyLmtleUV2ZW50cy5maW5kKGtleSA9PiBrZXkua2V5ID09PSBrZXlQcmVzc2VkKTtcbiAgICAvLyBzd2l0Y2ggKGFjdGlvblRvVGFrZT8uYWN0aW9uKSB7XG4gICAgLy8gICBjYXNlIFBsYXllckFjdGlvbi5GSVJFX0xBU0VSOlxuICAgIC8vICAgICBjb25zdCBsYXNlciA9IG5ldyBMYXNlcih0aGlzLnNjZW5lLm1hdHRlci53b3JsZCwgeyB4OiB0aGlzLnggKyA1MCwgeTogdGhpcy55ICsgNTAsIG5hbWU6ICdMYXNlcicgfSk7XG4gICAgLy8gICAgIHRoaXMuc2NlbmUuYWRkLmV4aXN0aW5nKGxhc2VyKTtcbiAgICAvLyAgICAgYnJlYWs7XG4gICAgLy8gICBkZWZhdWx0OlxuICAgIC8vICAgICBicmVhaztcbiAgICAvLyB9XG4gIH1cblxuICBwcml2YXRlIGRldGVybWluZUxhc2VyVmVsb2NpdHkoKTogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9IHtcbiAgICBsZXQgeCA9IDEwO1xuICAgIGxldCB5ID0gTWF0aC5hYnModGhpcy5yb3RhdGlvbik7XG4gICAgaWYgKHRoaXMucm90YXRpb24gPiAzICYmIHRoaXMucm90YXRpb24gPD0gNSkge1xuICAgICAgeCA9IC0xMDtcbiAgICB9XG4gICAgLy8gaWYgKHRoaXMucm90YXRpb24gPCAwKSB7XG4gICAgLy8gICB5ID0gdGhpcy5yb3RhdGlvbiAqIC0xO1xuICAgIC8vIH1cbiAgICBjb25zb2xlLmxvZyhgWDogJHt4fSwgWTogJHt5fSwgUk9UQVRJT046ICR7dGhpcy5yb3RhdGlvbn0sIEFOR0xFOiAke3RoaXMuYW5nbGV9YCk7XG4gICAgcmV0dXJuIHsgeCAsIHkgfTtcbiAgfVxuICBcbn1cbiIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4uL2xpYi9zcHJpdGUuY2xhc3MnO1xuaW1wb3J0IHsgSVNwcml0ZUNvbmZpZyB9IGZyb20gJy4uL2ludGVyZmFjZXMvaW50ZXJmYWNlcyc7XG5cbmludGVyZmFjZSBJQ29uZmlnIHtcbiAgZGVwdGg/OiBudW1iZXIsXG4gIHNjYWxlPzogbnVtYmVyLFxufVxuXG5leHBvcnQgY2xhc3MgU3BhY2VTdGF0aW9uIGV4dGVuZHMgU3ByaXRlIHtcbiAgd2luOiBib29sZWFuO1xuICBjb25zdHJ1Y3Rvcih3b3JsZDogUGhhc2VyLlBoeXNpY3MuTWF0dGVyLldvcmxkLCBzcHJpdGVDb25maWc6IElTcHJpdGVDb25maWcsIHtcbiAgICBkZXB0aCA9IDEwMDAsXG4gICAgc2NhbGUgPSAwLjUsXG4gIH06IElDb25maWcpIHtcbiAgICBzdXBlcih3b3JsZCwgc3ByaXRlQ29uZmlnLngsIHNwcml0ZUNvbmZpZy55LCBzcHJpdGVDb25maWcubmFtZSwgdW5kZWZpbmVkLCB7IGlzU3RhdGljOiB0cnVlIH0pO1xuICAgIHRoaXMuc2V0U2NhbGUoc2NhbGUsIHNjYWxlKTtcbiAgICB0aGlzLmRlcHRoID0gZGVwdGg7XG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy53aW4gPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0T25Db2xsaWRlKChjKSA9PiB7XG4gICAgICBpZiAodGhpcy52aXNpYmxlICYmIGMuYm9keUIubmFtZSA9PT0gJ1BsYXllcicpIHtcbiAgICAgICAgdGhpcy53aW4gPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9