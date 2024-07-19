import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-back',
  standalone: true,
  imports: [],
  templateUrl: './nav-back.component.html',
  styleUrl: './nav-back.component.scss'
})
export class NavBackComponent {

  @Input() to?: string;

}
