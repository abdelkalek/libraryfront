import { Component, OnInit } from '@angular/core';
import {Auteur} from "../models/Auteur";
import {ActivatedRoute, Router} from "@angular/router";
import {AuteurService} from "../Services/auteur.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TypeDeLivre} from "../models/type-de-livre";
import {TypelivreService} from "../Services/typelivre.service";

@Component({
  selector: 'app-update-type-livre',
  templateUrl: './update-type-livre.component.html',
  styleUrls: ['./update-type-livre.component.scss']
})
export class UpdateTypeLivreComponent implements OnInit {

  id;
  existType: TypeDeLivre;
  constructor(private route: ActivatedRoute, private typeLivreService: TypelivreService, private router: Router) {
  }
  typeLivreFormUpdate = new FormGroup({
    designation: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.typeLivreService.getTypeDeLivreById(this.id).subscribe({
      next: (res) => {
        this.existType = res
      }, error: (err) => {

      }, complete: () => {
      }
    })
  }

  submit() {
    this.typeLivreService.EditAuteur(this.id, this.typeLivreFormUpdate
      .getRawValue()).subscribe({
      next: (res) => {
        console.log(res)
        this.router.navigate([`/dashboard/type`],).then(nav => {
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

