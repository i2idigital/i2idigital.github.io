import { Component } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';
import { NavBackComponent } from '../nav-back/nav-back.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [BackgroundComponent, NavBackComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {

}
