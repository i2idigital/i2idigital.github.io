import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import p5, { Camera } from 'p5';

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
  selector: 'app-background',
  standalone: true,
  imports: [],
  templateUrl: './background.component.html',
  styleUrl: './background.component.scss'
})
export class BackgroundComponent implements AfterViewInit {
  p5?: p5;
  @ViewChild('sketch') sketch?: ElementRef;

  ngAfterViewInit() {
    if (this.sketch) {
      this.p5 = new p5(sketch, this.sketch.nativeElement);
    }
  }

}
