
import {
    ISettingsConfig,
    Scene,
} from '../lib';
import { GALAXY } from "../const/galaxy.const";
import { GalaxyMap } from "../objects/galaxy-system";
import { GalaxyController } from '../objects/controls/galaxy-controller';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { Planet } from '../sprites/planet.sprite'; 

const sceneConfig: ISettingsConfig = {
    active: false,
    visible: false,
    key: 'Galaxy',
};

export class GalaxyScene extends Scene {
    private cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;
    private controls: Phaser.Cameras.Controls.SmoothedKeyControl;
    private numberSectorsX: number;
    private numberSectorsY: number;
    private galaxySystems: GalaxyMap[][];
    // Controller setup
    private _galaxyController: GalaxyController;
    private _sprite: Phaser.Physics.Matter.Sprite;

    constructor() {
      super(sceneConfig);
    }
  
    init(): void {
        // *****************************************************************
        // VARIABLES
        // *****************************************************************
        this.galaxySystems = [];
        this.numberSectorsX = GALAXY.width / GALAXY.sectorSize;
        this.numberSectorsY = GALAXY.height / GALAXY.sectorSize;
    
        // *****************************************************************
        // INPUT
        // *****************************************************************
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.input.on("gameobjectover", (pointer: any, gameObject: any, event: any) => {
            gameObject.setStrokeStyle(1, 0xffffff);
        });
        this.input.on("gameobjectout", (pointer: any, gameObject: any, event: any) => {
            gameObject.setStrokeStyle(0, 0xffffff);
        });
    
        // *****************************************************************
        // CAMERA
        // *****************************************************************
        let controlConfig = {
            camera: this.cameras.main,
            left: this.cursorKeys.left,
            right: this.cursorKeys.right,
            up: this.cursorKeys.up,
            down: this.cursorKeys.down,
            acceleration: 0.02,
            drag: 0.0005,
            maxSpeed: 0.25,
        };
    
        this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(
            controlConfig
        );
        this.cameras.main.setBounds(0, 0, GALAXY.width, GALAXY.height);
        this.cameras.main.setZoom(3);
        // this.cameras.main.setZoom(1);

        // *****************************************************************
        // SPRITE CONTROLLER
        // *****************************************************************
        this._sprite = new Planet(this.matter.world, { x: 0, y: 0, name: 'foobar' }, null);
        this._galaxyController = new GalaxyController();
        this._galaxyController.init();
        
    }
  
    create(): void {
        this.matter.enableAttractorPlugin();
        // Create star systems
        for (let y = 0; y < this.numberSectorsY; y++) {
            this.galaxySystems[y] = [];
            for (let x = 0; x < this.numberSectorsX; x++) {
            this.galaxySystems[y][x] = new GalaxyMap({
                scene: this,
                x: x * GALAXY.sectorSize + 8,
                y: y * GALAXY.sectorSize + 8,
            });
            }
        }
        this._sprite = this.matter.add.sprite(0, 0, 'foobar', undefined);

        // TODO: When to unsubscribe?
        fromEvent(document, 'keydown').pipe(
            map((key: any) => this._galaxyController.handleKeyPress(key.keyCode, this._sprite.x, this._sprite.y))
        ).subscribe(newPosition => {
            const { xCoord, yCoord } = newPosition;
            this._sprite.setPosition(xCoord, yCoord);
        })
        

    }
  
    update(time: any, delta: any): void {

      this.cameras.main.centerOn(this._sprite.x, this._sprite.y);

    }
}