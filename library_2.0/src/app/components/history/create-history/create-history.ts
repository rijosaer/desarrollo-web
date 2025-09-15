import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';

// Servicios y modelos
import { History } from '../../../services/history';
import { HistoryI } from '../../../models/history';
import { Loan } from '../../../services/loan';
import { LoanI } from '../../../models/loan';


@Component({
  selector: 'app-create-history',
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, ButtonModule, SelectModule, DatePickerModule],
  templateUrl: './create-history.html',
  styleUrl: './create-history.css'
})
export class CreateHistory {
form: ReturnType<FormBuilder['group']>;
loans: LoanI[] = [];
events: { label: HistoryI['event'], value: HistoryI['event'] }[] = [
  { label: 'CREATED', value: 'CREATED' },
  { label: 'RENEWED', value: 'RENEWED' },
  { label: 'RETURNED', value: 'RETURNED' },
  { label: 'OVERDUE', value: 'OVERDUE' },
  { label: 'LOST', value: 'LOST' }
];
  constructor(
    private fb: FormBuilder,
    private historyService: History,
    private loanService: Loan,
    private router: Router
  ) {
    // Inicializamos el formulario
    this.form = this.fb.group({
      loanId: [null, Validators.required],
      event: [this.events[0].value as HistoryI['event'], Validators.required],
      date: [new Date(), Validators.required],
      details: [''],
      status: ['active', Validators.required]
    });

    // Cargamos préstamos
    this.loans = this.loanService.getLoans().filter(l => l.status === 'active');
  }

  submit() {
    if (!this.form.valid) return;

    const raw = this.form.value;

    const history: HistoryI = {
      loanId: raw.loanId ?? 0,
      event: (typeof raw.event === 'string' ? raw.event : raw.event?.value) as HistoryI['event'] ?? 'CREATED',
      date: raw.date ?? new Date(),
      details: raw.details ?? '',
      status: raw.status as 'active' | 'inactive'
    };

    this.historyService.addHistory(history);
    this.router.navigate(['/history']);
  }

  cancelar() {
    this.router.navigate(['/history']);
  }
}
