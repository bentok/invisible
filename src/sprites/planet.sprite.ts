import { Sprite } from '../lib/sprite.class';
import { ISpriteConfig } from '../interfaces/interfaces';

interface IPlanetConfig {
  isAttractor?: boolean;
  mass?: number;
  isStatic?: boolean;
  scale?: number;
  depth?: number;
}

const planetAttractor = (bodyA: any, bodyB: any) => {
  const xDiff = bodyA.position.x - bodyB.position.x;
  const yDiff = bodyA.position.y - bodyB.position.y;
  if ((xDiff > 300 || xDiff < -300) || (yDiff > 300 || yDiff < -300)) {
    return null;
  }
  return {
    x: (bodyA.position.x - bodyB.position.x) * 0.000025,
    y: (bodyA.position.y - bodyB.position.y) * 0.000025,
  }
};

export class Planet extends Sprite {
  constructor(world: Phaser.Physics.Matter.World, spriteConfig: ISpriteConfig, {
    isAttractor = false,
    mass = 2,
    isStatic = true,
    scale = 1,
    depth = 1000,
  }: IPlanetConfig) {
    const options = {
      mass,
      isStatic,
    };
    if (isAttractor) {
      (<any>options).plugin = {
        attractors: [
          planetAttractor,
        ]
      }
    }
    super(world, spriteConfig.x, spriteConfig.y, spriteConfig.name, undefined, options);
    this.setScale(scale, scale);

    this.depth = depth;
  }
}