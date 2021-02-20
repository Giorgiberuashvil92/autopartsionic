import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {FormControl, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {LoginRes} from '../models/login.model';
import {AuthGuard} from '../auth/auth.guard';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  errMsg = '';

  // Subscriptions
  loginSubmitSub: Subscription;

  constructor(private storing: Storage,
              private authService: AuthService,
              private router: Router,
  ) { }

  ngOnInit() {
    this.initializeLoginForm();
  }

  initializeLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  onLoginFormSubmit() {
    this.loginSubmitSub = this.authService.login(this.loginForm.value).subscribe((res: LoginRes) => {
      const userData = localStorage.setItem('userData', JSON.stringify(res));
      console.log(userData);
      this.authService.setToken(res.token);
      this.authService.setEmail(res.email);
      this.authService.setLoggedIn(true);
      this.router.navigate(['/client-side']).then(r => console.log('Everything is working'));
    }, (err) => {
      this.errMsg = err.error.message;
      console.error(err);
    });
  }
}
