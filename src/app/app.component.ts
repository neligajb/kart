import { Component, OnInit } from '@angular/core';

import { Player} from "./player";
import { PlayerService } from "./player.service";

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <div class="content-wrapper">
      <div class="big-board">
        <h2>Big Board</h2>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Player</th>
              <th>Character</th>
              <th>Average</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let player of rankings"
                [class.selected]="player === selectedPlayer"
                (click)="onSelect(player)">
              <td>{{player.rank}}</td>
              <td>{{player.humanPlayer}}</td>
              <td>{{player.character}}</td>
              <td>{{player.average}}</td>
              <td><img src="{{player.image}}"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <player-detail [player]="selectedPlayer"></player-detail>
    </div>`,
  styles: [`    
    h1 {
      text-align: center;
    }
    .content-wrapper {
      display: flex;
      justify-content: space-between;
      width: 95%;
      margin: 0 auto;
    }
    .big-board {
      width: 45%;
    }
    .big-board table {
      border: 2px solid green;
      border-collapse: collapse;
      border-radius: 5px;
      width: 100%;
    }
    .big-board img {
      width: 75px;
    }
    .big-board td {
      border-top: 2px solid green;
      border-bottom: 2px solid green;
      border-right: 1px solid green;
      border-left: 1px solid green;
      text-align: center;
    }
    .big-board tr.selected {
      background-color: yellowgreen;
    }
    player-detail {
      width: 45%;
    }
  `],
  providers: [PlayerService]
})

export class AppComponent implements OnInit {
  title = 's00per Merrio Kart';
  rankings: Player[];
  selectedPlayer: Player;

  constructor(private playerService: PlayerService) { }

  getPlayers(): void {
    this.playerService.getPlayers().then(players => this.rankings = players);
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }

  ngOnInit(): void {
    this.getPlayers();
  }
}
