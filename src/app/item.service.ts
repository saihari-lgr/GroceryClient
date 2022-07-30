import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

private basePath = "";
  constructor(private http: HttpClient) {
    
  }
}
