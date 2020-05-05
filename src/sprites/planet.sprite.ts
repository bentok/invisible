import { Sprite } from '../lib/sprite.class';
import { ISpriteConfig } from '../interfaces/interfaces';

const planetAttractor = (bodyA: any, bodyB: any) => {
  const xDiff = bodyA.position.x - bodyB.position.x;
  const yDiff = bodyA.position.y - bodyB.position.y;
  if (xDiff > 300 || yDiff > 300) {
    return null;
  }
  return {
    x: (bodyA.position.x - bodyB.position.x) * 0.00001,
    y: (bodyA.position.y - bodyB.position.y) * 0.00001,
  }
};

export class Planet extends Sprite {
  constructor(world: Phaser.Physics.Matter.World, spriteConfig: ISpriteConfig, planetConfig: any) {
    const options = {
      circleRadius: 2,
      mass: 2,
      isStatic: true,
      plugin: {
        attractors: [
          planetAttractor,
        ]
      }
    };
    super(world, spriteConfig.x, spriteConfig.y, spriteConfig.name, undefined, options);
  }
}