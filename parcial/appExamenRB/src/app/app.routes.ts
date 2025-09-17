import {  RouterModule, Routes } from '@angular/router';


// Componentes Estudiante
import { EstCreate } from './components/RBEstudiante/est-create/est-create';
import { EstGetall } from './components/RBEstudiante/est-getall/est-getall';

// Componentes Grado
import { GrdCreate } from './components/RBGrado/grd-create/grd-create';
import { GrdGetall } from './components/RBGrado/grd-getall/grd-getall';

// Componentes Asignatura
import { AsgCreate } from './components/RBAsignatura/asg-create/asg-create';
import { AsgGetall } from './components/RBAsignatura/asg-getall/asg-getall';

export const routes: Routes = [
    // Estudiantes
  { path: 'RBEstudiante/create', component: EstCreate },
  { path: 'RBEstudiante/getall', component: EstGetall },
  { path: 'RBGrado/create', component: GrdCreate },
  { path: 'RBGrado/getall', component: GrdGetall},
  { path: 'RBAsignatura/create', component: AsgCreate },
  { path: 'RBAsignatura/getall', component: AsgGetall },
  

];
