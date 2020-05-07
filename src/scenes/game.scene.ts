
import {
  ISettingsConfig,
  Scene,
} from '../lib';
import { GALAXY } from "../const/galaxy.const";
import { Player } from "../sprites/player.sprite";
import { Planet } from "../sprites/planet.sprite";
import { generateStars } from "../services/stars.service";
import {SpaceStation} from "../sprites/space-station.sprite";
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { VelocityDirection } from '../interfaces/interfaces';
import {Enemy} from "../sprites/enemy.sprite";
import { AsteroidService } from "../services/asteroid.service";
import { between } from '../lib/Math';

const sceneConfig: ISettingsConfig = {
  active: false,
  visible: false,
  key: 'Game',
};

export class GameScene extends Scene {
  private cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;
  private player: Player;
  private enemy: Enemy;
  private asteroidService: AsteroidService;

  constructor() {
    super(sceneConfig);
  }

  create() {

    this.sound.add('music').play();
    
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    
    this.cameras.main.setBounds(0, 0, GALAXY.width, GALAXY.height);
    this.cameras.main.setZoom(3);
    
    
    this.matter.enableAttractorPlugin();
    
    const earth = new Planet(this.matter.world, { x: GALAXY.width - 500, y: 200, name: 'Earth' }, { scale: 3 });
    this.add.existing(earth);

    const mars = new Planet(this.matter.world, { x: 300, y: 600, name: 'Mars' }, { scale: 3});
    this.add.existing(mars);

    const jupiter = new Planet(this.matter.world, { x: GALAXY.width / 2, y: GALAXY.height / 2, name: 'Jupiter' }, { isAttractor: true, scale: 5, mass: 5 });
    this.add.existing(jupiter);
    
    const spaceStation = new SpaceStation(this.matter.world, { x: GALAXY.width - 200, y: GALAXY.height - 300, name: 'SpaceStation' }, {});
    this.add.existing(spaceStation);
    
    this.player = new Player(this.matter.world, { x: 20, y: 300, name: 'GreenShip' });
    this.add.existing(this.player);

    fromEvent(document, 'keydown').subscribe((keyPressed: any) => {
      this.player.handleAction(keyPressed.keyCode);
    });
    
    this.enemy = new Enemy(this.matter.world, { x: 600, y: 600, name: 'RedShip' });
    this.add.existing(this.enemy);

    // TODO: WARNING!!! Adding more asteroids causes game to crash cause is within 'setOnCollide' particle creation
    // Possible fix: Ensure correct directional velocity is applied when initializing asteroid - seems cause is a performance issue?
    let maxAsteroids = 10;
    this.asteroidService = new AsteroidService(this.matter.world, maxAsteroids);

    // fromEvent(document, 'keydown').pipe(
    //   map((key: any) => this.player.controller.handleKeyPress(key.keyCode))
    // ).subscribe(newPosition => {
    //   if (newPosition?.direction === VelocityDirection.X) {
    //       this.player.setVelocityX(newPosition.velocity);
    //   } else if (newPosition?.direction === VelocityDirection.Y){
    //       this.player.setVelocityY(newPosition.velocity);
    //   }
    // });
    
    generateStars(this, GALAXY.width, GALAXY.height, 800);
  }

  update() {
    this.player.manageControls(this.cursorKeys);
    this.cameras.main.centerOn(this.player.x, this.player.y);
    this.enemy.update(this.player);
    this.asteroidService.update();
  }
}
