import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Seller} from "../Interfaces/seller";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  baseurl = "";
  getSeller(): Observable<any> {
    return this.http.get<any>(`${this.baseurl}`);
  }
  public postSeller(employee: Seller): Observable<Seller>{
    return this.http.post<Seller>(`${this.baseurl}`,employee)
  }
}
