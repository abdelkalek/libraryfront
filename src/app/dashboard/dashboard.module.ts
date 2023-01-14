import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighchartsChartModule } from 'highcharts-angular';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { DefaultComponent } from './default/default.component';
import { AuteurComponent } from './auteur/auteur.component';
import { AjoutLivreComponent } from './ajout-livre/ajout-livre.component';
import { TypeLivreComponent } from './type-livre/type-livre.component';
import { EmployeComponent } from './employe/employe.component';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { AjouterEmployeComponent } from './ajouter-employe/ajouter-employe.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
     DefaultComponent, AuteurComponent, AjoutLivreComponent, TypeLivreComponent, EmployeComponent, AddEmployeComponent, AjouterEmployeComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        PerfectScrollbarModule,
        HighchartsChartModule,
        ReactiveFormsModule
    ]
})
export class DashboardModule { }
