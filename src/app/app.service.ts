import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { AIPlayer, Game, GameType, Gesture, GestureType, HumanPlayer, RandomStrategy } from './model';


@Injectable()
export class AppService {

  private playGameSource = new Subject<GameType>();

  playGame$ = this.playGameSource.asObservable();

  humanVsAIgame: Game;
  AIvsAIgame: Game;

  defaultRoundResultMessage: string = 'Play!';

  gestures: Array<Gesture> = [
    new Gesture(GestureType.ROCK, 'fa fa-hand-rock-o'),
    new Gesture(GestureType.PAPER, 'fa fa-hand-paper-o'),
    new Gesture(GestureType.SCISSORS, 'fa fa-hand-scissors-o'),
    new Gesture(GestureType.LIZARD, 'fa fa-hand-lizard-o'),
    new Gesture(GestureType.SPOCK, 'fa fa-hand-spock-o')
  ];

  constructor() { }

  initialize() {
    this.initHumanVSAIgame();
    this.initAIvsAIgame();

    this.playHumanVSAIgame();
  }

  initHumanVSAIgame(): void {
    this.humanVsAIgame = new Game(GameType.HUMAN_VS_AI,
      new HumanPlayer(),
      new AIPlayer(new RandomStrategy(this.gestures)),
      this.gestures
    );

    this.humanVsAIgame.roundResultMessage = this.defaultRoundResultMessage;
  }

  initAIvsAIgame(): void {
    this.AIvsAIgame = new Game(GameType.AI_VS_AI,
      new AIPlayer(new RandomStrategy(this.gestures)),
      new AIPlayer(new RandomStrategy(this.gestures)),
      this.gestures
    );

    this.AIvsAIgame.roundResultMessage = this.defaultRoundResultMessage;
  }

  playHumanVSAIgame() {
    this.playGameSource.next(GameType.HUMAN_VS_AI);
  }

  playAIvsAIgame() {
    this.playGameSource.next(GameType.AI_VS_AI);
  }
}
