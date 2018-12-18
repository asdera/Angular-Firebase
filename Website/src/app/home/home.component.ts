import { Component, OnInit } from '@angular/core';

import * as p5 from 'p5';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private p5;
  constructor() { }

  ngOnInit() {
    this.createCanvas();
  }
  
  private createCanvas() {
    this.p5 = new p5(this.sketch);
  }
  
  private sketch(p: any) {
    var boids = [];
    var f = 0;
    var fatness = 60;
    var thickness = 20;
    var range = 600;
    var speed = 3;

    var boid = (x, y) => {
      let obj: Object = {};
      obj.x = x;
      obj.y = y;
      obj.d = p.random(2*p.PI);
      obj.update = function () {
        this.x += p.cos(this.d) * speed;
        this.y += p.sin(this.d) * speed;
      }
      return obj;
    };

    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      p.stroke(255);
      p.fill("#00506F");
    };
  
    p.draw = () => {
      f++;
      p.background("#00506F");
      for (var i = boids.length - 1; i >= 0; i--) {
        var boi = boids[i];
        boi.update()
        if (boi.x < -range || boi.x > p.windowWidth + range || boi.y < -range || boi.y > p.windowHeight + range) {
          boids.splice(i, 1)
        }
        for (var j = i; j >= 0; j--) {
          var boj = boids[j];
          if (j == i) {
            boj = {x: p.mouseX, y: p.mouseY};
          }
          var diff = p.sqrt((boi.x-boj.x)**2+(boi.y-boj.y)**2)
          if (diff < range) {
            p.strokeWeight(thickness*(1-diff/range))
            p.line(boi.x, boi.y, boj.x, boj.y)
          }
        }
      }
      for (var i = boids.length - 1; i >= 0; i--) {
        var boi = boids[i];
        p.strokeWeight(thickness);
        p.ellipse(boi.x, boi.y, fatness);
      }
      if (f % 15 == 0) {
        if (p.random([0, 1])) {
          var a = boid(p.random([-range, p.windowWidth + range]), p.random(-range, p.windowHeight + range))
        } else {
          var a = boid(p.random(-range, p.windowWidth + range), p.random([-range, p.windowHeight + range]))
        }
        boids.push(a);
      }
    };

    p.mousePressed = () => {
      for (var i = boids.length - 1; i >= 0; i--) {
        var boi = boids[i];
        var boj = {x: p.mouseX, y: p.mouseY};
        var diff = p.sqrt((boi.x-boj.x)**2+(boi.y-boj.y)**2)
        if (diff < thickness) {
          boids.splice(i, 1);
        }
      }
    };
  }


}
