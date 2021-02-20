import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientSidePageRoutingModule } from './client-side-routing.module';

import { ClientSidePage } from './client-side.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientSidePageRoutingModule
  ],
  declarations: [ClientSidePage]
})
export class ClientSidePageModule {}
