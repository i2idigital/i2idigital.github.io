import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-back',
  standalone: true,
  imports: [],
  templateUrl: './nav-back.component.html',
  styleUrl: './nav-back.component.scss'
})
export class NavBackComponent {

  constructor(private router: Router) { }

  @Input() to?: string;

  nav() {
    this.router.navigate([this.to || ''])
  }

}
