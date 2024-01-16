import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../Interfaces/client';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}
  clientId: number;
  baseurl = 'http://localhost:8080/api/clients';

  setClientId(id: number): void {
    this.clientId = id;
  }
  getClientId(): number {
    return this.clientId;
  }

  getClient(): Observable<Client> {
    // Retrieve client ID from the service or shared state
    const clientId = this.clientId;

    // Fetch the complete Client object using the ID
    return this.http
      .get<Client>(`${this.baseurl}/${clientId}`)
      .pipe(
        tap((response: Client) =>
          console.log('Response from getClient:', response)
        )
      );
  }
  postClient(employee: Client): Observable<number> {
    return this.http.post<number>(`${this.baseurl}`, employee);
  }
}
