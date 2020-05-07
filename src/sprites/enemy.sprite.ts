import { Sprite } from '../lib/sprite.class';
import { ISpriteConfig } from '../interfaces/interfaces';
import {Player} from "./player.sprite";

const enemyConfig = {
  rotationDegree: 5,
  thrustSpeed: 0.009,
  angle: 90,
  scale: 0.15,
  frictionAir: 0.05,
  mass: 30,
  depth: 1000,
};

const degreeToRadian = d => d * Math.PI / 180;

export class Enemy extends Sprite {
  rotationRadian: number;
  thrustSpeed: number;
  isDestroyed = false;

  constructor(world: Phaser.Physics.Matter.World, spriteConfig: ISpriteConfig, {
    rotationDegree,
    thrustSpeed,
    angle,
    scale,
    frictionAir,
    mass,
    depth,
  } = enemyConfig) {
    super(world, spriteConfig.x, spriteConfig.y, spriteConfig.name);
    this.setScale(scale, scale);
    this.setAngle(angle);
    this.setFrictionAir(frictionAir);
    this.setMass(mass);
    this.depth = depth;

    this.rotationRadian = degreeToRadian(rotationDegree);
    this.thrustSpeed = thrustSpeed;

    this.setOnCollide(() => {
      this.isDestroyed = true;
      this.destroy(true);
    });

  }

  public update(player: Player) {
    if (!this.isDestroyed) {
      const getAngle = (cx, cy, ex, ey) => {
        const dy = ey - cy;
        const dx = ex - cx;
        return Math.atan2(dx, dy) * 180 / Math.PI;
      };
      function angle360(cx, cy, ex, ey) {
        let theta = getAngle(cx, cy, ex, ey);
        if (theta < 0) theta = 360 + theta;
        return theta;
      }
      
      const rad = angle360(this.x, this.y, player?.x, player.y);
      
      this.thrustLeft(this.thrustSpeed);
      
      if (rad != this.rotationRadian) {
        this.angle = -Math.abs((rad + 180) % 360);
      }
    }
  }


}