import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {clientModel} from '../models/registration.model';
import {error} from '@angular/compiler/src/util';
import {environment} from '../../environments/environment';
import {LoginReq, LoginRes} from '../models/login.model';
import {Platform} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authTokenStorageKey = '';
  private emailStorageKey = 'AutoPartsEmailStorageKey';
  public  adminAuthTokeStorageKey = 'adminAuthToken';
  public loggedIn: boolean;
  private urlSuffix =  environment.API_URL + '/auth';
  public tokenValid: any;
  constructor(private httpClient: HttpClient, private platform: Platform) {
    this.tokenValid = localStorage.getItem(this.authTokenStorageKey);
  }


  login(loginBody: LoginReq): Observable<LoginRes> {
    return this.httpClient.post<LoginRes>(this.urlSuffix + '/login', loginBody);
  }

  register(registerBody: clientModel): Observable<clientModel> {
    return this.httpClient.post<clientModel>(this.urlSuffix + '/register', registerBody);
  }

  logout() {
    this.loggedIn = false;
    localStorage.removeItem(this.authTokenStorageKey);
    localStorage.removeItem(this.emailStorageKey);
  }

  setToken(token: string): void {
    localStorage.setItem(this.authTokenStorageKey, token);
  }

  getToken(){
    return this.tokenValid;
  }
  get isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setLoggedIn(state: boolean): void {
    this.loggedIn = state;
  }

  get email(): string {
    return localStorage.getItem(this.emailStorageKey);
  }

  setEmail(email: string) {
    localStorage.setItem(this.emailStorageKey, email);
  }

}
