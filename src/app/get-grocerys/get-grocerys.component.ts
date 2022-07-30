import { Component, OnInit } from '@angular/core';
import { GroceryItemService } from "src/app/grocery-item.service";

@Component({
  selector: 'app-get-grocerys',
  templateUrl: './get-grocerys.component.html',
  styleUrls: ['./get-grocerys.component.css']
})
export class GetGrocerysComponent implements OnInit {

  public groceryItems :  any;
  constructor(private service : GroceryItemService) { }

  ngOnInit(): void {
    this.getGroceryItems();
  }

  private getGroceryItems() : void{
    this.service.getItems().subscribe(result=>{
      debugger;
      this.groceryItems = result;
    })
  }
}
