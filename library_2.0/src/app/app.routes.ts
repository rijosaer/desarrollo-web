import { Routes } from '@angular/router';

// Book
import { ShowBook } from './components/book/show-book/show-book';
import { CreateBook } from './components/book/create-book/create-book';
import { UpdateBook } from './components/book/update-book/update-book';
import { SearchBook } from './components/book/search-book/search-book';

// Author
import { ShowAuthor } from './components/author/show-author/show-author';
import { CreateAuthor } from './components/author/create-author/create-author';
import { UpdateAuthor } from './components/author/update-author/update-author';
import { SearchAuthor } from './components/author/search-author/search-author';

// Editorial
import { ShowEditorial } from './components/editorial/show-editorial/show-editorial';
import { CreateEditorial } from './components/editorial/create-editorial/create-editorial';
import { UpdateEditorial } from './components/editorial/update-editorial/update-editorial';
import { SearchEditorial } from './components/editorial/search-editorial/search-editorial';

// Copy
import { ShowCopy } from './components/copy/show-copy/show-copy';
import { CreateCopy } from './components/copy/create-copy/create-copy';
import { UpdateCopy } from './components/copy/update-copy/update-copy';
import { SearchCopy } from './components/copy/search-copy/search-copy';

// Category
import { ShowCategory } from './components/category/show-category/show-category';
import { CreateCategory } from './components/category/create-category/create-category';
import { UpdateCategory } from './components/category/update-category/update-category';
import { SearchCategory } from './components/category/search-category/search-category';

// Student
import { ShowStudent } from './components/student/show-student/show-student';
import { CreateStudent } from './components/student/create-student/create-student';
import { UpdateStudent } from './components/student/update-student/update-student';
import { SearchStudent } from './components/student/search-student/search-student';

// Loan
import { ShowLoan } from './components/loan/show-loan/show-loan';
import { CreateLoan } from './components/loan/create-loan/create-loan';
import { UpdateLoan } from './components/loan/update-loan/update-loan';
import { SearchLoan } from './components/loan/search-loan/search-loan';

// Loan Detail
import { ShowLoanDetail } from './components/loanDetail/show-loan-detail/show-loan-detail';
import { CreateLoanDetail } from './components/loanDetail/create-loan-detail/create-loan-detail';
import { UpdateLoanDetail } from './components/loanDetail/update-loan-detail/update-loan-detail';
import { SearchLoanDetail } from './components/loanDetail/search-loan-detail/search-loan-detail';

// Reservation
import { ShowReservation } from './components/reservation/show-reservation/show-reservation';
import { CreateReservation } from './components/reservation/create-reservation/create-reservation';
import { UpdateReservation } from './components/reservation/update-reservation/update-reservation';
import { SearchReservation } from './components/reservation/search-reservation/search-reservation';

// History
import { ShowHistory } from './components/history/show-history/show-history';
import { CreateHistory } from './components/history/create-history/create-history';
import { UpdateHistory } from './components/history/update-history/update-history';
import { SearchHistory } from './components/history/search-history/search-history';

export const routes: Routes = [
  // Book
  { path: 'book', component: ShowBook },
  { path: 'book/create', component: CreateBook },
  { path: 'book/update', component: UpdateBook },
  { path: 'book/search', component: SearchBook },

  // Author
  { path: 'author', component: ShowAuthor },
  { path: 'author/create', component: CreateAuthor },
  { path: 'author/update', component: UpdateAuthor },
  { path: 'author/search', component: SearchAuthor },

  // Editorial
  { path: 'editorial', component: ShowEditorial },
  { path: 'editorial/create', component: CreateEditorial },
  { path: 'editorial/update', component: UpdateEditorial },
  { path: 'editorial/search', component: SearchEditorial },

  // Copy
  { path: 'copy', component: ShowCopy },
  { path: 'copy/create', component: CreateCopy },
  { path: 'copy/update', component: UpdateCopy },
  { path: 'copy/search', component: SearchCopy },

  // Category
  { path: 'category', component: ShowCategory },
  { path: 'category/create', component: CreateCategory },
  { path: 'category/update', component: UpdateCategory },
  { path: 'category/search', component: SearchCategory },

  // Student
  { path: 'student', component: ShowStudent },
  { path: 'student/create', component: CreateStudent },
  { path: 'student/update', component: UpdateStudent },
  { path: 'student/search', component: SearchStudent },

  // Loan
  { path: 'loan', component: ShowLoan },
  { path: 'loan/create', component: CreateLoan },
  { path: 'loan/update', component: UpdateLoan },
  { path: 'loan/search', component: SearchLoan },

  // Loan Detail
  { path: 'loan-detail', component: ShowLoanDetail },
  { path: 'loan-detail/create', component: CreateLoanDetail },
  { path: 'loan-detail/update', component: UpdateLoanDetail },
  { path: 'loan-detail/search', component: SearchLoanDetail },

  // Reservation
  { path: 'reservation', component: ShowReservation },
  { path: 'reservation/create', component: CreateReservation },
  { path: 'reservation/update', component: UpdateReservation },
  { path: 'reservation/search', component: SearchReservation },

  // History
  { path: 'history', component: ShowHistory },
  { path: 'history/create', component: CreateHistory },
  { path: 'history/update', component: UpdateHistory },
  { path: 'history/search', component: SearchHistory },
];
