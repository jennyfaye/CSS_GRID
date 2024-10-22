import { FruitlistService } from './../../services/fruitlist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fruitlist',
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.css'
})
export class FruitlistComponent {
  fruitList: string[] = [];
  fruit: string = '';

  constructor(private fruitlistService: FruitlistService){
  }

  ngOnInit(): void {
    this.fruitList = this.fruitlistService.getFruit();
  }

  addFruit(): void {
    this.fruitlistService.addFruit(this.fruit);
    this.fruit = '';
  }

  updateFruit(index: number): void {
    const currentName = this.fruitList[index];
    const newName = prompt('Enter new name for the fruit:', currentName);
    if (newName !== null && newName.trim() !== '') {
      this.fruitlistService.updateFruit(index, newName.trim());
    }
  }

  deleteFruit(index: number): void {
    this.fruitlistService.deleteFruit(index);
  }
}
