import { Component } from '@angular/core';
import { Card } from './card';
import { List } from './list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  title = 'app';

  public lists = [
    new List(1, 'Coluna 1', [
      new Card(1, 'card muito fgfg'),
      new Card(1, 'card muito louco'),
      new Card(1, 'card muito fgfg'),
      new Card(1, 'card muito louco'),
      new Card(1, 'card muito fg'),
      new Card(1, 'card muito louco'),
      new Card(1, 'card muito fgfg'),
      new Card(1, 'card muito fgf'),
      new Card(1, 'card muito louco'),
      new Card(1, 'card muito fdgf'),
      new Card(1, 'card muito louco'),
      new Card(1, 'card muito dfdgdfgdfgsd'),
      new Card(2, 'card muito louco')
    ]),
    new List(2, 'Coluna 2', []),
    new List(3, 'Coluna 3', [
      new Card(3, 'card muito louco'),
      new Card(4, 'card muito louco'),
      new Card(5, 'card muito louco'),
    ]),
    new List(4, 'Coluna 4', []),
    new List(5, 'Coluna 5', []),
    new List(6, 'Coluna 6', []),
    new List(7, 'Coluna 7', []),
  ];
  newCard = new Card();

hand(){
  console.log(this.lists);
}

}
