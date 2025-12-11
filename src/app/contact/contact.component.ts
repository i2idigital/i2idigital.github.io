import { Component } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';
import { NavBackComponent } from '../nav-back/nav-back.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [BackgroundComponent, NavBackComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  btnText = "Email us";

  constructor() { }

  emailClick() {
    this.btnText = "i2idigitalmusic@gmail.com";
  }
}
