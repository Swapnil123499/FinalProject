import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-activeproducts',
  templateUrl: './activeproducts.component.html',
  styleUrls: ['./activeproducts.component.css']
})
export class ActiveproductsComponent implements OnInit {
  products:any;

  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.service.getactiveproduct().subscribe(
      (data:any)=>{
        this.products=data;
        console.log(this.products);

      },
      (error)=>{
        console.log(error);

      }
    )
  }

}
