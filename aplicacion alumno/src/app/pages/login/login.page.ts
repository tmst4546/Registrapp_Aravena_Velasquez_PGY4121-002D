import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, Platform, ToastController } from '@ionic/angular';
import { ServicedatosService, Alumno } from 'src/app/services/servicedatos.service';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  newAlumnoForm : FormGroup;
  usuarioLogueado: boolean = false;

  constructor(private storageService: ServicedatosService, 
              private formBuilder: FormBuilder, 
              private toastController: ToastController,
              private router: Router) {
    this.newAlumnoForm = this.formBuilder.group({
      correo:     ['', [Validators.required , Validators.email]],
      contrasena: ['', [Validators.required , Validators.minLength(8)]]
    });
  }

  ngOnInit() {
  }

  async loginAlumno(){
    if(this.newAlumnoForm.valid) {
      const form = this.newAlumnoForm.value;
      console.log('Datos correctos', FormData);
      this.storageService.autenticarCambio(true);
      this.validacion(form.correo , form.contrasena);
    } else {
      this.showToast('Ingresar datos correctos...');
    }
  }

  validacion( correo: string , contrasena: string){
    this.storageService.correopubic = correo;
    this.storageService.traerAlumno(correo).then((alumno)=>{
      if(alumno){
        if(alumno.contrasena === contrasena){
          console.log('Inicio correcto');
          localStorage.setItem('Autenticado','true');
          this.showToast(`Bienvenido usuario: ${alumno.nombre} ${alumno.apellido} `);
          this.router.navigate(['/inicio'] , {queryParams:{ correo: alumno.correo}});
          this.storageService.autenticarCambio(true);
          this.usuarioLogueado = true;
          console.log('Autenticado', true);
        } else {
          console.log('contraseña no existente');
          this.showToast('Contraseña ingresada no existe...');
        }
      } else {  
        console.log('Usuario no existente');
        this.showToast('Usuario ingresado no existe...');
      }
    }).catch((error) => {
      console.error('Error al obtener usuario', error);
      this.showToast('Error al verificar usuario');
    });
  }

  async showToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }
}




