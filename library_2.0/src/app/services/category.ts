import { Injectable } from '@angular/core';
import { CategoryI } from '../models/category';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class Category {
  private categoryService = new BehaviorSubject<CategoryI[]>([]);
  category$ = this.categoryService.asObservable();

  getCategory() {
    return this.categoryService.value;
  }

  addCategory(category: CategoryI) {
    const currentValue = this.categoryService.value;
    category.id = currentValue.length ? Math.max(...currentValue.map(cat => cat.id ?? 0)) + 1 : 1;
    this.categoryService.next([...currentValue, category]);
  }
}
