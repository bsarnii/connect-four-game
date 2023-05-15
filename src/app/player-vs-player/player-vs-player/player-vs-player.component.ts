import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-vs-player',
  templateUrl: './player-vs-player.component.html',
  styleUrls: ['./player-vs-player.component.scss']
})
export class PlayerVsPlayerComponent implements OnInit {

  ngOnInit(){
    if (window.location.pathname === "/"){
      document.body.setAttribute("style","background-color: var(--dark-purple)");
    } else {
      document.body.setAttribute("style","background-color: var(--purple)");
    }
  }
}
