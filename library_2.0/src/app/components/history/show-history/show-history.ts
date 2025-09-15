import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';
import { History } from '../../../services/history';
import { HistoryI } from '../../../models/history';
@Component({
  selector: 'app-show-history',
  imports: [CommonModule, ButtonModule, TableModule, RouterModule, DatePipe],
  templateUrl: './show-history.html',
  styleUrl: './show-history.css'
})
export class ShowHistory {
  history: HistoryI[] = [
     
  ];
  constructor(private historyService: History) {
    this.historyService.histories$.subscribe(data => {
      this.history = data;
    });
  }
}
