import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { OnInit } from '@angular/core';
import { UsersloginService } from './Services/users.login.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    HomeComponent,
    FlexLayoutModule,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  pageNotFound: boolean = false;
  pageSignUp: boolean = false;
  isAuthenticated = false;
  userSub: Subscription;
  constructor(
    private router: Router,
    private userLoginService: UsersloginService
  ) {}
  ngOnInit() {
    this.userLoginService.autoLogin();
    this.userSub = this.userLoginService.userSubject.subscribe((user) => {
      console.log('user', user);
      this.isAuthenticated = !!user;
      console.log('!user', !user);
    });
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.pageNotFound = event.urlAfterRedirects.includes('404');
        this.pageSignUp = event.urlAfterRedirects.includes('signUp');
      });
  }
  navigateToSignupSeller() {
    this.router.navigate(['/signUp/seller']);
  }
  navigateToHomePage() {
    this.router.navigate(['/home']);
  }
  onLogout() {
    this.userLoginService.logout();
  }
}
