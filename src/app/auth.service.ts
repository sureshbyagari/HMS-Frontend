import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "http://localhost:8080/api/auth";
  auth: any;

  constructor(private http: HttpClient, private router: Router) {}

  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  saveToken(token: string) {
    localStorage.setItem("token", token);
  }

  saveRole(role: string) {
    localStorage.setItem("role", role);
  }

  getToken(): string | null {
    return localStorage.getItem("token");
  }

  getRole(): string | null {
    return localStorage.getItem("role");
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("username");
}
saveUsername(username: string) {
  localStorage.setItem("username", username);
}

getUsername(): string | null {
  return localStorage.getItem("username");
}




}
