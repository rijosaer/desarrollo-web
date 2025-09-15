import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Editorial } from '../../../services/editorial';

@Component({
  selector: 'app-create-editorial',
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, ButtonModule],
  templateUrl: './create-editorial.html',
  styleUrl: './create-editorial.css'
})
export class CreateEditorial {
  form;
  constructor(
    private fb: FormBuilder,
    private editorialService: Editorial,
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
      this.editorialService.addEditorial({
        name: value.name ?? '',
        status: value.status === 'active' || value.status === 'inactive' ? value.status : 'active'
     });
      this.router.navigate(['/editorial']);
    }
  }

  cancelar() {
    this.router.navigate(['/editorial']);
  }
}
