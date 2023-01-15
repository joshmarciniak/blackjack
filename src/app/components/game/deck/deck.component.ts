import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './deck.component.html'
})

export class DeckComponent {
  enum Card {
    ACE,
    ONE,
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
    TEN,
    JACK,
    QUEEN,
    KING
  }
}
