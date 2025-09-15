import { Injectable } from '@angular/core';
import { LoanI } from '../models/loan';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class Loan {
  private loanService = new BehaviorSubject<LoanI[]>([]);
  loans$ = this.loanService.asObservable();
  
  getLoans() {
    return this.loanService.value;
  }
  addLoan(loan: LoanI) {
    const currentValue = this.loanService.value;
    loan.id = currentValue.length ? Math.max(...currentValue.map(ln => ln.id ?? 0)) + 1 : 1;
    this.loanService.next([...currentValue, loan]);
  } 
  
}
