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
import { AjouterEmployeComponent } from './ajouter-employe/ajouter-employe.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UpdateAuteurComponent } from './update-auteur/update-auteur.component';
import { UpdateTypeLivreComponent } from './update-type-livre/update-type-livre.component';
import { UpdateLivreComponent } from './update-livre/update-livre.component';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';



@NgModule({
  declarations: [
     DefaultComponent, AuteurComponent, AjoutLivreComponent, TypeLivreComponent, EmployeComponent,  AjouterEmployeComponent, UpdateAuteurComponent, UpdateTypeLivreComponent, UpdateLivreComponent, UpdateEmployeComponent
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
