import { Address } from "./address.model";

export class User{

  constructor(public firstname:string,
              public lastname:string,
              public email:string,
              public address:Address,//typage depuis la class address crée
              public description:string,
              public dateBirth:string,
              public aliases?:string[] //? permet l'optionnalité du champs lors de l'initialisation
  ){

  }
}
