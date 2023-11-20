import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/interfaces/interfaces';
import { ApiferiadosService } from 'src/app/services/apiferiados.service';

@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage implements OnInit {

  constructor( private apiferiadosService: ApiferiadosService) { }

  feriados : Data[] = [];

  ngOnInit() {
    this.apiferiadosService.getTopHeadlines().subscribe( resp => {
      console.log('feriados', resp);
      
      if (resp && resp.data) {
        this.feriados = resp.data;
        console.log('Feriados actualizados', this.feriados);
      } else {
        console.log('La respuesta de la API no contiene datos...')
      }
    });
  }

}
