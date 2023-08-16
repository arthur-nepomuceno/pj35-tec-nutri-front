import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/interfaces/food.interface';
import { FoodService } from 'src/app/services/food-services/food.service';

@Component({
  selector: 'app-taco',
  templateUrl: './taco.component.html',
  styleUrls: ['./taco.component.css']
})
export class TacoComponent implements OnInit{
  //ATRIBUTOS
  tacoTable: Food[] = [];
  
  selectedFood?: Food;

  //CONSTRUTOR
  constructor(
    private foodService: FoodService
  ){}

  //MÉTODOS
  ngOnInit(): void {
    this.foodService.getTacoTable().subscribe(data => this.tacoTable = data);
  }

  onSelect(element: Food){
    this.selectedFood = element;
  }
}
