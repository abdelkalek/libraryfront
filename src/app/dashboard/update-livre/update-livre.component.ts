import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Livre } from '../models/livre';
import {LivreService} from "../Services/livre.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {AuteurService} from "../Services/auteur.service";
import {TypelivreService} from "../Services/typelivre.service";
import {Auteur} from "../models/Auteur";
import {TypeDeLivre} from "../models/type-de-livre";

@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styleUrls: ['./update-livre.component.scss']
})
export class UpdateLivreComponent implements OnInit {
  AuteurList: Auteur[] = [];
  TypeLivreList  :  TypeDeLivre[]=[];
  existLivre: Livre;
  id;
  LivreUpdateForm = new FormGroup({
    titre: new FormControl('', [Validators.required, Validators.minLength(4)]),
    isbn: new FormControl('', [Validators.required, Validators.minLength(4)]),
    description: new FormControl('', [Validators.required, Validators.minLength(4)]),
    typeId: new FormControl('', [Validators.required, Validators.minLength(10)]),
    auteurId: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });


  constructor(private route: ActivatedRoute,private livreService : LivreService, private typeLivreService: TypelivreService, private auteurService: AuteurService , private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {this.id = params.get('id');
    });
    this.auteurService.getAllAuteurs().subscribe({
        next: (res) => {
          this.AuteurList = res
        },
        error: (err) => {
          console.log(err)
        }
      })
    this.typeLivreService.getAllTypeDeLivres().subscribe({
      next: (res) => {
        this.TypeLivreList = res
      },
      error: (err) => {
        console.log(err)
      }
    })
    this.livreService.getLivreById(this.id).subscribe({
      next: (res) => {
        this.existLivre = res
      },
      error(err) {
        console.log(err)
      }
    })
  }
    submit() {
      this.livreService.EditLivre(this.id, this.LivreUpdateForm
        .getRawValue()).subscribe({
        next: (res) => {
          console.log(res)
          this.router.navigate([`/dashboard/default`],).then(nav => {
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
