import { Component, OnInit } from '@angular/core';
import { TACO } from 'src/app/database/taco';
import { Meal } from 'src/app/interfaces/meal';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent {
  tacoTable = TACO;
  private searchTerms = new Subject<string>();
  searchResult = [];  

  search(term: string){
    this.searchTerms.next(term);
  }

  // ngOnInit(): void {
  //   this.searchResult = this.searchTerms.pipe(
  //     debounceTime(300),
  //     distinctUntilChanged(),
  //     switchMap((term: string) => this.tacoTable.filter(element => element.descricao.includes(term)))
  //   )
  // }
}
