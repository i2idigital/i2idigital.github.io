import { Component } from '@angular/core';
import { NavBackComponent } from '../nav-back/nav-back.component';
import { BackgroundComponent } from '../background/background.component';

@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [NavBackComponent, BackgroundComponent],
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.scss'
})
export class ArtistsComponent {

}
