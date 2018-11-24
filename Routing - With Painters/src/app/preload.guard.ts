import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class PreloadGuard implements Resolve<any> {
  constructor(private afs: AngularFirestore, private router: Router) {}

  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const name = next.paramMap.get('name');
    return this.afs
      .doc('Painters/' + name)
      .valueChanges()
      .pipe(
        first()
      );
  }
}