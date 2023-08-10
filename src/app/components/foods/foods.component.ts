import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/interfaces/food.interface';
import { FoodService } from 'src/app/services/food-services/food.service';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';



@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {
  //ATRIBUTOS
  tacoTable: Food[] = [];

  selectedFood?: Food;

  foodMenu$!: Observable<Food[]>;
  
  private searchTerms = new Subject<string>();

  //CONSTRUTOR
  constructor(
    private foodService: FoodService
  ){}

  //MÉTODOS
  ngOnInit(): void {
    this.foodService.getTacoTable().subscribe(data => this.tacoTable = data);

    this.foodMenu$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.foodService.searchFood(term))
    )
  }

  onSelect(element: Food){
    this.selectedFood = element;
  }

  onSearch(term: string): void{
    this.searchTerms.next(term);
  }
}
