import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientSidePageRoutingModule } from './client-side-routing.module';

import { ClientSidePage } from './client-side.page';
import {SidemenuPageModule} from '../sidemenu/sidemenu.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ClientSidePageRoutingModule,
        SidemenuPageModule
    ],
  declarations: [ClientSidePage]
})
export class ClientSidePageModule {}
