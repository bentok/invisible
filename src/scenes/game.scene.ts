
import {
  // IBody,
  // ICursorKeys,
  // IRectangle,
  ISettingsConfig,
  Scene,
} from '../lib';
import { Matter } from '../lib/matter.class';
import { between } from '../lib/Math';

const sceneConfig: ISettingsConfig = {
  active: false,
  visible: false,
  key: 'Game',
};

export class GameScene extends Scene {
  private cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;

  private image: Phaser.Physics.Matter.Sprite;

  constructor() {
    super(sceneConfig);
  }

  create() {
    this.image = this.matter.add.sprite(0, 0, 'foobar'); // Image name specified in boot.scene.ts
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.matter.world.setBounds();
    this.matter.add.mouseSpring();
    
    const bodies = new Matter(this).bodies;

    const group = this.matter.world.nextGroup(true);

    const bridge = this.matter.add.stack(160, 290, 15, 1, 0, 0, (x: number, y: number) => {
      return bodies.rectangle(x - 20, y, 53, 20, {
        collisionFilter: { group: group, category: 0, mask: 0 },
        chamfer: { radius: 0 },
        density: 0.005,
        frictionAir: 0.05
      });
    });

    this.matter.add.chain(bridge, 0.3, 0, -0.3, 0, {
      stiffness: 1,
      length: 0,
      render: {
        visible: false
      }
    });

    this.matter.add.stack(250, 50, 6, 3, 0, 0, (x: number, y: number) => {
      return bodies.rectangle(x, y, 50, 50, between(20, 40) as any);
    });

    this.matter.add.rectangle(30, 490, 220, 380, {
      isStatic: true,
      chamfer: { radius: 20 }
    }),

    this.matter.add.rectangle(770, 490, 220, 380, {
      isStatic: true,
      chamfer: { radius: 20 }
    }),

    this.matter.add.worldConstraint(bridge.bodies[0], 2, 0.9, {
      pointA: { x: 140, y: 300 },
      pointB: { x: -25, y: 0 }
    });

    this.matter.add.worldConstraint(bridge.bodies[bridge.bodies.length - 1], 2, 0.9, {
      pointA: { x: 660, y: 300 },
      pointB: { x: 25, y: 0 }
    });
  }

  update() {
    if (this?.cursorKeys?.left?.isDown) {
      this.image.setVelocityX(-10);
    } else if (this?.cursorKeys?.right?.isDown) {
      this.image.setVelocityX(10);
    } else {
      this.image.setVelocityX(0);
    }
    if (this?.cursorKeys?.up?.isDown) {
      this.image.setVelocityY(-10);
    } else if (this?.cursorKeys?.down?.isDown) {
      this.image.setVelocityY(10);
    } else {
      this.image.setVelocityY(0);
    }
  }
}
