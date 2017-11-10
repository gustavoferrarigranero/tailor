import { Component, OnInit, Input, ElementRef, Directive } from '@angular/core';
import { Card } from '../card';
import { List } from '../list';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

@Directive({ selector: '[highlight]' })

export class CardComponent implements OnInit {

  @Input() list: List;
  @Input() card: Card;

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'gold!important';
  }

  ngOnInit() {
  }

}
