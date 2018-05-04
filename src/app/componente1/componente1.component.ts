import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  color: string;
  opciones = [
    { name: 'none', color: ''},
    { name: 'Primary', color: 'primary'},
    { name: 'Accent', color: 'accent'},
    { name: 'Warn', color: 'warn'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
