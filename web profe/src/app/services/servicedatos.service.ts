import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

export interface Alumno {
  rutAlumno: number;
  nombre: string;
  apellido: string;
  correo: string;
  contrasena: string;
  contrasena2: string;
}

export interface Docente {
  rutDocente: number;
  nombre: string;
  apellido: string;
  correo: string;
  contrasena: string;
  contrasena2: string;
}

const ITEMS_KEY = "my_datos";

@Injectable({
  providedIn: 'root'
})
export class ServicedatosService {

  usuarioLogueado: boolean = false;
  private _storage!: Storage;
  autenticado!: boolean;
  public correopubic!: string;
  private correoGuardado!: string;

  constructor(private storage: Storage, private router: Router) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async addAlumno(alumno: Alumno): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((alumnos: Alumno[]) => {
      if (alumnos) {
        alumnos.push(alumno);
        return this.storage.set(ITEMS_KEY, alumnos);
      } else {
        return this.storage.set(ITEMS_KEY, [alumno]);
      }
    });
  }

  async addDocente(docente: Docente): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((docentes: Docente[]) => {
      if (docentes) {
        docentes.push(docente);
        return this.storage.set(ITEMS_KEY, docentes);
      } else {
        return this.storage.set(ITEMS_KEY, [docente]);
      }
    });
  }

  getAlumno(): Promise<Alumno[]> {
    return this.storage.get(ITEMS_KEY);
  }

  getDocente(): Promise<Docente[]> {
    return this.storage.get(ITEMS_KEY);
  }

  async updateAlumno(alumno: Alumno): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((alumnos: Alumno[]) => {
      if (!alumnos || alumnos.length == 0) {
        return null;
      }
      let newAlumno: Alumno[] = [];
      for (let i of alumnos) {
        if (i.rutAlumno == alumno.rutAlumno) {
          newAlumno.push(alumno);
        } else {
          newAlumno.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, newAlumno)
    });
  }

  async updateDocente(docente: Docente): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((docentes: Docente[]) => {
      if (!docentes || docentes.length == 0) {
        return null;
      }
      let newDocente: Docente[] = [];
      for (let i of docentes) {
        if (i.rutDocente == docente.rutDocente) {
          newDocente.push(docente);
        } else {
          newDocente.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, newDocente)
    });
  }

  async deleteAlumno(rutAlumno: number): Promise<Alumno> {
    return this.storage.get(ITEMS_KEY).then((alumnos: Alumno[]) => {
      if (!alumnos || alumnos.length === 0) {
        return null;
      }
      let toKeep: Alumno[] = [];
      for (let i of alumnos) {
        if (i.rutAlumno !== rutAlumno) {
          toKeep.push(i)
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    })
  }

  async deleteDocente(rutDocente: number): Promise<Docente> {
    return this.storage.get(ITEMS_KEY).then((docentes: Docente[]) => {
      if (!docentes || docentes.length === 0) {
        return null;
      }
      let toKeep: Docente[] = [];
      for (let i of docentes) {
        if (i.rutDocente !== rutDocente) {
          toKeep.push(i)
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    })
  }

  autenticar(): boolean {
    return this.autenticado;
  }

  autenticarCambio(flag: boolean) {
    this.autenticado = flag;
  }

  getCorreoAlumno() {
    return this.correopubic;
  }

  loginAlumno(correo: string, contrasena: string): Promise<boolean> {
    this.correoGuardado = correo;
    this.correopubic = this.correoGuardado;
    console.log('Correo guardado: ', this.correoGuardado);
    console.log('Correo guardado2: ', this.correopubic);
    console.log('Autenticado', this.autenticado);

    return this.storage.get(ITEMS_KEY).then((alumnos: Alumno[]) => {
      const alumnoEncontrado = alumnos.find(alumno => alumno.correo === correo && alumno.contrasena === contrasena);
      if (alumnoEncontrado) {
        this.autenticado = true;
        this.usuarioLogueado = true;
      } else {
        this.autenticado = false;
      }
      return !!alumnoEncontrado;
    });
  }

  async traerAlumno(correo: string): Promise<Alumno | null> {
    try {
      const alumnos = await this.storage.get(ITEMS_KEY);
      if (alumnos && alumnos.length > 0) {
        const encontrarAlumno = alumnos.find((alumno: { correo: string; }) => alumno.correo === correo);
        if (encontrarAlumno) {
          return encontrarAlumno;
        }
      }
      return null;
    } catch (error) {
      console.error('Error al obtener usuarios', error);
      throw error; // Re-lanzamos el error para que pueda ser manejado en un nivel superior
    }
  }

  logoutAlumno() {
    this.autenticado = false;
    localStorage.setItem('Autenticado', 'false');
  }

  cerrarSesion() {
    this.autenticado = false;
    localStorage.removeItem('autenticado');
    localStorage.removeItem('correo');
  }

  logout() {
    this.autenticado = false;
    localStorage.setItem('autenticado', 'false');
  }

}
