import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { StudentI } from '../../../models/Estudiante';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-est-getall',
    imports: [TableModule, CommonModule, RouterModule],
  
  templateUrl: './est-getall.html',
  styleUrl: './est-getall.css'
})
export class EstGetall {
estudiante: StudentI[] = [
    {
      id: 1,
      firstName: "Ricardo",
      lastName: "Boyacá",
      documentId: "123456789",
      email: "ricardo@example.com",
      phone: "3001234567",
      grade: "10A",
      status: "ACTIVE"
    },
    {
      id: 2,
      firstName: "Laura",
      lastName: "Gómez",
      documentId: "987654321",
      email: "laura@example.com",
      phone: "3007654321",
      grade: "11B",
      status: "ACTIVE"
    },
    {
      id: 3,
      firstName: "Andrés",
      lastName: "Martínez",
      documentId: "456123789",
      email: "andres@example.com",
      grade: "9C",
      status: "INACTIVE"
    }
  ];

}
