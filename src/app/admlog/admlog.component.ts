import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-adminlog',
  templateUrl: './admlog.component.html',
  styleUrls: ['./admlog.component.css']
})
export class AdmlogComponent
 {

  loginData = {
    username: '',
    password: ''
  };

  errorMsg = '';

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {

  
    this.errorMsg = '';

    this.auth.login(this.loginData).subscribe({
      next: (res: any) => {

        // Save token + role
        this.auth.saveToken(res.token);
        this.auth.saveRole(res.role);
        this.auth.saveUsername(this.loginData.username);


        // Allow only ADMIN
        if (res.role === "ADMIN") {
          this.router.navigate(['/admindash']);
        } else {
          this.errorMsg = "Invalid Admin credentials!";
          this.auth.logout();
        }
      },

      error: () => {
        this.errorMsg = "Invalid username or password!";
      }
    });
  }
}
