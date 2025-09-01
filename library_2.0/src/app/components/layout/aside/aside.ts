import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [Menu],
  templateUrl: './aside.html',
  styleUrl: './aside.css'
})

export class Aside implements OnInit {
 items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
           
  { label: 'Libro',          icon: 'pi pi-book',      routerLink: ['/book'],        routerLinkActiveOptions: { exact: true } },
  { label: 'Autor',          icon: 'pi pi-user',      routerLink: ['/author'],      routerLinkActiveOptions: { exact: true } },
  { label: 'Editorial',      icon: 'pi pi-building',  routerLink: ['/editorial'],   routerLinkActiveOptions: { exact: true } },
  { label: 'Ejemplar',       icon: 'pi pi-clone',     routerLink: ['/copy'],        routerLinkActiveOptions: { exact: true } },
  { label: 'Categoría',      icon: 'pi pi-tags',      routerLink: ['/category'],    routerLinkActiveOptions: { exact: true } },
  { label: 'Estudiante',     icon: 'pi pi-id-card',   routerLink: ['/student'],     routerLinkActiveOptions: { exact: true } },
  { label: 'Préstamo',       icon: 'pi pi-calendar',  routerLink: ['/loan'],        routerLinkActiveOptions: { exact: true } },
  { label: 'Detalle Préstamo', icon: 'pi pi-list',    routerLink: ['/loan-detail'], routerLinkActiveOptions: { exact: true } },
  { label: 'Reserva',        icon: 'pi pi-clock',     routerLink: ['/reservation'], routerLinkActiveOptions: { exact: true } },
  { label: 'Historial',      icon: 'pi pi-history',   routerLink: ['/history'],     routerLinkActiveOptions: { exact: true } }


];
    }
}

