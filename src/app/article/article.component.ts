import { Component,Input } from '@angular/core';
import { ListItem } from '../app.component';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  @Input({ required: true, alias: 'carteData' }) data!: ListItem;
}
