import { Component, signal } from '@angular/core';
import { RBAside } from './components/layout/rb-aside/rb-aside';
import { RBFooter } from './components/layout/rb-footer/rb-footer';
import { RBHeader } from './components/layout/rb-header/rb-header';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RBAside, CommonModule ,RBFooter, RBHeader, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('appExamenRB');
 showAside = signal(true);

    toggleAside() {
    this.showAside.update(v => !v);
    }
}
