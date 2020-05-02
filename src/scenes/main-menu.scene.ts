import { ISettingsConfig, Scene } from '../lib';
import { MenuButton } from '../menu-button.text';

const sceneConfig: ISettingsConfig = {
  active: false,
  visible: false,
  key: 'MainMenu',
};

/**
 * The initial scene that starts, shows the splash screens, and loads the necessary assets.
 */
export class MainMenuScene extends Scene {
  constructor() {
    super(sceneConfig);
  }

  create() {
    this.add.text(100, 50, 'Invisible (Working Title)', { fill: '#FFFFFF' }).setFontSize(24);
    new MenuButton(this, 100, 150, 'Start Game', () => {
      this.scene.start('Game');
    });
    // Example of a second start screen option
    // new MenuButton(this, 100, 200, 'Options', () => {
    //   this.scene.start('Options');
    // });
  }
}
