import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';

import { HistoryI } from '../../../models/history';
@Component({
  selector: 'app-show-history',
  imports: [CommonModule, ButtonModule, TableModule, RouterModule, DatePipe],
  templateUrl: './show-history.html',
  styleUrl: './show-history.css'
})
export class ShowHistory {
  history: HistoryI[] = [
      {
    id: 1,
    loanId: 101,
    event: 'CREATED',
    date: new Date('2025-09-01T10:30:00'),
    details: 'Préstamo creado por el estudiante Juan Pérez',
    status: 'active'
  },
  {
    id: 2,
    loanId: 101,
    event: 'RENEWED',
    date: new Date('2025-09-10T09:15:00'),
    details: 'Préstamo renovado por 7 días adicionales',
    status: 'active'
  },
  {
    id: 3,
    loanId: 102,
    event: 'RETURNED',
    date: new Date('2025-09-12T14:45:00'),
    details: 'Libro devuelto en buenas condiciones',
    status: 'active'
  },
  {
    id: 4,
    loanId: 103,
    event: 'OVERDUE',
    date: new Date('2025-09-15T08:00:00'),
    details: 'El préstamo está vencido',
    status: 'active'
  }
  ];
}
