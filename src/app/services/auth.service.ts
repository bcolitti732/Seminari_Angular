import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = "https://reqres.in/api/login";
  private registerUrl = "https://reqres.in/api/register"; 

  constructor(private http: HttpClient) { }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(this.loginUrl, credentials);
  }

  register(userData: { name: string; age: number; email: string; password: string }): Observable<any> {
    return this.http.post(this.registerUrl, userData);
  }
  
}
