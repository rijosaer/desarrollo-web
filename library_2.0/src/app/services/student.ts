import { Injectable } from '@angular/core';
import { StudentI } from '../models/student';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class Student {
  private studentService = new BehaviorSubject<StudentI[]>([]);
  students$ = this.studentService.asObservable();
  
  getStudents() {
    return this.studentService.value;
  }

  addStudent(student: StudentI) {
    const currentValue = this.studentService.value;
    student.id = currentValue.length ? Math.max(...currentValue.map(st => st.id ?? 0)) + 1 : 1;
    this.studentService.next([...currentValue, student]);
  }

  
}
