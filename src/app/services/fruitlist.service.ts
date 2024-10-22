import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitlistService {
  private fruitList: string[] = ["apple", "mango"];

  getFruit(): string[]{
    return this.fruitList;
  }
  addFruit(fruit: string): void{
    this.fruitList.push(fruit);
  }
  updateFruit(index: number, fruit: string): void {
    if (index >= 0 && index < this.fruitList.length) {
      this.fruitList[index] = fruit;
    }
  }
  deleteFruit(index: number): void {
    if (index >= 0 && index < this.fruitList.length) {
      this.fruitList.splice(index, 1);
    }
  }
}
