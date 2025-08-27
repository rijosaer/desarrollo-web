import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/layout/header/header';
import { Aside } from './components/layout/aside/aside';
import { Content } from './components/layout/content/content';
import { Footer } from './components/layout/footer/footer';

import { MenuModule } from 'primeng/menu';
@Component({
  selector: 'app-root',
   standalone: true,
  imports: [RouterOutlet, Header, Aside, Content, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
    
}

