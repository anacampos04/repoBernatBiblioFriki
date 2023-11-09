import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibroPagePageRoutingModule } from './libro-page-routing.module';

import { LibroPagePage } from './libro-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibroPagePageRoutingModule
  ],
  declarations: [LibroPagePage]
})
export class LibroPagePageModule {}
