
import {Component, OnInit} from '@angular/core';
import {AlertController, Platform} from '@ionic/angular';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  subscribe: any;
  constructor(
    private platform: Platform,
    private alertController: AlertController,
    private authService: AuthService,
    public  route: Router,
    public window: Window,
  ) {
    setTimeout(() => {
      if (this.authService.getToken()){
        this.route.navigate(['client-side']).then(r => console.log(r));
      } else {
        this.route.navigate(['home']).then(r => console.log(r));
      }
    });
  }
  ngOnInit(){}
}
