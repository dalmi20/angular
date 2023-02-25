import { Component } from '@angular/core';
import { S1Service } from './s1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my_first_angular_project';
  nom="ali"
  constructor(bonj:S1Service){
    bonj.afficher()
  }
  v=false
  
  personne=[{nom:"ferdaous",age:"22"},{nom:"aya",age:"32"}]
  fruits=[{nom:"banana",src:"assets/banana.jpg",etat:false},{nom:"fraise",src:"assets/fraise.jpeg"}]
  public affich(){
   this.v=true
  }

}
