import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  products:any
  constructor(private service:ProductService) { }

  ngOnInit(): void {
  this.service.getproduct().subscribe(
    (data:any)=>{
    this.products=data;
    console.log(this.products)
    },
    (error)=>{
      console.log(error);
    }
  )
  }

}
