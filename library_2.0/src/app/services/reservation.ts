import { Injectable } from '@angular/core';
import { ReservationI } from '../models/reservation';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Reservation {
  private reservationSource = new BehaviorSubject<ReservationI[]>([]);
  currentReservation = this.reservationSource.asObservable(); 

  
  getReservations() {
    return this.reservationSource.value;
  }

  addReservation(reservation: ReservationI) {
    const current = this.reservationSource.value;
    reservation.id = current.length ? Math.max(...current.map(r => r.id ?? 0)) + 1 : 1;
    this.reservationSource.next([...current, reservation]);
  }

 
}
