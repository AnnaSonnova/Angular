import { Component } from '@angular/core';
import { IProduit } from '../iproduit';


@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent {

  produits:Array<IProduit>;
  //produits:Objet[];

  constructor(){
    this.produits=[...Array(10)].map((item,index)=>{
      return {nom : "element"+index, fabricant:"brasserie xxx", prix:(10+index*2), id:1+index, rabais : !(index % 3)};
    });
    console.log(this.produits);
    
  }

  estEnSolde(unProduit:IProduit){
    return (unProduit.prix < 15 && unProduit.rabais)
  }
}
