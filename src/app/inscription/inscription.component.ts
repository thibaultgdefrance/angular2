import { Component, OnInit ,Input} from '@angular/core';
import { InscriptionService } from '../inscription.service';
import { Utilisateur } from '../Utilisateur';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  utilisateur:Utilisateur
  constructor(private inscriptionService:InscriptionService) { }

  ngOnInit() {

  }
  inscrire(formData){
    this.utilisateur=new Utilisateur();
   // this.utilisateur.IdUtilisateur=null;
    this.utilisateur.Prenom=formData.prenom;
    this.utilisateur.Nom=formData.nom;
    this.utilisateur.MDP=formData.mdp;
    this.utilisateur.Pseudo=formData.pseudo;
    this.utilisateur.Mail=formData.mail;
    this.inscriptionService.inscriptionTest(this.utilisateur);
    //this.inscriptionService.inscriptionRep(this.utilisateur).subscribe((res: HttpResponse<any>)=>{
      //alert(res.status);
     
    
    
  }
}
