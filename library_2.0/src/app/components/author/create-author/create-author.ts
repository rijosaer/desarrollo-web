import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Author } from '../../../services/author';
@Component({
  selector: 'app-create-author',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, ButtonModule],
  templateUrl: './create-author.html',
  styleUrl: './create-author.css'
})
export class CreateAuthor {
  form;
  constructor(
    private fb: FormBuilder,
    private authorService: Author,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      status: ['active', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      const value = this.form.value;
      this.authorService.addAuthor({
        name: value.name ?? '',
        status: value.status === 'active' || value.status === 'inactive' ? value.status : 'active'
     });
      this.router.navigate(['/author']);
    }
  }
  
  cancelar() {
    this.router.navigate(['/author']);
  }
}



