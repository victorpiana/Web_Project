import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private baseUrl = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) { }

  getAnimals(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getAnimalById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  getAnimalsBySpecies(species: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}?espece=${species}`);
  }

  getAnimalsByRefuge(refugeName: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}?refugeName=${refugeName}`);
  }

  getAnimalsWithFilters(filters: any): Observable<any[]> {
    let params = new HttpParams();
    if (filters.species) {
      params = params.set('espece', filters.species);
    }
    if (filters.refugeName) {
      params = params.set('refugeName', filters.refugeName);
    }
    if (filters.age !== null) {
      params = params.set('age', filters.age);
    }
    if (filters.sex) {
      params = params.set('sexe', filters.sex);
    }
    return this.http.get<any[]>(this.baseUrl, { params: params });
  }

  addAnimal(animal: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, animal);
  }
}