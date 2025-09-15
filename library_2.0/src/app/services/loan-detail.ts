import { Injectable } from '@angular/core';
import { LoanDetailI } from '../models/loanDetail';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})

export class LoanDetail {
  private loanDetailService = new BehaviorSubject<LoanDetailI[]>([]);
  loanDetails$ = this.loanDetailService.asObservable();
  
  getLoanDetails() {
    return this.loanDetailService.value;
  }
  addLoanDetail(loanDetail: LoanDetailI) {
    const currentValue = this.loanDetailService.value;
    loanDetail.id = currentValue.length ? Math.max(...currentValue.map(ln => ln.id ?? 0)) + 1 : 1;
    this.loanDetailService.next([...currentValue, loanDetail]);
  }
}
