import { Component, Input, OnInit } from '@angular/core';

import { Gesture, Player } from '../../model';

@Component({
  selector: 'rps-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input()
  player: Player;

  @Input()
  gesture: Gesture;

  constructor() { }

  ngOnInit() {
  }

}
