import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-item',
  templateUrl: './custom-item.component.html',
  styleUrls: ['./custom-item.component.scss'],
})
export class CustomItemComponent  implements OnInit {

  @Input() control!: FormControl;
  @Input() type!: String;
  @Input() label!: String;
  @Input() autocomplete!: String;
  @Input() icon!: String;

  isPassword!: boolean;
  hide: boolean = true; 

  constructor() { }

  ngOnInit() {
    if(this.type == 'password') this.isPassword = true;
  }

  showOrHidePassword(){
    this.hide = !this.hide;

    if(this.hide) this.type = 'password';
    else this.type = 'text';
  }

}
