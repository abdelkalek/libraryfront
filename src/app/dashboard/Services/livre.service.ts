import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { Livre } from '../models/livre';


@Injectable({
  providedIn: 'root'
})
export class LivreService {
  private endpoint = environment.endPoint;
  constructor(private http: HttpClient) {
  }
  getLivreById(id: string) {
    return this.http.get<Livre>(this.endpoint + `Livre/${id}`);
  }
  getAllLivres() {
    return this.http.get<Livre[]>(this.endpoint + 'Livre');
  }
  saveNewLivre(l: Livre): Observable<Livre> {
    return this.http.post<Livre>(this.endpoint + 'Livre', l)
  }
  deleteLivreByid(id: string ) {
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json'});
    return this.http.delete(this.endpoint+`Livre/${id}` ,{headers: headers})

  }
  EditLivre(id, LivreFormUpdate) {

    return this.http.put<Livre>(this.endpoint + `Livre/${id}`, LivreFormUpdate)
  }
}
