import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userEmail: string | null = null;
  refugeName: string = '';
  animals: any[] = [];

  constructor(
    private authService: AuthService, 
    private router: Router,
    private animalService: AnimalService,
  ) {}

  ngOnInit(): void {
    this.userEmail = this.authService.getAuthenticatedUser();
    this.refugeName = this.authService.getRefugeName() ?? ''; 
    this.loadAnimals();
  }

  loadAnimals(): void {
    this.animalService.getAnimalsByRefuge(this.refugeName).subscribe(data => {
      this.animals = data;
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
