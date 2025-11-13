import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefugeService {
  private baseUrl = 'http://localhost:3000/refuges';

  constructor(private http: HttpClient) { }

  getRefuges(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getRefugeNameByEmail(mail:string): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}?refugeName=${mail}`);
  }

  getRefugeByName(name: string): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}?refugeName=${name}`);
  }

}
