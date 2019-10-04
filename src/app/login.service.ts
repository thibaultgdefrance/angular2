import { Injectable } from '@angular/core';
import{Utilisateur} from './Utilisateur';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http: HttpClient) { }
  getUtilisateur(email,motdepasse):Observable<Utilisateur>{
    
    var user=this.http.get<Utilisateur>("http://10.115.145.6/api/Utilisateurs?Email="+email+"&MDP="+motdepasse+"&clafouti=true");
    console.log(user);
    return user;
  }
 
}
