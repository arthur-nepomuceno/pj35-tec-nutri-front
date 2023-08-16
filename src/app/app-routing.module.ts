import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TacoComponent } from './components/taco/taco.component';
import { FoodsComponent } from './components/foods/foods.component';

const routes: Routes = [
  {path: '', component: FoodsComponent},
  {path: 'taco', component: TacoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
