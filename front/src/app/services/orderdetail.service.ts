import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailService {
  products:any;
  constructor() { }

  SetData(data:any){
    this.products=data;
  }
  GetData(){
    return this.products;
  }
}
