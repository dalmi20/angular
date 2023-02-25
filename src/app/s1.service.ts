import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class S1Service {

  constructor() { }
  public afficher(){alert("affichage des etudiants")}
}
