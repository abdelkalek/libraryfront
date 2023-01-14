import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from '@angular/router';
import {Auteur} from '../models/Auteur';
import {AuteurService} from '../Services/auteur.service';

@Component({
  selector: 'app-update-auteur',
  templateUrl: './update-auteur.component.html',
  styleUrls: ['./update-auteur.component.scss']
})
export class UpdateAuteurComponent implements OnInit {
  id;
  existAuteur: Auteur;
  constructor(private route: ActivatedRoute, private auteurService: AuteurService, private router: Router,) {
  }AuteurFormUpdate = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(4)]),
    prenom: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.auteurService.getAuteurById(this.id).subscribe({
      next: (res) => {
        this.existAuteur = res
      }, error: (err) => {

      }, complete: () => {
      }
    })
  }

  submit() {
    this.auteurService.EditAuteur(this.id, this.AuteurFormUpdate
      .getRawValue()).subscribe({
      next: (res) => {
        console.log(res)
        this.router.navigate([`/dashboard/Auteur`],).then(nav => {
          console.log(nav); // true if navigation is successful
        }, err => {
          console.log(err) // when there's an error
        });

      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
