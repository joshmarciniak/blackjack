import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { Deck } from 'src/app/models/cards.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html'
})

export class GameComponent implements OnInit {
  tableDeck$: Subject<Deck>;

  constructor(
    private fb: FormBuilder,
    public gameService: GameService
  ) { }

  ngOnInit(): void {
    this.tableDeck$ = this.gameService.tableDeck$;
  }
}
