import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { updateProfile } from '@firebase/auth';
import { BehaviorSubject, forkJoin, from, switchMap } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { SigninCredentials, SignupCredentials } from "../Interfaces/auth.model"
import { environment } from "../../environments/environment.development"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authState = new BehaviorSubject<Object | null>(null);

  readonly isLoggedIn$ = authState(this.auth);

  constructor(private auth: Auth, private http: HttpClient) { }

  
  getCurrentUser() {
    return this.auth.currentUser!;
  }

  signIn({ email, password }: SigninCredentials) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  signUp({ email, password, displayName }: SignupCredentials) {
    return from(createUserWithEmailAndPassword(this.auth, email, password))
  }

  signOut() {
    const user = this.auth.currentUser;
    return from(this.auth.signOut())
  }
}
