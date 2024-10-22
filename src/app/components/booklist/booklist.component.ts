import { BooklistService } from './../../services/booklist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent {
  bookList: string[] = [];
  book: string = '';

  constructor(private booklistService: BooklistService){
  }

  ngOnInit(): void {
    this.bookList = this.booklistService.getBook();
  }

  addBook(): void {
    this.booklistService.addBook(this.book);
    this.book = '';
  }

  updateBook(index: number): void {
    const currentName = this.bookList[index];
    const newName = prompt('Enter new name for a book:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.booklistService.updateBook(index, newName.trim());
    }
  }

  deleteBook(index: number): void {
    this.booklistService.deleteBook(index);
  }
}
