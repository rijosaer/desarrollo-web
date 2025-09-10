export interface LoanDetail {
  id?: number;
  loanId: number;        
  notes?: string;
  status: 'active' | 'inactive';
}
