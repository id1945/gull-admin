import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactGridComponent } from './contact-grid/contact-grid.component';

const routes: Routes = [
  {
    path: 'grid',
    component: ContactGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
