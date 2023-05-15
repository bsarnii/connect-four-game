import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {

  ngOnInit(){
    if (window.location.pathname === "/"){
      document.body.setAttribute("style","background-color: var(--dark-purple)");
    } else {
      document.body.setAttribute("style","background-color: var(--purple)");
    }
  }
}
