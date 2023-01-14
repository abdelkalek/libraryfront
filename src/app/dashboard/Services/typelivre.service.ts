import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Auteur} from "../models/Auteur";
import {Observable} from "rxjs";
import {TypeDeLivre} from "../models/type-de-livre";

@Injectable({
  providedIn: 'root'
})
export class TypelivreService {
  private endpoint = environment.endPoint;
  constructor(private http: HttpClient) {
  }
  getTypeDeLivreById(id: string) {
    return this.http.get<TypeDeLivre>(this.endpoint + `TypeDeLivre/${id}`);
  }
  getAllTypeDeLivres() {
    return this.http.get<TypeDeLivre[]>(this.endpoint + 'TypeDeLivre');
  }
  saveNewTypeDeLivre(p: TypeDeLivre): Observable<TypeDeLivre> {
    return this.http.post<TypeDeLivre>(this.endpoint + 'TypeDeLivre', p)
  }
  deleteAutherByid(id: string ) {
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json'});
    return this.http.delete(this.endpoint+`TypeDeLivre/${id}` ,{headers: headers})

  }
  EditAuteur(id, AuteurFormUpdate) {
    return this.http.put<TypeDeLivre>(this.endpoint + `TypeDeLivre/${id}`, AuteurFormUpdate)
  }
}
