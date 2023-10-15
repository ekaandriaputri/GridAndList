import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TugaslistPage } from './tugaslist.page';

const routes: Routes = [
  {
    path: '',
    component: TugaslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TugaslistPageRoutingModule {}
