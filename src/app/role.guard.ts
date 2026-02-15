
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {

    const role = this.auth.getRole();

    // If no role found
    if (!role) {
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }
}
