import { Routes } from '@angular/router';
import { BookList } from './books/components/book-list/book-list';
import { CartPage } from './cart/components/cart-page/cart-page';
import { BookPage } from './books/components/book-page/book-page';
import { AdminBookEdit } from './admin/components/admin-book-edit/admin-book-edit';
import { AdminBooks } from './admin/components/admin-books/admin-books';

export const routes: Routes = [
  { path: 'books', component: BookList, title: 'Knihy' },
  { path: 'cart', component: CartPage, title: 'Košík' },
  { path: 'books/:id', component: BookPage, title: 'Detail knihy' },
  { path: 'admin', component: AdminBooks, title: 'Správa kníh' },
  { path: 'admin/new', component: AdminBookEdit, title: 'Nová kniha' },
  { path: 'admin/:id/edit', component: AdminBookEdit, title: 'Úprava knihy' },
  { path: '**', component: BookPage, title: 'Detail knihy' },
];
