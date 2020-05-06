
import {
  ISettingsConfig,
  Scene,
} from '../lib';
import { GALAXY } from "../const/galaxy.const";
import {Player} from "../sprites/player.sprite";
import {Planet} from "../sprites/planet.sprite";
import { generateStars } from "../services/stars.service";

const sceneConfig: ISettingsConfig = {
  active: false,
  visible: false,
  key: 'Game',
};

export class GameScene extends Scene {
  private cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;
  private player: Player;
  private planet: Planet;

  constructor() {
    super(sceneConfig);
  }

  create() {
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    
    this.cameras.main.setBounds(0, 0, GALAXY.width, GALAXY.height);
    this.cameras.main.setZoom(3);
    
    
    this.matter.enableAttractorPlugin();
    
    this.planet = new Planet(this.matter.world, { x: GALAXY.width - 500, y: GALAXY.height - 500, name: 'Earth' }, null);
    this.add.existing(this.planet);
    
    this.player = new Player(this.matter.world, { x: 0, y: 0, name: 'GreenShip' }, null);
    this.add.existing(this.player);
    
    generateStars(this, GALAXY.width, GALAXY.height, 800);
  }

  update() {
    if (this?.cursorKeys?.left?.isDown) {
      this.player.setVelocityX(-10);
    } else if (this?.cursorKeys?.right?.isDown) {
      this.player.setVelocityX(10);
    } else {
      this.player.setVelocityX(0);
    }
    if (this?.cursorKeys?.up?.isDown) {
      this.player.setVelocityY(-10);
    } else if (this?.cursorKeys?.down?.isDown) {
      this.player.setVelocityY(10);
    } else {
      this.player.setVelocityY(0);
    }

    this.cameras.main.centerOn(this.player.x, this.player.y);
    
    this.player.update();
  }
}
