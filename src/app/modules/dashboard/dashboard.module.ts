import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardSidedrawerComponent } from './components/dashboard-sidedrawer/dashboard-sidedrawer.component';


@NgModule({
  declarations: [DashboardComponent, DashboardSidedrawerComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgbModule
  ]
})
export class DashboardModule { }
