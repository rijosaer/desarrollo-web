export interface LoanI {
  id?: number;
  studentId: number;      // Estudiante que pide el préstamo
  loanDate: Date;         // Fecha en que se presta
  dueDate: Date;          // Fecha límite de devolución
  returnDate?: Date;      // Fecha real de devolución (si aplica)
  status: 'active' | 'inactive'; // visibilidad del registro
  state: 'open' | 'returned' | 'overdue' | 'lost'; // estado del préstamo
}
