import { Injectable } from '@angular/core';
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
    for (let card of currHand?.cards!) {
      if (card.type === CardTypes.ACE) {
        

      } else {
        handTotal += this.cardsService.getCardValue(card.type!);
      }
    }
    return handTotal;
  }
}
