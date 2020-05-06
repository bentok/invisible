
import {
  ISettingsConfig,
  Scene,
} from '../lib';
import { GALAXY } from "../const/galaxy.const";
import {Player} from "../sprites/player.sprite";
import {Planet} from "../sprites/planet.sprite";
import { generateStars } from "../services/stars.service";
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { VelocityDirection } from '../interfaces/interfaces';

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
    
    this.player = new Player(this.matter.world, { x: 20, y: 20, name: 'GreenShip' });
    this.add.existing(this.player);

    fromEvent(document, 'keydown').pipe(
      map((key: any) => this.player.controller.handleKeyPress(key.keyCode))
  ).subscribe(newPosition => {
      if (newPosition?.direction === VelocityDirection.X) {
          this.player.setVelocityX(newPosition.velocity);
      } else if (newPosition?.direction === VelocityDirection.Y){
          this.player.setVelocityY(newPosition.velocity);
      }
      
  })
    
    generateStars(this, GALAXY.width, GALAXY.height, 800);
  }

  update() {
    this.player.manageControls(this.cursorKeys);
    this.cameras.main.centerOn(this.player.x, this.player.y);
  }
}
