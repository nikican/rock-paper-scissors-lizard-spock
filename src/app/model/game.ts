import { Player } from './player';
import { GameType } from './game-type.enum';
import { Gesture } from './gesture';

export class Game {
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

    constructor(gameType: GameType, player1: Player, player2: Player, gestures: Array<Gesture>) {
        this.gameType = gameType;
        this.player1 = player1;
        this.player2 = player2;
        this.gestures = gestures;
    }
}
