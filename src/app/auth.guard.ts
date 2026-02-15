import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {

    if (this.auth.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/home']);
    return false;
  }
}
