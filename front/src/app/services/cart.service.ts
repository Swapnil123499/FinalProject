import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient){}

   public getcartproductbyusername(usernameofcart:any){
    return this.http.get(`${baseUrl}/cart/cat/${usernameofcart}`);
   }
   public postproductincart(cartproduct:any){
    return this.http.post(`${baseUrl}/cart/`,cartproduct);
    
   }
   public removedCart(cartId:any){
    return this.http.delete(`${baseUrl}/cart/${cartId}`)
   }
  public removedCartall(usernameofcart:any){
    return this.http.delete(`${baseUrl}/cart/deletee/${usernameofcart}`);
  }

}