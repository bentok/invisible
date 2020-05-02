
import {
  // IBody,
  // ICursorKeys,
  // IRectangle,
  ISettingsConfig,
  Scene,
} from '../lib';
import { getGameHeight, getGameWidth } from '../helpers';

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
    this.matter.world.setBounds(0, 0, getGameWidth(this), getGameHeight(this), 0, true, false, true);
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
