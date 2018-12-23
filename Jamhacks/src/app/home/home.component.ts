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
  zip: JSZip = JSZip();
  constructor() {
  }

  ngOnInit() {
    console.log(this.archive)
    for (var i=0; i<40; i++) {
      this.archive.push({url: "/assets/archive/DSC_"+i+".JPG"});
    }
    console.log(this.archive)
  }

}
