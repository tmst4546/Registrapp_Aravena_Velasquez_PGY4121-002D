import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-generar-codigo',
  templateUrl: './generar-codigo.page.html',
  styleUrls: ['./generar-codigo.page.scss'],
})
export class GenerarCodigoPage implements OnInit {



  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getTopHeadLines(){
    return this.http.get('https://date.nager.at/Api/v2/NextPublicHolidays/CL')
  }

}
