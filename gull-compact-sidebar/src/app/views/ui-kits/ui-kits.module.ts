import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { UiKitsRoutingModule } from './ui-kits-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { CardsEcommerceComponent } from './cards-ecommerce/cards-ecommerce.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccordionsComponent } from './accordions/accordions.component';
import { ModalsComponent } from './modals/modals.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ToastrModule } from 'ngx-toastr';
import { CardMetricsComponent } from './card-metrics/card-metrics.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { BadgesComponent } from './badges/badges.component';
import { CardWidgetsComponent } from './card-widgets/card-widgets.component';
import { LoadersComponent } from './loaders/loaders.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { SharedDirectivesModule } from 'src/app/shared/directives/shared-directives.module';
import { ButtonsLoadingComponent } from './buttons-loading/buttons-loading.component';
import { LaddaModule } from 'angular2-ladda';
import { PopoverComponent } from './popover/popover.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToastrModule,
    NgbModule,
    NgxEchartsModule,
    SharedComponentsModule,
    SharedDirectivesModule,
    LaddaModule.forRoot({ style: 'expand-left'}),
    UiKitsRoutingModule
  ],
  declarations: [
      ButtonsComponent, 
      CardsComponent, 
      CardsEcommerceComponent, 
      AccordionsComponent, 
      ModalsComponent, 
      AlertsComponent, 
      CardMetricsComponent, 
      BadgesComponent, 
      CardWidgetsComponent, 
      LoadersComponent, 
      ButtonsLoadingComponent, 
      PopoverComponent, 
      RatingComponent
    ]
})
export class UiKitsModule { }
