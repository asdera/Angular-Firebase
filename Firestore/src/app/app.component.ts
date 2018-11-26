import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

interface Note {
  content: string;
  hearts: number;
  id?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Firestore';
  notesCollection: AngularFirestoreCollection<Note>;
  noteDoc: AngularFirestoreDocument<Note>;
  notes: Observable<Note[]>;
  note: Observable<Note>;
  // snapshot: any;
  newContent: string;

  constructor(private afs: AngularFirestore) {}
  
  ngOnInit() {
    // this.notesCollection = this.afs.collection('notes', ref => {
    //   // return ref.orderBy('hearts', 'desc').limit(9).orderBy('content');
    //   return ref.where('hearts', '==', 30).orderBy('content')
    // })
    // this.notes = this.notesCollection.valueChanges()
    // this.snapshot = this.notesCollection.snapshotChanges()
    this.noteDoc = this.afs.doc('notes/MxNBeR4bxUypKVGbcFSt')
    this.note = this.noteDoc.valueChanges()
  }

  updateContent() {
    this.noteDoc.update({content: this.newContent})
  }

}
