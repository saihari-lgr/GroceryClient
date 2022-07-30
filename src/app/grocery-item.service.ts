import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceryItemService {
  private basePath = 'https://localhost:44333/api/Item/allitems';
  constructor(private http: HttpClient) { }

  public getItems() : Observable<any> {
    return this.http.get(this.basePath);
  }

}
