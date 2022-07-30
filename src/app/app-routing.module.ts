import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetGrocerysComponent } from "src/app/get-grocerys/get-grocerys.component";

const routes: Routes = [
  {path: 'groceries',component:GetGrocerysComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
