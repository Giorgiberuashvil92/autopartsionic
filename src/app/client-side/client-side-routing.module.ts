import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientSidePage } from './client-side.page';

const routes: Routes = [
  {
    path: '',
    component: ClientSidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientSidePageRoutingModule {}
