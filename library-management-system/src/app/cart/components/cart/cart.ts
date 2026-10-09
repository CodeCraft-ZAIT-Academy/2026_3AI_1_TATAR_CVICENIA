import { Component, input, output } from '@angular/core';
import { Book } from '../../../books/book';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatExpansionModule],
  selector: 'app-cart',
  styleUrl: './cart.css',
  templateUrl: './cart.html',
})
export class Cart {
  books = input.required<Book[]>();
  returned = output<Book>();

 giveBack(book: Book): void {
  this.returned.emit(book);
}
}
