import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  Products:any;
  searchproduct:any;//this for the searching purpossed
  username: any;
  Cart: any;
  constructor(private service:ProductService,private cartservice:CartService,private login :LoginService) { }
   user:any;
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


  getproduct(){
   this.user= this.login.getUser();
   console.log(this.user);
  }

  
}