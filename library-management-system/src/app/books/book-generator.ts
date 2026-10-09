import { faker } from '@faker-js/faker';
import { Book } from '../books/book';

export function generateBooks(count: number, firstId: number): Book[] {
  const books: Book[] = [];
  for (let i = 0; i < count; i++) {
    books.push({
      id: firstId + i,
      title: faker.book.title(),
      author: faker.book.author(),
      year: faker.number.int({ min: 1850, max: 2025 }),
      available: faker.datatype.boolean({ probability: 0.8 }),
      genre: faker.book.genre(),
      rating: faker.number.int({ min: 1, max: 5 }),
      pages: faker.number.int({ min: 80, max: 900 }),
      favorite: false
    });
  }

  const unavailableBooks = books.filter(book => !book.available);
  if (unavailableBooks.length > 10) {
    let excess = unavailableBooks.length - 10;
    for (const book of books) {
      if (!book.available && excess > 0) {
        book.available = true;
        excess--;
      }
    }
  }

  return books;
}