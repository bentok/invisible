
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
import {Asteroid} from "../sprites/asteroid.sprite";
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
  private asteroids: Asteroid[];
  private numAsteroids: number;

  constructor() {
    super(sceneConfig);
  }

  create() {

    this.sound.add('music').play();
    this.sound.add('player_laser');
    
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    
    this.cameras.main.setBounds(0, 0, GALAXY.width, GALAXY.height);
    // this.cameras.main.setZoom(3);
    this.cameras.main.setZoom(2);
    
    
    this.matter.enableAttractorPlugin();

    this.asteroids = [];
    this.numAsteroids = 10;
    
    const earth = new Planet(this.matter.world, { x: GALAXY.width - 500, y: 200, name: 'Earth' }, { scale: 3 });
    this.add.existing(earth);

    const mars = new Planet(this.matter.world, { x: 300, y: 600, name: 'Mars' }, { scale: 3});
    this.add.existing(mars);

    const jupiter = new Planet(this.matter.world, { x: GALAXY.width / 2, y: GALAXY.height / 2, name: 'Jupiter' }, { isAttractor: true, scale: 5, mass: 5 });
    this.add.existing(jupiter);
    
    const spaceStation = new SpaceStation(this.matter.world, { x: GALAXY.width - 200, y: GALAXY.height - 300, name: 'SpaceStation' }, {});
    this.add.existing(spaceStation);

    const playerSounds = {
      laser: () => this.sound.play('player_laser'),
      rockets: () => this.sound.play('player_rockets')
    };
    this.player = new Player(this.matter.world, { x: 20, y: 300, name: 'GreenShip' }, playerSounds);
    this.add.existing(this.player);

    fromEvent(document, 'keydown').subscribe((keyPressed: any) => {
      this.player.handleAction(keyPressed.keyCode);
    });
    
    this.enemy = new Enemy(this.matter.world, { x: 600, y: 600, name: 'RedShip' });
    this.add.existing(this.enemy);

    const asteroidSounds = { explosion: () => this.sound.play('explosion') };
    const worldView = this.cameras.main.worldView;
    for (let i = 0; i < this.numAsteroids; i++) {
      let asteroidX = between(0, GALAXY.width);
      let asteroidY = between(0, GALAXY.height);
      let asteroid = new Asteroid(this.matter.world, { x: asteroidX, y: asteroidY, name: 'fake' }, worldView, asteroidSounds);
      this.add.existing(asteroid);
      this.asteroids.push(asteroid);
    }

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
    for (let i = 0; i < this.numAsteroids; i++) {
      this.asteroids[i].update();
    }
  }
}
