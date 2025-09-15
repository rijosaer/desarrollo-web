export interface LoanDetailI {
  id?: number;
  loanId: number;          // Relación al préstamo (Loan)
  copyId: number[];          // La copia del libro que se está prestando
  notes?: string;          // Observaciones (ej. libro rayado, mal estado, etc.)
  status: 'active' | 'inactive'; // visibilidad del registro
}
