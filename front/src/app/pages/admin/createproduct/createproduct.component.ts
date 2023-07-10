import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {

  Product:any={
    productname:'',
    productdescription:'',
    price:null,
    discount:null,
    discountedprice:null,
    enable:true
  }
  constructor(private service:ProductService,
              private router:Router) { }

  ngOnInit(): void {
  }
  formSubmit(){
   
   return  this.service.postproduct(this.Product).subscribe(
      (data:any)=>{
        Swal.fire("Updated !!",'quiz updated','success');
    console.log("data enter");
    this.router.navigate(['admin/update']);
      },
      (error)=>{
        Swal.fire('Error','error in Adding','error');
    console.log(error);
    this.router.navigate(['admin/update']);
      }
     )
  }

}
