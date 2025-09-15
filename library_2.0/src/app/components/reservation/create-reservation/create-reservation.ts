import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';

// Services
import { Reservation } from '../../../services/reservation';
import { Copy } from '../../../services/copy';
import { Loan } from '../../../services/loan';
import { Student } from '../../../services/student';

// Models
import { LoanI } from '../../../models/loan';
import { CopyI } from '../../../models/copy';
import { StudentI } from '../../../models/student';
import { ReservationI } from '../../../models/reservation';

@Component({
  selector: 'app-create-reservation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, MultiSelectModule, SelectModule, InputTextModule],
  templateUrl: './create-reservation.html',
  styleUrl: './create-reservation.css'
})
export class CreateReservation {
  form;
  loans: LoanI[] = [];
  copies: CopyI[] = [];
  students: (StudentI & { fullName: string })[] = [];

  constructor(
    private fb: FormBuilder,
    private reservationService: Reservation,
    private loanService: Loan,
    private copyService: Copy,
    private studentService: Student,
    private router: Router
  ) {
    // Inicializamos el formulario
    this.form = this.fb.group({
      loanId: [null, Validators.required],
      studentId: [null, Validators.required],
      copyIds: [[], Validators.required],
      reservedDate: [new Date().toISOString().split('T')[0], Validators.required],
      expirationDate: [null],
      notes: [''],
      status: ['active', Validators.required]
    });

    // Cargamos datos
    const allStudents = this.studentService.getStudents();
    this.students = allStudents.map(s => ({ ...s, fullName: `${s.firstName} ${s.lastName}` }));

    this.loans = this.loanService.getLoans().filter(l => l.status === 'active');
    this.copies = this.copyService.getCopy().filter(c => c.availability === 'available');
  }

  submit() {
    if (!this.form.valid) return;

    const raw = this.form.value;
    const selectedCopies: number[] = raw.copyIds ?? [];
    if (!selectedCopies.length) {
      alert('Debe seleccionar al menos un ejemplar.');
      return;
    }

    const reservation: ReservationI = {
      
      loanId: raw.loanId!,
      studentId: raw.studentId!,
      copyIds: selectedCopies,
      reservedDate: raw.reservedDate ? new Date(raw.reservedDate) : new Date(),
      expirationDate: raw.expirationDate ? new Date(raw.expirationDate) : undefined,
      notes: raw.notes ?? '',
      status: raw.status as 'active' | 'completed' | 'cancelled',
    };

    this.reservationService.addReservation(reservation);
    this.router.navigate(['/reservation']);
  }

  cancelar() {
    this.router.navigate(['/reservation']);
  }
}
