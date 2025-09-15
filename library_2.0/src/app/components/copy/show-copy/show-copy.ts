import { Component } from '@angular/core';
import { CopyI } from '../../../models/copy';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { Copy } from '../../../services/copy';

@Component({
  selector: 'app-show-copy',
  imports: [TableModule, CommonModule, ButtonModule, RouterModule],
  templateUrl: './show-copy.html',
  styleUrl: './show-copy.css'
})
export class ShowCopy {
  copy: CopyI[] = [
    {
      id: 1,
      bookId: 1,
      code: 'C001',
      status: 'active',
      quantity: 5,
      availability: 'available'
    }
  ];

  constructor(private copyService: Copy) {
    this.copyService.copy$.subscribe(data => {
      this.copy = data;
    });
  } 

}
