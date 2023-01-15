import { Component } from '@angular/core';
import { CardTypes, Deck } from '../../models/cards.model';
import { CardsService } from '../../services/cards.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html'
})

export class GameComponent {

  constructor(
    private cardsService: CardsService
  ) { }

  gameStart: boolean = false;

  onStartGame() {
    this.gameStart = true;
  
    let deck: Deck = this.cardsService.createDeck(1);

    deck = this.cardsService.shuffleDeck(deck);

  }
}
