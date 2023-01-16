import { Component, OnInit } from '@angular/core';
import {EmployeService} from "../Services/employe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuteurService} from "../Services/auteur.service";
import { Employe } from '../models/employe';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrls: ['./update-employe.component.scss']
})
export class UpdateEmployeComponent implements OnInit {
  id;
existEmployer: Employe = null;
  constructor(private route: ActivatedRoute,private emService: EmployeService, private router: Router,) {}
  EmployeUpdateForm = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(4)]),
    prenom: new FormControl('', [Validators.required, Validators.minLength(4)]),
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.minLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.emService.getEmployeById(this.id).subscribe({
      next: (res) => {
        this.existEmployer = res
      }, error: (err) => {
      }, complete: () => {
      }
    })
  }


  submit() {
    this.emService.EditEmploye(this.id,this.EmployeUpdateForm.getRawValue()).subscribe({
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
