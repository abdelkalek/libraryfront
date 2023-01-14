import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auteur } from '../models/Auteur';

@Injectable({
  providedIn: 'root'
})
export class AuteurService {
  private endpoint = environment.endPoint;
  constructor(private http: HttpClient) {
  }
  getAuteurById(id: string) {
    return this.http.get<Auteur>(this.endpoint + `Auteur/${id}`);
  }
  getAllAuteurs() {
    return this.http.get<Auteur[]>(this.endpoint + 'Auteur');
  }
  saveNewAuther(p: Auteur): Observable<Auteur> {
    return this.http.post<Auteur>(this.endpoint + 'Auteur', p)
  }
  deleteAutherByid(id: string ) {
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json'});
    return this.http.delete(this.endpoint+`Auteur/${id}` ,{headers: headers})

  }

  EditAuteur(id, AuteurFormUpdate) {

    return this.http.put<Auteur>(this.endpoint + `Auteur/${id}`, AuteurFormUpdate)
  }
}
