import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';
import { OrderdetailService } from 'src/app/services/orderdetail.service';

@Component({
  selector: 'app-ordersdetail',
  templateUrl: './ordersdetail.component.html',
  styleUrls: ['./ordersdetail.component.css']
})
export class OrdersdetailComponent implements OnInit {
   orderdetail:any;
   usernameofcart:any;
date:Date =new Date();

indiantime=this.date.getFullYear;
  constructor(private orderservice:OrderdetailService,private service:CartService,
                   private login:LoginService,
                   private router:Router) { }

  ngOnInit(): void {
    var user2=this.login.getUser();
     this.usernameofcart=user2.username;
    console.log(this.usernameofcart);
 this.orderdetail=this.orderservice.GetData();
 console.log(this.orderdetail);

 //deleting cart value
 /*
 this.service.removedCartall(this.usernameofcart).subscribe((data:any)=>{
  console.log("value are deleted  !!")
 },
 (error)=>{
  console.log(error);
 })*/

  }

  deletecart(){
    this.service.removedCartall(this.usernameofcart).subscribe(
      (data:any)=>{
       
      },
      (error)=>{

      }
    )

    return this.router.navigate(['user-dashboard'])
  }

}
