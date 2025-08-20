import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-aside',

  imports: [],
  templateUrl: './aside.html',
  styleUrl: './aside.css'
})
export class Aside {
items: MenuItem[]=[];
 ngOnInit(): void {
    this.items = [
      { label: 'Libro', icon: 'pi pi-book', routerLink: '/book' },
      { label: 'Autor', icon: 'pi pi-user', routerLink: '/author' },
      { label: 'Editorial', icon: 'pi pi-building', routerLink: '/editorial' },
      { label: 'Ejemplar', icon: 'pi pi-clone', routerLink: '/copy' },
      { label: 'Categoría', icon: 'pi pi-tags', routerLink: '/category' },
      { label: 'Estudiante', icon: 'pi pi-id-card', routerLink: '/student' },
      { label: 'Préstamo', icon: 'pi pi-calendar', routerLink: '/loan' },
      { label: 'Detalle Préstamo', icon: 'pi pi-list', routerLink: '/loan-detail' },
      { label: 'Reserva', icon: 'pi pi-clock', routerLink: '/reservation' },
      { label: 'Historial', icon: 'pi pi-history', routerLink: '/history' }
    ];
  }
}
