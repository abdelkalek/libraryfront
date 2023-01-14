import { Component, OnInit } from '@angular/core';
import {LivreService} from "../Services/livre.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TypelivreService} from "../Services/typelivre.service";
import {AuteurService} from "../Services/auteur.service";
import { Auteur } from '../models/Auteur';
import {TypeDeLivre} from "../models/type-de-livre";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajout-livre',
  templateUrl: './ajout-livre.component.html',
  styleUrls: ['./ajout-livre.component.scss']
})
export class AjoutLivreComponent implements OnInit {
  AuteurList: Auteur[] = [];
  TypeLivreList  :  TypeDeLivre[]=[];

  constructor(private livreService : LivreService, private typeLivreService: TypelivreService, private auteurService: AuteurService , private router: Router) { }
  LivreForm = new FormGroup({
    titre :  new FormControl('', [Validators.required, Validators.minLength(4)]),
    isbn:  new FormControl('', [Validators.required, Validators.minLength(4)]),
    description:  new FormControl('', [Validators.required, Validators.minLength(4)]),
    typeId:  new FormControl('', [Validators.required, Validators.minLength(10)]),
    auteurId:  new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
  ngOnInit(): void {
    this.auteurService.getAllAuteurs().subscribe(
      {
        next:(res)=>{
          this.AuteurList = res
        },
        error:(err)=>{
          console.log(err)
        }
      }
    )
    this.typeLivreService.getAllTypeDeLivres().subscribe({
      next:(res)=>{
        this.TypeLivreList = res
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  submit() {
    this.livreService.saveNewLivre(this.LivreForm.getRawValue()).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        console.log(err)
      }
    })
    this.router.navigate([`/dashboard/default`],).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });

  }


}
