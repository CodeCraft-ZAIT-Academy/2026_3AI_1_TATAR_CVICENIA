import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BookList } from './books/components/book-list/book-list';
import { RouterModule } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { BookService } from './books/book.service';

@Component({
  selector: 'app-root',
  imports: [BookList, MatToolbarModule, MatIconModule, RouterModule, RouterLink, RouterLinkActive, MatBadgeModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private bookService = inject(BookService);
  get borrowedBooksCount(): number {
    return this.bookService.borrowedBooks().length;
  }
}