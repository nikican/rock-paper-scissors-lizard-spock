import { Gesture } from './gesture';
import { GameStrategy } from './game-strategy';

export class RandomStrategy implements GameStrategy {
    constructor(private gestures: Array<Gesture>) {
    }

    // return random gesture from the list
    choseGesture(): Gesture {
        return this.gestures[Math.floor(Math.random() * this.gestures.length)];
    }
}
