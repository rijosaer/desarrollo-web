import { Injectable } from '@angular/core';
import { CopyI } from '../models/copy';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class Copy {
  private copyService = new BehaviorSubject<CopyI[]>([]);
  copy$ = this.copyService.asObservable();

  getCopy() {
    return this.copyService.value;
  }
  
  addCopy(copy: CopyI) {
    const currentValue = this.copyService.value;
    copy.id = currentValue.length ? Math.max(...currentValue.map(cp => cp.id ?? 0)) + 1 : 1;
    this.copyService.next([...currentValue, copy]);
  }
  
}
