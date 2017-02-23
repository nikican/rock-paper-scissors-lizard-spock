import { LocalStorageService } from './local-storage-service/local-storage.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { AIPlayer, Game, GameType, Gesture, GestureType, HumanPlayer, RandomStrategy } from './model';

@Injectable()
export class AppService {

  private playGameSource = new Subject<GameType>();

  playGame$ = this.playGameSource.asObservable();

  humanVsAIgame: Game;
  AIvsAIgame: Game;

  gestures: Array<Gesture> = [
    new Gesture(GestureType.ROCK, 'fa fa-hand-rock-o'),
    new Gesture(GestureType.PAPER, 'fa fa-hand-paper-o'),
    new Gesture(GestureType.SCISSORS, 'fa fa-hand-scissors-o'),
    new Gesture(GestureType.LIZARD, 'fa fa-hand-lizard-o'),
    new Gesture(GestureType.SPOCK, 'fa fa-hand-spock-o')
  ];

  constructor(private localStorageService: LocalStorageService) {

  }

  initialize() {
    this.openActiveGame();

    this.initHumanVSAIgame();
    this.initAIvsAIgame();
  }

  openActiveGame() {
    const activeGame: GameType = this.localStorageService.loadActiveGame();

    if (activeGame !== null) {
      if (activeGame === GameType.AI_VS_AI) {
        this.playAIvsAIgame();
      } else if (activeGame === GameType.HUMAN_VS_AI) {
        this.playHumanVSAIgame();
      }
    } else {
      this.playHumanVSAIgame();
    }
  }

  initHumanVSAIgame(): void {
    const humanVsAIgame = this.localStorageService.loadGame(GameType.HUMAN_VS_AI);

    if (humanVsAIgame !== null) {
      this.humanVsAIgame = humanVsAIgame;
    }

    else {
      this.createHumanVsAIgame();
    }
  }

  createHumanVsAIgame() {
    this.humanVsAIgame = new Game(GameType.HUMAN_VS_AI,
      new HumanPlayer(),
      new AIPlayer(new RandomStrategy(this.gestures)),
      this.gestures
    );

    this.localStorageService.saveGame(GameType.HUMAN_VS_AI, this.humanVsAIgame);
  }

  initAIvsAIgame(): void {
    const AIvsAIgame = this.localStorageService.loadGame(GameType.AI_VS_AI);

    if (AIvsAIgame !== null) {
      this.AIvsAIgame = AIvsAIgame;
    }

    else {
      this.createAIvsAIgame();
    }
  }

  createAIvsAIgame() {
    this.AIvsAIgame = new Game(GameType.AI_VS_AI,
      new AIPlayer(new RandomStrategy(this.gestures)),
      new AIPlayer(new RandomStrategy(this.gestures)),
      this.gestures
    );

    this.localStorageService.saveGame(GameType.AI_VS_AI, this.AIvsAIgame);
  }

  playHumanVSAIgame() {
    this.playGameSource.next(GameType.HUMAN_VS_AI);

    this.localStorageService.saveActiveGame(GameType.HUMAN_VS_AI);
  }

  playAIvsAIgame() {
    this.playGameSource.next(GameType.AI_VS_AI);

    this.localStorageService.saveActiveGame(GameType.AI_VS_AI);
  }
}
