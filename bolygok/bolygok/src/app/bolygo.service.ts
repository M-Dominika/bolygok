import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
 providedIn: 'root'
})
export class bolygoService {
 private apiUrl = 'http://localhost:3000/planet';
 constructor(private http: HttpClient) { }
 getplanet(): Observable<any> {
 return this.http.get<any>(this.apiUrl);
 }
 addUser(planet: { nev: string, hanyadik: number, halmazallapot: string }): Observable<any> {
 return this.http.post<any>(this.apiUrl, planet);
 }
}
