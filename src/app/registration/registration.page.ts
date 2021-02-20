import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
import {RegisterRes} from '../models/registration.model';
import { Storage } from '@ionic/storage';
import {CookieService} from 'ngx-cookie-service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  registerForm: FormGroup;
  errMsg = '';

  // Subscriptions
  registerSubmitSub: Subscription;

  constructor(private authService: AuthService,
              private router: Router,
              private alertController: AlertController,
              private storing: Storage,
              private cookieservice: CookieService
  ) { }

  ngOnInit() {
    this.initializeRegisterForm();
  }

  initializeRegisterForm() {
    this.registerForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(63)]),
      email: new FormControl(null, [Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(63)]),
      username: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(63)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(63)]),
      phone: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(63)]),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(63)])
    });
  }

  // initializeRegisterForm() {
  //     this.registerForm = new FormGroup({
  //       name: new FormControl(null, ),
  //       lastName: new FormControl(null, ),
  //       userName: new FormControl(null, ),
  //       email: new  FormControl(null, ),
  //       password: new FormControl(null, ),
  //       phone: new FormControl(null, )
  //     });
  //   }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'თქვენ წარმატებით გაიარეთ რეგისტრაცია',
      mode: 'ios',
      animated: true,
      buttons: [
        {
          text: 'გათიშვა',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.router.navigate(['/home']);
          }
        }, {
          text: 'ავტორიზაცია',
          handler: () => {
            this.storing.set('auth', 'auth');
            this.cookieservice.set('auth', 'true');
            this.router.navigate(['/login']);
          }
        }
      ]
    });

    await alert.present();
  }

  onRegisterFormSubmit() {
   this.authService.register(this.registerForm.value).subscribe(articles => {
     if (articles) {
       this.presentAlertConfirm().then(r => {
         console.log('Working');
       });
     }
     // this.router.navigate(['/login']);
   }, (err) => {
     this.errMsg = err.error.message;
     }
   );
  }
}
