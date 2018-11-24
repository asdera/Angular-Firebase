import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';


@Component({
  selector: 'app-painter-detail',
  templateUrl: './painter-detail.component.html',
  styleUrls: ['./painter-detail.component.css']
})
export class PainterDetailComponent implements OnInit {
  painter$;
  constructor(private afs: AngularFirestore, private route: ActivatedRoute) { }

  ngOnInit() {
    this.painter$ = this.route.data.pipe(map(val => val[0]));
  }
}
