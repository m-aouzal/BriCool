import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';
import { Client } from '../Interfaces/client';
import { Seller } from '../Interfaces/seller';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api';

  private userId: number;

  setUserId(id: number): void {
    this.userId = id;
  }

  getUserId(): number {
    return this.userId;
  }

  getUserType(): string {
    // Retrieve user type from local storage
    const userType = localStorage.getItem('userType');
    return userType || '';
  }

  setUserType(userType: string): void {
    // Set user type in local storage
    localStorage.setItem('userType', userType);
  }

  isSeller(): boolean {
    // Retrieve user type from local storage
    const userType = this.getUserType();
    return userType.toLowerCase() === 'seller';
  }

  getClient(): Observable<Client> {
    const clientId = this.userId;

    return this.http
      .get<Client>(`${this.baseUrl}/clients/${clientId}`)
      .pipe(
        tap((response: Client) =>
          console.log('Response from getClient:', response)
        )
      );
  }

  postClient(client: Client): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}/clients`, client);
  }

  getSeller(): Observable<Seller> {
    const sellerId = this.userId;

    return this.http
      .get<Seller>(`${this.baseUrl}/sellers/${sellerId}`)
      .pipe(
        tap((response: Seller) =>
          console.log('Response from getSeller:', response)
        )
      );
  }

  postSeller(seller: Seller): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}/sellers`, seller);
  }

  constructor(private http: HttpClient) {}
}
