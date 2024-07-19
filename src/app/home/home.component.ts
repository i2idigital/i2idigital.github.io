import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Typed from 'typed.js';
import { BackgroundComponent } from '../background/background.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BackgroundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

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
