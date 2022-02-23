import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsRoutingModule } from './icons-routing.module';
import { IconsmindComponent } from './iconsmind/iconsmind.component';

@NgModule({
  imports: [
    CommonModule,
    IconsRoutingModule
  ],
  declarations: [IconsmindComponent]
})
export class IconsModule { }
