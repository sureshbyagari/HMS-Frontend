import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {

    // If already logged in, block login page
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/home']);   // ✅ redirect to HOME (not dashboard)
      return false;
    }

    return true;
  }
}
