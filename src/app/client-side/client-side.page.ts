import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-client-side',
  templateUrl: './client-side.page.html',
  styleUrls: ['./client-side.page.scss'],
})
export class ClientSidePage implements OnInit {

  constructor(public router: Router, private menu: MenuController, private window: Window) { }

  ngOnInit() {
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  openEnd() {
    this.menu.open('end').then(r => console.log('log'));
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  deleteStore(){
    localStorage.clear();
    this.router.navigate(['/home']);
    this.router.events.pipe(filter(value => value instanceof NavigationEnd), ).subscribe(event => {
      if (!(event instanceof RouterEvent) || event.url.includes('/home')){
        this.window.location.reload();
      }
    });
  }
}
