import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { Employe } from '../models/employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  private endpoint = environment.endPoint;
  constructor(private http: HttpClient) {
  }
  getEmployeById(id: string) {
    return this.http.get<Employe>(this.endpoint + `Employe/${id}`);
  }
  getAllEmploye() {
    return this.http.get<Employe[]>(this.endpoint + 'Employe/GetAllEmployes');
  }
  saveNewEmploye(p: Employe): Observable<Employe> {
    return this.http.post<Employe>(this.endpoint + 'Employe/AddEmploye', p)
  }
  deleteEmployeByid(id: string ) {
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json'});
    return this.http.delete(this.endpoint+`Employe/DeleteEmploye/${id}` ,{headers: headers})

  }

  EditEmploye(id, EmployeFormUpdate) {

    return this.http.put<Employe>(this.endpoint + `Employe/EditEmploye/${id}`, EmployeFormUpdate)
  }
}
