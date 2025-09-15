import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { LoanI } from '../../../models/loan';
import { Loan } from '../../../services/loan';
@Component({
  selector: 'app-show-loan',
  imports: [CommonModule, RouterModule, TableModule, ButtonModule],
  templateUrl: './show-loan.html',
  styleUrl: './show-loan.css'
})
export class ShowLoan {
  loans: LoanI[] = [];

  constructor(private loanService: Loan) {
    this.loanService.loans$.subscribe(data => {
      this.loans = data;
    });
  }
}
