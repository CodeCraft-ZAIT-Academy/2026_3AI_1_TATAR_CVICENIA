import { Component, computed, inject, input } from '@angular/core';
import { BookService } from '../../book.service';
import { BookDetail } from '../book-detail/book-detail';
import { Book } from '../../book';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [BookDetail, RouterLink, MatButtonModule],
  selector: 'app-book-page',
  styleUrl: './book-page.css',
  templateUrl: './book-page.html',
})
export class BookPage {
  id = input.required<string>();
  private bookService = inject(BookService);

  readonly book = computed(() => this.bookService.getBookById(Number(this.id())));
}
