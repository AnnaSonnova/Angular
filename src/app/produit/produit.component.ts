import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IProduit } from '../iproduit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent{
  @Input() produit:IProduit;
  @Output() peutEditerChange = new EventEmitter<boolean>();
  @Input() peutEditer:boolean;

  changeEditable(){
    console.log(this.peutEditer)
    this.peutEditerChange.emit(this.peutEditer);
  }

}
