import { Routes } from '@angular/router';
import { ShowBook } from './components/book/show-book/show-book';
import { ShowAuthor } from './components/author/show-author/show-author';
import { ShowEditorial } from './components/editorial/show-editorial/show-editorial';
import { ShowCopy } from './components/copy/show-copy/show-copy';
import { ShowCategory } from './components/category/show-category/show-category';
import { ShowStudent } from './components/student/show-student/show-student';
import { ShowLoan } from './components/loan/show-loan/show-loan';
import { ShowLoanDetail } from './components/loanDetail/show-loan-detail/show-loan-detail';
import { ShowReservation } from './components/reservation/show-reservation/show-reservation';
import { ShowHistory } from './components/history/show-history/show-history';

export const routes: Routes = [
     { path: 'book', component: ShowBook },
    { path: 'author', component: ShowAuthor },
    { path: 'editorial', component: ShowEditorial },
    { path: 'copy', component: ShowCopy },
    { path: 'category', component: ShowCategory },
    { path: 'student', component: ShowStudent },
    { path: 'loan', component: ShowLoan },
    { path: 'loan-detail', component: ShowLoanDetail },
    { path: 'reservation', component: ShowReservation },
    { path: 'history', component: ShowHistory },
];
