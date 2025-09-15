export interface ReservationI {
  id?: number;                  // ID único de la reserva
  loanId: number;               // Relación al préstamo (Loan)
  studentId: number;            // Relación al estudiante que realiza la reserva
  copyIds: number[];            // IDs de los ejemplares reservados
  reservedDate: Date;           // Fecha de creación de la reserva
  expirationDate?: Date;        // Fecha límite para recoger la reserva
  status: 'active' | 'completed' | 'cancelled'; // Estado de la reserva
  notes?: string;               // Observaciones adicionales
}
