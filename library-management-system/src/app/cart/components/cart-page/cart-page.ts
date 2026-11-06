import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Cart } from '../cart/cart';
import { Book } from '../../../books/book';
import { BookService } from '../../../books/book.service';

@Component({
  imports: [RouterLink, MatButtonModule, Cart],
  selector: 'app-cart-page',
  styleUrl: './cart-page.css',
  templateUrl: './cart-page.html',
})
export class CartPage {
  private bookService = inject(BookService);
  readonly borrowedBooks = this.bookService.borrowedBooks;
  readonly maxBorrowed = this.bookService.maxBorrowed;

  giveBack(book: Book): void {
    this.bookService.returnBook(book.id);
  }
}
