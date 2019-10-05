import { Injectable } from '@angular/core';
import { createUser, User } from '@services/user.model';
import { Store } from '@store';

const ADMIN = 'admin@admin.com';

// needed in app and auth
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private store: Store) {}

  loginUser(email: string, password: string): boolean {
    const user = this.login(email, password);
    this.store.set('user', user);
    return user !== null;
  }

  logoutUser(): boolean {
    this.store.set('user', null);
    localStorage.removeItem('user');
    return true;
  }

  checkUserInLocalStorage(): void {
    const email = localStorage.getItem('user');
    if (email === ADMIN) {
      this.store.set('user', createUser(email));
    }
  }

  private login(email: string, password: string): User | null {
    if (email === ADMIN && password === 'admin') {
      localStorage.setItem('user', email);
      return createUser(email);
    }
    return null;
  }
}
