import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input() title!: String;
  @Input() backButton!: string;
  @Input() showMenu!: boolean;

  constructor() { }

  ngOnInit() {}

}
