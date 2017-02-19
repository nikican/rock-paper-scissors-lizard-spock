import { GameStrategy } from './game-strategy';
import { GestureType } from './gesture-type';
import { Gesture } from './gesture';
import { Player } from './player';

export class AIPlayer extends Player {
    private _gesture: Gesture;

    constructor(public strategy: GameStrategy) {
        super('AI', strategy);
    }

    get gesture(): Gesture {
        return this._gesture;
    }

    choseGesture() {
        this._gesture = this.strategy.choseGesture();
    }
}
