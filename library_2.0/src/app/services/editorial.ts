import { Injectable } from '@angular/core';
import { EditorialI } from '../models/editorial';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class Editorial {
  private editorialService = new BehaviorSubject<EditorialI[]>([]);
  editorial$ = this.editorialService.asObservable();

  getEditorial() {
    return this.editorialService.value;
  }
  
  addEditorial(editorial: EditorialI) {
    const currentValue = this.editorialService.value;
    editorial.id = currentValue.length ? Math.max(...currentValue.map(ed => ed.id ?? 0)) + 1 : 1;
    this.editorialService.next([...currentValue, editorial]);
  } 
  
}
