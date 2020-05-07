import { Sprite } from '../lib/sprite.class';
import { ISpriteConfig, PlayerAction } from '../interfaces/interfaces';
import { PlayerController } from '../objects/controls/player-controller';

export interface SoundEffects {
  laser: () => void;
  rockets: () => void;
}

const playerConfig = {
  rotationDegree: 10,
  thrustSpeed: 0.01,
  angle: 90,
  scale: 0.25,
  frictionAir: 0.05,
  mass: 30,
  depth: 1000,
};

const degreeToRadian = (d: number) => d * Math.PI / 180;

export class Player extends Sprite {
  rotationRadian: number;
  thrustSpeed: number;
  controller = new PlayerController();
  soundEffects: SoundEffects;
  destroyed: boolean;
  
  constructor(
    world: Phaser.Physics.Matter.World,
    spriteConfig: ISpriteConfig,
    soundEffects: SoundEffects,
    { rotationDegree,
      thrustSpeed,
      angle,
      scale,
      frictionAir,
      mass,
      depth,
    } = playerConfig
  ) {
    super(world, spriteConfig.x, spriteConfig.y, spriteConfig.name);
    this.setScale(scale, scale);
    this.setAngle(angle);
    this.setFrictionAir(frictionAir);
    this.setMass(mass);
    this.depth = depth;
    (<any>this.body).name = 'Player';
    
    this.rotationRadian = degreeToRadian(rotationDegree);
    this.thrustSpeed = thrustSpeed;

    this.soundEffects = soundEffects;
    
    this.setOnCollide(() => {
      let explosion = this.scene?.add.particles('fake').createEmitter({
        x: this.x,
        y: this.y,
        speed: {min: -300, max: 300},
        angle: {min: 0, max: 360},
        scale: {start: this.scale, end: 0},
        blendMode: 'SCREEN',
        gravityY: -this.y,
        active: true,
        lifespan: 250,
      });
      explosion?.explode(15, this.x, this.y);
      this.visible = false;
      this.disableInteractive();
      this.destroyed = true;
    });

    this.controller.init();
  }
  
  public manageControls({ up, right, left }: Phaser.Types.Input.Keyboard.CursorKeys) {
    if (up?.isDown) {
      this.thrustLeft(this.thrustSpeed);
    }
    if (up && Phaser.Input.Keyboard.JustDown(up)) {
      this.soundEffects.rockets();
    }
    
    if (right?.isDown) {
      this.setRotation(this.rotation += this.rotationRadian);
    } else if (left?.isDown) {
      this.setRotation(this.rotation -= this.rotationRadian);
    }
  }

  public handleAction(keyPressed: number): void {
    // const actionToTake = this.controller.keyEvents.find(key => key.key === keyPressed);
    // switch (actionToTake?.action) {
    //   case PlayerAction.FIRE_LASER:
    //     const laser = new Laser(this.scene.matter.world, { x: this.x + 50, y: this.y + 50, name: 'Laser' });
    //     this.scene.add.existing(laser);
    //     break;
    //   default:
    //     break;
    // }
  }

  private determineLaserVelocity(): { x: number, y: number } {
    let x = 10;
    let y = Math.abs(this.rotation);
    if (this.rotation > 3 && this.rotation <= 5) {
      x = -10;
    }
    // if (this.rotation < 0) {
    //   y = this.rotation * -1;
    // }
    console.log(`X: ${x}, Y: ${y}, ROTATION: ${this.rotation}, ANGLE: ${this.angle}`);
    return { x , y };
  }
  
}
