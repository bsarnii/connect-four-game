import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  ngOnInit(){
    if (window.location.pathname === "/"){
      document.body.setAttribute("style","background-color: var(--dark-purple)");
    } else {
      document.body.setAttribute("style","background-color: var(--purple)");
    }
  }
}
