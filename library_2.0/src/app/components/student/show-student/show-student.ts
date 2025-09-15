import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { StudentI } from '../../../models/student';
import { Student } from '../../../services/student';
@Component({
  selector: 'app-show-student',
  imports: [CommonModule, RouterModule, TableModule, ButtonModule],
  templateUrl: './show-student.html',
  styleUrl: './show-student.css'
})
export class ShowStudent {
  students: StudentI[] = [];

  constructor(private studentService: Student) {
    this.studentService.students$.subscribe(data => {
      this.students = data;
    });
  }

}
