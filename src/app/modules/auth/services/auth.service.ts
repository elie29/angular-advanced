import { Injectable } from '@angular/core';

// needed in app and auth
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUser(email: string, password: string): boolean {
    if (email === 'admin@admin.com' && password === 'admin') {
      localStorage.setItem('user', email);
      return true;
    }
    return false;
  }

  logoutUser(): boolean {
    localStorage.removeItem('user');
    return true;
  }
}
