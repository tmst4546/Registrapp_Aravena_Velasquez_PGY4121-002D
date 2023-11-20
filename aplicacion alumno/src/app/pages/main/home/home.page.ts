import { Component, OnInit, inject } from '@angular/core';
import { User } from 'firebase/auth';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);


  ngOnInit() {
  }

  // Cerrar sesion
  signOut() {
    this.firebaseSvc.signOut();
  }

  user(): User{
    return this.utilsSvc.getFromLocalStorage('user');
  }
}
