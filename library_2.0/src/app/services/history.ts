import { Injectable } from '@angular/core';
import { HistoryI } from '../models/history';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class History {
  private histories: HistoryI[] = [];
  private histories$ = new BehaviorSubject<HistoryI[]>(this.histories);
  
  getHistories() {
    return this.histories;
  }
  
  addHistory(history: HistoryI) {
    history.id = this.histories.length ? Math.max(...this.histories.map(h => h.id ?? 0)) + 1 : 1;
    this.histories.push(history);
    this.histories$.next(this.histories);
  }
}
