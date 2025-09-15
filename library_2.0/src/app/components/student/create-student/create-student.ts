import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Student } from '../../../services/student';

@Component({
  selector: 'app-create-student',
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, InputTextModule],
  templateUrl: './create-student.html',
  styleUrl: './create-student.css'
})
export class CreateStudent {
  form;
  constructor(
    private fb: FormBuilder,
    private studentService: Student,
    private router: Router
  ) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      status: ['active', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      const value = this.form.value;
      this.studentService.addStudent({
        firstName: value.firstName ?? '',
        lastName: value.lastName ?? '',
        email: value.email ?? '',
        status: value.status === 'active' || value.status === 'inactive' ? value.status : 'active'
     });
      this.router.navigate(['/student']);
    }
  }

  cancelar() {
    this.router.navigate(['/student']);
  }
}
