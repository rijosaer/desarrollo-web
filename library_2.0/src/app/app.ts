import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Aside } from './components/layout/aside/aside';
import { Header } from './components/layout/header/header';
import { Footer } from './components/layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Aside, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('library_2.0');
}
