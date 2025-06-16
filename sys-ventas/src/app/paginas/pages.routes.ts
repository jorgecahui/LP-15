import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatejemploComponent} from './matejemplo/matejemplo.component';
import {MainMarcaComponent} from './main-marca/main-marca.component';
import {FormMarcaComponent} from './main-marca/form-marca/form-marca.component';
import {MainProductoComponent} from './main-producto/main-producto.component';
import {FormxProductoComponent} from './main-producto/formx-producto/formx-producto.component';
import {Not403Component} from './not403/not403.component';

export const pagesRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent, /*canActivate: [certGuard]*/ },
  { path: 'mattable', component: MatejemploComponent },
  { path: 'marca', component: MainMarcaComponent,
    children:[
      { path: 'new', component: FormMarcaComponent },
      { path: 'edit/:id', component: FormMarcaComponent },
    ],
    /*canActivate: [certGuard]*/
  },

  {
    path: 'product',
    component: MainProductoComponent,
    children: [
      { path: 'new', component: FormxProductoComponent },
      { path: 'edit/:id', component: FormxProductoComponent },
    ], /*canActivate: [certGuard]*/
  },
  {path:'not-403', component: Not403Component}
  /*{ path: 'categoria', component: MainCategoriaComponent , },
  //{ path: 'categoria', component: MainCategoriaComponent },
  {
    path: 'marca',
    component: MainMarcaComponent,
    children: [
      { path: 'new', component: FormMarcaComponent },
      { path: 'edit/:id', component: FormMarcaComponent },
    ],
  },*/


];
