import { Component, OnInit } from '@angular/core';
import {LivreService} from "../Services/livre.service";
import {Livre} from "../models/livre";

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  LiverList: Livre[] =[]
  constructor( private livreService : LivreService) { }

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

  }

  delete(id: string) {

  }
}
