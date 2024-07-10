import p5, { Camera } from 'p5';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Typed from 'typed.js';

const options = {
  strings: ['Innovation.', 'Discovery.'],
  typeSpeed: 100,
  backSpeed: 100,
  showCursor: true,
  cursorChar: '|',
  loop: true
};

var cols: number, rows: number;
var triangleScale = 60;

var flying = 0;

var terrain: Array<Array<number>> = [];

const WIDTH_COEF = 2
const HEIGHT_COEF = 2

const sketch = (p: p5) => {
  p.preload = () => {
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    cols = p.windowWidth * WIDTH_COEF / triangleScale;
    rows = p.windowHeight / triangleScale;

    for (var x = 0; x < cols; x++) {
      terrain[x] = [];
      for (var y = 0; y < rows; y++) {
        terrain[x][y] = 0;
      }
    }
    p.fill(90, 95, 207, 200);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    flying -= 0.003
    var yoff = flying;

    for (var y = 0; y < rows; y++) {
      var xoff = 0;
      for (var x = 0; x < cols; x++) {
        terrain[x][y] = p.map(p.noise(xoff, yoff), 0, 1, 0, 255);
        xoff += 0.1;
      }
      yoff += 0.1;
    }

    p.background(0, 0);
    p.translate(0, 520);
    p.rotateX(p.PI / 2.3);
    p.ambientLight(80, 80, 80);
    p.translate(-p.windowWidth / 2 * WIDTH_COEF, -p.windowHeight / 2);

    for (var y = 0; y < rows - 1; y++) {
      p.beginShape(p.TRIANGLE_STRIP);

      for (var x = 0; x < cols; x++) {
        p.vertex(x * triangleScale, y * triangleScale, terrain[x][y] * HEIGHT_COEF);
        p.vertex(x * triangleScale, (y + 1) * triangleScale, terrain[x][y + 1] * HEIGHT_COEF);
      }
      p.endShape();
    }

  };
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  p5?: p5;
  @ViewChild('sketch') sketch?: ElementRef;

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

  ngAfterViewInit() {
    if (this.sketch) {
      this.p5 = new p5(sketch, this.sketch.nativeElement);
    }
  }
}
