import { Component, OnInit, ViewChild } from '@angular/core';
import { BoardComponent } from '../board/board.component';

@Component({
  selector: 'app-player-vs-player',
  templateUrl: './player-vs-player.component.html',
  styleUrls: ['./player-vs-player.component.scss']
})
export class PlayerVsPlayerComponent implements OnInit {
@ViewChild(BoardComponent) boardComponent!:BoardComponent
  restart(){
    this.boardComponent.restart()
  }

  scoreRed = 0;
  scoreYellow = 0;

  getScore(score:any){
    this.scoreRed = score.red;
    this.scoreYellow = score.yellow;
  }

  ngOnInit(){
    if (window.location.pathname === "/"){
      document.body.setAttribute("style","background-color: var(--dark-purple)");
    } else {
      document.body.setAttribute("style","background-color: var(--purple)");
    }
  }
}
