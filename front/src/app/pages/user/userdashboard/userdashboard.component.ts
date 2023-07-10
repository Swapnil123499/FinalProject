import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  Products:any;
  searchproduct:any;
  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.service.getactiveproduct().subscribe(
      (data:any)=>{
        this.Products=data;

        console.log(this.Products);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
