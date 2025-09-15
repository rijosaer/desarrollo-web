import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';

import { LoanDetail } from '../../../services/loan-detail';
import { CopyI } from '../../../models/copy';
import { Copy } from '../../../services/copy';
import { Loan } from '../../../services/loan';
import { LoanI } from '../../../models/loan';
import { Student } from '../../../services/student';
import { StudentI } from '../../../models/student';

@Component({
  selector: 'app-create-loan-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, SelectModule, InputTextModule, MultiSelectModule],
  templateUrl: './create-loan-detail.html',
  styleUrl: './create-loan-detail.css'
})
export class CreateLoanDetail {
  form;
  loans: LoanI[] = [];
  copies: CopyI[] = [];

  constructor(
    private fb: FormBuilder,
    private loanDetailService: LoanDetail,
    private loanService: Loan,
    private copyService: Copy,
    private studentService: Student,
    private router: Router
  ) {
    // Inicializamos el formulario
    this.form = this.fb.group({
      loanId: [null, Validators.required],
      copyIds: [[], Validators.required],
      notes: [''],
      status: ['active', Validators.required]
    });

    // Obtenemos los estudiantes
    const students: StudentI[] = this.studentService.getStudents();

    // Cargamos préstamos activos y agregamos studentName
    this.loans = this.loanService.getLoans()
      .filter(l => l.status === 'active')
      .map(loan => {
        const student = students.find(s => s.id === loan.studentId);
        return {
          ...loan,
          studentName: student ? `${student.firstName} ${student.lastName}` : 'Desconocido'
        };
      });


    // Cargamos copias disponibles
    this.copies = this.copyService.getCopy().filter(c => c.availability === 'available');
  }

  submit() {
    if (this.form.valid) {
      const raw = this.form.value;
      const selectedCopies: number[] = raw.copyIds ?? [];

      if (selectedCopies.length === 0) {
        alert('Debe seleccionar al menos un ejemplar.');
        return;
      }

      // Guardamos un solo LoanDetail con todos los ejemplares seleccionados
      this.loanDetailService.addLoanDetail({
        loanId: raw.loanId ?? 0,
        copyId: selectedCopies, // array de IDs
        notes: raw.notes ?? '',
        status: raw.status as 'active' | 'inactive'
      });

      // Opcional: marcar las copias como prestadas
      // selectedCopies.forEach(id => this.copyService.markAsLoaned(id));

      this.router.navigate(['/loan-detail']);
    }
  }

  cancelar() {
    this.router.navigate(['/loan']);
  }
}
