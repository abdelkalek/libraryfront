import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import {AjoutLivreComponent} from "./ajout-livre/ajout-livre.component";
import {AuteurComponent} from "./auteur/auteur.component";
import {TypeLivreComponent} from "./type-livre/type-livre.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'default',
        component: DefaultComponent,
        data: {
          title: 'Livre '
        }
      }, {
        path: 'addlivre',
        component: AjoutLivreComponent,
        data: {
          title: 'addlivre'
        }
      },

      {
        path: 'Auteur',
        component: AuteurComponent,
        data: {
          title: 'Auteur'
        }
      },
      {
        path: 'type',
        component: TypeLivreComponent,
        data: {
          title: 'type livre'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
