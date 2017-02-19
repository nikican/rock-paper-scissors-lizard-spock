import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

import { Game, GameType } from './model';

@Component({
  selector: 'rps-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  game1: Game;
  game2: Game;

  humanVsAI: boolean = true;

  // enable use of enum in template
  gameType = GameType;

  playGame: GameType;

  constructor(public appService: AppService) { }

  ngOnInit() {
    this.appService.initialize();

    this.game1 = this.appService.humanVsAIgame;
    this.game2 = this.appService.AIvsAIgame;

    // listen for changes of 'playGame' propery of service
    this.appService.playGame$.subscribe(
      playGame => {
        this.playGame = playGame;
      });

    this.playHumanVSAIgame();
  }

  isHumanVSAI(): boolean {
    return this.humanVsAI;
  }

  playHumanVSAIgame() {
    this.appService.playHumanVSAIgame();
  }

  playAIvsAIgame() {
    this.appService.playAIvsAIgame();
  }
}
