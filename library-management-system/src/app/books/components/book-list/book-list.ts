import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { BookCard } from '../book-card/book-card';
import { BookForm } from '../book-form/book-form';
import { Cart } from '../../../cart/components/cart/cart';
import { Book } from '../../book';
import { generateBooks } from '../../book-generator';
import { BookService } from '../../book.service';


@Component({
  selector: 'app-book-list',
  imports: [BookCard, Cart, MatButtonModule, MatIconModule, BookForm, MatExpansionModule, MatFormFieldModule, MatInputModule, FormsModule, MatSelectModule, MatButtonToggleModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList {
  private bookService = inject(BookService);

  myBooks: Book[] = [
  
  ];

  maxBorrowedBooks: number = this.bookService.maxBorrowedBooks;

  books: Book[] = this.bookService.getBooks();

  currentPage: number = 1;
  pageSize: number = 5;

  searchText: string = '';
  filteredBooks(): Book[] {
    if (!this.searchText.trim()) {
      return this.books;
    }
    const query = this.searchText.toLowerCase();
    return this.books.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );
  }

  pageCount(): number {
    return Math.ceil(this.books.length / this.pageSize);
  }

  isOnCurrentPage(index: number): boolean {
    const start = (this.currentPage - 1) * this.pageSize;
    return index >= start && index < start + this.pageSize;
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.pageCount()) {
      this.currentPage++;
    }
  }

  borrowedBooks(): Book[] {
    return this.bookService.borrowedBooks();
  }

  giveBack(book: Book): void {
    this.bookService.returnBook(book.id);
    this.refreshBooks();
  }

  borrow(book: Book): void {
    if (!this.bookService.borrowBook(book.id)) {
      alert('Knihu teraz nie je možné vypožičať. Skontroluj dostupnosť a limit výpožičiek.');
      return;
    }
    this.refreshBooks();
  }
  addBook(book: Book): void {
    this.bookService.addBook(book);
    this.refreshBooks();
    this.firstPage();
  }

  firstPage(): void {
    this.currentPage = 1;
  }

  lastPage(): void {
    this.currentPage = this.pageCount();
  }

  editBook(book: Book): void {
    return;
  }

  deleteBook(deleted: Book): void {
    this.bookService.deleteBook(deleted.id);
    this.refreshBooks();
    if (this.currentPage > this.pageCount()) this.lastPage();
  }

  updateBook(updated: Book): void {
    this.bookService.updateBook(updated);
    this.refreshBooks();
  }

  clearSearch(): void {
    this.searchText = '';
  }

  refreshBooks(): void {
    this.books = this.bookService.getBooks();
  }

  toggleFavorite(book: Book): void {
    this.bookService.toggleFavorite(book.id);
    this.refreshBooks();
  }
}
