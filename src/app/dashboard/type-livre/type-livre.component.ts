import { Component, OnInit } from '@angular/core';
import {Auteur} from "../models/Auteur";
import {AuteurService} from "../Services/auteur.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TypeDeLivre} from "../models/type-de-livre";
import {TypelivreService} from "../Services/typelivre.service";

@Component({
  selector: 'app-type-livre',
  templateUrl: './type-livre.component.html',
  styleUrls: ['./type-livre.component.scss']
})
export class TypeLivreComponent implements OnInit {

  TypeLivreTab: TypeDeLivre[] = [];

  constructor(private typeService : TypelivreService , private router: Router, private route: ActivatedRoute ) { }
  typelivreForm = new FormGroup({
    designation: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });
  ngOnInit(): void {
    this.typeService.getAllTypeDeLivres().subscribe({
      next: (x) =>{
        this.TypeLivreTab = x
      },
      error:(e)=>{},
      complete: () =>{}
    })
  }
  submit() {
    if (!this.typelivreForm.valid) {
      return
    }
    this.typeService.saveNewTypeDeLivre(this.typelivreForm.getRawValue()).subscribe({
      next: (x) =>{
        console.log(x)
        this.ngOnInit();
      },
      error:(e)=>{
        console.log(e)
      },
      complete: () =>{}})
    console.log(this.typelivreForm.getRawValue())
  }
  delete(id){
    this.typeService.deleteAutherByid(id).subscribe({
      next: (x) =>{
        console.log(x)
        this.ngOnInit();
      },
      error:(e)=>{
        console.log(e)
      },
      complete: () =>{}
    })
  }
  update(id) {
    console.log('Edit auteur', id)
    this.router.navigate([`../updatetype/${id}`], {relativeTo: this.route}) .then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });

  }


}
