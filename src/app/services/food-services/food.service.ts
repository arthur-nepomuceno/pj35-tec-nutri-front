import { Injectable } from '@angular/core';
import { Food } from 'src/app/interfaces/food.interface';
import { TACO } from 'src/app/database/taco';
import { Observable, Subject ,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getTacoTable(): Observable<Food[]>{
    const tacoTable = of(TACO);
    return tacoTable
  }

  searchFood(term: string): Observable<Food[]>{
    if(!term.trim()){
      return of([]);
    }

    const search = TACO.filter(element => element.descricao.toLowerCase().includes(term.toLowerCase()));
    return of(search)
  }
}
