import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';

@Component({
  selector: 'app-rb-aside',
  standalone: true,
  imports: [PanelMenu],
  templateUrl: './rb-aside.html',
  styleUrl: './rb-aside.css'
})

export class RBAside implements OnInit{
  items: MenuItem[] | undefined;
  ngOnInit() {
        this.items = [
       {
        label: 'Estudiantes',
        icon: 'pi pi-fw pi-user-edit',
        items: [
          { label: 'Crear Estudiante', routerLink: '/RBEstudiante/create' },
          { label: 'Ver Todos los Estudiantes', routerLink: '/RBEstudiante/getall' }
        ]
      },
      {
        label: 'Grados',
        icon: 'pi pi-fw pi-book',
        items: [
          { label: 'Crear Grado', routerLink: '/RBGrado/create' },
          { label: 'Ver Todos los Grados', routerLink: '/RBGrado/getall' }
        ]
      },
      {
        label: 'Asignaturas',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Crear Asignatura', routerLink: '/RBAsignatura/create' },
          { label: 'Ver Todas las Asignaturas', routerLink: '/RBAsignatura/getall' }
        ]
      },
    ];
    }
}
