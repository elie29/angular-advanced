import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { User } from '@services/user.model';
import { Store } from '@store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select<User>('user').pipe(
      tap(next => console.log(next)),
      map(user => user && user.authenticated),
      map(authenticated => {
        if (!authenticated) {
          this.router.navigate(['/auth/login']);
        }
        return authenticated;
      })
    );
  }
}
