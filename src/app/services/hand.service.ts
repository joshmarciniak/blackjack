import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CardTypes, Hand } from '../models/cards.model';
import { CardsService } from './cards.service';


@Injectable({
  providedIn: 'root'
})
export class HandService {
  constructor(
    private cardsService: CardsService
  ) { }

  getHandTotal(currHand: Hand): number | number[] {
    let handTotal: number = 0;
    let secondaryHandTotal: number = 0;
    let currHandCardTypes: string[] = [];
    for (let card of currHand.cards!) {
      currHandCardTypes.push(card.type!);
    }

    if (currHandCardTypes.includes(CardTypes.ACE)) {
      for (let card of currHandCardTypes) {
        if (card === CardTypes.ACE) {
          handTotal += 10;
          secondaryHandTotal += 1;
        } else {
          let cardValue: number = this.cardsService.getCardValue(card);
          handTotal += cardValue;
          secondaryHandTotal += cardValue;
        }
      }

      if (currHandCardTypes.length > 2) {

      } else {
        if (handTotal === 21 || secondaryHandTotal === 21) {
          return 0;
        }
      }

    } else {
      for (let card of currHandCardTypes) {
        handTotal += this.cardsService.getCardValue(card);
      }
      return handTotal;
    }
    return 0;
  }

  checkBlackjack(hand: Hand): boolean {
    let handTotal = 0;
    let isBlackjack = false;
    if (hand.cards?.length === 2) {
      for (let card of hand.cards) {
        handTotal += this.cardsService.getCardValue(card.type!);
      }
      if (handTotal === 21) {
        isBlackjack = true;
      } 
    }
    return isBlackjack;
  }
}
