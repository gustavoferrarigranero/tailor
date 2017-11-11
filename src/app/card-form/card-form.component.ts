import { Component, OnInit, Input, Output } from '@angular/core';
import { Card } from '../card';
import { List } from '../list';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})

export class CardFormComponent implements OnInit {

  @Input() list: List;

  constructor() { }

  ngOnInit() {}

  model = new Card();

  newCard() {
    this.model = new Card();
  }

  onSubmit() {
    if(this.model.name){
      this.list.cards.push(this.model);
      this.model = new Card();
    }
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
