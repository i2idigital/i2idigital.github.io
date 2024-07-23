import { Component } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';
import { NavBackComponent } from '../nav-back/nav-back.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BackgroundComponent, NavBackComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
