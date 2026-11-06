import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  imports: [MatButtonModule, RouterLink],
  selector: 'app-admin-book-edit',
  styleUrl: './admin-book-edit.css',
  templateUrl: './admin-book-edit.html',
})
export class AdminBookEdit {}
