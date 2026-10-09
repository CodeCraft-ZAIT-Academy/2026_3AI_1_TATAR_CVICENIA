import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BookCard } from '../book-card/book-card';
import { Book } from '../../book';
import { Cart } from '../../../cart/components/cart/cart';
import { generateBooks } from '../../../books/book-generator';
import { BookForm } from '../book-form/book-form';
import { MatAccordion } from '@angular/material/expansion';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-book-list',
  imports: [BookCard, Cart, MatButtonModule, MatIconModule, BookForm, MatAccordion, MatExpansionModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList {
  myBooks: Book[] = [
    {
      id: 1,
      title: 'Hobit',
      author: 'J. R. R. Tolkien',
      year: 1937,
      available: true,
      genre: 'Fantasy',
      rating: 5,
      pages: 310,
      favorite: false,
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      year: 1949,
      available: true,
      genre: 'Dystopia',
      rating: 5,
      pages: 310,
      favorite: false,
    },
    {
      id: 3,
      title: 'Malý princ',
      author: 'Antoine de Saint-Exupéry',
      year: 1943,
      available: true,
      genre: 'Fiction',
      rating: 5,
      pages: 310,
      favorite: false,
    },
  ];

  maxBorrowedBooks: number = 10;

  books: Book[] = this.myBooks.concat(generateBooks(40, 4));

  currentPage: number = 1;
  pageSize: number = 5;


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
    return this.books.filter((book) => !book.available);
  }

  giveBack(book: Book): void {
  const index = this.books.indexOf(book);
  this.books[index] = { ...book, available: true };
  }

  borrow(book: Book): void {
    if (this.borrowedBooks().length >= this.maxBorrowedBooks) {
      alert(`You can borrow a maximum of ${this.maxBorrowedBooks} books.`);
    }
    else {  
      const index = this.books.indexOf(book);
      this.books[index] = { ...book, available: false };
    }
  }
  addBook(book: Book): void {
    const maxId = Math.max(0, ...this.books.map(b => b.id));
    this.books = [{ ...book, id: maxId + 1 }, ...this.books];
    this.firstPage();
  }

  firstPage(): void {
    this.currentPage = 1;
  }

  editBook(book: Book): void {
    return;
  }

  deleteBook(id: number): void {
    this.books = this.books.filter((book) => book.id !== id);
  }
}
