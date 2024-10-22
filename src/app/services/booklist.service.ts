import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooklistService {
  private bookList: string[] = ["Noli Me Tangere", "El filibusterismo" ];

  getBook(): string[]{
    return this.bookList;
  }
  addBook(book: string): void{
    this.bookList.push(book);
  }
  updateBook(index: number, book: string): void {
    if (index >= 0 && index < this.bookList.length) {
      this.bookList[index] = book;
    }
  }
  deleteBook(index: number): void {
    if (index >= 0 && index < this.bookList.length) {
      this.bookList.splice(index, 1);
    }
  }
}
