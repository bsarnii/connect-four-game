import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerVsPlayerComponent } from './player-vs-player/player-vs-player.component';
import { PlayerVsPlayerRoutingModule } from './player-vs-player-routing.module';
import { BoardComponent } from './board/board.component';
import { PauseMenuComponent } from './pause-menu/pause-menu.component'


@NgModule({
  declarations: [
    PlayerVsPlayerComponent,
    BoardComponent,
    PauseMenuComponent
  ],
  imports: [
    CommonModule,
    PlayerVsPlayerRoutingModule
  ]
})
export class PlayerVsPlayerModule { }
