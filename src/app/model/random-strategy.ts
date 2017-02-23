import { GameStrategy, Gesture } from './';

export class RandomStrategy implements GameStrategy {
    __name__ = RandomStrategy.name;

    public gestures: Array<Gesture>;

    constructor(gestures?: Array<Gesture>) {
        this.gestures = gestures;
    }

    // return random gesture from the list
    choseGesture(): Gesture {
        return this.gestures[Math.floor(Math.random() * this.gestures.length)];
    }

    deserialize(input): RandomStrategy {
        const gestures: Array<Gesture> = new Array<Gesture>();

        for (let gesture of input.gestures) {
            gestures.push(new Gesture().deserialize(gesture));
        }

        this.gestures = gestures;

        return this;
    }
}

