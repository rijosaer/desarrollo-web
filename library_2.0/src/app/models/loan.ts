export interface Loan {
  id?: number;
  studentId: number;     
  copyId: number;        
  loanDate: Date;
  dueDate: Date;
  returnDate?: Date;
  status: 'active' | 'inactive'; // visibilidad del registro
  state: 'open' | 'returned' | 'overdue' | 'lost'; // estado del préstamo
}
