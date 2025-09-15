import { Injectable } from '@angular/core';
import { BookI } from '../models/book';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class Book {
  private bookService = new BehaviorSubject<BookI[]>([]);
  book$ = this.bookService.asObservable();

  getBook() {
    return this.bookService.value;
  }
  
  addBook(book: BookI) {
    const currentValue = this.bookService.value;
    book.id = currentValue.length ? Math.max(...currentValue.map(bk => bk.id ?? 0)) + 1 : 1;
    this.bookService.next([...currentValue, book]);
  }
}
