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
  winner = "";
  menuOpened = false;

  getScore(score:any){
    this.scoreRed = score.red;
    this.scoreYellow = score.yellow;
  }
  getWinner(winner:string){
    this.winner = winner;
  }
  toggleMenu(){
    this.menuOpened = !this.menuOpened;
    if (this.menuOpened){
      clearInterval(this.boardComponent.interval);
    } else{
      this.boardComponent.interval = setInterval(() => {
        if (this.boardComponent.timer <= 0) {
          this.boardComponent.turn = this.boardComponent.turn === "red" ? "yellow" : "red";
          this.boardComponent.timer = 60
        }
        this.boardComponent.timer--; 
        }, 1000);
    }
  }
  ngOnInit(){
    if (window.location.pathname === "/"){
      document.body.setAttribute("style","background-color: var(--dark-purple)");
    } else {
      document.body.setAttribute("style","background-color: var(--purple)");
    }
  }
}
