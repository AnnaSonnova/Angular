import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.scss']
})

export class EnteteComponent {
  titre:String = "Administration";
  msgConnecter:string = "Se connecter";
  estConnecte:boolean;

  constructor(private authServ:AuthService){
    console.log(this.authServ)
    this.estConnecte = this.authServ.etatConnexion;
  }

  seConnecter(){
    this.estConnecte = !this.estConnecte;
    this.authServ.etatConnexion = this.estConnecte;
    if(this.estConnecte){
      this.msgConnecter = "Se déconnecter";
    }else{
      this.msgConnecter = "Se connecter";
    }
    console.log(this.authServ)
    
  }


}
