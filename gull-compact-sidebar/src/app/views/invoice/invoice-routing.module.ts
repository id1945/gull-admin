import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';

const routes: Routes = [
    {
        path: '',
        component: InvoiceListComponent
    },
    {
        path: 'new',
        component: InvoiceDetailComponent
    },
    {
        path: 'edit/:id',
        component: InvoiceDetailComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
