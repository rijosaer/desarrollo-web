import { Component } from '@angular/core';
import { EditorialI } from '../../../models/editorial';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { Editorial } from '../../../services/editorial';
@Component({
  selector: 'app-show-editorial',
  imports: [CommonModule, TableModule, ButtonModule, RouterModule],
  templateUrl: './show-editorial.html',
  styleUrl: './show-editorial.css'
})
export class ShowEditorial {
  editorial: EditorialI[] = [];

  constructor(private editorialService: Editorial) {
    this.editorialService.editorial$.subscribe(data => {
      this.editorial = data;
    });
  }
}
