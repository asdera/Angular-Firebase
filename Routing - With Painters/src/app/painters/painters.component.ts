import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-painters',
  templateUrl: './painters.component.html',
  styleUrls: ['./painters.component.css']
})
export class PaintersComponent implements OnInit {
  painters$;
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.painters$ = this.afs.collection('Painters').valueChanges();
  }

}
