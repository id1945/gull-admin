import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { CardsEcommerceComponent } from './cards-ecommerce/cards-ecommerce.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { ModalsComponent } from './modals/modals.component';
import { AlertsComponent } from './alerts/alerts.component';
import { CardMetricsComponent } from './card-metrics/card-metrics.component';
import { BadgesComponent } from './badges/badges.component';
import { CardWidgetsComponent } from './card-widgets/card-widgets.component';
import { LoadersComponent } from './loaders/loaders.component';
import { ButtonsLoadingComponent } from './buttons-loading/buttons-loading.component';
import { PopoverComponent } from './popover/popover.component';
import { RatingComponent } from './rating/rating.component';

const routes: Routes = [
  {
    path: 'alerts',
    component: AlertsComponent
  },
  {
    path: 'accordions',
    component: AccordionsComponent
  },
  {
    path: 'badges',
    component: BadgesComponent
  },
  {
    path: 'buttons',
    component: ButtonsComponent
  },
  {
    path: 'buttons-loading',
    component: ButtonsLoadingComponent
  },
  {
    path: 'cards',
    component: CardsComponent
  },
  {
    path: 'cards-widget',
    component: CardWidgetsComponent
  },
  {
    path: 'cards-ecommerce',
    component: CardsEcommerceComponent
  },
  {
    path: 'cards-metrics',
    component: CardMetricsComponent
  },
  {
    path: 'modals',
    component: ModalsComponent
  },
  {
    path: 'loaders',
    component: LoadersComponent
  },
  {
    path: 'popover',
    component: PopoverComponent
  },
  {
    path: 'rating',
    component: RatingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiKitsRoutingModule { }
