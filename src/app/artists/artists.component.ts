import { Component } from '@angular/core';
import { NavBackComponent } from '../nav-back/nav-back.component';
import { BackgroundComponent } from '../background/background.component';
import { ArtistCardComponent } from './artist-card/artist-card.component';

@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [NavBackComponent, BackgroundComponent, ArtistCardComponent],
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.scss'
})
export class ArtistsComponent {

}
