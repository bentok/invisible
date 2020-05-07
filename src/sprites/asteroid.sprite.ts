import { Sprite } from '../lib/sprite.class';
import { ISpriteConfig } from '../interfaces/interfaces';
import { between } from '../lib/Math';
import { RaceOperator } from 'rxjs/internal/observable/race';
import { max } from 'rxjs/operators';

const asteroidConfig = {
  rotationSpeed: .05,
  // scale: 0.15,
  scale: .5,
  frictionAir: 0.05,
  mass: 30,
  depth: 1000,
};

export class Asteroid extends Sprite {
  private velocityX: number;
  private velocityY: number;
  private rotationSpeed: number;
  private dustEmitter: any;
  private isDestroyed = false;
  private isOffScreen = false;

  constructor(world: Phaser.Physics.Matter.World, spriteConfig: ISpriteConfig, {
    rotationSpeed,
    scale,
    frictionAir,
    mass,
    depth,
  } = asteroidConfig) {
    super(world, spriteConfig.x, spriteConfig.y, spriteConfig.name);
    this.setScale(scale, scale);
    this.setFrictionAir(frictionAir);
    this.setAngle(between(0, 360));
    this.setMass(mass);
    this.depth = depth;
    this.rotationSpeed = rotationSpeed;
    this.velocityX = between(-5, 5);
    this.velocityY = between(-5, 5);
    this.dustEmitter = this.scene.add.particles('fake');

    this.setVelocity(this.velocityX, this.velocityY);

    this.setOnCollide(() => {
      let explosion = this.scene.add.particles('fake').createEmitter({
        x: this.x,
        y: this.y,
        speed: { min: -800, max: 800 },
        angle: { min: 0, max: 360 },
        scale: { start: this.scale, end: 0 },
        blendMode: 'SCREEN',
        gravityY: this.y,
        active: true,
        lifespan: 100
      });
      explosion.explode(20, this.x, this.y);
      this.isDestroyed = true;
      this.destroy(true);
    });
  }

  update() {
    if (!this.isDestroyed) {
      this.applyForces();
      this.applyParticles();
    }
  }

  private applyForces() {
    this.setVelocity(this.velocityX, this.velocityY);
    this.rotation += this.rotationSpeed;
  }

  private applyParticles() {
    // this.dustEmitter.createEmitter({
    //   x: this.x,
    //   y: this.y,
    //   // frame: 'yellow',
    //   radial: false,
    //   speed: { min: -800, max: 800 },
    //   angle: { min: 0, max: 360 },
    //   scale: { start: this.scale, end: 0 },
    //   blendMode: 'SCREEN',
    //   gravityY: -this.y,
    //   quantity: 4,
    //   active: true,
    //   lifespan: 10
    // });
    // this.dustEmitter;

    this.dustEmitter.createEmitter({
      // frame: 'yellow',
      // radial: false,
      lifespan: 100,
      speedX: { min: 200, max: 400 },
      // quantity: 2,
      // gravityY: -this.y,
      active: true,
      scale: { start: this.scale, end: 0, ease: 'Power3' },
      blendMode: 'ADD'
    }).emitParticle(5, this.x, this.y);
  }
}