import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormContainerComponent } from './form-container/form-container.component';
import { UserService } from '../Services/user.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-signin',
  standalone: true,
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDividerModule,
    RouterModule,
    MatSnackBarModule,
    FormContainerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SigninComponent implements OnInit {
  form!: FormGroup;
  email: string = '';
  constructor(
    private auth: AuthService,
    private router: Router,
    private snackbar: MatSnackBar,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email]),
      password: new FormControl('', [Validators.minLength(6)]),
    });
  }

  signIn() {
    this.email = this.form.value.email;

    this.auth
      .signIn(this.form.value)
      .pipe(switchMap(() => this.userService.getUserIdByEmail(this.email)))
      .subscribe({
        next: (userId) => {
          this.userService.setUserId(userId);
          console.log('user id is ' + userId);
          this.router.navigate(['home']);
        },
        error: (error) => this.snackbar.open(error.message),
      });
  }
}
