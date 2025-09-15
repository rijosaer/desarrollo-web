import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';

import { Loan } from '../../../services/loan';
import { Student } from '../../../services/student';
import { StudentI } from '../../../models/student';


@Component({
  selector: 'app-create-loan',
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, SelectModule, DatePickerModule],
  templateUrl: './create-loan.html',
  styleUrl: './create-loan.css'
})
export class CreateLoan {
  form;
  students: StudentI[] = [];

  constructor(
    private fb: FormBuilder,
    private loanService: Loan,
    private studentService: Student,
    private router: Router
  ) {
    this.form = this.fb.group({
      studentId: [null, Validators.required],
      loanDate: [new Date(), Validators.required],
      dueDate: [null, Validators.required],
      status: ['active', Validators.required],
      state: ['open', Validators.required]
    });

    this.students = this.studentService.getStudents();
  }

  submit() {
     if (this.form.valid) {
      const raw = this.form.value;
      this.loanService.addLoan({
        studentId: raw.studentId ?? 0,
        loanDate: raw.loanDate ?? new Date(),
        dueDate: raw.dueDate ?? new Date(),
        status: raw.status  === 'active' || raw.status === 'inactive' ? raw.status : 'active',
        state: raw.state === 'open' || raw.state === 'returned' || raw.state === 'overdue' || raw.state === 'lost' ? raw.state : 'open'
      });

      
     this.router.navigate(['/loan-detail/create']);
    }
  }

  cancelar() {
    this.router.navigate(['/loan']);
  } 
}
