import * as Phaser from 'phaser';
import { BootScene, GameScene, MainMenuScene } from './scenes';
import { PaulNinjaScene } from './scenes/paul-ninja.scene';

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'Invisible (Working Title)',

    type: Phaser.AUTO,

    width: window.innerWidth,
    height: window.innerHeight,

    physics: {
        default: 'matter',
        matter: {
            debug: true,
        },
    },

    scene: [BootScene, MainMenuScene, GameScene, PaulNinjaScene],

    parent: 'content',
    backgroundColor: '#000000',
};

export const game = new Phaser.Game(gameConfig);
