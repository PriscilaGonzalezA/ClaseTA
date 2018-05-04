import { Component } from '@angular/core';
import {ServicioPruebaService} from './servicio-prueba.service';
import {nextTick} from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fritanga F14 el reptiliano';
  constructor(private servicio: ServicioPruebaService) {
    this.servicio.getObjetos().subscribe(
      response => {
        console.log(response);
      }
    );
  }
}

