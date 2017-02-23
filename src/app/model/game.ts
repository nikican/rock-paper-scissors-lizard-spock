import { Serializable, Player, GameType, Gesture } from './';
import * as model from './';

export class Game implements Serializable<Game> {
    __name__ = Game.name;

    gestures: Array<Gesture>;
    gameType: GameType;
    player1: Player;
    player2: Player;
    chosenGesture1;
    chosenGesture2;
    player1Score: number = 0;
    player2Score: number = 0;
    roundResultMessage: string = '';

    defaultRoundResultMessage: string = 'Play!';

    constructor(gameType?: GameType, player1?: Player, player2?: Player, gestures?: Array<Gesture>) {
        this.gameType = gameType;
        this.player1 = player1;
        this.player2 = player2;
        this.gestures = gestures;

        this.roundResultMessage = this.defaultRoundResultMessage;
    }

    deserialize(input): Game {
        const gestures: Array<Gesture> = new Array<Gesture>();

        for (let gesture of input.gestures) {
            gestures.push(new Gesture().deserialize(gesture));
        }

        this.gestures = gestures;

        this.gameType = input.gameType;

        // create object as class' instance from class' name (and call object's deserialize method)
        // https://plnkr.co/edit/B3kT529ONBvhJu5yuW6W?p=preview
        this.player1 = new model[input.player1.__name__]().deserialize(input.player1);
        this.player2 = new model[input.player2.__name__]().deserialize(input.player2);
        this.chosenGesture1 = input.chosenGesture1 != null ? new Gesture().deserialize(input.chosenGesture1) : undefined;
        this.chosenGesture2 = input.chosenGesture2 != null ? new Gesture().deserialize(input.chosenGesture2) : undefined;
        this.player1Score = input.player1Score;
        this.player2Score = input.player2Score;
        this.roundResultMessage = input.roundResultMessage;

        return this;
    }
}
