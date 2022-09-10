import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { GridViewComponent } from './grid-view/grid-view.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GridViewComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule { }
