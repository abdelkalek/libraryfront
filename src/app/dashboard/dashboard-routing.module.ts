import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import {AjoutLivreComponent} from "./ajout-livre/ajout-livre.component";
import {AuteurComponent} from "./auteur/auteur.component";
import {TypeLivreComponent} from "./type-livre/type-livre.component";
import {UpdateAuteurComponent} from "./update-auteur/update-auteur.component";
import {UpdateTypeLivreComponent} from "./update-type-livre/update-type-livre.component";
import {UpdateLivreComponent} from "./update-livre/update-livre.component";
import {AjouterEmployeComponent} from "./ajouter-employe/ajouter-employe.component";
import {EmployeComponent} from "./employe/employe.component";
import {UpdateEmployeComponent} from "./update-employe/update-employe.component";
import {AuthGuard} from "../auth/sign-in/auth.guard";

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
        path: 'updatelivre/:id',
        component: UpdateLivreComponent,
        data: {
          title: 'Modifier Livre'
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
        path: 'updateauteur/:id',
        component: UpdateAuteurComponent,
        data: {
          title: 'Modifier auteur'
        }
      },
      {
        path: 'type',
        component: TypeLivreComponent,
        data: {
          title: 'type livre'
        }
      },
      {
        path: 'updatetype/:id',
        component: UpdateTypeLivreComponent,
        data: {
          title: 'updatetype'
        }
      }
      ,
      {
        path: 'employe',
        component: EmployeComponent,
        data: {
          title: 'Employe'
        }
      },
      {
        path: 'updateemploye/:id',
        component: UpdateEmployeComponent,
        data: {
          title: 'Modifier employe'
        }
      },
      {
        path: 'ajouter-employe',
        component: AjouterEmployeComponent,
        data: {
          title: 'Ajouter Employe'
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
