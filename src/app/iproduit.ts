export interface IProduit {
    id:number;
    nom:string;
    prix:number;
    fabricant:string;
    rabais?:boolean; //propriete optionnel
    estEditable?:boolean;
}
