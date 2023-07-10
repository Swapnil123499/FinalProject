import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 public totalitem:number=0;
  isLoggedIn=false;
      user= null;
     data:any;



  constructor(public login: LoginService,private router:Router) { }

  ngOnInit(): void {
    this.isLoggedIn=this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe(data=>
      {
       this.data=data;
        this.isLoggedIn=this.login.isLoggedIn();
    this.user = this.login.getUser();
      });

     
      
  }

  public logout(){
    this.login.logout();
      this.router.navigate([''])
    //window.location.reload();
   this.login.loginStatusSubject.next(false);
  }

}
