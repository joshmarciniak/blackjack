import { Injectable } from '@angular/core';
import { Suits, Deck, Card, CardTypes } from '../models/cards.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  cardsValueMap = new Map<string, number>([
    [CardTypes.TWO, 2],
    [CardTypes.THREE, 3],
    [CardTypes.FOUR, 4],
    [CardTypes.FIVE, 5],
    [CardTypes.SIX, 6],
    [CardTypes.SEVEN, 7],
    [CardTypes.EIGHT, 8],
    [CardTypes.NINE, 9],
    [CardTypes.TEN, 10],
    [CardTypes.JACK, 10],
    [CardTypes.QUEEN, 10],
    [CardTypes.KING, 10]
  ]);

  createDeck(numOfDecks: number): Deck {
    let cards: Card[] = [];
    let deck: Deck = new Deck(cards);
    for (let i = 0; i < numOfDecks; i++) {
      for (const card of Object.values(CardTypes)) {
        if (!isNaN(Number(card))) {
          continue;
        }
        for (let suit of Object.values(Suits)) {
          if (!isNaN(Number(suit))) {
            continue;
          }
          let newCard = new Card(card, suit);
          deck.cards?.push(newCard);
        }
      }
    }
  
    return deck;
  }

  shuffleDeck(deck: Deck): Deck {
    let shuffledCards: Card[] = deck?.cards!;
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let temp = shuffledCards[i];
      shuffledCards[i] = shuffledCards[j];
      shuffledCards[j] = temp;
    }
    deck.cards = shuffledCards;
    return deck;
  }

  getCardValue(cardType: string): number {
    return this.cardsValueMap.get(cardType)!;
  }
}
