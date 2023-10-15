import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TugaslistPageRoutingModule } from './tugaslist-routing.module';

import { TugaslistPage } from './tugaslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TugaslistPageRoutingModule
  ],
  declarations: [TugaslistPage]
})
export class TugaslistPageModule {}
