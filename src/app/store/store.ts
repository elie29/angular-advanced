import { Injectable } from '@angular/core';
import { User } from '@services/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';

export interface State {
  user: User;
  [name: string]: any; // for selection purpose
}

const state: State = {
  user: null
};

@Injectable({
  providedIn: 'root'
})
export class Store {
  private store = new BehaviorSubject<State>(state);

  // Get the whole state
  get value(): State {
    return this.store.value;
  }

  // Watch for a value change in the state
  select<T>(name: string): Observable<T> {
    return this.store.pipe(
      pluck(name),
      distinctUntilChanged<T>()
    );
  }

  // Set a value in the state
  set(name: string, value: any): void {
    // Immutable change
    this.store.next({ ...this.value, [name]: value });
  }

  // Take a value from the state
  get(name: string): any {
    return this.value[name];
  }
}
