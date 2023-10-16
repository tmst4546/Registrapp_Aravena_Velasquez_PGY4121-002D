import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  componentes: Componente[] = [


    {
      icon: 'person-circle-outline',
      name: 'Asignaturas',
      redirecTo: '/asignaturas'
    },
    {
      icon: 'person-circle-outline',
      name: 'Iniciar sesion',
      redirecTo: '/login'
    },
    {
      icon: 'calendar',
      name: 'Feriados del año',
      redirecTo: '/feriados'
    },
    {
      icon: 'school-outline',
      name: 'Inicio de página',
      redirecTo: '/inicio'
    },

  ];
  constructor() {}

  ngOnInit(){

  }
}
