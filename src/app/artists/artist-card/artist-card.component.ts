import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-artist-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artist-card.component.html',
  styleUrl: './artist-card.component.scss'
})
export class ArtistCardComponent implements OnInit {
  @Input() name!: string;
  @Input() spotifyId!: string;
  @Input() image!: string;
  @Input() ig!: string;
  @Input() tiktok!: string;
  @Input() x!: string;

  embedUrl!: SafeResourceUrl;
  imageUrl!: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.embedUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://open.spotify.com/embed/artist/' + this.spotifyId)
    this.imageUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.image);
  }
}
