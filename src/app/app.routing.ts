import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {Componente1Component} from './componente1/componente1.component';
import {ComponenteErrorComponent} from './componente-error/componente-error.component';

const appRoutes: Routes = [
  { path: '', component: Componente1Component},
  { path: 'home', component: Componente1Component},
  { path: '**', component: ComponenteErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
