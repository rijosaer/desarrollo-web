import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [PanelMenu, CommonModule, BadgeModule, RouterModule],
  templateUrl: './aside.html',
  styleUrl: './aside.css'
})
export class Aside implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Libro', icon: 'pi pi-book',
        items: [
          { label: 'Listar', icon: 'pi pi-list', routerLink: ['/book'] },
          { label: 'Crear', icon: 'pi pi-plus', routerLink: ['/book/create'] },
          { label: 'Actualizar', icon: 'pi pi-pencil', routerLink: ['/book/update'] },
          { label: 'Buscar', icon: 'pi pi-search', routerLink: ['/book/search'] }
        ]
      },
      {
        label: 'Autor', icon: 'pi pi-user',
        items: [
          { label: 'Listar', icon: 'pi pi-list', routerLink: ['/author'] },
          { label: 'Crear', icon: 'pi pi-plus', routerLink: ['/author/create'] },
          { label: 'Actualizar', icon: 'pi pi-pencil', routerLink: ['/author/update'] },
          { label: 'Buscar', icon: 'pi pi-search', routerLink: ['/author/search'] }
        ]
      },
      {
        label: 'Editorial', icon: 'pi pi-building',
        items: [
          { label: 'Listar', icon: 'pi pi-list', routerLink: ['/editorial'] },
          { label: 'Crear', icon: 'pi pi-plus', routerLink: ['/editorial/create'] },
          { label: 'Actualizar', icon: 'pi pi-pencil', routerLink: ['/editorial/update'] },
          { label: 'Buscar', icon: 'pi pi-search', routerLink: ['/editorial/search'] }
        ]
      },
      {
        label: 'Ejemplar', icon: 'pi pi-clone',
        items: [
          { label: 'Listar', icon: 'pi pi-list', routerLink: ['/copy'] },
          { label: 'Crear', icon: 'pi pi-plus', routerLink: ['/copy/create'] },
          { label: 'Actualizar', icon: 'pi pi-pencil', routerLink: ['/copy/update'] },
          { label: 'Buscar', icon: 'pi pi-search', routerLink: ['/copy/search'] }
        ]
      },
      {
        label: 'Categoría', icon: 'pi pi-tags',
        items: [
          { label: 'Listar', icon: 'pi pi-list', routerLink: ['/category'] },
          { label: 'Crear', icon: 'pi pi-plus', routerLink: ['/category/create'] },
          { label: 'Actualizar', icon: 'pi pi-pencil', routerLink: ['/category/update'] },
          { label: 'Buscar', icon: 'pi pi-search', routerLink: ['/category/search'] }
        ]
      },
      {
        label: 'Estudiante', icon: 'pi pi-id-card',
        items: [
          { label: 'Listar', icon: 'pi pi-list', routerLink: ['/student'] },
          { label: 'Crear', icon: 'pi pi-plus', routerLink: ['/student/create'] },
          { label: 'Actualizar', icon: 'pi pi-pencil', routerLink: ['/student/update'] },
          { label: 'Buscar', icon: 'pi pi-search', routerLink: ['/student/search'] }
        ]
      },
      {
        label: 'Préstamo', icon: 'pi pi-calendar',
        items: [
          { label: 'Listar', icon: 'pi pi-list', routerLink: ['/loan'] },
          { label: 'Crear', icon: 'pi pi-plus', routerLink: ['/loan/create'] },
          { label: 'Actualizar', icon: 'pi pi-pencil', routerLink: ['/loan/update'] },
          { label: 'Buscar', icon: 'pi pi-search', routerLink: ['/loan/search'] }
        ]
      },
      {
        label: 'Detalle Préstamo', icon: 'pi pi-list',
        items: [
          { label: 'Listar', icon: 'pi pi-list', routerLink: ['/loan-detail'] },
          { label: 'Crear', icon: 'pi pi-plus', routerLink: ['/loan-detail/create'] },
          { label: 'Actualizar', icon: 'pi pi-pencil', routerLink: ['/loan-detail/update'] },
          { label: 'Buscar', icon: 'pi pi-search', routerLink: ['/loan-detail/search'] }
        ]
      },
      {
        label: 'Reserva', icon: 'pi pi-clock',
        items: [
          { label: 'Listar', icon: 'pi pi-list', routerLink: ['/reservation'] },
          { label: 'Crear', icon: 'pi pi-plus', routerLink: ['/reservation/create'] },
          { label: 'Actualizar', icon: 'pi pi-pencil', routerLink: ['/reservation/update'] },
          { label: 'Buscar', icon: 'pi pi-search', routerLink: ['/reservation/search'] }
        ]
      },
      {
        label: 'Historial', icon: 'pi pi-history',
        items: [
          { label: 'Listar', icon: 'pi pi-list', routerLink: ['/history'] },
          { label: 'Crear', icon: 'pi pi-plus', routerLink: ['/history/create'] },
          { label: 'Actualizar', icon: 'pi pi-pencil', routerLink: ['/history/update'] },
          { label: 'Buscar', icon: 'pi pi-search', routerLink: ['/history/search'] }
        ]
      }
    ];
  }
}
