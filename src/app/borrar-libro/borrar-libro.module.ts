import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BorrarLibroPageRoutingModule } from './borrar-libro-routing.module';

import { BorrarLibroPage } from './borrar-libro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BorrarLibroPageRoutingModule
  ],
  declarations: [BorrarLibroPage]
})
export class BorrarLibroPageModule {}
