import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactGridComponent } from './contact-grid/contact-grid.component';

@NgModule({
  declarations: [ContactGridComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
