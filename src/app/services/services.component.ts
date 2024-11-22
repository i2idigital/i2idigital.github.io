import { Component } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';
import { NavBackComponent } from '../nav-back/nav-back.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [BackgroundComponent, RouterLink, NavBackComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  showContent = false;

  public processPass(event: any) {
    if (event.target.value === "tehp") {
      this.showContent = true;
    }
  }
}
