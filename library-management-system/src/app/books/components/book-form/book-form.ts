import { Component, output, input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { Book } from '../../book';
import { GENRES } from '../../genres';
import { BookCard } from '../book-card/book-card';

@Component({
  selector: 'app-book-form',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatExpansionModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css'
})
export class BookForm {
  isAddingState: boolean = true;

  saved = output<Book>();
  bookToEdit = input<Book>();

  genres: string[] = GENRES;
  ratings: number[] = [1, 2, 3, 4, 5];
  currentYear: number = new Date().getFullYear();

  draft: Book = this.emptyBook();

  save(form: NgForm): void {
    this.saved.emit({ ...this.draft });
    this.draft = this.emptyBook();
    form.resetForm(this.draft);
  }

  emptyBook(): Book {
    return {
      id: 0,
      title: '',
      author: '',
      year: this.currentYear,
      available: true,
      genre: '',
      rating: 3,
      pages: 100,
      favorite: false
    };
  }


}