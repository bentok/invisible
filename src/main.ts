import * as Phaser from 'phaser';
import { BootScene, GameScene, MainMenuScene, GalaxyScene } from './scenes';
import { PaulNinjaScene } from './scenes/paul-ninja.scene';
const MatterAttractors = require('matter-attractors');

const gameConfig: Phaser.Types.Core.GameConfig = {
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
      // "plugins.attractors": true,
      debug: true,
    },
  },
  plugins: {
    scene: [
      {
        plugin: MatterAttractors, // The plugin class
        key: "matterAttractors", // Where to store in Scene.Systems, e.g. scene.sys.matterCollision
        mapping: "matterAttractors" // Where to store in the Scene, e.g. scene.matterCollision
      }
    ]
  },
  scene: [BootScene, MainMenuScene, GameScene, PaulNinjaScene, GalaxyScene],

  parent: 'content',
  backgroundColor: '#000000',
  render: { pixelArt: true, antialias: true },
};

export const game = new Phaser.Game(gameConfig);
