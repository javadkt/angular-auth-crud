import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://dummyapi.io/login'; // Replace with actual API URL
  private tokenKey = 'authToken'; // Key for storing the token

  constructor(private http: HttpClient) { }

  // Method to login user
  login(username: string, password: string): Observable<any> {
    // Replace with actual API call
    return this.http.post<any>(this.apiUrl, { username, password });
  }

  // Method to store authentication token
/*  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }*/

  // Method to check if user is authenticated
  isAuthenticated(): boolean {
    // Check if token exists in local storage
    return !!localStorage.getItem(this.tokenKey);
  }

  // Method to logout user
  /*logout(): void {
    localStorage.removeItem(this.tokenKey);
  }*/
}
