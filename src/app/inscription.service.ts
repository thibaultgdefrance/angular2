import { Injectable } from '@angular/core';
import { Utilisateur } from './Utilisateur';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import{catchError,map,tap,retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  
  constructor(private http:HttpClient) { }

  inscription(utilisateur:Utilisateur):Observable<Utilisateur>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',

       });     
    const option={ headers: headers };
    const url="http://10.115.145.6/api/Utilisateurs?nom="+utilisateur.Nom+"&prenom="+utilisateur.Prenom+"&pseudo="+utilisateur.Pseudo+"&mdp="+utilisateur.MDP+"&email="+utilisateur.Mail;
    /*var xhr:XMLHttpRequest=new XMLHttpRequest();
    xhr.open("post",url);
    xhr.send();*/
    
    
      //alert(xhr.responseText);
    return this.http.post<Utilisateur>("http://10.115.145.6/api/Utilisateurs?nom="+utilisateur.Nom+"&prenom="+utilisateur.Prenom+"&pseudo="+utilisateur.Pseudo+"&mdp="+utilisateur.MDP+"&email="+utilisateur.Mail,utilisateur,option);
    
  }


  inscriptionTest(utilisateur:Utilisateur):void{
   
    const url="https://localhost:44315/api/Utilisateurs?nom="+utilisateur.Nom+"&prenom="+utilisateur.Prenom+"&pseudo="+utilisateur.Pseudo+"&mdp="+utilisateur.MDP+"&email="+utilisateur.Mail;
    var xhr:XMLHttpRequest=new XMLHttpRequest();
    xhr.open("post",url);
    xhr.send();
    
    if(xhr.readyState==200)
      alert(xhr.responseText);
      
  }

  private log(message:string){
    
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  inscriptionRep(utilisateur:Utilisateur):Observable<HttpResponse<Object>>{
    const url="http://10.115.145.6/api/Utilisateurs?nom="+utilisateur.Nom+"&prenom="+utilisateur.Prenom+"&pseudo="+utilisateur.Pseudo+"&mdp="+utilisateur.MDP+"&email="+utilisateur.Mail+"&magretdecanard=true"
    return this.http.get(url, { observe: "response"}).pipe(retry(3), catchError(this.handleError), tap(res => {
      
  
    }));

    
    this.http.post<string>("http://10.115.145.6/api/Utilisateurs?nom="+utilisateur.Nom+"&prenom="+utilisateur.Prenom+"&pseudo="+utilisateur.Pseudo+"&mdp="+utilisateur.MDP+"&email="+utilisateur.Mail+"&magretdecanard=true","");
  
    alert(this.http.post<string>("http://10.115.145.6/api/Utilisateurs?nom="+utilisateur.Nom+"&prenom="+utilisateur.Prenom+"&pseudo="+utilisateur.Pseudo+"&mdp="+utilisateur.MDP+"&email="+utilisateur.Mail+"&magretdecanard=true",""));

  
}
  
  
}
