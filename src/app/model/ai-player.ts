import { GameStrategy, Player } from './';

export class AIPlayer extends Player {
    __name__ = AIPlayer.name;

    constructor(strategy?: GameStrategy) {
        super('AI', strategy);
    }

    choseGesture() {
        this._gesture = this.strategy.choseGesture();
    }

    deserialize(input): AIPlayer {
        return super.deserialize(input);
    }
}
