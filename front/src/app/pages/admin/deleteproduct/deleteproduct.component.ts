import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {
  products:any;
  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.service.getproduct().subscribe(
      (data:any)=>{
      this.products=data;
      console.log("hello");
      },
      (error)=>{
        Swal.fire('Error','error while loading the data','error');
        console.log(error);
      }
    )
  }

}

