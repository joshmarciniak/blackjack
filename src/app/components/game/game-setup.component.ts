import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';
import { Deck } from '../../models/cards.model';
import { CardsService } from '../../services/cards.service';


@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html'
})

export class GameSetupComponent {

  constructor(
    private gameService: GameService,
    private cardsService: CardsService,
    private fb: FormBuilder
  ) { }

  gameSetupForm = this.fb.group({
    decks: ['', Validators.required]
  });

  onStartGame() {
    if (this.gameSetupForm.valid) {
      this.gameService.gameStarted$.next(true);
      
      let deck: Deck = this.cardsService.createDeck(parseInt(this.gameSetupForm.controls.decks.value));
      console.log(deck);
      this.gameService.tableDeck$.next(this.cardsService.shuffleDeck(deck));

    }
  }
}
