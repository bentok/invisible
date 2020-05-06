import { VelocityDirection, Velocity, ISpriteConfig } from './../interfaces/interfaces';
import { BehaviorSubject, Observable, ObjectUnsubscribedError } from 'rxjs';
export class PlayerState {
    
    velocity$: Observable<Velocity>;
    private _velocity$ = new BehaviorSubject<Velocity>({ velocity: 0, direction: VelocityDirection.NOT_SET });
    private _activeLasers$ = new BehaviorSubject<ISpriteConfig[]>([]);

    constructor() {
        
     }

    getCurrentVelocity(): Velocity {
        return this._velocity$.getValue();
    }

    updateVelocity(updatedVelocity: Velocity): void {
        this._velocity$.next(updatedVelocity);
    }

    getAllActiveLasers(): ISpriteConfig[] {
        return this._activeLasers$.getValue();
    }

    addActiveLaser(x: number, y: number): void {
        
        const newLaser: ISpriteConfig = {
            name: Math.random().toString(),
            x,
            y
        };
        this._activeLasers$.next([...this.getAllActiveLasers(), newLaser]);
    }

    removeLaser(name: string): void {
        let allLasers = this._activeLasers$.getValue();
        this._activeLasers$.next(allLasers.filter(laser => laser.name !== name));
    }


}