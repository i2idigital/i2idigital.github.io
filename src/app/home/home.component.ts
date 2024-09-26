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
        "data-driven, results focused",
        "as times change, we change with it",
        "disruptive marketing for the digital age",
        "full transparency",
        "revolutionizing artist discovery",
        "pioneering the music marketing landscape"

      ],
      smartBackspace: true,
      typeSpeed: 85
    });
  }
}
