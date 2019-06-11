import { Component } from '@angular/core';
import { Fly } from './models/fly.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Catalogue of Flies!';
  flies: Fly[] = [];
  add(name, description, have, wish, pack, image){
    let newFly: Fly = new Fly(name, description, have, wish, pack, image);
    this.flies.push(newFly);
  }

  selectedFly: Fly = null;


  open(clickedFly){
    this.selectedFly = clickedFly;
  }
}
