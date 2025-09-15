import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Category } from '../../../services/category';

@Component({
  selector: 'app-create-category',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, ButtonModule],
  templateUrl: './create-category.html',
  styleUrl: './create-category.css'
})
export class CreateCategory {
  form;
  constructor(
    private fb: FormBuilder,
    private categoryService: Category,
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
      this.categoryService.addCategory({
        name: value.name ?? '',
        status: value.status === 'active' || value.status === 'inactive' ? value.status : 'active'
     });
      this.router.navigate(['/category']);
    }
  }

  cancelar() {
    this.router.navigate(['/category']);
  }
}
