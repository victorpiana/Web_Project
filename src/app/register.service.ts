import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseUrl = 'http://localhost:3000/refuges';

  constructor(private http: HttpClient) { }

  addRefuge(refuge: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, refuge);
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.baseUrl).pipe(
      map(refuges => {
        const refuge = refuges.find(r => r.email === email && r.password === password);
        return refuge !== undefined;
      })
    );
  }
}
