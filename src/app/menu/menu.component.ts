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
  newsSeparator = '     /     '
  newsMessages = [
    "Headband Andy - bangmychest!",
    "Lil Tecca - 500lbs",
    "Ski Mask The Slump God - Shibuya",
    "Khantrast - I'm Toxic",
    "YEAT - If We Being Rëal",
    "Eric Reprid - Cold World",
    "S.A.M - Where Ya Daughter At?",
    "bbno$ - It Boy",
  ]
  newsMessage = this.newsMessages.join(this.newsSeparator).concat(this.newsSeparator);

}
