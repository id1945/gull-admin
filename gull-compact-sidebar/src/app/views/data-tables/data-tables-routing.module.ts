import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullscreenTableComponent } from './fullscreen-table/fullscreen-table.component';
import { PagingTableComponent } from './paging-table/paging-table.component';
import { FilterTableComponent } from './filter-table/filter-table.component';
import { ListPaginationComponent } from './list-pagination/list-pagination.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListPaginationComponent
  },
  {
    path: 'full',
    component: FullscreenTableComponent
  },
  {
    path: 'paging',
    component: PagingTableComponent
  },
  {
    path: 'filter',
    component: FilterTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataTablesRoutingModule { }
