import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameComponent } from './game.component';
import { GameSetupComponent } from './game-setup.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GameComponent, GameSetupComponent],
  imports: [CommonModule,ReactiveFormsModule],
  exports: [GameComponent, GameSetupComponent]
})
export class GameModule { }
