import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';
import { OrderdetailService } from 'src/app/services/orderdetail.service';
import { ServicesService } from 'src/app/services/services.service';
declare var Razorpay: any;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
   products:any=[];
 grandTotal: any=0;
  productname:any;
  username: any;
  discountedprice:any;
 public counting:any=1;
  rzp1:any;
  Cart:any;
  ress: any=[];
    

  constructor(private cartservice:CartService,private activatedRoute:ActivatedRoute,private login:LoginService,
                 private auth:ServicesService,
                 private orderdetail:OrderdetailService,
                 private router:Router) 
                 { }

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
        this.counting=this.products.length
         console.log("get working")
         for( let number=0;number<this.products.length;number++){
          console.log(res[number].discountedpriceincart)
          number++;
          
        }
        console.log(this.grandTotal+"'njnj")
        
      },
      (error)=>{
        console.log(error+"error to load the data !!");
      }
    );
      
  }
   
  removedCartFromService(Cartid:any){
   this.cartservice.removedCart(Cartid).subscribe(
    (result:any)=>{this.router.navigate(['user-dashboard/removed']); }
   );
   
   
   console.log("navigate in single page")
  }


  increasing(){
    this.counting=this.counting+1;
  }
  decreasing(){
this.counting=this.counting-1;
  }
 
  totalvaluegot(){

    this.cartservice.getcartproductbyusername(this.username).subscribe(
      (ress:any)=>{
        for(let number:number=0;number<ress.length;number++){
          this.grandTotal+=ress[number].discountedpriceincart;
         console.log("get working",ress)
        
        console.log(this.grandTotal)
        }
          //payment work start
          this.grandTotal*=100;
    this.options.amount=this.grandTotal;
    this.options.name=this.username;
    this.rzp1 = new this.auth.nativeWindow.Razorpay(this.options);
    console.log("payment done here");
    //data transfer from the service
     this.orderdetail.SetData(this.products);
    this.router.navigate(['user-dashboard/order'])

    const successCallback = (paymentid: any) => {
      
      
    }

    const failureCallback = (e: any) => {
      console.log(e);
    }
    this.rzp1.open(successCallback,failureCallback);
    //payment work end
       

      },
      (error)=>{
        console.log(error+"error to load the data !!");
      }
    );
    
  }
  //payment work
  options = {
    "key": "rzp_test_A7pCe7QVWK9WVu", 
    "amount": "",
    
    "currency": "INR",
    "name": "",
    "description": "Test Transaction",
    "image": "https://i.imgur.com/FApqk3D.jpeg",
    "order_id": "", 
    
    
    
    "notes": {
    "address": "Razorpay Corporate Office"
    
    },
    "theme": {
    "color": "#3399cc"
    }
    };
   
}
