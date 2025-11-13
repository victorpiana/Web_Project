import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/refuges';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.baseUrl}?email=${email}&password=${password}`).pipe(
      map(refuges => {
        if (refuges.length > 0) {
          const refuge = refuges[0];
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('userEmail', email);
          localStorage.setItem('refugeName', refuge.refugeName);
          localStorage.setItem('refugePhoto', refuge.photo);
          return true;
        } else {
          return false;
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('refugeName');
    localStorage.removeItem('refugePhoto');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  getRefugeName(): string | null {
    return localStorage.getItem('refugeName');
  }

  getRefugePhoto(): string | null {
    return localStorage.getItem('refugePhoto');
  }

  getAuthenticatedUser(): string | null {
    return localStorage.getItem('userEmail');
  }
}
