import {Component, OnInit} from '@angular/core';
import {Auteur} from "../models/Auteur";
import {TypeDeLivre} from "../models/type-de-livre";
import {LivreService} from "../Services/livre.service";
import {TypelivreService} from "../Services/typelivre.service";
import {AuteurService} from "../Services/auteur.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeService} from "../Services/employe.service";

@Component({
  selector: 'app-ajouter-employe',
  templateUrl: './ajouter-employe.component.html',
  styleUrls: ['./ajouter-employe.component.scss']
})
export class AjouterEmployeComponent implements OnInit {
  constructor(private emService: EmployeService, private router: Router) {
  }

  EmployeForm = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(4)]),
    prenom: new FormControl('', [Validators.required, Validators.minLength(4)]),
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.minLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  ngOnInit(): void {

  }

  submit() {
    this.emService.saveNewEmploye(this.EmployeForm.getRawValue()).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    })
    this.router.navigate([`/dashboard/employe`],).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });

  }
}
