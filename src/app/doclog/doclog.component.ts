import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-doclog',
  templateUrl: './doclog.component.html',
  styleUrls: ['./doclog.component.css']
})
export class DoclogComponent {

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

      this.auth.saveToken(res.token);
      this.auth.saveRole(res.role);
      this.auth.saveUsername(this.loginData.username);

      if (res.role === "DOCTOR") {
        this.router.navigate(['/docdash']);
      } else {
        this.errorMsg = "Invalid Doctor credentials!";
        this.auth.logout();
      }


    },
    error: () => {
      this.errorMsg = "Invalid username or password!";
    }
  });
}

}
