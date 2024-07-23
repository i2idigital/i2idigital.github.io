import { Component } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';
import { NavBackComponent } from '../nav-back/nav-back.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [BackgroundComponent, NavBackComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
