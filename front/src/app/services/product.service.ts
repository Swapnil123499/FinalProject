import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  public postproduct(Product:any){
   return this.http.post(`${baseUrl}/product/`,Product);
  }

  public getproduct(){
    return this.http.get(`${baseUrl}/product/`);
  }

  public getproductbyid(productid:any){
    return this.http.get(`${baseUrl}/product/${productid}`)
  }

  public updateeachproduct(productid:any,product:any){
    return this.http.put(`${baseUrl}/product/${productid}`,product)
  }

  public getactiveproduct(){
    return this.http.get(`${baseUrl}/product/active`);
  }

  public deleteproductbyid(productid:any){
    return this.http.delete(`${baseUrl}/product/${productid}`);
  }
}
