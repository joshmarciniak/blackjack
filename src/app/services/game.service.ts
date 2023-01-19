import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { Deck } from '../models/cards.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public gameStarted$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public tableDeck$: Subject<Deck> = new ReplaySubject();
}
