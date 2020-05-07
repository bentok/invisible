import { Sprite } from '../lib/sprite.class';
import { ISpriteConfig } from '../interfaces/interfaces';

interface IConfig {
  depth?: number,
  scale?: number,
}

export class SpaceStation extends Sprite {
  constructor(world: Phaser.Physics.Matter.World, spriteConfig: ISpriteConfig, {
    depth = 1000,
    scale = 0.5,
  }: IConfig) {
    super(world, spriteConfig.x, spriteConfig.y, spriteConfig.name, undefined, { isStatic: true });
    this.setScale(scale, scale);
    this.depth = depth;
  }

}