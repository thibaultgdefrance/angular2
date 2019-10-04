import { Component, OnInit } from '@angular/core';
import{Utilisateur} from '../Utilisateur';
import{LoginService} from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  utilisateur:Utilisateur;
  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }
  Connexion(email,mdp):void{
    this.loginService.getUtilisateur(email,mdp).subscribe(utilisateur=>this.utilisateur=utilisateur);
    
  }
}
