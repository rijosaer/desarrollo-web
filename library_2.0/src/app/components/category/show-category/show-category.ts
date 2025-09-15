import { Component } from '@angular/core';
import { CategoryI } from '../../../models/category';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { Category } from '../../../services/category';
@Component({
  selector: 'app-show-category',
  imports: [TableModule, CommonModule, ButtonModule, RouterModule],
  templateUrl: './show-category.html',
  styleUrl: './show-category.css'
})
export class ShowCategory {
  category: CategoryI[] = [];

  constructor(private categoryService: Category) {
    this.categoryService.category$.subscribe(data => {
      this.category = data;
    });
  }
}
