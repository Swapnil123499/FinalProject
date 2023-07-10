import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-deleteeachproduct',
  templateUrl: './deleteeachproduct.component.html',
  styleUrls: ['./deleteeachproduct.component.css']
})
export class DeleteeachproductComponent implements OnInit {
   productid:any;
  constructor(private _route:ActivatedRoute,
              private service:ProductService,
              private _router:Router) { }

  ngOnInit(): void {
    this.productid=this._route.snapshot.params['productid'];
    this.service.deleteproductbyid(this.productid).subscribe(
      (data:any)=>{
         console.log('dtat deleted');
         this._router.navigate(['admin/deleteproduct']);
      },
      (error)=>{

      }
    )
    
  }

}
