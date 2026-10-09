import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title = signal('Moja prva angular aplikacia');

  book:Book = {
    id: 1,
    title: 'Maly princ',
    author: 'Antoine de Saint-Exupery',
    year: 1943,
    available: true
  };

  consoleLog():void{
    console.log("Kniha: " + this.book.title + ", Autor: " + this.book.author + ", Rok: " + this.book.year + ", Dostupnost: " + this.book.available);
  }

  uloha1():void{
    const title:string = 'Harry Potter';
    const year:number = 1997;
    const available:boolean = true;

    console.log("Uloha1: Kniha: " + title + ", Rok: " + year + ", Dostupnost: " + available);
  }

  uloha2():void{
    console.log("Uloha2: Kniha: " + this.book.title + ", Autor: " + this.book.author);
  }

  knihy:Kniha[] = [
      new Kniha('Maly princ', 'Antoine de Saint-Exupery', 1943, true),
      new Kniha('Harry Potter', 'J.K. Rowling', 1997, true),
      new Kniha('Pán prsteňov', 'J.R.R. Tolkien', 1954, false)
    ];

  uloha4():void{

    console.log("Uloha4:");
    console.log("Kniha 1: " + this.knihy[0].title);
    console.log("Kniha 2: " + this.knihy[1].author);
    console.log("Kniha 3: " + this.knihy[2].available);
  }

  uloha5(knihy:Kniha[]):void{
    console.log("Uloha5:");
    for (let kniha of knihy) {
      if (kniha.available) {
        console.log("Kniha " + kniha.title + " je dostupna.");
      }
    }
  }

  books: Book[] = [
    {
      id: 1,
      title: 'Maly princ',
      author: 'Antoine de Saint-Exupery',
      year: 1943,
      available: true
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      year: 1948,
      available: true
    },
  ];

  ngOnInit(): void {
    this.uloha1();
    this.uloha2();
    this.uloha4();
    this.uloha5(this.knihy);
  }
}

interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  available: boolean;
}

export class Kniha {
  constructor(
    public title: string,
    public author: string,
    public year: number,
    public available: boolean
  ) {}
}
