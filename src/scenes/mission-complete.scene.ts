import { ISettingsConfig, Scene } from '../lib';
import { MenuButton } from '../menu-button.text';

const sceneConfig: ISettingsConfig = {
  active: false,
  visible: false,
  key: 'MissionComplete',
};

/**
 * The initial scene that starts, shows the splash screens, and loads the necessary assets.
 */
export class MissionCompleteScene extends Scene {
  constructor() {
    super(sceneConfig);
  }

  create() {
    this.add.text(100, 50, 'Mission Complete', { fill: '#FFFFFF' }).setFontSize(24);

    this.add.text(100, 100, 'The galaxy was facing an existential threat of proportions that caused\n' +
      'concern. You had data that could assist in eliminating the threat, but it was\n' +
      'too risky to send it over galactic telecom gamma waves, for fear of\n' +
      'it being intercepted and causing the existential threat to grow in its\n' +
      'level of concerningness.\n' +
      '\n' +
      'You personally delivered the data to the star base. You were almost\n' +
      'there but a bounty hunter was on your tail, and the space station had\n' +
      'turned on cloaking to conceal its location until you eliminated the \n' +
      'bounty hunter. But your weapon systems were down. And you got creative by\n' +
      'making crazy maneuvers and making the bounty hunter crash.\n' +
      '\n' +
      'Smooth moves!', { fill: '#FFFFFF' }).setFontSize(16)
  }
}
