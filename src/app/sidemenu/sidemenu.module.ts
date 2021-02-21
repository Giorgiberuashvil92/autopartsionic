import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SidemenuPageRoutingModule } from './sidemenu-routing.module';

import { SidemenuPage } from './sidemenu.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SidemenuPageRoutingModule
    ],
    exports: [
        SidemenuPage
    ],
    declarations: [SidemenuPage]
})
export class SidemenuPageModule {}
