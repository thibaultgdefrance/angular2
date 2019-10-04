import { Injectable } from '@angular/core';
import{Utilisateur} from './Utilisateur';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  getUtilisateur(id):Observable<Utilisateur>{

    return this.http.get<Utilisateur>("http://10.115.145.6/api/Utilisateurs/"+id);
  }
  constructor(private http: HttpClient) { }
}
