import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';
import { IBiere } from '../ibiere';
import { IProduit } from '../iproduit';
 import { DatePipe } from '@angular/common';
 import { FormGroup, FormControl , Validators} from '@angular/forms';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit{
  @Input() produit:IBiere;
  @Output() peutEditerChange = new EventEmitter<boolean>();
  @Input() peutEditer:boolean;
  estConnecte:boolean = false;
  modifForm:FormGroup;
  constructor(private authServ:AuthService){
    
    this.authServ.statutConnexion().subscribe((etat)=>{
      this.estConnecte = etat;
      if(etat === false){
        this.peutEditer = false;
      }

    })
  }
//   changemetDate(produit:IBiere){
//     const myDate = produit.date_ajout;
// const formattedDate = this.datePipe.transform(myDate, 'yyyy-MM-dd');
// console.log(formattedDate); 
//   }

  ngOnInit(): void {
    this.modifForm = new FormGroup({
      nom:new FormControl( this.produit.nom, [Validators.required, Validators.minLength(2)]),
      brasserie:new FormControl(this.produit.brasserie),
      description: new FormControl(this.produit.description),    
    });
  }
  modifier(){
 let unProduit:IBiere = this.modifForm.value;
 console.log(unProduit);
 

  }
  annuler(){
    console.log(this.modifForm);
    console.log(this.produit);
    this.modifForm.controls["nom"].setValue(this.produit.nom);
    this.modifForm.controls["brasserie"].setValue(this.produit.brasserie);
    this.modifForm.controls["description"].setValue(this.produit.description);
  }
  changeEditable(){
    if(!this.estConnecte){
      this.peutEditer = false;
    }
    this.peutEditerChange.emit(this.peutEditer);
      
  }

}
