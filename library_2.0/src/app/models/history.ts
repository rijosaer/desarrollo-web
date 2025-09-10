export interface History {
  id?: number;
  loanId: number;        
  event: 'CREATED' | 'RENEWED' | 'RETURNED' | 'OVERDUE' | 'LOST';
  date: Date;
  details?: string;
  status: 'active' | 'inactive';
}
