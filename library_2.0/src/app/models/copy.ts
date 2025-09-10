export interface CopyI {
  id?: number;
  bookId: number;        
  code: string;          
  status: 'active' | 'inactive'; // estado del registro
  availability: 'available' | 'loaned' | 'reserved' | 'lost' | 'maintenance';
}
