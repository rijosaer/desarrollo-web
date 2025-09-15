import { Component } from '@angular/core';
import { BookI } from '../../../models/book';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { Book } from '../../../services/book';
@Component({
  selector: 'app-show-book',
  imports: [TableModule, CommonModule, ButtonModule, RouterModule],
  templateUrl: './show-book.html',
  styleUrl: './show-book.css'
})
export class ShowBook {
  book: BookI[] = [];
  constructor(private bookService: Book) {
    this.bookService.book$.subscribe(data => {
      this.book = data;
    });
  }
}
