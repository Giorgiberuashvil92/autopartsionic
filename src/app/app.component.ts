import { HomePage } from './home/home.page';
import {Component, OnInit} from '@angular/core';
import { StatusBarAnimationOptions } from '@capacitor/core';
import {AlertController, NavController, Platform} from '@ionic/angular';
import {AuthService} from './services/auth.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  subscribe: any;
  constructor(
    private platform: Platform,
    private allertController: AlertController,
    private authService: AuthService,
    public  route: Router,
    public navController: NavController,
  ) {
  }
  ngOnInit(){}
}
