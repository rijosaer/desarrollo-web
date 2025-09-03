import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { AuthorI } from '../../../models/author';
import { ButtonModule } from 'primeng/button';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-show-author',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule, RouterModule],
  templateUrl: './show-author.html',
  styleUrl: './show-author.css'
})
export class ShowAuthor  {
 author: AuthorI[] = [
  {
    id: 1,
    name: "Ricardo Boyaca",
    status: 'active',
  },
  {
    id: 2,
    name: "Johan Boyaca",
    status: 'active',
  }
 ];
 
}
