import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../../models/book';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BooksInMemoryService } from '../../services/book-inmemory.service';
import { ApiService } from '../../services/api.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-create-book-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-book-page.component.html',
  styleUrl: './create-book-page.component.css',
})

export class CreateBookPageComponent {
  @Output() bookCreationEventEmitter = new EventEmitter<number>();

  bookForm : FormGroup;

  constructor(/*private booksInMemoryService: BooksInMemoryService*/private api : ApiService,private form: FormBuilder){
    this.bookForm = this.form.group({
    author: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]),
    title: new FormControl('', [Validators.minLength(2), Validators.maxLength(35)])
    });
  }

  
  /*onSubmit(): void {
    if (this.bookForm.valid) {
      const newBook = this.booksInMemoryService.createBook(this.bookForm.value);
       console.log('Livre ajouté', newBook);
       this.bookCreationEventEmitter.emit(newBook);
     this.bookForm.reset();
     }
  }*/

  onSubmit(): void {
    if (this.bookForm.valid) {
      this.api.create(this.bookForm.value).pipe(take(1)).subscribe(bookCreated => {
        this.bookCreationEventEmitter.emit(bookCreated.id);
        this.bookForm.reset();
      });
    }
  }
}
