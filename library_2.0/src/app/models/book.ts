export interface BookI {
  id?: number;
  title: string;
  isbn?: string;
  categoryId: number;    
  editorialId: number;   
  authorIds: number[];   
  status: 'active' | 'inactive';
}
