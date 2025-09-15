import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { LoanDetail } from '../../../services/loan-detail';
import { LoanDetailI } from '../../../models/loanDetail';

@Component({
  selector: 'app-show-loan-detail',
  imports: [CommonModule, RouterModule, TableModule, ButtonModule],
  templateUrl: './show-loan-detail.html',
  styleUrl: './show-loan-detail.css'
})
export class ShowLoanDetail {
  loanDetails: LoanDetailI[] = [];
  
  constructor(private loanService: LoanDetail) {
    this.loanService.loanDetails$.subscribe(data => {
      this.loanDetails = data;
    });
  }
}
