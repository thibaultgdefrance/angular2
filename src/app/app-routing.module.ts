import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumsComponent } from './forums/forums.component';
import { Routes,RouterModule } from '@angular/router';
import { DetailForumComponent } from './detail-forum/detail-forum.component';
import{ForumService} from './forum.service'
import { DetailUtilisateurComponent } from './detail-utilisateur/detail-utilisateur.component';
import{InscriptionComponent} from './inscription/inscription.component';
const routes: Routes = [
    { path: '',component:ForumsComponent, pathMatch: 'full' },
    
    {path: 'detail/:id', component: DetailForumComponent },
    {path:'detailAuteur/:idAuteur',component:DetailUtilisateurComponent},
    {path:'inscription',component:InscriptionComponent}
    
  ];
@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [ForumService],
    bootstrap:[ForumsComponent]
})
export class AppRoutingModule {}