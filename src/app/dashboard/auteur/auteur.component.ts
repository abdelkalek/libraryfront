import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { Auteur } from '../models/Auteur';
import {AuteurService} from "../Services/auteur.service";

@Component({
  selector: 'app-auteur',
  templateUrl: './auteur.component.html',
  styleUrls: ['./auteur.component.scss']
})
export class AuteurComponent implements OnInit {
  AuteurTab: Auteur[] = [];

  constructor(private auteurService : AuteurService  ) { }
  AuteurForm = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(4)]),
    prenom: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });
  ngOnInit(): void {
    this.auteurService.getAllAuteurs().subscribe({
      next: (x) =>{
       this.AuteurTab = x
      },
      error:(e)=>{},
      complete: () =>{}
    })
  }
  submit() {
    if (!this.AuteurForm.valid) {
      return
    }
    this.auteurService.saveNewAuther(this.AuteurForm.getRawValue()).subscribe({
      next: (x) =>{
        console.log(x)
        this.ngOnInit();
      },
      error:(e)=>{
        console.log(e)
      },
      complete: () =>{}})
    console.log(this.AuteurForm.getRawValue())
  }
  delete(id){
    this.auteurService.deleteAutherByid(id).subscribe({
      next: (x) =>{
        console.log(x)
      },
      error:(e)=>{
        console.log(e)
      },
      complete: () =>{}
    })
  }
}
