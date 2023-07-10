import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loadingcart',
  templateUrl: './loadingcart.component.html',
  styleUrls: ['./loadingcart.component.css']
})
export class LoadingcartComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.navigate(['user-dashboard/cart']); 
  }

}
