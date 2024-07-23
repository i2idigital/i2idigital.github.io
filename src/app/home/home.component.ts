import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Typed from 'typed.js';
import { BackgroundComponent } from '../background/background.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BackgroundComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {


  constructor() { }

  ngOnInit() {
    new Typed(".typed-element", {
      strings: [
        "new video game project",
        "heavy metal album",
        "sisters TikTok page",
        "studios new campaign",
        "favorite artists."

      ],
      smartBackspace: true,
      typeSpeed: 30
    });
  }
}
