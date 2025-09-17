export interface StudentI {
  id?: number;              
  firstName: string;        
  lastName: string;          
  documentId: string;        
  email: string;             
  phone?: string;            
  grade: string;             
  status: "ACTIVE" | "INACTIVE"; 
}
