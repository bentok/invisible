import { PlayerState } from './../../services/player-state.service';
import { IControlEventHandler, IKeyEvents, VelocityDirection } from "../../interfaces/interfaces";

export class PlayerController implements IControlEventHandler {

    gameKey: string = 'Game';
    keyEvents: IKeyEvents[] = [];

    private _playerState = new PlayerState();

    constructor() {
     }

    init(): void {
        this.keyEvents = this.createKeyMappings();

    }

    handleKeyPress(key: number):{ velocity: number, direction: VelocityDirection } | null{
        const keyFound = this.keyEvents.find(keyEvent => keyEvent.key === key);
        const updatedVelocity = keyFound?.updateVelocity() ?? null;
        return updatedVelocity;
    }

    private createKeyMappings(): IKeyEvents[] {
        
        const KEY_MAPPINGS: IKeyEvents[] = [
            {
                key: Phaser.Input.Keyboard.KeyCodes.LEFT,
                updateVelocity: () => {
                    this._playerState.updateVelocity({ velocity: -5, direction: VelocityDirection.X });
                    return this._playerState.getCurrentVelocity();
                    
                }
            },
            {
                key: Phaser.Input.Keyboard.KeyCodes.RIGHT,
                updateVelocity: () => {
                    this._playerState.updateVelocity({ velocity: 5, direction: VelocityDirection.X });
                    return this._playerState.getCurrentVelocity();
                }
            },
            {
                key: Phaser.Input.Keyboard.KeyCodes.DOWN,
                updateVelocity: () => {
                    this._playerState.updateVelocity({ velocity: 5, direction: VelocityDirection.Y });
                    return this._playerState.getCurrentVelocity();
                }
            },
            {
                key: Phaser.Input.Keyboard.KeyCodes.UP,
                updateVelocity: () => {
                    this._playerState.updateVelocity({ velocity: -5, direction: VelocityDirection.Y });
                    return this._playerState.getCurrentVelocity();
                }
            }
        ]
        return KEY_MAPPINGS;
    }

}