import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { IProduit } from './iproduit';
import { IListeBiere } from './iliste-biere';
import { IBiere } from './ibiere';



@Injectable({
  providedIn: 'root'
})
export class BieroService {
  private url_biero:string = "http://127.0.0.1:8000/webservice/php/biere/";
  constructor(private http:HttpClient ) { }

  
  
  getBieres():Observable<IListeBiere>{
return this.http.get<IListeBiere>(this.url_biero);
  }

//   changemetDate(produit:IBiere){
//     const myDate = produit.date_ajout;
// const formattedDate = this.datePipe.transform(myDate, 'yyyy-MM-dd');
// console.log(formattedDate); 
//   }
  getUneBiere(id:number):Observable<IBiere>{
    return this.http.get<IBiere>(this.url_biero+id);
  }

  ajouterBiere(){

  }

  effacerBiere(){

  }

//   modifierBiere(id_biere:number, data:IBiere):Observable<any>{
// let httpOptions = {headers: new HttpHeaders({
//   "Content-type": "application/json",
//   "Authorization":"basic"+ btoa("biero:biero")
// }) }
// return this.http
//   }
}
