import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IconsmindComponent } from './iconsmind/iconsmind.component';

const routes: Routes = [
    {
        path: 'iconsmind',
        component: IconsmindComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule { }
