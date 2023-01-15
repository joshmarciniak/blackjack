export enum CardTypes {
  ACE = "Ace",
  TWO = "Two",
  THREE = "Three",
  FOUR = "Four",
  FIVE = "Five",
  SIX = "Six",
  SEVEN = "Seven",
  EIGHT = "Eight",
  NINE = "Nine",
  TEN = "Ten",
  JACK = "Jack",
  QUEEN = "Queen",
  KING = "King"
}

export enum Suits {
  HEARTS = "Hearts",
  SPADES = "Spades",
  DIAMONDS = "Diamonds",
  CLUBS = "Clubs"
}

export class Card {
  type?: string;
  suit?: string;

  constructor(type: string, suit: string ) {
    this.type = type;
    this.suit = suit;
  }
}

export class Deck {
  cards?: Card[]; 

  constructor(cards: Card[]) {
    this.cards = cards;
  }
}

export class Hand {
  cards?: Card[];

  constructor(cards: Card[]) {
    this.cards = cards;
  }
}
