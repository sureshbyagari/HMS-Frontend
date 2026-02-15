import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; // Import this safety check
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

declare var bootstrap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  username: string = "";
  role: string = "";
  isLoggedIn: boolean = false;

  // We "inject" the Platform ID to check if we are in a browser or on a server
  constructor(
    private auth: AuthService, 
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    // Only load user data if we are in the browser
    if (isPlatformBrowser(this.platformId)) {
      this.loadUser();
    }
  }

  ngAfterViewInit(): void {
    // Only start the carousel if we are in the browser
    if (isPlatformBrowser(this.platformId)) {
      this.startCarousel();
    }
  }

  startCarousel() {
    const myCarouselElement = document.querySelector('#heroCarousel');
    if (myCarouselElement) {
      const carousel = new bootstrap.Carousel(myCarouselElement, {
        interval: 3000,
        ride: 'carousel',
        pause: 'hover'
      });
      carousel.cycle();
    }
  }

  loadUser() {
    this.isLoggedIn = this.auth.isLoggedIn();
    this.username = this.auth.getUsername() || "";
    this.role = this.auth.getRole() || "";
  }

  goToDashboard() {
    if (this.role === "ADMIN") {
      this.router.navigate(['/admindash']);
    } else if (this.role === "DOCTOR") {
      this.router.navigate(['/docdash']);
    }
  }

  logout() {
    const confirmLogout = confirm("Do you want to logout?");
    if (confirmLogout) {
      this.auth.logout();
      this.router.navigate(['/home']);
      this.loadUser();
    }
  }
}