import { Component } from '@angular/core';
import { TACO } from 'src/app/database/taco';
import { Food } from 'src/app/interfaces/food';



@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent {
  tacoTable = TACO;
  selectedFood?: Food;

  onSelect(element: Food){
    this.selectedFood = element;
  }
}
