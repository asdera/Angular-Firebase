import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// import * as p5 from 'p5';

import * as JSZip from 'jszip';

interface Picture {
  url: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  archive: Picture[] = [];
  row: Number[] = [0, 6, 12, 18, 24, 30];
  zip: JSZip = JSZip();
  constructor() {
  }

  ngOnInit() {
    console.log(this.archive)
    for (var i=0; i<40; i++) {
      this.archive.push({url: "/assets/archive/DSC_"+i+".JPG"});
    }
    this.archive = this.shuffle(this.archive);
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
