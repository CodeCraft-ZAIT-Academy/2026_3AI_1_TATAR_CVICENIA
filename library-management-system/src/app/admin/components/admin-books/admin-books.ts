import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { BookService } from '../../../books/book.service';
@Component({
  imports: [MatButtonModule, RouterLink, BookService],
  selector: 'app-admin-books',
  styleUrl: './admin-books.css',
  templateUrl: './admin-books.html',
})
export class AdminBooks {
  
}
