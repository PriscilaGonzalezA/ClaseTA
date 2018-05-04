import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {routing, appRoutingProviders} from './app.routing';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatListModule,
  MatInputModule, MatIconModule, MatCardModule, MatChipsModule, MatPaginatorModule, MatButtonModule, MatProgressBarModule, MatToolbarModule
} from '@angular/material';
import { Componente1Component } from './componente1/componente1.component';
import { ComponenteErrorComponent } from './componente-error/componente-error.component';
import {ServicioPruebaService} from './servicio-prueba.service';

@NgModule({
/* Los componentes van aqui
 */
  declarations: [
    AppComponent,
    Componente1Component,
    ComponenteErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatPaginatorModule,
    MatButtonModule,
    routing,
    MatProgressBarModule,
    MatListModule,
    MatInputModule,
    MatToolbarModule
  ],
  providers: [appRoutingProviders, ServicioPruebaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
