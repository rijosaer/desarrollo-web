export interface Student {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  status: 'active' | 'inactive';
}
