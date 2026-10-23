import { Component, input, output, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Book } from '../../book';
import { BookDetail } from '../book-detail/book-detail';
import { getGenreColor } from '../../genre-colors';

@Component({
  selector: 'app-book-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule, BookDetail],
  templateUrl: './book-card.html',
  styleUrl: './book-card.css',
})
export class BookCard {
  state: 'default' | 'editing' | 'deleting' = 'default';
  book = input.required<Book>();
  borrowed = output<void>();
  returned = output<void>();
  edited = output<void>();
  deleted = output<number>();


  readonly showDetails = signal(false);
  readonly editing = signal(false);
  readonly confirmingDelete = signal(false);

  startEdit(): void { this.editing.set(true); }
  /*saveEdit(book: Book): void {
    this.edited.emit(book);
    this.editing.set(false);
  }*/

  cancelEdit(): void { this.editing.set(false); }
  askDelete(): void { this.confirmingDelete.set(true); }
  cancelDelete(): void { this.confirmingDelete.set(false); }


  toggleDetails(): void {
    this.showDetails.update(open => !open);
  }
  toggleFavorite(): void {
    this.book().favorite = !this.book().favorite;
  }
  genreColor(): string {
    return getGenreColor(this.book().genre);
  }

  borrow(): void {
    this.borrowed.emit();
  }

  giveBack(): void {
    this.returned.emit();
  }

  edit(): void {
    this.edited.emit();
  }

  delete(): void {
    this.deleted.emit(this.book().id);
  }
}
