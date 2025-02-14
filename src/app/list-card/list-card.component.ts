import { Component,Input} from '@angular/core';
import { ListItem } from '../app.component';
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-list-card',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.sass'
})
export class ListCardComponent {
  @Input({ required: true }) cards!: ListItem[];
  @Input({ required: true }) informations!: ListInfo;
}
