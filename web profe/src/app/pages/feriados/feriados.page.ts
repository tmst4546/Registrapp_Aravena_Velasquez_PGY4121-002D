import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Data } from 'src/app/interfaces/interfaces'; // Asegúrate de importar la interfaz Article

@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage implements OnInit {
  noticias: Data[] = [];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit() {
    this.noticiasService.getTopHeadlines().subscribe((resp) => {
      console.log('noticias', resp);
      if (resp && resp.data) {
        this.noticias = resp.data; // Asigna la respuesta directamente a noticias
        console.log('noticias actualizadas', this.noticias);
      } else {
        console.log('La respuesta de la API no contiene datos válidos.');
      }
    });
  }
}


