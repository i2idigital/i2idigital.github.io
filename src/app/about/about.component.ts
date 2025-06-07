import { Component, OnInit } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';
import { NavBackComponent } from '../nav-back/nav-back.component';
import { CountUp } from 'countup.js';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BackgroundComponent, NavBackComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {
    [
      new CountUp('streams-stat', 500, { duration: 5, suffix: 'M+' }),
      new CountUp('fans-stat', 2, { duration: 5, suffix: 'B+', decimalPlaces: 1 }),
      new CountUp('cpm-stat', 0.46, { duration: 5, prefix: '$', decimalPlaces: 2, startVal: 3 }),
      new CountUp('follower-stat', 23, { duration: 5, suffix: 'M+' })
    ].forEach(c => c.start())
  }
}
