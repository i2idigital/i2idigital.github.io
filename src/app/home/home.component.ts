import p5, { Camera } from 'p5';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Color {
  r: number;
  g: number;
  b: number;
}

const lineColors: Color[] = [
  { r: 90, g: 95, b: 207 }, // brand blue
];

var cols: number, rows: number;
var triangleScale = 60;

var flying = 0;

var terrain: Array<Array<number>> = [];

const WIDTH_COEF = 2

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
    var locX = p.mouseX - p.windowHeight / 2;
    var locY = p.mouseY - p.windowWidth / 2;
    const HEIGHT_COEF = 2
    p.fill(255, 200, 200, 200);
    p.ambientLight(200, 200, 200);
    p.pointLight(222, 33, 33, locX, locY, 150);
    p.translate(-p.windowWidth / 2 * WIDTH_COEF, -p.windowHeight / 2);
    // p.ambientMaterial(32, 37, 81);
    // p.specularMaterial(100, 100, 255, 222);

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

  newsMessage = "2024/06/15: Lil Tecca - \"500lbs\"";

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    if (this.sketch) {
      this.p5 = new p5(sketch, this.sketch.nativeElement);
    }
  }
}
