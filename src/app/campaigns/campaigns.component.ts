import { Component } from '@angular/core';
import { NavBackComponent } from '../nav-back/nav-back.component';
import { BackgroundComponent } from '../background/background.component';

@Component({
  selector: 'app-campaigns',
  standalone: true,
  imports: [NavBackComponent, BackgroundComponent],
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.scss'
})
export class CampaignsComponent {
}
