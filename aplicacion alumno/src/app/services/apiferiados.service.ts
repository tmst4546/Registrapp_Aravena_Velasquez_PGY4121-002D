import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiferiadosService {

  constructor( private http: HttpClient) { }

  getTopHeadlines(){
    return this.http.get<RespuestaTopHeadlines>('https://api.victorsanmartin.com/feriados/en.json')
  }
}
