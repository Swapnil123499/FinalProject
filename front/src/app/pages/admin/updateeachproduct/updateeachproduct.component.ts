import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-updateeachproduct',
  templateUrl: './updateeachproduct.component.html',
  styleUrls: ['./updateeachproduct.component.css']
})
export class UpdateeachproductComponent implements OnInit {
  productid=0;
  product:any;
  constructor(private _route:ActivatedRoute,
              private _service:ProductService,
              private router:Router) { }

  ngOnInit(): void {
    this.productid=this._route.snapshot.params['productid'];
    console.log(this.productid);
    this._service.getproductbyid(this.productid).subscribe(
      (data:any)=>{
        this.product=data;
        console.log(this.product);
        
      },
      (error)=>{
        console.log(error);

      }
    )
  }
  formupdate(){
    this._service.updateeachproduct(this.productid,this.product).subscribe(
      (data:any)=>{
        console.log("data updated");
        this.router.navigate(['admin/update']);
      },
      (error)=>{
        console.log(error);
        this.router.navigate(['admin/update']);
      }
    )
  }

}
