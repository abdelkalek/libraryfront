import { Component, OnInit } from '@angular/core';
import {Livre} from "../models/livre";
import {ActivatedRoute, Router} from "@angular/router";
import {LivreService} from "../Services/livre.service";
import { Employe } from '../models/employe';
import {EmployeService} from "../Services/employe.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.scss']
})
export class EmployeComponent implements OnInit {

  EmployeList: Employe[] =[]
  constructor( private route: ActivatedRoute, private router: Router ,private emService : EmployeService) { }

  ngOnInit(): void {
    this.emService.getAllEmploye().subscribe({
      next:(res)=>{
        this.EmployeList = res
        console.log(res)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  update(id: string) {
    console.log('Edit auteur', id)
    this.router.navigate([`../updateemploye/${id}`], {relativeTo: this.route}) .then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
  }
  delete(id){

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.emService.deleteEmployeByid(id).subscribe({
          next: (x) =>{
            console.log(x)
            this.ngOnInit();
          },
          error:(e)=>{
            console.log(e)
          },
          complete: () =>{}
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

  }
}

