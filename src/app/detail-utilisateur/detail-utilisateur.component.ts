import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../Utilisateur';
import { ActivatedRoute } from '@angular/router';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-detail-utilisateur',
  templateUrl: './detail-utilisateur.component.html',
  styleUrls: ['./detail-utilisateur.component.css']
})
export class DetailUtilisateurComponent implements OnInit {
  utilisateur:Utilisateur;
  constructor(private route: ActivatedRoute,
    private utilisateurService: UtilisateurService) { }

  ngOnInit() {
    this.getAuteur();
  }
  getAuteur():void{
    const id = this.route.snapshot.paramMap.get('idAuteur');
    this.utilisateurService.getUtilisateur(id).subscribe(utilisateur=>this.utilisateur=utilisateur);
  }
}
