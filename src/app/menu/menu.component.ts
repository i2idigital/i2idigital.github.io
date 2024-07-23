import { Component } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';
import { NavBackComponent } from '../nav-back/nav-back.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [BackgroundComponent, NavBackComponent, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  newsSeparator = '  /  '
  newsMessages = [
    "July 2024: Lil Tecca - 500lbs",
    "July 2024: YEAT - If We Being Rëal",
    "July 2024: Ski Mask The Slump God - Shibuya",
    "July 2024: Headband Andy - bangbychest!",
    "July 2024: Eric Reprid - Cold World",
    "July 2024: Luke Chiang - Never Tell",
  ]
  newsMessage = this.newsMessages.join(this.newsSeparator).concat(this.newsSeparator);

}
