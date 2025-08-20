import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from './components/layout/header/header';
import { Aside } from './components/layout/aside/aside';
import { Content } from './components/layout/content/content';
import { Footer } from './components/layout/footer/footer';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BadgeModule } from 'primeng/badge'; 
import { RippleModule } from 'primeng/ripple'; 
import { MenuModule } from 'primeng/menu';
import "primeicons/primeicons.css";
import { RouterModule } from '@angular/router';
import { MegaMenuModule } from 'primeng/megamenu';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Header, Aside, Content, Footer, PanelMenuModule, BadgeModule, RippleModule, MenuModule, RouterModule,
    MegaMenuModule ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  items = [
  { label: 'Libro', icon: 'pi pi-book', routerLink: ['/book'] },
  { label: 'Autor', icon: 'pi pi-user', routerLink: ['/author'] },
  { label: 'Editorial', icon: 'pi pi-building', routerLink: ['/editorial'] },
  { label: 'Ejemplar', icon: 'pi pi-clone', routerLink: ['/copy'] },
  { label: 'Categoría', icon: 'pi pi-tags', routerLink: ['/category'] },
  { label: 'Estudiante', icon: 'pi pi-id-card', routerLink: ['/student'] },
  { label: 'Préstamo', icon: 'pi pi-calendar', routerLink: ['/loan'] },
  { label: 'Detalle Préstamo', icon: 'pi pi-list', routerLink: ['/loan-detail'] },
  { label: 'Reserva', icon: 'pi pi-clock', routerLink: ['/reservation'] },
  { label: 'Historial', icon: 'pi pi-history', routerLink: ['/history'] },
];

  title = 'frontend';
}
