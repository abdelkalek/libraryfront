import { Component, OnInit } from '@angular/core';
import {LivreService} from "../Services/livre.service";
import {Livre} from "../models/livre";
import {ActivatedRoute, Router} from "@angular/router";

const Swal = require('sweetalert2')
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  LiverList: Livre[] =[]
  constructor( private route: ActivatedRoute, private router: Router ,private livreService : LivreService) { }

  ngOnInit(): void {
    this.livreService.getAllLivres().subscribe({
      next:(res)=>{
        this.LiverList = res
        console.log(res)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  update(id: string) {
    console.log('Edit auteur', id)
    this.router.navigate([`../updatelivre/${id}`], {relativeTo: this.route}) .then(nav => {
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
        this.livreService.deleteLivreByid(id).subscribe({
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
