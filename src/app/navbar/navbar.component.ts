import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  refugeName: string | null = null;
  refugePhoto: string | null = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.refugeName = this.authService.getRefugeName();
      this.refugePhoto = this.authService.getRefugePhoto();
    }
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  logout(): void {
    this.authService.logout();
    window.location.reload();
  }
}
