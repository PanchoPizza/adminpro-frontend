import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { PagesRoutingModule } from './pages.routing';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



@NgModule({
  declarations: [
    ProgressComponent,
    Grafica1Component,
    DashboardComponent,
    PagesComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent],

    exports: [ 
      ProgressComponent,
      Grafica1Component,
      DashboardComponent,
      PagesComponent,
      AccountSettingsComponent],
  imports: [
    CommonModule, SharedModule, RouterModule, FormsModule, ComponentsModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
