import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, Platform, ToastController } from '@ionic/angular';
import { ServicedatosService, Alumno } from 'src/app/services/servicedatos.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  newAlumnoForm: FormGroup;

  constructor(private storageService: ServicedatosService,
              private toastController: ToastController,
              private formBuilder: FormBuilder) {
              this.newAlumnoForm = this.formBuilder.group({
                correo:      ['', [Validators.required , Validators.email]],
                nombre:      ['', Validators.required],
                apellido:    ['', Validators.required],
                rutAlumno:   ['', Validators.required],
                contrasena:  ['', [Validators.required, Validators.minLength(8)]],
                contrasena2: ['', [Validators.required, Validators.minLength(8)]]
              });  
  }

  ngOnInit() {
  }

  addAlumno(){
    if(this.newAlumnoForm.valid) {
      const newAlumno: Alumno = this.newAlumnoForm.value;
      if( newAlumno.contrasena === newAlumno.contrasena2){
        newAlumno.rutAlumno = Date.now();
        this.storageService.addAlumno(newAlumno).then(() =>{
          this.newAlumnoForm.reset();
          this.showToast('Usuario registrado con exito.');
        });
      } else {
        this.showToast('Contraseñas ingresadas no coinciden');
      }
    } else {
      this.showToast('Ingrese todos los campos.')
    }
  }

  async showToast(msg: string){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
