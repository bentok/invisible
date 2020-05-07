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
    this.add.text(100, 50, 'Space Jammin\'', { fill: '#FFFFFF' }).setFontSize(24);
    new MenuButton(this, 100, 100, 'Start Game', () => {
      this.scene.start('Game');
    });
    
    this.add.text(100, 200, 'The galaxy is facing an existential threat of proportions that cause\n' +
      'concern. You have data that can assist in eliminating the threat, but it is\n' +
      'too risky to send it over galactic telecom gamma waves, for fear of\n' +
      'it being intercepted and causing the existential threat to grow in its\n' +
      'level of concerningness.\n' +
      '\n' +
      'You must personally deliver the data to \'the star base. You are almost\n' +
      'there but a bounty hunter is on your tail, and the space station has\n' +
      'turned on cloaking to conceal its location until you have eliminate the \n' +
      'bounty hunter. But your weapon systems are down. \n' +
      '\n' +
      'Your mission: Find a way to destroy the bounty hunter and find the base.', { fill: '#FFFFFF' }).setFontSize(16)
    // new MenuButton(this, 100, 250, `Paul's Awesome Ninja Game`, () => {
    //   this.scene.start('PaulNinja');
    // });
    // new MenuButton(this, 100, 350, 'Generate Galaxy', () => {
    //   this.scene.start('Galaxy');
    // });
    // Example of a second start screen option
    // new MenuButton(this, 100, 200, 'Options', () => {
    //   this.scene.start('Options');
    // });
  }
}
