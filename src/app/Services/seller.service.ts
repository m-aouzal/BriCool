import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seller } from '../Interfaces/seller';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SellerService {
  constructor(private http: HttpClient) {}
  sellerId: number = 1;
  baseurl = 'http://localhost:8080/api/sellers';

  setSellerId(id: number): void {
    this.sellerId = id;
  }
  getSellerId(): number {
    return this.sellerId;
  }

  getSeller(): Observable<Seller> {
    // Retrieve seller ID from the service or shared state
    const sellerId = this.sellerId;

    // Fetch the complete Seller object using the ID
     return this.http
       .get<Seller>(`${this.baseurl}/${sellerId}`)
       .pipe(
         tap((response: Seller) =>
           console.log('Response from getSeller:', response)
         )
       );
  }
  postSeller(employee: Seller): Observable<number> {
    return this.http.post<number>(`${this.baseurl}`, employee);
  }
}
