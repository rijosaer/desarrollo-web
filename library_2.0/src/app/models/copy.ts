export interface CopyI {
  id?: number;
  bookId: number;        
  code: string;   
  quantity: number;    
  status: 'active' | 'inactive'; // estado del registro
  availability: 'available' | 'loaned' | 'reserved' | 'lost' | 'maintenance';
}
