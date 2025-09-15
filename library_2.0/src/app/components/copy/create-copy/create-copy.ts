import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';

// Services
import { Copy } from '../../../services/copy';
import { Book } from '../../../services/book';

// Models
import { CopyI } from '../../../models/copy';
import { BookI } from '../../../models/book';

@Component({
  selector: 'app-create-copy',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    SelectModule
  ],
  templateUrl: './create-copy.html',
  styleUrl: './create-copy.css'
})
export class CreateCopy {
  form;
  libros: BookI[];

  constructor(
    private fb: FormBuilder,
    private copyService: Copy,
    private bookService: Book,
    private router: Router
  ) {
    this.form = this.fb.group({
      bookId: [null as number | null, Validators.required],
      code: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      status: ['active', Validators.required],
      availability: ['available', Validators.required]
    });

    // obtenemos los libros disponibles
    this.libros = this.bookService.getBook();
  }

  submit() {
    if (this.form.valid) {
      const raw = this.form.value;
      const copy: CopyI = {
        bookId: raw.bookId ?? 0,
        code: raw.code ?? '',
        quantity: raw.quantity ?? 1,
        status: raw.status as 'active' | 'inactive',
        availability: raw.availability as 'available' | 'loaned' | 'reserved' | 'lost' | 'maintenance'
      };

      this.copyService.addCopy(copy);
      this.router.navigate(['/copy']);
    }
  }

  cancelar() {
    this.router.navigate(['/copy']);
  }
}
