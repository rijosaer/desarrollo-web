import { Injectable } from '@angular/core';
import { AuthorI } from '../models/author';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class Author {
  private authorService = new BehaviorSubject<AuthorI[]>([]);
  author$ = this.authorService.asObservable();

  getAuthor() {
    return this.authorService.value;
  }
  
  addAuthor(author: AuthorI) {
    const currentValue = this.authorService.value;
    author.id = currentValue.length ? Math.max(...currentValue.map(aut => aut.id ?? 0)) + 1 : 1;
    this.authorService.next([...currentValue, author]);
  }
  
}





