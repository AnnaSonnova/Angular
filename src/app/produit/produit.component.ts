import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';
import { IBiere } from '../ibiere';
import { IProduit } from '../iproduit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent{
  @Input() produit:IBiere;
  @Output() peutEditerChange = new EventEmitter<boolean>();
  @Input() peutEditer:boolean;
  estConnecte:boolean = false;
  constructor(private authServ:AuthService){

    this.authServ.statutConnexion().subscribe((etat)=>{
      this.estConnecte = etat;
      if(etat === false){
        this.peutEditer = false;
      }

    })
  }
  changeEditable(){
    if(!this.estConnecte){
      this.peutEditer = false;
    }
    this.peutEditerChange.emit(this.peutEditer);
      
  }

}
