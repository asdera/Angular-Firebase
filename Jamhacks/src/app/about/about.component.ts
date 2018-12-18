import { Component, OnInit } from '@angular/core';

import * as p5 from 'p5';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  private p5;
  constructor() { }

  ngOnInit() {
    //this.createCanvas();
  }
  
  private createCanvas() {
    this.p5 = new p5(this.sketch);
  }
  
  private sketch(p: any) {
    p.setup = () => {
      p.createCanvas(700, 600);
      p.background(0);
    };
  
    p.draw = () => {
      p.background(0);
      p.fill(255);
      p.rect(p.width / 2, p.height / 2, 50, 50);
    };
  }


}
