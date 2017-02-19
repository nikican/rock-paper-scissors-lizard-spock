import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rps-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  @Input()
  player1Score: number;

  @Input()
  player2Score: number;

  @Input()
  roundResultMessage: string;

  constructor() { }

  ngOnInit() {
  }
}
