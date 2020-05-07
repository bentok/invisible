import { PlayerState } from './../../services/player-state.service';
import { IControlEventHandler, IKeyEvents, VelocityDirection, PlayerAction } from "../../interfaces/interfaces";

export class PlayerController implements IControlEventHandler {

    gameKey: string = 'Game';
    keyEvents: IKeyEvents[] = [];

    private _playerState = new PlayerState();

    constructor() {
     }

    init(): void {
        this.keyEvents = this.createKeyMappings();

    }

    handleKeyPress(key: number): PlayerAction | null {
        const keyFound = this.keyEvents.find(keyEvent => keyEvent.key === key);
        return keyFound?.action ?? null;
    }

    private createKeyMappings(): IKeyEvents[] {
        
        const KEY_MAPPINGS: IKeyEvents[] = [
            {
                key: Phaser.Input.Keyboard.KeyCodes.SPACE,
                action: PlayerAction.FIRE_LASER
            }
        ]
        return KEY_MAPPINGS;
    }

}