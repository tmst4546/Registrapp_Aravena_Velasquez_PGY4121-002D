import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicedatosService } from 'src/app/services/servicedatos.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private storageService : ServicedatosService,
              private router: Router) { }

  ngOnInit() {
  }

  cerrarSesion() {
    this.storageService.autenticarCambio(false);
    this.storageService.logout();
    this.router.navigate(['']);

  }

}
