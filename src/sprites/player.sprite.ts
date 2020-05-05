import { Sprite } from '../lib/sprite.class';
import { ISpriteConfig } from '../interfaces/interfaces';

export class Player extends Sprite {
  constructor(world: Phaser.Physics.Matter.World, spriteConfig: ISpriteConfig, playerConfig: any) {
    super(world, spriteConfig.x, spriteConfig.y, spriteConfig.name);
    this.setScale(0.25, 0.25);
    this.depth = 1000;
  }
  
  public update() {
    this.manageRotation()
  }

  determineAngle(x: number, y: number): number {
    if (x === 0 && y < 0) {
      return 0;
    } else if (x > 0 && y < 0) {
      return 45;
    } else if (x > 0 && y === 0) {
      return 90;
    } else if (x > 0 && y > 0) {
      return 135;
    } else if (x === 0 && y > 0) {
      return 180;
    } else if (x < 0 && y > 0) {
      return 225;
    } else if (x < 0 && y === 0 ) {
      return 270;
    } else if (x < 0 && y < 0 ) {
      return 315;
    }
    return 90;
  };
  
  manageRotation() {
    const { x, y } = (<any>this).body.gameObject.body.velocity;
    this.setAngle(this.determineAngle(x, y))
  }
  
}