import { Component } from '@angular/core';
import { NavBackComponent } from '../nav-back/nav-back.component';
import { BackgroundComponent } from '../background/background.component';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-campaigns',
  standalone: true,
  imports: [NavBackComponent, BackgroundComponent, CommonModule],
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.scss'
})
export class CampaignsComponent {

  constructor(private domSanitizer: DomSanitizer) { }

  campaigns = [
    {
      artist: 'Eric Reprid',
      song: 'Cold World',
      youtubeId: this.buildYouTubeEmbed('dlVczLUfhI4'),
      youtubeLink: this.buildYouTubeLink('dlVczLUfhI4'),
      spotifyTrack: this.buildSpotifyLink('5OYLUabPBep5tKWkpvoBcH'),
      appleLink: this.buildAppleLink('cold-world/1754880344')
    },
    {
      artist: 'Lil Tecca',
      song: '500lbs',
      youtubeId: this.buildYouTubeEmbed('vIBFoBladhg')
    },
    {
      artist: 'YEAT',
      song: 'If we being real',
      youtubeId: this.buildYouTubeEmbed('1xcvWmN0Pe4')
    },
    {
      artist: 'Heaband Andy',
      song: 'bangmychest!',
      youtubeId: this.buildYouTubeEmbed('yLVJfGePguw')
    },
    {
      artist: 'yng martyr',
      song: '50k',
      youtubeId: this.buildYouTubeEmbed('3yYATDTh3EE')
    },
    {
      artist: 'luke chiang',
      song: 'never tell',
      youtubeId: this.buildYouTubeEmbed('lfiMRv3p4mg')
    },
    {
      artist: 'anycia',
      song: 'back outside',
      youtubeId: this.buildYouTubeEmbed('0MedMI2RKt8')
    },
    {
      artist: 'khantrast',
      song: 'landed in brooklyn',
      youtubeId: this.buildYouTubeEmbed('Hre1L9hFDvg')
    },
    {
      artist: 'yng martyr',
      song: 'gleaming',
      youtubeId: this.buildYouTubeEmbed('jraBbrB9TOs')
    },
    {
      artist: 'khantrast',
      song: 'valedictorian',
      youtubeId: this.buildYouTubeEmbed('ZSQzldfVaxM')
    },
    {
      artist: 'eric reprid',
      song: 'suki',
      youtubeId: this.buildYouTubeEmbed('zbpWYvUVAjU')
    },
    {
      artist: 'the rose',
      song: 'lifeline (reborn)',
      youtubeId: this.buildYouTubeEmbed('mNhaZYB8LIU')
    },
    {
      artist: 'kam prada',
      song: 'bigger dreams',
      youtubeId: this.buildYouTubeEmbed('orObai0Fheo')
    },
  ]

  buildYouTubeEmbed(youtubeId: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1`);
  }
  buildYouTubeLink(youtubeId: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/watch?v=${youtubeId}`);
  }
  buildSpotifyLink(trackId: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`https://open.spotify.com/track/${trackId}`);
  }
  buildAppleLink(trackId: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`https://music.apple.com/ca/song/${trackId}`);
  }
}
