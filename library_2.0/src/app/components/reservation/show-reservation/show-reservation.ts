import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Reservation } from '../../../services/reservation';
import { Copy } from '../../../services/copy';
import { Student } from '../../../services/student';
import { ReservationI } from '../../../models/reservation';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-show-reservation',
  imports: [CommonModule, TableModule, RouterModule, ButtonModule],
  templateUrl: './show-reservation.html',
  styleUrl: './show-reservation.css'
})
export class ShowReservation {
  reservations: (ReservationI & {
    studentName: string;
    copyCodes: string[];
  })[] = [];

  constructor(
    private reservationService: Reservation,
    private studentService: Student,
    private copyService: Copy
  ) {
    const students = this.studentService.getStudents();
    const copies = this.copyService.getCopy();

    this.reservations = this.reservationService.getReservations().map(r => ({
      ...r,
      studentName: (
        (students.find(s => s.id === r.studentId)?.firstName ?? '') + ' ' +
        (students.find(s => s.id === r.studentId)?.lastName ?? '')
      ) || 'Desconocido',

      copyCodes: r.copyIds.map(id => copies.find(c => c.id === id)?.code ?? 'Desconocido')
    }));
  }
}
