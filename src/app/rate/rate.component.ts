import { Component, EventEmitter, Input, Output} from '@angular/core';
import { RateInfo } from '../app.component'
@Component({
  selector: 'app-rate',
  standalone: true,
  imports: [],
  templateUrl: './rate.component.html',
  styleUrl: './rate.component.sass'
})
export class RateComponent {
  @Input({required: true}) info!:RateInfo;
  @Output() pressNext = new EventEmitter<void>();
  @Output() pressPrevious = new EventEmitter<void>();

  next(){
    this.pressNext.emit();
  }
  previous(){
    this.pressPrevious.emit();
  }
}