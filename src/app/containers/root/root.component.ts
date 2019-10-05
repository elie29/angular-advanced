import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@services/user.model';
import { Store } from '@store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {
  user$: Observable<User> = this.store.select<User>('user');

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store
  ) {}

  onLogout(): void {
    this.authService.logoutUser();
    this.router.navigate(['/auth/login']);
  }
}
