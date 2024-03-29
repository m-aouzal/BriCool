import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';
import { Client } from '../Interfaces/client';
import { Seller } from '../Interfaces/seller';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api';

  private userId: number;

  setUserId(id: number): void {
    this.userId = id;
    localStorage.setItem('userId', id.toString());
  }

  getUserId(): number {
    const userIdString = localStorage.getItem('userId');
    return userIdString ? +userIdString : null;
  }
  getUserIdByEmail(email: string): Observable<number> {
    return this.http
      .get<Seller>(`${this.baseUrl}/sellers/search?email=${email}`)
      .pipe(
        map((seller: Seller) => {
          // Store the user ID and set user type in local storage
          this.setUserId(seller.sellerId);
          this.setUserType('seller');
          return seller.sellerId;
        })
      );
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
    const clientId = this.getUserId();

    return this.http
      .get<Client>(`${this.baseUrl}/clients/${clientId}`)
      .pipe(
        tap((response: Client) =>
          console.log('Response from getClient:', response)
        )
      );
  }

  postClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.baseUrl}/clients`, client);
  }

  getSeller(): Observable<Seller> {
    const sellerId = this.getUserId();

    return this.http
      .get<Seller>(`${this.baseUrl}/sellers/${sellerId}`)
      .pipe(
        tap((response: Seller) =>
          console.log('Response from getSeller:', response)
        )
      );
  }

  postSeller(seller: Seller): Observable<Seller> {
    return this.http.post<Seller>(`${this.baseUrl}/sellers`, seller);
  }
  putSeller(sellerId: string, seller: Seller): Observable<Seller> {
    const url = `${this.baseUrl}/sellers/${sellerId}`;
    return this.http.put<Seller>(url, seller);
  }

  constructor(private http: HttpClient) {}
}
