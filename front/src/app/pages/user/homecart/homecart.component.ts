import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-homecart',
  templateUrl: './homecart.component.html',
  styleUrls: ['./homecart.component.css']
})
export class HomecartComponent implements OnInit {

  products:any=[];
  public grandTotal !:number;
  productname:any;
  username: any;
  discountedprice:any;
  counting:any=1;
  
  Cart:any;
  constructor(private cartservice:CartService,private activatedRoute:ActivatedRoute,private login:LoginService,
              private router:Router) { }

  ngOnInit(): void {
    this.productname=this.activatedRoute.snapshot.params['productname'];
    this.discountedprice=this.activatedRoute.snapshot.params['discountedprice'];
    console.log(this.productname+"dataenter in console");

    var user2=this.login.getUser();
     this.username=user2.username;
    console.log(this.username);
    this.Cart={
      productnameofcart:this.productname,
      usernameofcart:this.username,
      discountedpriceincart:this.discountedprice,
      
    }
    //this is the code of post request code 
    if(this.Cart.productnameofcart != null){
    this.cartservice.postproductincart(this.Cart).subscribe(
      (data:any)=>{
        console.log("data enter in cart");
        this.router.navigate(['user-dashboard/cart'])
      },
      (error)=>{
        console.log("data not enter in cart !!");
      }
    );
    }
    //the post requestcode ended here
    this.cartservice.getcartproductbyusername(this.username).subscribe(
      (res:any)=>{
        this.products=res;
         console.log("get working")
      },
      (error)=>{
        console.log(error+"error to load the data !!");
      }
    );

    
   
  }



  increasing(){
    this.counting=this.counting+1;
  }
  decreasing(){
this.counting=this.counting-1;
  }
 

}
