import { Component, Input } from '@angular/core';
import { ListItem } from '../app.component';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass'
})
export class CardComponent {
  @Input({ required: true, alias: 'cardData' }) data!: ListItem;
}
