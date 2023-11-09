import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisPrestamosPagePageRoutingModule } from './mis-prestamos-page-routing.module';

import { MisPrestamosPagePage } from './mis-prestamos-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisPrestamosPagePageRoutingModule
  ],
  declarations: [MisPrestamosPagePage]
})
export class MisPrestamosPagePageModule {}
