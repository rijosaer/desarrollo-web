import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';

// Services
import { Book } from '../../../services/book';
import { Editorial } from '../../../services/editorial';
import { Category } from '../../../services/category';
import { Author } from '../../../services/author';

// Models
import { BookI } from '../../../models/book';
import { EditorialI } from '../../../models/editorial';
import { CategoryI } from '../../../models/category';
import { AuthorI } from '../../../models/author';

@Component({
  selector: 'app-create-book',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, ButtonModule, MultiSelectModule, SelectModule],
  templateUrl: './create-book.html',
  styleUrl: './create-book.css'
})

export class CreateBook {
  form; // 👈 propiedad para el formulario
  categorias: CategoryI[];
  editoriales: EditorialI[];
  autores: AuthorI[];

  constructor(
    private fb: FormBuilder,
    private bookService: Book,
    private categoryService: Category,
    private editorialService: Editorial,
    private autorService: Author,
    private router: Router
  ) {
    // 👇 aquí ya asignas a la propiedad "form"
    this.form = this.fb.group({
      title: ['', Validators.required],
      isbn: [''],
      categoryId: [null, Validators.required],
      editorialId: [null, Validators.required],
      authorIds: [[], Validators.required],
      status: ['active', Validators.required]
    });

    // se inicializan aquí sin OnInit
    this.categorias = this.categoryService.getCategory();
    this.editoriales = this.editorialService.getEditorial();
    this.autores = this.autorService.getAuthor();
  }

  submit() {
    if (this.form.valid) {
      const raw = this.form.value;
      const book: BookI = {
        title: raw.title ?? '',
        isbn: raw.isbn ?? '',
        categoryId: raw.categoryId ?? 0,
        editorialId: raw.editorialId ?? 0,
        authorIds: raw.authorIds ?? [],
        status: raw.status as 'active' | 'inactive'
      };
      this.bookService.addBook(book);
      this.router.navigate(['/book']);
    }
  }

  cancelar() {
    this.router.navigate(['/book']);
  }
}
