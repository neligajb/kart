import { Component, Input} from "@angular/core";
import { Player} from "./player";

@Component({
  selector: 'player-detail',
  template: `
    <div *ngIf="player">
      <h2>{{player.humanPlayer}}'s Details</h2>
      <p>Rank: #{{player.rank}}</p>
      <p>Character: {{player.character}}</p>
      <div class="avatar">
        <img src="{{player.image}}">
      </div>
      <h3>Edit Player Info:</h3>
      <div>
        <label>Name: </label>
        <input [(ngModel)]="player.humanPlayer">
      </div>
      <div>
        <label>Character: </label>
        <input [(ngModel)]="player.character">
      </div>
    </div>
  `,
  styles: [`
    .avatar img {
      width: 30%;
    }
  `]
})

export class PlayerDetailComponent {
  @Input() player: Player;
}
